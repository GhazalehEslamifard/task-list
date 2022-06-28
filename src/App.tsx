import React from "react";

import { TaskList } from "./pages/task-list";
import { Provider } from "./provider";
import { store } from "./stores/store";
function App() {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
}

export default App;
