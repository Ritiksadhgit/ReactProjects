import { Link, Outlet } from "react-router-dom";

function Layout() {
return(
    <>
    <nav>

      <h1>LOGO</h1>
      <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/about'>About</Link></li>
         <li><Link to ='/contact'>Contact</Link></li>

      </ul>

    </nav>
    <Outlet />

    <footer>
        <h1>Footer section</h1>
    </footer>
    </>
)
}
export default Layout