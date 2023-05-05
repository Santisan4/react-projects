import './App.css'

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type="text" placeholder='Avengers, Matrix, Marvel...' />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <p>Aca van las peliculas</p>
      </main>
    </div>
  )
}

export default App
