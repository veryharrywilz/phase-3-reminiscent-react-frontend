import CandleCard from "./CandleCard";

function CandleContainer({ candleArr, setCart, checkOut}) {
    const allCandles = candleArr.map((candle) => {
        return <CandleCard
            key={candle.id}
            candle={candle}
            setCart={setCart}
            checkOut={checkOut}
        />
    })

    return (

        <div>
            {allCandles}
        </div>
    )
}

export default CandleContainer