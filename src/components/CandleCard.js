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

    return (
        // 
        <div className="candleCard">
            <h2 className="candleHeading" >{candle.name}</h2>
            <img alt="Candle" src={candle.image}/>
            <p>${candle.price}</p>
            <button onClick={() => addToCart(candle)}>Add to Cart</button>
        </div>
    )
}

export default CandleCard