import React from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [list, setList] = useState([])
  const url = `https://jsonplaceholder.typicode.com/users` 

  useEffect(() => {
      axios(url)
      .then(res => setList(res.data))
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {list.map((item) => <Card key={item.id} item={item}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home






