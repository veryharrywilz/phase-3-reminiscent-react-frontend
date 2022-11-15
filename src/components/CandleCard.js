function CandleCard ({candleName, candlePrice, candleImg}){

    console.log(candleImg)
return (
    <div>
    <h1>{candleName}</h1>
    <p>{candlePrice}</p>
    <img src={candleImg} />
    </div>
)
}

export default CandleCard