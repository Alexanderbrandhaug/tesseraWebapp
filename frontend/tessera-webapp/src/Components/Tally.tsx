import React, { useEffect, useState } from "react";

interface TallyProps {
  initialCount: number,
  plusSymbol: string,
  minusSymbol: string
}

export default function Tally(props: TallyProps) {
  let [counter, setCounter] = useState<number>(0)

  function initialize(){
    setCounter(100)
  }

  useEffect(initialize, [])

  function add(amount: number){
    setCounter(counter + amount)
  }
  
  return (
    <div>
      <button onClick={function decrement(){add(-1)}}>-</button>
      <button onClick={function decrement(){add(1)}}>+</button>
      <h5>{counter}</h5>
    </div>
  )
}