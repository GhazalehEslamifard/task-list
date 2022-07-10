import { Routes, Route, BrowserRouter } from "react-router-dom";

import { CreateTask } from "./pages/create-task";
import { TaskList } from "./pages/task-list";

export function AppRouts(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}
