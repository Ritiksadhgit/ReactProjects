import { FaHome } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
function Navbar() {
    function func(){
        alert("Working..")
    }
  return (
   <>

<div className="main">

      <ul className="nav-links">
        <li><a href="#"><FaHome /> Home</a></li>
        <li><a href="#"><FaBackward />About</a></li>
        <li><a href="#" className="icon"><MdHomeRepairService />Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
</div>
     
   </>
  );
}

export default Navbar;