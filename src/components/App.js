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
  const [currentUser, setCurrentUser] = useState(null)

  const changeUser = (user) => {
    setCurrentUser(user)
  }
  console.log(currentUser)
  
  const bannerIndex = ["Give the perfect Gift!", "Have a good holiday season!"]
  return (

    <div className="App">
      <Router>
        <h1 className='top-banner-text'>{bannerIndex[0]}</h1>
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
          <Route path='/login' element={<Login changeUser={changeUser}/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
