import React from 'react';
import MyBtn from './MyBtn';
import MyGrid from './GridLayout';
import Form from './Form.js';

import './App.css';

function App() {
   const onClickHandler= ()=>{
        console.log('clicked button');
    }
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
