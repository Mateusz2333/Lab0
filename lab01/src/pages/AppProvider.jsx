import { useReducer } from "react";
import AppContext from "../data/AppContext";
import AppReducer from "../data/AppReducer";
import { data } from "../data/module-data"; 

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
