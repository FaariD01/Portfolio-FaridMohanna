import "./navbar.css"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <>

      <nav className="navbar">
        <div className="nombre_y_titulo">
          <h1>FARID MOHANNA</h1>
          <h2>FRONTEND DEVELOPER</h2>
        </div>
        <div className="menuNavegacion">
          <ul>
            <li><a href="/" >Inicio</a></li>
            <li><a href="#skills" >Habilidades</a> </li>
            <li><a href="#Services" >Servicios</a> </li>
            <li><a href="#portfolio" >Portfolio</a> </li>
            <li><a href="" >Contacto</a> </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
