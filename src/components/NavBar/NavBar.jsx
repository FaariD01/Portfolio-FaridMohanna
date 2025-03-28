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
            <NavLink className={({isActive} )=> isActive ? "category-active" : "category"}to="/">Inicio</NavLink>
            <NavLink className={({isActive} )=> isActive ? "category-active" : "category"} to="1">Servicios</NavLink>
            <NavLink className={({isActive} )=> isActive ? "category-active" : "category"} to="2">Habilidades</NavLink>
            <NavLink className={({isActive} )=> isActive ? "category-active" : "category"} to="3">Portfolio</NavLink>
            <NavLink className={({isActive} )=> isActive ? "category-active" : "category"} to="4">Contacto</NavLink>
            <NavLink className={({isActive} )=> isActive ? "category-active" : "category"} to="5">Redes Sociales</NavLink>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
