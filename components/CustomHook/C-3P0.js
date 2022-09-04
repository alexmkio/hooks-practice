import { useFetch } from "../useFetch/useFetch";

export default function C3P0() {
  const {
    data: C3P0,
    isPending,
    error,
  } = useFetch("https://swapi.dev/api/people/2");

  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {C3P0 && <p>Character #2 Name: {C3P0.name}</p>}
    </>
  );
}
