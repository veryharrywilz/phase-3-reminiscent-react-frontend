function CandleCard ({candleName, candlePrice, candleImg}){
    
return (
    <div className="candleCard">
    <h1>{candleName}</h1>
    <img src={candleImg}/>
    <p>${candlePrice}</p>
    <button>Add to Cart</button>
    </div>
)
}

export default CandleCard