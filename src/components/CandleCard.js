import flicker from "../CandleFlickerNoBG.gif"
import {useState} from 'react'

function CandleCard({ candle, currentUser }) {

    const [flickerState, setFlickerState] = useState(0)
    const [bgColor, setBGColor] = useState("#cec2c250")

    function addToCart(candle){
        fetch(`http://localhost:9292/users/${currentUser.id}/cart`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user_id: currentUser.id,
                candle_id: candle.id
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

function onMouseOver() {
    setFlickerState(.8)
    setBGColor(candle.color)
}

function mouseLeave() {
    setFlickerState(0)
    setBGColor("#cec2c250")
}

const candleScents = candle.scents.map((c) => c.name)
    return (
        // 
        <div className="candleCard" onMouseEnter={onMouseOver} onMouseLeave={mouseLeave} style={{backgroundColor: bgColor}}>
            
            <h2 className="candleHeading" >{candle.name}</h2>
            <img className="homePageFlickers" src={flicker} alt='candle flicker' style={{opacity: flickerState }}/>
            <img className="candleCardImage" alt="Candle" src={candle.image}/>
            <p>{`Top Notes: ${candleScents[0]}, ${candleScents[1]}, ${candleScents[2]}`}</p>
            <p>${candle.price}</p>


            <button onClick={() => addToCart(candle)}>Add to Cart</button>
        </div>
    )
}

export default CandleCard