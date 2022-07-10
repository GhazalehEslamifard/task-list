import React from "react";

import { Provider } from "./provider";
import { AppRouts } from "./routs";
import { store } from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouts />
    </Provider>
  );
}

export default App;
