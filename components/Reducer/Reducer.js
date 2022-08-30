import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>
        <a href="https://reactjs.org/docs/hooks-reference.html#usereducer" target="_blank" rel="noopener noreferrer">
          Reducer
        </a>
      </h2>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <p>An alternative to useState. Accepts a reducer of type (state, action) =&gt; newState, and returns the current state paired with a dispatch method.</p>
      <p>useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</p>
    </>
  )
}
