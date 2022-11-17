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
            {allCandles}
        </div>
    )
}

export default CandleContainer