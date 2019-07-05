import React from 'react';
import MyBtn from './MyBtn';

import './App.css';

function App() {
   const onClickHandler= ()=>{
        console.log('clicked button');
    }
  return (
    <div className="App">
      <MyBtn onClickHandler={onClickHandler}>Hello World</MyBtn>
    </div>
  );
}

export default App;
