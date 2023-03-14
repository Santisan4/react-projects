import { useCallback, useState } from 'react'
import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

export function App () {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 300)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <h1>Movie Finder</h1>

      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            value={search}
            name='query'
            placeholder='Avengers, Marvel, Matrix...'
            onChange={handleChange}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  )
}
