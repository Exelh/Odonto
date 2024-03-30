import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import Button from "../Components/Button";

const Dentist = () => {
  const { state, dispatch } = useContextGlobal();
  const { doctorSelected } = state;
  const [loader, setLoader] = useState(true);

  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) =>
      dispatch({ type: "GET_DOCTOR", payload: res.data })
    );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1100);
  }, []);

  return loader ? (
    <div className="loader"></div>
  ) : (
    <>
      <div className="card-grid">
        <h1>Detail Dentist id {doctorSelected.id}</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{doctorSelected.name}</td>
              <td>{doctorSelected.email}</td>
              <td>{doctorSelected.phone}</td>
              <td>{doctorSelected.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button />
    </>
  );
};

export default Dentist;
