const JokeDisplay = ({ joke, loading, error }) => {
  if (loading) {
    return <div className="joke-container">Loading...</div>
  }

  if (error) {
    return <div className="joke-container">{error}</div>
  }

  return <div className="joke-container">{joke || 'No joke available.'}</div>
}

export default JokeDisplay
