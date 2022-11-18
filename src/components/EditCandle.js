import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function EditCandle({ candleEdit }) {
    const [currentCandle, setCurrentCandle] = useState([])
    const [scentOptions, setScentOptions] = useState([])
    const [labelColor, setLabelColor] = useState(candleEdit.color)

    let navigate = useNavigate()
    //console.log(labelColor)

    useEffect(() => {
        fetch(`http://localhost:9292/edit/candle/${candleEdit.id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentCandle(data)
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/scents")
            .then(res => res.json())
            .then(data => setScentOptions(data))
    }, [])

    const renderScents = scentOptions.map((scent, index) => {
        return (<option key={index}>{scent.name}</option>)
    })

    function handleUpdate(e) {
        e.preventDefault()
        const scents = [e.target.scent1.value, e.target.scent2.value, e.target.scent3.value, e.target.scent4.value]
        let name
        if (e.target.name.value === "") {
            name = currentCandle.name
        } else {
            name = e.target.name.value
        }
        const finalScents = scents.filter((scent) => {
            if (scent.includes("Optional")) {
                return false
            }
            else {
                return true
            }
        })

        fetch(`http://localhost:9292/edit/candle/${candleEdit.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                scents: finalScents,
                color: labelColor
            })
        })
            .then(res => res.json())
        //.then(data => console.log(data))
        navigate('/cart')
    }

    if ('scents' in currentCandle) {
        return (
            <div className="candle_editor_page">
                <div className="edit_candle">
                    <h2>Edit Your Candle</h2>
                    <form className="candleForm" onSubmit={handleUpdate}>
                        <input type="text" name='name' placeholder={currentCandle.name} />
                        <br />
                        <select name='scent1'>
                            <option>{currentCandle.scents[0].name}</option>
                            {renderScents}
                        </select>
                        <br />
                        <select name='scent2'>
                            {currentCandle.scents[1] ?
                                <option>{currentCandle.scents[1].name}</option>
                                :
                                <option>-Optional-select another scent-</option>
                            }
                            {renderScents}
                        </select>
                        <br />
                        <select name='scent3'>
                            {currentCandle.scents[2] ?
                                <option>{currentCandle.scents[2].name}</option>
                                :
                                <option>-Optional-select another scent-</option>
                            }
                            {renderScents}
                        </select>
                        <br />
                        <select name='scent4'>
                            {currentCandle.scents[3] ?
                                <option>{currentCandle.scents[3].name}</option>
                                :
                                <option>-Optional-select another scent-</option>
                            }
                            {renderScents}
                        </select>
                        <br />
                        <br />
                        <button type='submit'>Update</button>
                    </form>
                    <button className='colorPicker' id="white" onClick={() => setLabelColor("white")}></button>
                    <button className='colorPicker' id="wheat" onClick={() => setLabelColor("wheat")}></button>
                    <button className='colorPicker' id="goldenrod" onClick={() => setLabelColor("goldenrod")}></button>
                    <button className='colorPicker' id="lightsalmon" onClick={() => setLabelColor("lightsalmon")}></button>
                    <button className='colorPicker' id="orangered" onClick={() => setLabelColor("orangered")}></button>
                    <button className='colorPicker' id="rosybrown" onClick={() => setLabelColor("rosybrown")}></button>
                    <button className='colorPicker' id="plum" onClick={() => setLabelColor("plum")}></button>
                    <button className='colorPicker' id="palevioletred" onClick={() => setLabelColor("palevioletred")}></button>
                    <button className='colorPicker' id="olive" onClick={() => setLabelColor("olive")}></button>
                    <button className='colorPicker' id="seagreen" onClick={() => setLabelColor("seagreen")}></button>
                    <button className='colorPicker' id="cornflowerblue" onClick={() => setLabelColor("cornflowerblue")}></button>
                    <button className='colorPicker' id="lightblue" onClick={() => setLabelColor("lightblue")}></button>

                </div>
                <img alt='candle' className="edit_image" src="https://cb.scene7.com/is/image/Crate/ShinolaCandle3ThymeOlvBlueSSF21/$web_pdp_main_carousel_high$/210427132020/shinola-no.-3-bergamot-eucalyptus-and-amber-scented-candle.jpg" />
                <span className="edit_color_block" style={{ backgroundColor: labelColor }}>
                          
                </span>
            </div>
        )
    }
    else {
        return <h1>Loading...</h1>
    }

}

export default EditCandle