import CandleContainer from "./CandleContainer";
import { useState, useEffect } from 'react'

function Candles({ candleArr, setCart, checkOut }) {




    return (
        <div>
            
            <CandleContainer candleArr={candleArr} setCart={setCart} checkOut={checkOut}/>
        </div>
    )

}

export default Candles;