import { observer } from "mobx-react-lite";
import { useCallback } from "react";

import { TaskForm } from "../../lib/components/task-form";
import { useStore } from "../../stores/store";

function CreateTaskComponent() {
  const store = useStore();
  const handleSubmit = useCallback((description: string) => {
    store.createTask(description);
  }, []);

  return <TaskForm onSubmit={handleSubmit} isEditing={false} />;
}

export const CreateTask = observer(CreateTaskComponent);
