import '../App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import Login from "./LogIn";
import Cart from "./Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const [candleArr, setCandleArr] = useState([])

  //   useEffect(() => {
  //     fetch('http://localhost:9292/candles')
  //     .then(res => res.json())
  //     .then(data => setCandleArr(data))
  //   },[])

  return (

    <div className="App">
      <Router>
        <h1 className='logo'>Reminiscent</h1>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <button>Cart</button>
        </Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
