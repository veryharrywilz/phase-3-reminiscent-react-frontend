import Candles from "./Candles";
import Login from "./LogIn";
import Cart from "./Cart";

function Home () {
    console.log("hello from home")


    return (
        <div>
            <Candles/>
            <Login/>
            <Cart/>
        </div>
    )
}

export default Home;