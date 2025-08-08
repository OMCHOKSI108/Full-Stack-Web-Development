import React from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const [name, setName] = React.useState("");
    const navigate = useNavigate();
    React.useEffect(() => {
        const isLoggedin = localStorage.getItem("isLoggedIn")
        if (isLoggedin) {
            var a = localStorage.getItem("name")
            setName(a);
        }
        else {
            navigate("/login")
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <>
            <h1>Dashboard</h1>
            Hi {name}
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Dashboard