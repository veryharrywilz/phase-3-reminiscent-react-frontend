import CandleContainer from "./CandleContainer";
import CreateCandle from "./CreateCandle";

function Candles () {
    console.log("hello from Candles")


    return (
        <div>
        <CreateCandle/>
        <CandleContainer/>
        </div>
    )

}

export default Candles;