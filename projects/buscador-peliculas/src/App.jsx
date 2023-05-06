import { useState, useEffect, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInputRef = useRef(true)

  useEffect(() => {
    // Validamos que sea el primer intento de busqueda
    if (firstInputRef.current) {
      firstInputRef.current = search === ''
      return
    }

    // Validar que la busqueda no este vacia
    if (search === '') {
      setError('Debes ingresar un texto')
      return
    }

    if (search.length < 3) {
      setError('Debes ingresar al menos 3 caracteres')
      return
    }

    setError(null)

  }, [search])



  return { search, setSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} type="text" onChange={handleChange} value={search} placeholder="Avengers, Matrix, Marvel.." />
          <input type="checkbox" checked={sort} onChange={handleSort} />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red', margin: 0, marginLeft: '5px' }}>{error}</p>}
      </header>

      <main>
        {
          loading
            ? <p>Cargando...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
