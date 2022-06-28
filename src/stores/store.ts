import { Instance, types } from "mobx-state-tree";
import { useContext, createContext } from "react";

import { taskList } from "../mockData";

import { Task } from "./task";

export const Store = types.model("Tasks", {
  tasks: types.array(Task),
});

export type StoreType = Instance<typeof Store>;

export const StoreContext = createContext<StoreType>(null!);

export function useStore(): StoreType {
  return useContext(StoreContext);
}

export const store = Store.create({ tasks: taskList });
