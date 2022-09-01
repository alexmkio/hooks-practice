import { useState, useMemo, useEffect } from "react";

export default function MemoComponent() {
  const [number, setNumber] = useState(0);
  const [blue, setBlue] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const theme = useMemo(() => {
    return {
      backgroundColor: blue ? "blue" : "red",
      color: blue ? "white" : "black",
    };
  }, [blue]);

  useEffect(() => {
    console.log(
      "Inside useEffect - with theme dependency - which uses useMemo and has dependency of blue"
    );
  }, [theme]);

  return (
    <>
      <h2>
        <a
          href="https://reactjs.org/docs/hooks-reference.html#usememo"
          target="_blank"
          rel="noopener noreferrer"
        >
          useMemo
        </a>
      </h2>
      <p>
        Memoization: used primarily to speed up computer programs by storing the
        results of expensive function calls and returning the cached result when
        the same inputs occur again.
      </p>
      <p>
        Use cases for useMemo: 1) if your component uses a slow function
        wrapping that function in a useMemo will not cause that function to
        rerun every time the component rerenders unless its dependencies have
        changed, 2) whenever you want to make sure that the reference of an
        object is the same when a component is rerendered but the contents of
        that object have not changed. Normally, when a component is rerendered
        the same object is assigned a new reference in memory (
        <a
          href="https://blog.bitsrc.io/understanding-referential-equality-in-react-a8fb3769be0"
          target="_blank"
          rel="noopener noreferrer"
        >
          a note on referential equality in React
        </a>
        ).
      </p>
      <h3>Example</h3>
      <p>
        In this example the slow doubleNumber function is not run on rerenders
        caused by the theme updating, and new references of the variable theme
        are not created on rerenders if its dependencies (blue) have not changed
        which in turn prevents the useEffect which has theme as its dependency
        from running on every rerender.
      </p>
      <p>Number: {number}</p>
      <p>Doubled number: {doubleNumber}</p>
      <button onClick={() => setNumber(number + 1)}>+ incrementor +</button>
      <p style={theme}>Blue Theme?: {String(blue)}</p>
      <button onClick={() => setBlue(!blue)}>change theme</button>
      <p>
        Caveats: useMemo does come with some performance and memory overhead.
        For example, the useMemo function must be called every single time the
        component is rendered, and its value is stored in memory. Only useMemo
        when the functions you are calling are more taxing when compared to
        useMemo.
      </p>
    </>
  );
}

const slowFunction = (num) => {
  console.log("Slow function with number dependency");
  for (let index = 0; index <= 1000000000; index++) {}
  return num * 2;
};
