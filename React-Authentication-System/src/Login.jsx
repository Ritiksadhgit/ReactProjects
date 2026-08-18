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
                    onChange={logininput}
                />

                <br /><br />

                <label>Password</label>
                <input
                    type="password"
                    name="pass"
                    onChange={logininput}
                />

                <br /><br />

                <input type="submit" />

            </form>
        </>
    );
}

export default Login;