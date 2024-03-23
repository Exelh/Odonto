import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from './Components/utils/routes';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { useLightdark } from "./Context/Context";



function App() {
  // const {theme} = useLightdark()

  return (
    // <div style={{background: theme.background, color:theme.font}}>
     <div>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.detail} element={<Detail/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path="*" element={<h1>Página no encontrada. ERROR 404</h1>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
