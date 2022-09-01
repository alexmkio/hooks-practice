import { useState } from "react";
import DoubledNumber from "../DoubledNumber/DoubledNumber";

export default function WithoutCallbackComponent() {
  const [number, setNumber] = useState(0);
  const [blue, setBlue] = useState(false);

  const numberMultiplier = (num) => {
    return number * num;
  };

  const theme = {
    backgroundColor: blue ? "blue" : "red",
    color: blue ? "white" : "black",
  };

  return (
    <>
      <h3>Without useCallback</h3>
      <p>
        Open your dev tools console and observe a console log in the
        DoubledNumber component when you change the theme. That wasn&#39;t
        happening before.
      </p>
      <p>Number: {number}</p>
      <DoubledNumber numberMultiplier={numberMultiplier} />
      <button onClick={() => setNumber(number + 1)}>+ incrementor +</button>
      <p style={theme}>Blue Theme?: {String(blue)}</p>
      <button onClick={() => setBlue(!blue)}>change theme</button>
    </>
  );
}
