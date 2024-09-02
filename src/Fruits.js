import React from 'react'

export default function Fruits() {
    const Fruits=["mango","panana","orange"];
    const myFruits=Fruits.map((Fruits,index)=>{
        return <li key={index}>i have {Fruits} Fruits</li>
    })
  return (
    <div>
      <h1>{myFruits}</h1>
    </div>
  )
}
