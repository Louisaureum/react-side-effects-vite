const FetchButton = ({ fetchJoke }) => {
  return (
    <button className="fetch-button" onClick={fetchJoke}>
      New Joke
    </button>
  )
}

export default FetchButton
