function CandleCard({ candle, setCart, checkOut }) {

    function addToCart(candle){
        console.log(candle)
        checkOut(candle)
    }

    return (
        <div className="candleCard">
            <h1>{candle.name}</h1>
            <img alt="Candle" src={candle.image} />
            <p>${candle.price}</p>
            <button onClick={() => addToCart(candle)}>Add to Cart</button>
        </div>
    )
}

export default CandleCard