import { useEffect, useState } from 'react'
import CartCard from "./CartCard"


function Cart({ currentUser, handleCandleEdit }) {

    const [deletedCandle, setDeletedCandle] = useState({})
    const [cart, setCart] = useState([])
    const [filtered, setFiltered] = useState ([])




    function removeFromCart(candle) {

        console.log(currentUser.id)
        fetch(`http://localhost:9292/users/${currentUser.id}/${candle.id}/cart`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(updateCart())
            // setDeletedCandle(candle)
    }





    
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

        function updateCart() {
            if (currentUser !== null) {
            fetch(`http://localhost:9292/users/${currentUser.id}/cart`)
                .then(res => res.json())
                .then(data => {
                    setCart(data)
                    console.log(data)
                })
            }
        }
    

    const cartCandleArray = cart.map((candle) => {
        return (
            <CartCard key={candle.id} candle={candle} currentUser={currentUser} removeFromCart={removeFromCart} handleCandleEdit={handleCandleEdit}/>

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