import { useState } from "react"

function Form2(){
    let[data,setData]=useState({})

    function hinput(e){
        const {name,value}=e.target;
        setData({...data,[name]:value})
    }
    function submit(e) {
        e.preventDefault()
        console.log(data)
    }
   return(
        <>
        <h1>Form2 page</h1>

        <form onSubmit={submit}>

            <label htmlFor="">Name</label>
            <input type="text" name="username" onChange={hinput}/><br /><br />

            <label htmlFor="">Age</label>
            <input type="text" name="age" onChange={hinput}/><br /><br />

            <label htmlFor="">Contact</label>
            <input type="text" name="contact" onChange={hinput}/><br /><br />

            <input type="submit" />




        </form>
        
        </>
   )
    }
    export default Form2
