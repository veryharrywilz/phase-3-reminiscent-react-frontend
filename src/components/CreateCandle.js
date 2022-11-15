import React, {useEffect, useState} from 'react'

function CreateCandle( {scentData} ) {
    console.log(scentData)

    const [showCandleForm, setShowCandleForm] = useState(false)
    const scentOptions = scentData.map((scent) => {
        return(<option>{scent.name}</option>)
    })

    function handleClick(scentData) {
        setShowCandleForm(showCandleForm => !showCandleForm)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.name.value, e.target.price.value)
    }



    return (
        <div>
            <button onClick={() => handleClick}>Create a Candle</button>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Candle Name' name='name'></input>
                <input type="text" placeholder='Price' name='price'></input>

                <select name='Scent1'>
                    {scentOptions}
                </select>
                <select name='Scent2'>
                    {scentOptions}
                </select>
                <select name='Scent3'>
                    {scentOptions}
                </select>
                <select name='Scent4'>
                    {scentOptions}
                </select>

                <button type='submit'>Create!</button>
            </form>
        </div>
    )
    
}

export default CreateCandle;