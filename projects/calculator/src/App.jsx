import { useState } from 'react'
import './App.css'

import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function App () {
  const [result, setResult] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult('')
  }

  const backSpace = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString())
    } catch {
      setResult('Error')
    }
  }

  const handleClickBrand = () => {
    window.alert('Hecho por santidev')
  }

  return (
    <div className='container'>
      <main className={`calculator ${darkMode ? 'dark-mode' : ''}`}>
        <article className='display'>
          <div className='mode'>
            <p><RiSunLine className={`icon-mode ${darkMode ? 'disable' : 'active'} `} onClick={handleClickDarkMode} /></p>
            <p><RiMoonLine className={`icon-mode ${darkMode ? 'active' : 'disable'} `} onClick={handleClickDarkMode} /></p>
          </div>

          <p className={`numbers ${darkMode ? 'input-dark' : ''}`}>
            {result}
          </p>
        </article>

        <div className='board'>

          <button onClick={clear} id='clear'>C</button>
          <button onClick={backSpace} id='backspace'>CE</button>
          <button name='/' onClick={handleClick}> / </button>
          <button name='*' onClick={handleClick}> * </button>
          <button name='7' onClick={handleClick}> 7 </button>
          <button name='8' onClick={handleClick}> 8 </button>
          <button name='9' onClick={handleClick}> 9 </button>
          <button name='+' onClick={handleClick}> + </button>
          <button name='4' onClick={handleClick}> 4 </button>
          <button name='5' onClick={handleClick}> 5 </button>
          <button name='6' onClick={handleClick}> 6 </button>
          <button name='-' onClick={handleClick}> - </button>
          <button name='1' onClick={handleClick}> 1 </button>
          <button name='2' onClick={handleClick}> 2 </button>
          <button name='3' onClick={handleClick}> 3 </button>
          <button onClick={calculate} id='result'> = </button>
          <button name='.' onClick={handleClick}> . </button>
          <button name='0' onClick={handleClick}> 0 </button>
          <button onClick={handleClickBrand}>By</button>
          <button onClick={handleClickBrand}>SD</button>

        </div>

      </main>
    </div>
  )
}
