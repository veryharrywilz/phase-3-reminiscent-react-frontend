import { useEffect, useState } from 'react'
import CartCard from "./CartCard"

function Cart({ currentUser, cart, setCart }) {
const [deletedCandle, setDeletedCandle] = useState({})

    
        useEffect(() => {
            if (currentUser !== null) {
            fetch(`http://localhost:9292/users/${currentUser.id}/cart`)
                .then(res => res.json())
                .then(data => {
                    setCart(data)
                    console.log(data)
                })
            }
        }, [])
    

    const cartCandleArray = cart.map((candle) => {
        return (
            <CartCard candle={candle} currentUser={currentUser} setDeletedCandle={setDeletedCandle} />
        )
    })

    return (
        <div>
            {cartCandleArray}
        </div>
    )
}

export default Cart;