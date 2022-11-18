import { useEffect, useState } from 'react'
import CartCard from "./CartCard"


function Cart({ currentUser, handleCandleEdit }) {

    const [cart, setCart] = useState([])
    // const [deletedCandle, setDeletedCandle] = useState({})
    // const [filtered, setFiltered] = useState([])



    useEffect(() => {
        if (currentUser !== null) {
            fetch(`http://localhost:9292/users/${currentUser.id}/cart`)
                .then(res => res.json())
                .then(data => {
                    setCart(data)
                    // console.log(data)
                })
        }
    }, [])

    // useEffect(() => {
    //     if (currentUser !== null) {
    //     fetch(`http://localhost:9292/users/${currentUser.id}/cart`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCart(data)
    //             console.log(data)
    //         })
    //     }
    // }, [deletedCandle])

    // function removeCandle(c) {
    //     const filteredCart = cart.filter((candle) => candle.id != c.id)
    //     setCart(filteredCart)
    // }

    const cartCandleArray = cart.map((candle) => {
        return (
            <CartCard key={candle.id} candle={candle} currentUser={currentUser} handleCandleEdit={handleCandleEdit} />

        )
    })


    return (
        <>
            {currentUser ?
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