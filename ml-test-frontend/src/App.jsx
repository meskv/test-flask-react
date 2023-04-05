import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:5000'

import './App.css'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(() => {
    axios.get(`${baseUrl}/flask/hello`).then((response) => {
      console.log('Success:', response)
      setGetMessage(response.data)
    }).catch((error) => {
      console.error('Error:', error)
    })
  }, [])


  return (
    <div className="App">
      <h1>Flask + React</h1>
      <h2>GET /Flask/hello Api</h2>

      <div>{getMessage.status === 'SUCCESS' ?
        <h3>{getMessage.message}</h3>
        :
        <h3>LOADING</h3>}
      </div>
    </div>
  )
}

export default App
