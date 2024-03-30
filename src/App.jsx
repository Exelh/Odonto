import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Dentist from "./Routes/Dentist";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  const { theme } = useContextGlobal();
  return (    
      <div className={`App ${theme ? "light" : "dark"}`}>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contacto} element={<Contact />} />
        <Route path={routes.dentista} element={<Dentist />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path="*" element={<h1>Página no encontrada. ERROR 404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
