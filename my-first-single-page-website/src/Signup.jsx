import React from "react";

function Signup(){

    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [mobile,setMobile] = React.useState("")
    const [password,setPassword] = React.useState("")

    const doProcess = () => {
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("mobile",mobile)
        localStorage.setItem("password",password)
        alert("Sign up done")
    }

    return( <>
        
        <h1>Signup page</h1>
        Name : <input type="text" onChange={(e) => setName(e.target.value)}/> 
        Mobile : <input type="text" onChange={(e) => setMobile(e.target.value)} /> 
        Email : <input type="text" onChange={(e) => setEmail(e.target.value)} /> 
        Password : <input type="password" onChange={(e) => setPassword(e.target.value)} /> 
        <input type="button" value="Submit" onClick={doProcess} />
    
    
    </>
    )
}

export default Signup