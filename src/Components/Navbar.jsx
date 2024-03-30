import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/global.context";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useContextGlobal();
  const toggleTheme = () => {setTheme(theme === false ? true : false)};

  return (
    <nav className={`Navbar ${theme ? "light" : "dark"}`}>
      <div className="cont-title">
      <Link to={routes.home}> {/* Agrega un enlace al componente Home */}
          <h2>Odonto  🦷</h2> {/* Título que se convierte en un enlace */}
      </Link>
      </div>
      <div className="cont-data">
        <ul>
          <li>
            <Link to={routes.home}>
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to={routes.contacto}>
              <h3>Contacto</h3>
            </Link>
          </li>
          <li>
            <Link to={routes.favs}> 
              <h3>Destacados</h3>
            </Link>
          </li>
        </ul>
        <button className="button-nav" onClick={toggleTheme}>
          Modo {theme ? "Dark 🌒" : "Light 🌞"}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
