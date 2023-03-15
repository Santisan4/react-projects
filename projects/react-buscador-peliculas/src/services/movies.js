const API_KEY = '15e94cba'

export const searchMovies = async ({ search, page = 1 }) => {
  if (search === '') return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
