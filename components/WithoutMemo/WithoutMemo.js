import { useState, useEffect } from "react";

export default function WithoutMemoComponent() {
  const [number, setNumber] = useState(0);
  const [blue, setBlue] = useState(false);
  const doubleNumber = slowFunction(number);

  const theme = {
    backgroundColor: blue ? "blue" : "red",
    color: blue ? "white" : "black",
  };

  useEffect(() => {
    console.log("Inside useEffect - with theme dependency");
  }, [theme]);

  return (
    <>
      <h3>Example without useMemo</h3>
      <p>
        Open your dev tools console and observe that both of the console logs in
        the slowFunction and useEffect which has theme as it&#39;s only
        dependency are run regardless of which bit of state you are updating.
        You&#39;ll also notice that since slowFunction now runs every time that
        you change the theme color that it takes a while for the component to
        rerender and show this change in theme color. That wasn&#39;t happening
        before.
      </p>
      <p>Number: {number}</p>
      <p>Doubled number: {doubleNumber}</p>
      <button onClick={() => setNumber(number + 1)}>+ incrementor +</button>
      <p style={theme}>Blue Theme?: {String(blue)}</p>
      <button onClick={() => setBlue(!blue)}>change theme</button>
    </>
  );
}

const slowFunction = (num) => {
  console.log("Slow function with number dependency");
  for (let index = 0; index <= 1000000000; index++) {}
  return num * 2;
};
