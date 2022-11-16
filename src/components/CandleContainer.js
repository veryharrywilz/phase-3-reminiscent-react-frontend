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

    console.log(allCandles)

    return (

        <div>
            {allCandles}
        </div>
    )
}

export default CandleContainer