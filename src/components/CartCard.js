import { Link } from "react-router-dom"

function CartCard({ candle, currentUser, handleCandleEdit }) {
    let bgColor = ""

    function setbgColor() {
        if (candle.id <= 10) {
            bgColor = "#cec2c250"
        }
        else {
            bgColor = candle.color
        }
    }

    setbgColor()

    function removeFromCart(e) {
        // console.log(candle.id)
        // console.log(currentUser.id)
        fetch(`http://localhost:9292/users/${currentUser.id}/${candle.id}/cart`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            // .then(data => console.log(data))
        e.target.parentNode.remove()
        // setDeletedCandle(candle)
        // removeCandle(candle)
    }

    function onEditClick() {
        handleCandleEdit(candle)
    }

    const candleScents = candle.scents.map((c) => c.name)

    return (
        <div className="candleCard" id="cartCard" style={{ backgroundColor: bgColor }}>
            <h1>{candle.name}</h1>
            <img alt="Candle" src={candle.image} />
            <p>${candle.price}</p>
            <p>{`Top Notes: ${candleScents[0]}, ${candleScents[1]}, ${candleScents[2]}`}</p>
            <button onClick={removeFromCart}>Remove from Cart</button>
            {candle.id > 10 ?
                <button onClick={onEditClick}><Link to='/edit/candle'>Edit This Candle</Link></button>
                :
                null
            }
        </div>
    )
}

export default CartCard;