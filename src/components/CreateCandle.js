import React, { useEffect, useState } from 'react'

function CreateCandle({ scentData, handleSubmit }) {


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
    }



    return (
        <div>
            <form onSubmit={(e) => onFormSubmit(e)} className="candleForm">
                <input type="text" placeholder='Candle Name' name='name'></input>

                <select name='scent1'>
                <option>-Select a primary scent-</option>
                    {scentOptions}
                </select>
                <select name='scent2'>
                <option>-Select a second scent-</option>
                    {scentOptions}
                </select>
                <select name='scent3'>
                <option>-Select a third scent-</option>
                    {scentOptions}
                </select>
                <select name='scent4'>
                <option>-Select a fourth scent-</option>
                    {scentOptions}
                </select>

                <select placeholder='Color'>
                    <option calue='' disabled selected hidden >-Select a color-</option>
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Indigo</option>
                    <option>Violet</option>
                </select>

                <button type='submit'>Create!</button>
            </form>
        </div>
    )

}

export default CreateCandle;