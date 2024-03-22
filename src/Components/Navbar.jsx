import React from "react";
import { Link} from 'react-router-dom'
import { routes } from "./utils/routes";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <>
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.contact}><h3>Contact</h3></Link>
        <Link to={routes.favs}><h3>Favs</h3></Link>
        <Link to={routes.detail}><h3>Detail</h3></Link>
      </>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
