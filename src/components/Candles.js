import CandleContainer from "./CandleContainer";
import CreateCandle from "./CreateCandle";

function Candles ({candleArr}) {
    console.log("hello from Candles")


    return (
        <div>
        <CreateCandle/>
        <CandleContainer candleArr={candleArr}/>
        </div>
    )

}

export default Candles;