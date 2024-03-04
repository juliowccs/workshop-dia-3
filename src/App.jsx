import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((Response) => Response.json())
    .then((data) => setData(data.results))
    .catch((error) => console.log(error))
  })

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className='flex'>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image}></img>
            <p>Gender - {item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  )}
export default App

