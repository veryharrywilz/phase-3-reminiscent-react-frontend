function CartCard({ candle, currentUser, setDeletedCandle }) {


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
    <div className="candleCard">
        <h1>{candle.name}</h1>
        <img alt="Candle" src={candle.image} />
        <p>${candle.price}</p>
        <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
)
}

export default CartCard;