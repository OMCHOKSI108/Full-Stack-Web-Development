import React from "react";

function Forgetpassword(){

    const [email,setEmail] = React.useState
    const [password,setPass] = React.useState


    const doProcess = () =>{
        var mail = localStorage.getItem("email")
        var pass = localStorage.getItem("password")

        if(mail!=email){
            alert("Email not found")
        }else{
            
        }

    }



    return (
        <>
        <h1>
            Forget Password
        </h1>

        Email: <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
        Password: <input type="text" onChange={(e)=>setPass(e.target.value)}/>


        
        </>
    )
}