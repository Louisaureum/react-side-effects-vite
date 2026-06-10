import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchJoke = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single'
      )

      if (response.ok === false) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      setJoke(data.joke || 'No joke available.')
    } catch (error) {
      console.error('Failed to fetch joke:', error)
      setError('Failed to load joke.')
      setJoke('')
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
      <JokeDisplay joke={joke} loading={loading} error={error} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
