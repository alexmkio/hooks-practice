import C3P0 from "./C-3P0";
import Luke from "./Luke";

export default function CustomHook() {
  return (
    <>
      <h2>
        <a
          href="https://reactjs.org/docs/hooks-custom.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Custom Hook
        </a>
      </h2>
      <p>
        Hooks are another form of reusable functions. We can decide if it takes
        arguments, and what, if anything, it returns. The name of all hooks
        should start with the keyword use.
      </p>
      <h3>Example:</h3>
      <p>
        This example demonstrates the ability of a reusable fetch being turned
        into a custom hook (&quot;useFetch&quot;).
      </p>
      <Luke />
      <C3P0 />
    </>
  );
}
