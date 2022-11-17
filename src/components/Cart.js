import { useEffect, useState } from 'react'
import CartCard from "./CartCard"

function Cart({ currentUser }) {
    const [deletedCandle, setDeletedCandle] = useState({})
    const [cart, setCart] = useState([])

    
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

        useEffect(() => {
            if (currentUser !== null) {
            fetch(`http://localhost:9292/users/${currentUser.id}/cart`)
                .then(res => res.json())
                .then(data => {
                    setCart(data)
                    console.log(data)
                })
            }
        }, [deletedCandle])
    

    const cartCandleArray = cart.map((candle) => {
        return (
            <CartCard key={candle.id} candle={candle} currentUser={currentUser} setDeletedCandle={setDeletedCandle} />
        )
    })


    return (
        <div>
            {cartCandleArray}
        </div>
    )
}

export default Cart;