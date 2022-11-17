import CandleCard from "./CandleCard";

function CandleContainer({ candleArr, setCart, checkOut, currentUser }) {
    const allCandles = candleArr.map((candle) => {
        return <CandleCard
            key={candle.id}
            candle={candle}
            setCart={setCart}
            checkOut={checkOut}
            currentUser={currentUser}
        />
    })

    return (

        <div className="displayCandles">
            <h1  className="bestsellers">ESSENTIALS</h1>
            <div class="line-1"></div>
            <p className="new_candles_added">New Seasonal Candles added!</p>
            {allCandles}
        </div>
    )
}

export default CandleContainer