import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state, dispatch} = useContextGlobal()
  const {doctorSelected} = state

  const navigate = useNavigate()
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`  

  useEffect(()=> {
    axios(url)
    .then(res => dispatch({type: 'GET_DOCTOR', payload: res.data}))
}, [])

  return (
    <>
      <h1>Detail Dentist id {doctorSelected.id}</h1>
      <h3>{doctorSelected.name}</h3>
      <h5>{doctorSelected.email}</h5>
      <h5>{doctorSelected.phone}</h5>
      <h5>{doctorSelected.website}</h5>
      <button onClick={() => navigate(-1)}>🔙</button>
      <button onClick={() => dispatch({type: 'ADD_FAV', payload: doctorSelected})}>⭐</button>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail