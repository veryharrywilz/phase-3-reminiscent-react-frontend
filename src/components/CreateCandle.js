import React, { useEffect, useState } from 'react'

function CreateCandle({ scentData, handleSubmit, setLabelColor }) {


    const scentOptions = scentData.map((scent) => {
        return (<option>{scent.name}</option>)
    })


    function onFormSubmit(e) {
        e.preventDefault()
        const scents = []
        scents.push(e.target.scent1.value, e.target.scent2.value, e.target.scent3.value, e.target.scent4.value)
        console.log(scents)
        const finalScents = scents.filter((scent) => {
            if( scent.includes("Select")) {
                return false
            }
            else {
                return true
            }
        })
        console.log(finalScents)
        handleSubmit(e.target.name.value, finalScents)
        setLabelColor(e.target.color.value)
    }



    return (
        <div className="create" >
            <form onSubmit={(e) => onFormSubmit(e)} className="candleForm">
                <input type="text" placeholder='Candle Name' name='name'></input>
                <br />
                <select name='scent1'>
                <option>-Select a primary scent-</option>
                    {scentOptions}
                </select>
                <br />
                <select name='scent2'>
                <option>-Select a second scent-</option>
                    {scentOptions}
                </select>
                <br />
                <select name='scent3'>
                <option>-Select a third scent-</option>
                    {scentOptions}
                </select>
                <br />
                <select name='scent4'>
                <option>-Select a fourth scent-</option>
                    {scentOptions}
                </select>
                <br />
                <select placeholder='Color' name="color">
                    <option value='' disabled selected hidden >-Select a color-</option>
                    <option>white</option>
                    <option>wheat</option>
                    <option>lightcoral</option>
                    <option>lightsalmon</option>
                    <option>rosybrown</option>
                    <option>forestgreen</option>
                    <option>olive</option>
                    <option>seagreen</option>
                    <option>lightblue</option>
                    <option>plum</option>
                    <option>violet</option>
                </select>
                <br />
                <button type='submit'>Create!</button>
            </form>
        </div>
    )

}

export default CreateCandle;