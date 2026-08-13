import { useState } from "react";


function Contact(props){

    let[data,setdata]=useState(props)
    return(
        <>
        <h1>Admin Page</h1>
        <h2>Welcom - {data.name}</h2>
        </>
    )


}
export default Contact