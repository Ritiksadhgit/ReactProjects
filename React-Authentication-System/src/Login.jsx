import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [loginfrm, setloginfrm] = useState({});

    const navigate = useNavigate();

    function logininput(e) {

        const { name, value } = e.target;

        setloginfrm({
            ...loginfrm,
            [name]: value
        });
    }

    function loginsubmit(e) {

        e.preventDefault();

        console.log(loginfrm);

         if (!loginfrm.email || !loginfrm.pass) {
        alert("Please enter email and password");
        return;
    }

        const localdata = JSON.parse(
            localStorage.getItem("userdata")
        );

        if (
            loginfrm.email !== localdata.email ||
            loginfrm.pass !== localdata.pass
        ) {
            alert("Email or Password is wrong ❌");
        } else {
            alert("Login Successful ✅");

            navigate("/Signup");
        }
    }

    return (
        <>
            <h1>Login Page</h1>

            <form onSubmit={loginsubmit}>

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={logininput} placeholder="Enter email address"
                />

                <br /><br />

                <label>Password</label>
                <input
                    type="password"
                    name="pass"
                    onChange={logininput} placeholder="Enter your email"
                />

                <br /><br />

                <input type="submit" />

            </form>
        </>
    );
}

export default Login;