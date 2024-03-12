import logo from './logo.svg';
import './App.css';
import User from './User';
import React,{useRef} from 'react';

function App() {

  let inputRef=useRef();
  function UpdateInput(){
    inputRef.current.value="1000";
    inputRef.current.style.color="red";
    inputRef.current.focus();


  }
  return (
    <div className="App">
      
<h1> forword ref in react</h1>
<User ref={inputRef} />
<button onClick={UpdateInput}>Update input</button>

    </div>
  );
}

export default App;
