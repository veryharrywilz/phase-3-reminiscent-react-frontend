import '../App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import Login from "./LogIn";
import Cart from "./Cart";
import CandleCreator from './CandleCreator';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [cart, setCart] = useState([])

  const changeUser = (user) => {
    setCurrentUser(user)
  }

  function handleLogout(){
    setCurrentUser(null)
  }
  console.log(currentUser)

  function checkOut(candle){
    console.log(`${candle.name} is in the cart!`)
    setCart([...cart, candle])
    console.log(cart)
}
  function removeCandle(c){
   const updatedCart = cart.filter((candle) => candle.id != c.id)
    setCart(updatedCart)
  }
  const bannerIndex = ["Give the perfect Gift!", "Have a good holiday season!"]
  return (

    <div className="App">
      <Router>
        <div className='top-banner-text'><span className='top-banner'></span></div>
        <h1 className='logo'>Reminiscent</h1>
        {currentUser? `Welcome ${currentUser.user_name}` : null}
        <Link to='/'>
          <button>Home</button>
        </Link>
        {currentUser?
          <button onClick={handleLogout}>
            Logout
          </button>
          :
          <Link to='/login'>
            <button>Login</button>
          </Link>
        }
        <Link to='/cart'>
          <button>Cart</button>
        </Link>
        <Link to='/candlecreator'>
          <button>Candle Creator</button>
        </Link>
        <Routes>
          <Route path='/' element={<Home setCart={setCart} checkOut={checkOut} />} />
          <Route path='/login' element={<Login changeUser={changeUser}/>} />
          <Route path='/cart' element={<Cart cart={cart} removeCandle={removeCandle}/>} />
          <Route path='/candlecreator' element={<CandleCreator currentUser={currentUser} />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App;
