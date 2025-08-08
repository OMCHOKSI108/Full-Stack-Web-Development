import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    var mynavigate = useNavigate()

    const doCheck = () => {
        var lemail = localStorage.getItem("email")
        var lpassword = localStorage.getItem("password")
        if (lemail === email && lpassword === password) {
            localStorage.setItem('isLoggedIn', true)
            mynavigate('/dashboard')
        } else {
            alert("Login failed")
        }
    }


    return (
        <>
            <h1>Login Page</h1>

            Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />

            Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={doCheck}>Login</button>
        </>
    )
}

export default Login