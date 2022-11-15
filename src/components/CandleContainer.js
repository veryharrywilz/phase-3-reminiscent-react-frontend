import CandleCard from "./CandleCard";

function CandleContainer ({candleArr}) {


    return (

        <div>
            <ul className="card">
            {candleArr.map(candle => (
                <CandleCard
                key = {candle.id}
                candlePrice = {candle.price}
                candleName = {candle.name} 
                candleImg = {candle.image}
                />
            ))}
           
            </ul>
        </div>
    )
}

export default CandleContainer