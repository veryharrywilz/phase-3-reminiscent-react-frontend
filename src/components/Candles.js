import CandleContainer from "./CandleContainer";
import { useState, useEffect } from 'react'

function Candles({ candleArr, currentUser }) {


    return (
        <div>
            <CandleContainer candleArr={candleArr} currentUser={currentUser} />
        </div>
    )

}

export default Candles;