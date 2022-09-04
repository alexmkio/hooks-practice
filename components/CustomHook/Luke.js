import { useFetch } from "../useFetch/useFetch";

export default function Luke() {
  const {
    data: luke,
    isPending,
    error,
  } = useFetch("https://swapi.dev/api/people/1");

  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {luke && <p>Character #1 Name: {luke.name}</p>}
    </>
  );
}
