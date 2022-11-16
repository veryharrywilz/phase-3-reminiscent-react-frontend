import Candles from "./Candles";
import Banner from "../Banner";
import { useEffect, useState } from 'react'

function Home() {
    const [candleArr, setCandleArr] = useState([])
    const [newCandle, setNewCandle] = useState({})

    useEffect(() => {
        fetch('http://localhost:9292/candles')
            .then(res => res.json())
            .then(data => setCandleArr(data))
    }, [])

    
    return (
        <div>
            <Banner/>
            <Candles 
            candleArr={candleArr}
            setNewCandle={setNewCandle} />
        </div>
    )
}

export default Home;