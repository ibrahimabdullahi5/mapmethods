import React from 'react'

 function mapmethods() {
  const Numbers=["1","2","3","4"];
  const MyNumbers=Numbers.map((Number)=>{
    return <li>{Number} </li>
  })

  return (
    <div>
      <h1>{MyNumbers}</h1>
      
    </div>
  )
}
export default mapmethods;
