import { useEffect, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

const INITIAL_PAGE = 1

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [page, setPage] = useState(INITIAL_PAGE)
  const previusSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async () => {
      if (search === previusSearch.current) return
      try {
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }, [search])

  useEffect(() => {
    searchMovies({ search, page })
      .then(newMoviesPage => {
        setMovies(newMoviesPage)
      })
  }, [search, page, setMovies])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, setPage, page }
}
