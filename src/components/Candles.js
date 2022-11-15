import CandleContainer from "./CandleContainer";
import CreateCandle from "./CreateCandle";
import {useState, useEffect} from 'react'

function Candles ({candleArr}) {
    console.log("hello from Candles")
    const [scentData, setScentData] = useState([])


  useEffect(() => {
    fetch('http://localhost:9292/scents')
    .then(res => res.json())
    .then(data => {
        setScentData(data)
        console.log(scentData)
    })
  },[])


    return (
        <div>
        <CreateCandle scentData={scentData}/>
        <CandleContainer/>
        <CreateCandle/>
        <CandleContainer candleArr={candleArr}/>
        </div>
    )

}

export default Candles;