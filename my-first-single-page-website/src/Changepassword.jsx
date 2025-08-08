import React from "react";
import { useNavigate } from "react-router-dom";

function Changepassword() {
    const mynavigation = useNavigate();
    const [opass, setOpass] = React.useState("");
    const [npass, setNpass] = React.useState("");
    const [cpass, setCpass] = React.useState("");

    React.useEffect(() => {
        const a = localStorage.getItem("isLoggedIn");
        if (!a) {
            mynavigation('/login');
        }
    }, []);

    const doProcess = () => {
        const storedPassword = localStorage.getItem("password");

        if (opass === "") {
            alert("Please enter old password");
            return;
        }

        if (npass === "" || cpass === "") {
            alert("Please enter new and confirm password");
            return;
        }

        if (storedPassword === opass) {
            if (npass === cpass) {
                if (opass === npass) {
                    alert("Can not use old password as new password");
                } else {
                    localStorage.setItem("password", npass);
                    alert("Password Updated");
                    setOpass("");
                    setNpass("");
                    setCpass("");
                }
            } else {
                alert("New password and confirm password do not match");
            }
        } else {
            alert("Old password is incorrect");
        }
    };

    return (
        <><br />
            <h1>Change Password</h1>
            Old Password: <input type="password" value={opass} onChange={(e) => setOpass(e.target.value)} />
            New Password: <input type="password" value={npass} onChange={(e) => setNpass(e.target.value)} />
            Confirm Password: <input type="password" value={cpass} onChange={(e) => setCpass(e.target.value)} />
            <button onClick={doProcess}>Change Password</button>
        </>
    );
}

export default Changepassword;