function Cart({cart}) {

    const inCart = cart.map((c) =>  {
        return (
            <div className="candleCard">
            <h1>{c.name}</h1>
            <img alt="Candle" src={c.image} />
            <p>${c.price}</p>
        </div>
        )

    })

    return (
        <div>{inCart}</div>
    )
}

export default Cart;