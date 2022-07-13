import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStore } from "../../stores/store";
import { TaskType } from "../../stores/task";

import { List, DeleteButton, ActionsWrapper } from "./styles";
import { TaskItem } from "./task-item";

function TaskListComponent(): React.ReactElement {
  const navigate = useNavigate();
  const store = useStore();
  const [selectedTasks, setSelectedTasks] = useState<TaskType[] | undefined>();

  useEffect(() => {
    store.setEditingTask(undefined);
  });

  const toggleStarTag = useCallback((task: TaskType) => {
    task.toggleStarTag();
  }, []);

  const setEditingTask = useCallback((task: TaskType) => {
    store.setEditingTask(task);
    navigate(`edit-task/:${task.id}`);
  }, []);

  const handleSetSelectedTasks = useCallback((task: TaskType) => {
    setSelectedTasks((prevState) =>
      prevState
        ? prevState.includes(task)
          ? prevState.filter((item) => item !== task)
          : [...prevState, task]
        : [task]
    );
  }, []);

  const deleteTask = useCallback((task: TaskType) => {
    store.deleteTasks([task]);
    setSelectedTasks(undefined);
  }, []);

  const deleteSelectedTask = useCallback(() => {
    if (selectedTasks) {
      store.deleteTasks(selectedTasks);
    }

    setSelectedTasks(undefined);
  }, [selectedTasks]);

  return (
    <>
      <ActionsWrapper>
        <Link to="/create-task">create a task</Link>
        {store.tasks.length === 0 ? null : (
          <DeleteButton onClick={deleteSelectedTask} disabled={!selectedTasks}>
            Delete
          </DeleteButton>
        )}
      </ActionsWrapper>
      <List>
        {store.tasks.map((task) => (
          <TaskItem
            task={task}
            onToggleStarTag={toggleStarTag}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            selectedTasks={selectedTasks}
            onCheckboxChange={handleSetSelectedTasks}
            key={task.id}
          />
        ))}
      </List>
    </>
  );
}

export const TaskList = observer(TaskListComponent);
