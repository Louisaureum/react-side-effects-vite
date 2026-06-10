import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchJoke = async () => {
    setLoading(true)

    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single'
      )
      const data = await response.json()

      setJoke(data.joke || 'No joke available.')
    } catch (error) {
      console.error('Failed to fetch joke:', error)
      setJoke('Failed to load joke.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
