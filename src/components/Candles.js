import CandleContainer from "./CandleContainer";
import CreateCandle from "./CreateCandle";
import { useState, useEffect } from 'react'

function Candles({ candleArr }) {

    const [scentData, setScentData] = useState([])
    const [newCandle, setNewCandle] = useState({})


    function onCandleFormSubmit(name, scents) {
        console.log("submitted")
        console.log(name, scents)
        fetch('http://localhost:9292/candles', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                name: name,
                price: 20,
                image: "candle.jpeg",
                scents: scents
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setNewCandle(data)
            })
    }


    useEffect(() => {
        fetch('http://localhost:9292/scents')
            .then(res => res.json())
            .then(data => {
                setScentData(data)
            })
    }, [])


    return (
        <div>
            <CreateCandle scentData={scentData} handleSubmit={onCandleFormSubmit} />
            <CandleContainer candleArr={candleArr} />
        </div>
    )

}

export default Candles;