function Cart({cart, removeCandle}) {

function handleDelete(c) {
    removeCandle(c)
}



    const inCart = cart.map((c) =>  {

        return (
            <div className="candleCard">
            <h1>{c.name}</h1>
            <img alt="Candle" src={c.image} />
            <p>${c.price}</p>
            <button onClick={() => handleDelete(c)}>Remove From Cart</button>
        </div>
        )

    })

    return (
        <div>{inCart}</div>
    )
}

export default Cart;