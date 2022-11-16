import CandleContainer from "./CandleContainer";
import { useState, useEffect } from 'react'

function Candles({ candleArr, setNewCandle }) {




    return (
        <div>
            
            <CandleContainer candleArr={candleArr} />
        </div>
    )

}

export default Candles;