function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={`Expect image of ${movie.title}`} />
            <p>Type: {movie.type}</p>
            <p>Year: {movie.year}</p>
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>No results found</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}
