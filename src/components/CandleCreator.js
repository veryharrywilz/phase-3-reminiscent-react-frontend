import CreateCandle from "./CreateCandle";
import React, { useState, useEffect } from 'react'
import flicker from "../CandleFlickerNoBG.gif"

function CandleCreator({ currentUser }) {

    const [scentData, setScentData] = useState([])
    const [newCandle, setNewCandle] = useState({})
    const [labelColor, setLabelColor] = useState("white")
    const [labelScents, setLabelScents] = useState([])
    const [labelName, setLabelName] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/scents')
            .then(res => res.json())
            .then(data => {
                setScentData(data)
            })
    }, [])

    function onCandleFormSubmit(name, scents) {
        setLabelScents(scents)
        setLabelName(name)
        fetch('http://localhost:9292/candles', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                name: name,
                price: 20,
                image: "https://cb.scene7.com/is/image/Crate/ShinolaCandle3ThymeOlvBlueSSF21/$web_pdp_main_carousel_high$/210427132020/shinola-no.-3-bergamot-eucalyptus-and-amber-scented-candle.jpg",
                scents: scents,
                user_id: currentUser.id,
                color: labelColor
            })
        })
            .then(resp => resp.json())
            .then(data => {
                setNewCandle(data)
            })
    }

    return (
        <div>
            {currentUser ?
                <div>
                    <CreateCandle scentData={scentData} handleSubmit={onCandleFormSubmit} setLabelColor={setLabelColor} />
                    <span className="displayCandle">
                        <img id="candleFlicker" src={flicker} alt='candle flicker' />
                        <img id="candleCreatorImage" alt='candle' src="https://cb.scene7.com/is/image/Crate/ShinolaCandle3ThymeOlvBlueSSF21/$web_pdp_main_carousel_high$/210427132020/shinola-no.-3-bergamot-eucalyptus-and-amber-scented-candle.jpg" />
                        <span id="candleCreatorLabel" style={{ backgroundColor: labelColor }}>
                            <h2 style={{ fontFamily: "Bell Gothic Std", fontStyle: "italics" }}>{labelName}</h2>
                            <p style={{ fontFamily: "Bell Gothic Std" }}>{labelScents.join(' - ')}</p>
                        </span>
                    </span>
                </div>
                : <h2 style={{ fontFamily: "Bell Gothic Std" }} className="alert" >Please log in to use the Candle Creator feature</h2>}
        </div>
    )
}

export default CandleCreator;