function CandleCard({ candleName, candlePrice, candleImg, candleScents }) {
    return (
        <div className="candleCard">
            <h1>{candleName}</h1>
            <img alt="Candle" src={candleImg} />
            <p>${candlePrice}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default CandleCard