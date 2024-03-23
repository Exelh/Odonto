import React from "react";
import { Link} from 'react-router-dom'
import { routes } from "./utils/routes";
import { useLightdark } from "../Context/Context";
import { useContextGlobal } from "./utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {

  // const {theme, handleChangeTheme} = useLightdark()
  const {state} = useContextGlobal()
  console.log(state);

  return (
    <nav>
      <>

        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.contact}><h3>Contact</h3></Link>
        <Link to={routes.favs}><h3>Favs</h3></Link>
        <Link to={routes.detail}><h3>Detail</h3></Link>
      </>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/* <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}>
        Change Theme
      </button>     */}
    </nav>
  );
};

export default Navbar;
