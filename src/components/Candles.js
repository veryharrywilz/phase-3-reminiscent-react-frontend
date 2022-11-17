import CandleContainer from "./CandleContainer";
import { useState, useEffect } from 'react'

function Candles({ candleArr, currentUser }) {

    const [search, setSearch] = useState("")

    let searchArray = candleArr.filter((candle) => {
        if(search === "") {
            return true
        }
        else if (candle.name.toLowerCase().includes(search.toLowerCase()) === true) {
            return true
        }
        else {
            return false
        }
    })

    return (
        <div>
            <input type="text" id="searchBar" onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search"></input>
            <CandleContainer 
            candleArr={searchArray} 
            currentUser={currentUser} />
        </div>
    )

}

export default Candles;