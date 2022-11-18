function CandleCard({ candle, currentUser }) {

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

const candleScents = candle.scents.map((c) => c.name)
    return (
        // 
        <div className="candleCard">
            <h2 className="candleHeading" >{candle.name}</h2>
            <img alt="Candle" src={candle.image}/>
            <p>{`Top Notes: ${candleScents[0]}, ${candleScents[1]}, ${candleScents[2]}`}</p>
            <p>${candle.price}</p>
            <button onClick={() => addToCart(candle)}>Add to Cart</button>
        </div>
    )
}

export default CandleCard