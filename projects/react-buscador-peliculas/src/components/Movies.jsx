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

export function Movies ({ movies, nextPage, prevPage, page }) {
  const hasMovies = movies?.length > 0

  const handleNextClick = () => {
    nextPage()
  }

  const handlePrevClick = () => {
    prevPage()
  }

  return (
    hasMovies
      ? (
        <>
          <ListOfMovies movies={movies} />
          <div className='buttons-page'>
            <button disabled={page === 1} onClick={handlePrevClick}> {page === 1 ? '' : page - 1} </button>
            <button disabled>{page}</button>
            <button onClick={handleNextClick}> {page + 1} </button>
          </div>
        </>
        )
      : <NoMoviesResult />
  )
}
