import { observer } from "mobx-react-lite";
import { useMemo } from "react";

import { StoreContext, StoreType } from "./stores/store";

interface Props {
  store: StoreType;
  children: React.ReactNode;
}
function ProviderComponent({ store, children }: Props) {
  const contextValue = useMemo(() => ({ tasks: store.tasks }), []);

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export const Provider = observer(ProviderComponent);
