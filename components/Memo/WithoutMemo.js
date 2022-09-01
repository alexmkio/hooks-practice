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
