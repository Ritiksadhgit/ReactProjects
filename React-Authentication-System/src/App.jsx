import { Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";


function App() {
    return (
        <>
            <Routes>
                <Route index element={<Signup />} />
                  <Route path="/Login" element={<Login />}/>
            
            </Routes>
        </>
    );
}

export default App;