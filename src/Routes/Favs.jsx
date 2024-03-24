import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { useNavigate } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContextGlobal();
  const navigate = useNavigate()

console.log(state);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map(item => <Card key={item.id} item={item}/>)}
      </div>
      <button onClick={() => navigate(-1)}>🔙</button>

    </>
  );
};

export default Favs;
