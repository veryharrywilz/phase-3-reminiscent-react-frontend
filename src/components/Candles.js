import CandleContainer from "./CandleContainer";
import { useState, useEffect } from 'react'

function Candles({ candleArr, currentUser }) {

    const [search, setSearch] = useState("")

    let searchArray = candleArr.filter((candle) => {
        const scentArray = candle.scents.map((scent) => scent.name).join('').toLowerCase()
        console.log(scentArray)
        if(search === "") {
            return true
        }
        else if (scentArray.includes(search.toLowerCase()) === true) {
            return true
        }
        else {
            return false
        }
    })

    return (
        <div className="allCandleDiv">
            <input type="text" id="searchBar" onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search by scent..."></input>
            <CandleContainer 
            candleArr={searchArray} 
            currentUser={currentUser} />
        </div>
    )

}

export default Candles;