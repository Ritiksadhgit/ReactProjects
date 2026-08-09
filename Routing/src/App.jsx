import { Routes,Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";


function App(){
  return(
    <>

    <Layout/>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={ <Home/>}/>
      {/* <Route index element={ <Home/>}/> */}
      <Route path="/about" element={ <About/>}/>
      {/* // <Route path="/contact" element={ <Contact/>}/> */}
      </Route>
    </Routes>

    {/* <Link to ="about">About</Link> */}
    </>
  )
}
export default App