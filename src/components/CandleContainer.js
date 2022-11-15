import CandleCard from "./CandleCard";

function CandleContainer({ candleArr }) {
    const allCandles = candleArr.map((candle) => {
        return <CandleCard
            key={candle.id}
            candlePrice={candle.price}
            candleName={candle.name}
            candleImg={candle.image}
        />
    })

    return (

        <div className="card">
            {allCandles}
        </div>
    )
}

export default CandleContainer