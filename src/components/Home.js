import Candles from "./Candles";
import Banner from "../Banner";
import { useEffect, useState } from 'react'

function Home({setCart, checkOut}) {
    const [candleArr, setCandleArr] = useState([])


    useEffect(() => {
        fetch('http://localhost:9292/candles')
            .then(res => res.json())
            .then(data => setCandleArr(data))
    }, [])
    
    
    return (
        <div>
            <Banner/>
            <Candles 
            candleArr={candleArr} setCart={setCart} checkOut={checkOut}/>
        </div>
    )
}

export default Home;