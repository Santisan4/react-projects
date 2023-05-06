const API_KEY = '15e94cba'

export const searchMovies = async ({ search }) => {
  // Validamos que el parámetro search no esté vacío
  if (search === '') return

  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then((res) => res.json())
    .then((data) => {
      const movies = data.Search

      return movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }))
    })
    .catch((error) => {
      throw new Error('Error: movie not found! try with another title')
    })
}
