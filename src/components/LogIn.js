import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login({ changeUser }) {
    const [userLogin, setUserLogin] = useState("")
    const [createUser, setCreateUser] = useState({
        username: "",
        password: ""
    })

    let navigate = useNavigate()

    function findCurrentUser(username) {
        fetch(`http://localhost:9292/users/${username}`)
            .then(res => res.json())
            .then(user => changeUser(user))
        navigate('/')
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submited")
        findCurrentUser(userLogin)
    }
    function handleChange(e) {
        setUserLogin(e.target.value)
    }

    function handleCreateChange(e) {
        const { name, value } = e.target

        setCreateUser({ ...createUser, [name]: value })
    }
    function handleCreateSubmit(e){
        e.preventDefault()
        console.log("submited")
        fetch('http://localhost:9292/users',{
            method : "POST",
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                user_name: createUser.username,
                password: createUser.password
            })
        })
        .then(res => res.json())
        .then(data => {
            if ('message' in data){
                alert("Invalid Username or Password. Try again")
            }
            else{
                changeUser(data)
                navigate('/')
            }
        })
    }

    return (
        <>
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <label value="Username">Login:</label><br />
                    <input
                        type="text"
                        name="login"
                        value={userLogin}
                        onChange={handleChange}
                        autoFocus={true}
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="password"
                        name="login"
                        autoFocus={true}
                        placeholder="Password"
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className="create_account_form">
                <form onSubmit={handleCreateSubmit}>
                    <label value="Create_account">Create Acount:</label><br />
                    <input 
                        type="text" 
                        name="username" 
                        autoFocus={true} 
                        placeholder="Username" 
                        onChange={handleCreateChange}
                    />
                    <br />
                    <input 
                        type="password" 
                        name="password" 
                        autoFocus={true} 
                        placeholder="Password" 
                        onChange={handleCreateChange}
                    />
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        </>
    )
}
export default Login;