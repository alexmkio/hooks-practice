import { useEffect, useState } from "react";

export default function DoubledNumber({ numberMultiplier }) {
  const [number, setNumber] = useState(null)

  useEffect(() => {
    setNumber(numberMultiplier(2))
    console.log('Doubled Number useEffect')
  }, [numberMultiplier])

  return (
    <p>Doubled Number: {number}</p>
  )
}