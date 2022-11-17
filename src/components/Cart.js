import { useEffect, useState } from 'react'
import CartCard from "./CartCard"

function Cart({ currentUser, cart, setCart, handleCandleEdit }) {
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
            <CartCard candle={candle} currentUser={currentUser} setDeletedCandle={setDeletedCandle} handleCandleEdit={handleCandleEdit}/>
        )
    })

    return (
        <>
        {currentUser?
            <div>
            {cartCandleArray}
        </div>
        :
        <h2 style={{ fontFamily: "Bell Gothic Std" }}>Please log in to see your cart</h2>
        }
        </>
    )
}

export default Cart;