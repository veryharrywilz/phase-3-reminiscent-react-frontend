import CreateCandle from "./CreateCandle";
import React, {useState, useEffect} from 'react'

function CandleCreator() {

    const [scentData, setScentData] = useState([])
    const [newCandle, setNewCandle] = useState({})

    useEffect(() => {
        fetch('http://localhost:9292/scents')
            .then(res => res.json())
            .then(data => {
                setScentData(data)
            })
    }, [])

    function onCandleFormSubmit(name, scents) {
        console.log("submitted")
        console.log(name, scents)
        fetch('http://localhost:9292/candles', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                name: name,
                price: 20,
                image: "https://cb.scene7.com/is/image/Crate/ShinolaCandle3ThymeOlvBlueSSF21/$web_pdp_main_carousel_high$/210427132020/shinola-no.-3-bergamot-eucalyptus-and-amber-scented-candle.jpg",
                scents: scents
            })
        })
            .then(resp => resp.json())
            .then(data => {
                setNewCandle(data)
            })
    }
    
    return (
        <div>
            <CreateCandle scentData={scentData} handleSubmit={onCandleFormSubmit} />
        </div>
    )
}

export default CandleCreator;