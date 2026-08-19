import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

    const { user } = useContext(UserContext);

    return (
        <>
            <h1>Profile Page</h1>

            <h2>Name: {user}</h2>
        </>
    );
}

export default Profile;