import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login({ changeUser }) {
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    })
    const [createUser, setCreateUser] = useState({
        username: "",
        password: ""
    })

    let navigate = useNavigate()

    function findCurrentUser(user) {
        if(userLogin.username === "" || userLogin.password === ""){
            alert("Please fill out both fields before hitting enter")
            setUserLogin({
                username: "",
                password: ""
            })
        }else{
        fetch(`http://localhost:9292/users/${user.username}/${user.password}/login`)
            .then(res => res.json())
            .then(data => {
                if ('message' in data) {
                    alert(data.message)
                    setUserLogin({
                        username: "",
                        password: ""
                    })
                }
                else {
                    changeUser(data)
                    navigate('/')
                }
            })
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        //console.log("submited")
        findCurrentUser(userLogin)
    }
    function handleChange(e) {
        const { name, value } = e.target

        setUserLogin({ ...userLogin, [name]: value })
        //setUserLogin(e.target.value)
    }

    function handleCreateChange(e) {
        const { name, value } = e.target

        setCreateUser({ ...createUser, [name]: value })
    }
    function handleCreateSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/users', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user_name: createUser.username,
                password: createUser.password
            })
        })
            .then(res => res.json())
            .then(data => {
                if ('message' in data) {
                    alert(data.message)
                }
                else {
                    changeUser(data)
                    navigate('/')
                }
            })
        setCreateUser({
            username: "",
            password: ""
        })
    }

    return (
        <div className="login_container">
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <label value="Username">Welcome back!</label><br />
                    <input
                        type="text"
                        name="username"
                        value={userLogin.username}
                        onChange={handleChange}
                        autoFocus={true}
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={userLogin.password}
                        onChange={handleChange}
                        autoFocus={true}
                        placeholder="Password"
                    />
                    <br />
                    <button className="login_button" type="submit">Login</button>
                </form>
            </div>
            <div className="create_account_form">
                <form onSubmit={handleCreateSubmit}>
                    <label value="Create_account">Don't have an account? Create one now!</label><br />
                    <input
                        type="text"
                        name="username"
                        autoFocus={true}
                        placeholder="Username"
                        value={createUser.username}
                        onChange={handleCreateChange}
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        autoFocus={true}
                        placeholder="Password"
                        value={createUser.password}
                        onChange={handleCreateChange}
                    />
                    <br />
                    <button className="login_button" type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}
export default Login;