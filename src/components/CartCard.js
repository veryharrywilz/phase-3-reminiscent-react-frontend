import { Link } from "react-router-dom"

function CartCard({ candle, currentUser, removeFromCart, handleCandleEdit }) {


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


    // function removeFromCart() {
    //     console.log(candle.id)
    //     console.log(currentUser.id)
    //     fetch(`http://localhost:9292/users/${currentUser.id}/${candle.id}/cart`, {
    //         method: 'DELETE',
    //         headers: { 'content-type': 'application/json' },
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //     setDeletedCandle(candle)
    // }

    function onEditClick(){
        handleCandleEdit(candle)
    }


return (
    <div className="candleCard" id="cartCard" style={{ backgroundColor: bgColor }}>
        <h1>{candle.name}</h1>
        <img alt="Candle" src={candle.image} />
        <p>${candle.price}</p>
        <button onClick={() => removeFromCart(candle)}>Remove from Cart</button>
        {candle.id > 10?
        <button onClick={onEditClick}><Link to='/edit/candle'>Edit This Candle</Link></button>
        :
        null
        }
    </div>
)
}

export default CartCard;