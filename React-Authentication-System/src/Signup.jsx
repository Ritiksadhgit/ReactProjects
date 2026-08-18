import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
    let [frmdata,setfrmdata]=useState({})
    
    let navigate=useNavigate();



function hinput(e){
    const {name,value}=e.target
    setfrmdata({...frmdata,[name]:value});
}
function submit(e){
    e.preventDefault();
    console.log(frmdata);
if (
        !frmdata.username ||
        !frmdata.email ||
        !frmdata.pass
    ) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("userdata",JSON.stringify(frmdata))
    navigate("/login");
}

return(
    <>
    <h1>Sign up page</h1>

    <form onSubmit={submit}>

        <label htmlFor="">Username</label>
        <input type="text" name="username" onChange={hinput}/><br />

         <label htmlFor="">Email</label>
        <input type="text" name="email" onChange={hinput}/> <br />

        <label htmlFor="">PassWord</label>
        <input type="text" name="pass" onChange={hinput}/>
        <input type="submit" />
    </form>
    </>
)
}
export default Signup