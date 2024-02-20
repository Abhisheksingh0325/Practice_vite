import React, { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(15);
  
  function increase(){
    setCounter(counter + 1); 
    if (counter === 19) {
      document.getElementById('increase').style.display = 'none'
    }
  }
  
  function Decrease(){
    setCounter(counter - 1); 
    if (counter === 1) {
      document.getElementById('Decrease').style.display = 'none'
    }
  }
  return (
    <div>
      <h1>counter {counter}</h1>
      <button id='increase' onClick={increase}>Increase</button>
      <br />
      <br />
      <button id='Decrease' onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App
