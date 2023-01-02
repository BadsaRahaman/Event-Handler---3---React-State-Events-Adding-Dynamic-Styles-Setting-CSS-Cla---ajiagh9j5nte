import React, {useState} from 'react';
import '../styles/App.css';

const App = () => {
let [data, setData] = useState({
  text:'',
  num:''
})
  const handleInput = (e) =>{
    setData({
      ...data,
        [e.target.name]:e.target.value
      })
  }
  console.log(data);
 
  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input name="text" onChange={handleInput} id="text-input" type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input name="num" onChange={handleInput} id="num-input"  type={'number'} />
      <br/>
    </div>
  )
}

export default App;
