import React from 'react'

export default function Subject() {
    const Subjects= ['Kiswahili', 'Math', 'English', 'Science'];
    const mySubjects=Subjects.map((Subject,index)=>{
       return <li key={index}>I take {Subject} Subjects</li>;

    })
  return (
    <div>
      <h1>{mySubjects}</h1>
      
    </div>
  )
}
