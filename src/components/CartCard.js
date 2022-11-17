import {link} from "react-router-dom"

function CartCard({ candle, currentUser, setDeletedCandle }) {

    let bgColor = ""

    function setbgColor() {
        if(candle.id <= 10) {
            bgColor = "#cec2c250"
        }
        else {
            bgColor = candle.color
        }
    }

    setbgColor()


    function removeFromCart() {
        console.log(candle.id)
        console.log(currentUser.id)
        fetch(`http://localhost:9292/users/${currentUser.id}/${candle.id}/cart`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setDeletedCandle(candle)
    }


return (
    <div className="candleCard" id="cartCard" style={{ backgroundColor: bgColor }}>
        <h1>{candle.name}</h1>
        <img alt="Candle" src={candle.image} />
        <p>${candle.price}</p>
        <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
)
}

export default CartCard;