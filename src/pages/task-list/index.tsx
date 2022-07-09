import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";

import { useStore } from "../../stores/store";
import { TaskType } from "../../stores/task";

import { List, DeleteButton } from "./styles";
import { TaskItem } from "./task-item";

function TaskListComponent(): React.ReactElement {
  const store = useStore();
  const [selectedTasks, setSelectedTasks] = useState<TaskType[] | undefined>();
  const toggleStarTag = useCallback((task: TaskType) => {
    task.toggleStarTag();
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
      {store.tasks.length === 0 ? null : (
        <DeleteButton onClick={deleteSelectedTask} disabled={!selectedTasks}>
          Delete
        </DeleteButton>
      )}
      <List>
        {store.tasks.map((task) => (
          <TaskItem
            task={task}
            onToggleStarTag={toggleStarTag}
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
