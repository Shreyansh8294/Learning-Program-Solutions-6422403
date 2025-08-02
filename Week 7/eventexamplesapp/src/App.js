import React, { useState } from 'react'
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

const App = () => {
  const [value, setValue] = useState(0);
  function increase() {
    setValue(value+1);
    alert("Hello! Member!");
    return;
  }

  function decrease() {
    setValue(value-1);
    return;
  }

  function welcome(message) {
    alert(message);
    return;
  }

  function clickonme() {
    alert("I was clicked !");
    return;
  }
  return (
    <div>
      <span>{value}</span>
      <br />
      <button onClick={increase}>Increment</button>
      <br />
      <button onClick={decrease}>Decrement</button>
      <br />
      <button onClick={()=>{
        welcome('welcome')
      }}>Say Welcome</button>
      <br />
      <button onClick={clickonme}>Click on Me</button>
      <br />
      <CurrencyConvertor></CurrencyConvertor>
    </div>
  )
}

export default App
