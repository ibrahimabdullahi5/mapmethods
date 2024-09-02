import React from 'react'

export default function Student() {
    const Marks=[200,300,350,200]
    const myMarks=Marks.map((Mark,index)=>{
       return <li key={index}>i got{Mark}Marks</li>
    })
  return (
    <div>
      <h1>{myMarks}</h1>
    </div>
  )
}

