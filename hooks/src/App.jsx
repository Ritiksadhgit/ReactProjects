import { useState } from "react"
import Contact from "./contact";

function App(){
  // let [variable.function]=useState(initial value/state);
  let[digit,digitfun]=useState(200);
  let[name,setName]=useState("Harshit");
  let[color,setcolor]=useState("red");
  let[counter,setcount]=useState(0);
  let[person,setPerson]=useState({name:"Ritik",age:12,contact:123});
  let[arr,aarset]=useState([3231,3243]);

  function change(){
    digitfun(400);
  }
  function namefun(){
    setName("Ritik");
  }
  
  return(
    <>
   <div style={{backgroundColor: color}}>
    <h1>This is app page {digit}</h1>
    <button onClick={change}>Change</button>
    <h1>{name}</h1>

    <button onClick={namefun}>Change name</button><br />
    <button onClick={()=>setName("priyansh")}>Change name with usestate function</button><br />
    <button onClick={() => setcolor("pink")}>Change Color</button><br />


    <h1>{counter}</h1>
    <button onClick={()=>{setcount(counter-1)}}>Decrease</button>   <button onClick={()=>{setcount(counter+1)}}>Increase</button>
    <h1>My Name {person.name}</h1>
    <h1>Array element is:{arr[1]}</h1>
    <Contact name="Ankit"/>
        </div>
    </>
  )
}
export default App