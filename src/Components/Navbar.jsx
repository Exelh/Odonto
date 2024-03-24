import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, theme, setTheme } = useContextGlobal();
  const handleChangeTheme = () => {
    if (theme === state.themes.dark) setTheme(state.themes.light);
    if (theme === state.themes.light) setTheme(state.themes.dark);
  };

  return (
    <nav>
      <>
        <Link to={routes.home}>
          <h3>Home</h3>
        </Link>
        <Link to={routes.contact}>
          <h3>Contact</h3>
        </Link>
        <Link to={routes.favs}>
          <h3>Favs</h3>
        </Link>
      </>
      <button
        style={{ background: theme.background, color: theme.font }}
        onClick={handleChangeTheme}> Change Theme 
      </button>
    </nav>
  );
};

export default Navbar;
