import { useEffect, useState } from "react"

function EditCandle({ candleEdit }) {
    const [currentCandle, setCurrentCandle] = useState([])
    const [scentOptions, setScentOptions] = useState([])

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
            if (scent.includes("Select")) {
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
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    if ('scents' in currentCandle) {
        return (
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
                            <option>-Select a second scent-</option>
                        }
                        {renderScents}
                    </select>
                    <br />
                    <select name='scent3'>
                        {currentCandle.scents[2] ?
                            <option>{currentCandle.scents[2].name}</option>
                            :
                            <option>-Select a third scent-</option>
                        }
                        {renderScents}
                    </select>
                    <br />
                    <select name='scent4'>
                        {currentCandle.scents[3] ?
                            <option>{currentCandle.scents[3].name}</option>
                            :
                            <option>-Select a fourth scent-</option>
                        }
                        {renderScents}
                    </select>
                    <br />
                    <br />
                    <button type='submit'>Update</button>
                </form>

            </div>
        )
    }
    else {
        return <h1>Loading...</h1>
    }

}

export default EditCandle