import { useEffect, useState } from 'react'
import CartCard from "./CartCard"


function Cart({ currentUser, handleCandleEdit }) {

    const [cart, setCart] = useState([])




    useEffect(() => {
        if (currentUser !== null) {
            fetch(`http://localhost:9292/users/${currentUser.id}/cart`)
                .then(res => res.json())
                .then(data => {
                    setCart(data)

                })
        }
    }, [])


    const cartCandleArray = cart.map((candle) => {
        return (
            <CartCard key={candle.id} candle={candle} currentUser={currentUser} handleCandleEdit={handleCandleEdit} />

        )
    })


    return (
        <>
            {currentUser ?
                <>
                    {cart.length === 0 ? <h2 style={{ fontFamily: "Bell Gothic Std" }}>Your cart is empty </h2>
                        :
                        <div>
                            {cartCandleArray}
                        </div>
                    }
                </>
                :
                <h2 style={{ fontFamily: "Bell Gothic Std" }}>Please log in to see your cart</h2>
            }
        </>
    )
}

export default Cart;