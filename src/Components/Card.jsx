import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ item, isFav, handleRemoveSingle }) => {
  const { dispatch, state } = useContextGlobal();

  const addFav = () => {
    const isAlreadyFav = state.favs.some((dentist) => dentist.id === item.id);
    if (isAlreadyFav) {
      alert("Este dentista ya está en la lista de favoritos.");
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
      alert(item.name +" se agrego satisfactoriamente a tu lista.✔");
    }
  };
  return (
    <div className="card">
      <img className="imgDoctor" src="../../public/images/doctor.jpg" alt="" />
      <Link to={"/dentista/" + item.id}>
          <h4>{item.name}</h4>
      </Link>
      <h4>{item.username}</h4>
      {isFav ? (
        <button className="buttonAddFav" onClick={() => handleRemoveSingle(item.id)}>
          Eliminar favorito ❌
        </button>
      ) : (
        <button className="buttonAddFav" onClick={addFav}>
          Agregar a favoritos⭐
        </button>
      )}
    </div>
  );
};
export default Card;
