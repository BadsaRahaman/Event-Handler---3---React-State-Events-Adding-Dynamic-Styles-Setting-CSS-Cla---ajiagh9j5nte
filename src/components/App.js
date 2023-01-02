import '../styles/App.css';
import React, { useState } from "react";

const App = () => {
  let [data, setData] = useState({text:"", num:""})
 
  const handleInput = (e) =>{
       setData({
      ...data,
      [e.target.name]:e.target.value
    })
  
  }
  console.log(data);

  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input name="text" id="text-input" type={'text'} onChange={handleInput}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input name="num" id="num-input" onChange={handleInput} type={'number'} />
      <br/>
    </div>
  )
}

export default App;  