import { useState, useCallback } from "react";
import DoubledNumber from "../DoubledNumber/DoubledNumber";

export default function CallbackComponent() {
  const [number, setNumber] = useState(0);
  const [blue, setBlue] = useState(false);

  const numberMultiplier = useCallback(
    (num) => {
      return number * num;
    },
    [number]
  );

  const theme = {
    backgroundColor: blue ? "blue" : "red",
    color: blue ? "white" : "black",
  };

  return (
    <>
      <h2>
        <a
          href="https://reactjs.org/docs/hooks-reference.html#usecallback"
          target="_blank"
          rel="noopener noreferrer"
        >
          useCallback
        </a>
      </h2>
      <p>
        useCallback returns a memoized callback. Returns the entire function and
        allows us to pass parameters to this function.
      </p>
      <p>
        Use case: comes in handy with referential equality problems when some
        other hook relies on a value in its dependency array.
      </p>
      <p>
        In this example, even though the DoubledNumber component exists in the
        return statement of this component it is not rerendered on a change to
        the state of the variable blue because the only useCallback dependency
        of it&#39;s only prop (numberMultiplier function) is the variable
        number.
      </p>
      <p>Number: {number}</p>
      <DoubledNumber numberMultiplier={numberMultiplier} />
      <button onClick={() => setNumber(number + 1)}>+ incrementor +</button>
      <p style={theme}>Blue Theme?: {String(blue)}</p>
      <button onClick={() => setBlue(!blue)}>change theme</button>
    </>
  );
}
