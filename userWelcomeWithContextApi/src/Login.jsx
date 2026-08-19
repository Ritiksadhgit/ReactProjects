import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

function Login() {

    const [name, setName] = useState("");

    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    function handleSubmit(e) {

        e.preventDefault();

        setUser(name);

        navigate("/home");
    }

    return (
        <>
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit}>

                <label>Enter Your Name</label>

                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>
        </>
    );
}

export default Login;