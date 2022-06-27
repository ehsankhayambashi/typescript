import React, { createContext, useContext, useReducer } from "react";

const initialState: UserState = {
  count: 0,
  showText: true,
  number: "",
};
interface UserState {
  count: number;
  showText: boolean;
  number: string;
}

interface MainContextProps {
  children: React.ReactNode;
}

type Action =
  | { type: "increse-counter" }
  | { type: "update-fild"; payload: string; field: string }
  | { type: "update-number"; payload: string };

export function MainContext({ children }: MainContextProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: UserState, action: Action) {
    switch (action.type) {
      case "increse-counter":
        return {
          ...state,
          count: state.count + 1,
          showText: !state.showText,
        };
      case "update-fild":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "update-number":
        return {
          ...state,
          count: parseInt(action.payload),
        };
    }
  }

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const AppContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const useMainContext = () => useContext(AppContext);
