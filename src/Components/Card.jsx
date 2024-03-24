import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";



const Card = ({item}) => {
const {dispatch, favs} = useContextGlobal(); 
console.log(favs);

 const addFav = ()=>{
// Aqui iria la logica para agregar la Card en el localStorage


dispatch({type: 'ADD_FAV', payload: item});
}



  return (
    <div className="card">
        <Link to={'/detalle/'+ item.id}>
          <h3>{item.name}</h3>
          <h5>{item.username}</h5>
          <img src="../../public/images/doctor.jpg" alt="" />
        </Link>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav}>⭐</button>

    </div>
  );
};
export default Card;



