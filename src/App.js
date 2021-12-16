import React from 'react';
import './App.css';
import Nav from './Nav';
import Cart from './Cart';
import Shop from './Shop';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Cart name="Sara" />;

function App() {
  return (
    <div className="App">
      <h1>You're home</h1>
      {/* <Shop /> */}
      {/* <Cart name='these items'/> */}
      {/* {element} */}
      {/* <Cart name="Sara" /> */}

    </div>
  );
}




export default App;
