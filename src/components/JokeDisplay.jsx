const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {loading ? 'Loading...' : joke}
    </div>
  )
}

export default JokeDisplay
