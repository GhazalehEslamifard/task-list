import React from "react";

import { Provider } from "../providers/provider";
import { store } from "../stores/store";

import { AppRouts } from "./routs";

function App() {
  return (
    <Provider store={store}>
      <AppRouts />
    </Provider>
  );
}

export default App;
