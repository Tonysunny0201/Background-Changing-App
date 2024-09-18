import { useState } from 'react'
import './App.css'

function App() {
  
  // js code
  const colorData =(data)=>{
    const a = data
    document.body.style.backgroundColor = a;
    
  }

  return (
    // jsx code
    
    <>
      <div className='container '>
        <h1>Background Color Changer App</h1>
          <div className="btns">
            <button onClick={()=>colorData("red")} className='btn btn-danger m-5'>Red</button>
            <button onClick={()=>colorData("aqua")} className='btn btn-info m-5'>Aqua</button>
            <button onClick={()=>colorData("green")} className='btn btn-success m-5'>Orange</button>
            <button onClick={()=>colorData("yellow")} className='btn btn-warning m-5'>Yellow</button>
            <button onClick={()=>colorData("grey")} className='btn btn-dark m-5'>Grey</button>
          </div>
      </div>
    </>
  )
}

export default App
