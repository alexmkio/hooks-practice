import { useState, useRef, useEffect } from "react";

export default function RefComponent() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const inputElement = useRef(null);
  const previousName = useRef("");
  const onButtonClick = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    previousName.current = name2;
  }, [name2]);

  return (
    <>
      <h2>
        <a
          href="https://reactjs.org/docs/hooks-reference.html#useref"
          target="_blank"
          rel="noopener noreferrer"
        >
          useRef
        </a>
      </h2>
      <p>
        useRef returns a mutable object which has a .current property. This
        property is initialized by the argument passed into the ref.
      </p>
      <p>
        A ref is similar to state in that it persists between renders of a
        component, but unlike state a ref will not cause a component update when
        it is changed.
      </p>
      <p>
        Use cases: focusing an element, persisting a previous state value
        through a component render.
      </p>
      <p>Caveats: do not use it like innerHTML. Let React manage state.</p>
      <h3>Example 1:</h3>
      <input
        ref={inputElement}
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <button onClick={onButtonClick}>Focus the input</button>
      <h3>Example 2:</h3>
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <p>
        My name is {name2} and it used to be {previousName.current}.
      </p>
    </>
  );
}
