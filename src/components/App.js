import '../App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home';

function App() {
// const [candleArr, setCandleArr] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:9292/candles')
//     .then(res => res.json())
//     .then(data => setCandleArr(data))
//   },[])

  return (
    <div className="App">
            <h1 className='logo'>Reminiscent</h1>
            <Home/>
    </div>
    )
}

export default App;
