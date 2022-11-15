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

const bannerIndex = ["Give the perfect Gift!", "Have a good holiday season!"]
  return (
    <div className="App">
            <h1 className='top-banner-text'>{bannerIndex[0]}</h1>
            <h1 className='logo'>Reminiscent</h1>
            <Home/>
    </div>
    )
}

export default App;
