import { Routes, Route, BrowserRouter } from "react-router-dom";

import { CreateTask } from "./pages/create-task";
import { EditTask } from "./pages/edit-task";
import { TaskList } from "./pages/task-list";

export function AppRouts(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}
