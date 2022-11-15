import Candles from "./Candles";
import { useEffect, useState } from 'react'

function Home() {


    console.log("hello from home")
    const [candleArr, setCandleArr] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/candles')
            .then(res => res.json())
            .then(data => setCandleArr(data))
    }, [])


    return (
        <div>
            <Candles candleArr={candleArr} />
        </div>
    )
}

export default Home;