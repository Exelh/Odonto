import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const navigate = useNavigate()
  const [dentista, setDentista] = useState({})
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  console.log(params)
  useEffect(() => {
      axios(url)
      .then(res => setDentista(res.data))
  }, [])
 
  return (
    <>
      <h1>Detail Dentist id {dentista.id}</h1>
      <h3>{dentista.name}</h3>
      <h5>{dentista.email}</h5>
      <h5>{dentista.phone}</h5>
      <h5>{dentista.website}</h5>
      <button onClick={() => navigate(-1)}>🔙</button>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail