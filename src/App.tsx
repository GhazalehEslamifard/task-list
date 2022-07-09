import React from "react";

import { CreateTask } from "./pages/create-task";
import { Provider } from "./provider";
import { store } from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <CreateTask />
    </Provider>
  );
}

export default App;
