import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cart from './Pages/Cart';
import Form from './Pages/Form';
import Students from './Pages/Student';


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container mt-4">
      <h1>My Redux Store</h1>
      <Cart/><br/><br/>
      <Form/><br/><br/>
      <Students/>
      </div>
    </div>
  );
}

export default App;
