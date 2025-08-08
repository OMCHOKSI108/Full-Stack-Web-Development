import React from "react";

function Editprofile() {

    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [mobile, setNum] = React.useState("")

    React.useEffect(() => {
        const mail = localStorage.getItem("email")
        const name = localStorage.getItem("name")
        const phone = localStorage.getItem("mobile")

        setEmail(mail || "")
        setName(name || "")
        setNum(phone || "")
    }, [])

    const handleUpdate = () => {
        localStorage.setItem("email", email)
        localStorage.setItem("name", name)
        localStorage.setItem("mobile", mobile)
        alert("Profile updated successfully!")
    }

    return (
        <>
            <h1>Edit Profile</h1>

            Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            phone: <input type="text" value={mobile} onChange={(e) => setNum(e.target.value)} />

            <button onClick={handleUpdate}>Update Profile</button>



        </>
    )
}

export default Editprofile;