import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1)
  let addvalue=()=>{
    if(counter<20)
    setCounter(counter+1);
  }
  let removevalue=()=>{
    if(counter>1)
    setCounter(counter-1);
  }

  return (
    <>
      <h1 className='bg-green-500 text-red-500 rounded-full mb-5'>Value: {counter}</h1>
      <button className=" motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-orange-600 rounded-full" onClick={addvalue}>Add value</button>
      <button className=" motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-yellow-600 rounded-full ml-1" onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
