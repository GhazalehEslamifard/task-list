import { Global } from "@emotion/react";
import React from "react";

import { TaskList } from "./pages/task-list";
import { globalStyles } from "./styles";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <TaskList />
    </>
  );
}

export default App;
