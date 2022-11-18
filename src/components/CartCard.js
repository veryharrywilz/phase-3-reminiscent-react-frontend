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
        fetch(`http://localhost:9292/users/${currentUser.id}/${candle.id}/cart`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
        e.target.parentNode.remove()

    }

    function onEditClick() {
        handleCandleEdit(candle)
    }

    const candleScents = candle.scents.filter((c) => c.name)
    const getScent = candleScents.map((scent) => scent.name)
    const renderScents = getScent.join(", ")
    
    return (
        <div className="candleCard" id="cartCard" style={{ backgroundColor: bgColor }}>
            <h1>{candle.name}</h1>
            <img className="cartImage" alt="Candle" src={candle.image} />
            <p>${candle.price}</p>
            <p>{`Top Notes: ${renderScents}`}</p>
            <button onClick={removeFromCart}>Remove from Cart</button>
            {candle.id > 12 ?
                <button className="edit_button" onClick={onEditClick}><Link to='/edit/candle'>Edit This Candle</Link></button>
                :
                null
            }
        </div>
    )
}

export default CartCard;