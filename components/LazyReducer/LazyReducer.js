import { useReducer } from "react";

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function LazyReducerComponent({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      <h2>
        <a
          href="https://reactjs.org/docs/hooks-reference.html#lazy-initialization"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lazy Initialized Reducer
        </a>
      </h2>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <p>
        It lets you extract the logic for calculating the initial state outside
        the reducer. This is also handy for resetting the state later in
        response to an action
      </p>
    </>
  );
}
