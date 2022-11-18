import CandleContainer from "./CandleContainer";
import { useState, useEffect } from 'react'

function Candles({ candleArr, currentUser }) {

    const [search, setSearch] = useState("")

    let searchArray = candleArr.filter((candle) => {
        const scentArray = candle.scents.map((scent) => scent.name).join('').toLowerCase()
        const category = candle.scents[1].category.toLowerCase()


        // const getScent = candleArr.map((c) => c.scents)
        // const categories = getScent.map((c) => c[1].category).join('').toLowerCase()
        // console.log(categories)
        if(search === "") {
            return true
        }
        else if (scentArray.includes(search.toLowerCase()) === true) {
            return true
        }
        else if (category.includes(search.toLowerCase()) === true) {
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
        <div className="allCandleDiv">
            <input type="text" id="searchBar" onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search by scent..."></input>
            <CandleContainer 
            candleArr={searchArray} 
            currentUser={currentUser} />
        </div>
    )

}

export default Candles;