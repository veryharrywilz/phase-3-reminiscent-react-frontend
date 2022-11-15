import '../App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home';

function App() {

  // useEffect(() => {
  //   fetch('http://localhost:9292/hello')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])

  return (
    <div className="App">
            <h1>Reminiscent</h1>
            <Home/>
    </div>
    )
}

export default App;
