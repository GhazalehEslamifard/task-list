import { observer } from "mobx-react-lite";
import { useCallback } from "react";

import { useStore } from "../../stores/store";
import { TaskType } from "../../stores/task";
import { List } from "../styles";

import { TaskItem } from "./task-item";

function TaskListComponent(): React.ReactElement {
  const store = useStore();
  const toggleStarTag = useCallback((task: TaskType) => {
    task.toggleStarTag();
  }, []);

  const deleteTask = useCallback((task: TaskType) => {
    store.deleteTask(task);
  }, []);

  return (
    <List>
      {store.tasks.map((task) => (
        <TaskItem
          task={task}
          onToggleStarTag={toggleStarTag}
          onDelete={deleteTask}
          key={task.id}
        />
      ))}
    </List>
  );
}

export const TaskList = observer(TaskListComponent);
