import '../App.css';
import React, { useState } from 'react';
import Home from './Home';
import Login from "./LogIn";
import Cart from "./Cart";
import CandleCreator from './CandleCreator';
import EditCandle from './EditCandle';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [candleEdit, setCandleEdit] = useState(null)


  const changeUser = (user) => {
    setCurrentUser(user)
  }

  function handleLogout() {
    setCurrentUser(null)
  }

  function handleCandleEdit(candle){
    setCandleEdit(candle)
  }

  return (

    <div className="App">
      <Router>
        <div className='top-banner-text'><span className='top-banner'></span></div>
        <h1 className='logo'>
          <img className='logo-image' alt='logo' src="https://pbs.twimg.com/profile_images/1372890157896978435/j2EGJ0ey_400x400.jpg" />
        </h1>
        {currentUser ? <h2 className='username'>Welcome, {currentUser.user_name}!</h2> : null}
        <div className='navbar'>
          <Link to='/'>
            <button className='button'>HOME</button>
          </Link>
          {currentUser ?
            <Link to='/'>
              <button className='button' onClick={handleLogout}>
                LOG OUT
              </button>
            </Link>
            :
            <Link to='/login'>
              <button className='button' >LOG IN</button>
            </Link>
          }
          <Link to='/candlecreator'>
            <button className='button'>MAKE YOUR OWN</button>
          </Link>
          <Link to='/cart'>
            <button className='button'>CART</button>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Home currentUser={currentUser} />} />
          <Route path='/candlecreator' element={<CandleCreator currentUser={currentUser} />} />
          <Route path='/login' element={<Login changeUser={changeUser} />} />
          <Route path='/cart' element={<Cart currentUser={currentUser} handleCandleEdit={handleCandleEdit}/>} />
          <Route path='/edit/candle' element={<EditCandle candleEdit={candleEdit} />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App;
