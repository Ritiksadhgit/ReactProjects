import { useState } from "react"

function App(){
  // let [variable.function]=useState(initial value/state);
  let[digit,digitfun]=useState(200);
  let[name,setName]=useState("Harshit");
  let[color,setcolor]=useState("red")
  let[counter,setcount]=useState(0)

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
    </div>
    </>
  )
}
export default App