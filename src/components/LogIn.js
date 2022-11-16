import { useState } from 'react';

function Login({ changeUser }) {
    const [userLogin, setUserLogin] = useState("")

    function findCurrentUser(username) {
        fetch(`http://localhost:9292/users/${username}`)
            .then(res => res.json())
            .then(user => changeUser(user))
        // history.push(`/users/${user.id}/trips`)
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submited")
        findCurrentUser(userLogin)
    }
    function handleChange(e) {
        setUserLogin(e.target.value)
    }

    return (
        <>
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <label value="Username">Username:</label><br />
                    <input type="text" name="login" value={userLogin} onChange={handleChange} autoFocus={true} />
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className="create_account_form">
                {/* <form onSubmit={handleSubmit}>
                    <label value="Username">Username:</label><br />
                    <input type="text" name="login" value={userLogin} onChange={handleChange} autoFocus={true} />
                    <input type="submit" value="Create Account" />
                </form> */}
            </div>
        </>
    )
}
export default Login;