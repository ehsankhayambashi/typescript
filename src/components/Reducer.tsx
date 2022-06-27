import React, { useReducer } from "react";
import { useMainContext } from "../context/MainContext";

function Reducer() {
  // const initialState: UserState = {
  //   count: 0,
  //   showText: true,
  //   number: "",
  // };

  // interface UserState {
  //   count: number;
  //   showText: boolean;
  //   number: string;
  // }

  // type Action =
  //   | { type: "increse-counter" }
  //   | { type: "update-fild"; payload: string; field: string }
  //   | { type: "update-number"; payload: string };

  // function reducer(state: UserState, action: Action) {
  //   switch (action.type) {
  //     case "increse-counter":
  //       return {
  //         ...state,
  //         count: state.count + 1,
  //         showText: !state.showText,
  //       };
  //     case "update-fild":
  //       return {
  //         ...state,
  //         [action.field]: action.payload,
  //       };
  //     case "update-number":
  //       return {
  //         ...state,
  //         count: parseInt(action.payload),
  //       };
  //   }
  // }
  // const [state, dispatch] = useReducer(reducer, initialState);
  const { state, dispatch } = useMainContext();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: "update-number", payload: state.number });
  }
  return (
    <div className="App">
      <h1>{state.count}</h1>
      {state.showText && <h3>Bayamos is ghavi</h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="number"
          value={state.number}
          onChange={(e) =>
            dispatch({
              type: "update-fild",
              payload: e.target.value,
              field: "number",
            })
          }
        />
        <button type="submit" onClick={(e) => {}}>
          submit
        </button>
      </form>
      <button onClick={() => dispatch({ type: "increse-counter" })}>Tap</button>
    </div>
  );
}

export default Reducer;
