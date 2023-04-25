import { useState } from 'react'
import './App.css'

import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function App () {
  const [displayValue, setDisplayValue] = useState('0')
  const [firstValue, setFirstValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleButtonPress = (e) => {
    const buttonValue = e.target.value

    // Manejar números
    if (!isNaN(buttonValue)) {
      if (displayValue === '0' || waitingForSecondValue) {
        setDisplayValue(buttonValue)
        setWaitingForSecondValue(false)
      } else {
        setDisplayValue(displayValue + buttonValue)
      }
    }

    // Manejar operadores
    if (['+', '-', '*', '/'].includes(buttonValue)) {
      setOperator(buttonValue)
      setFirstValue(parseFloat(displayValue))
      setWaitingForSecondValue(true)
    }

    // Manejar el botón de igual
    if (buttonValue === '=') {
      const secondValue = parseFloat(displayValue)

      if (operator === '+') {
        setDisplayValue(firstValue + secondValue)
      } else if (operator === '-') {
        setDisplayValue(firstValue - secondValue)
      } else if (operator === '*') {
        setDisplayValue(firstValue * secondValue)
      } else if (operator === '/') {
        setDisplayValue(firstValue / secondValue)
      }

      setWaitingForSecondValue(true)
    }

    // Manejar el botón de borrar
    if (buttonValue === 'C') {
      setDisplayValue('0')
      setFirstValue(null)
      setOperator(null)
      setWaitingForSecondValue(false)
    }
  }

  return (
    <div className='container'>
      <main className={`calculator ${darkMode ? 'dark-mode' : ''}`}>
        <article className='display'>
          <div className='mode'>
            <p><RiSunLine className={`icon-mode ${darkMode ? 'disable' : 'active'} `} onClick={handleClickDarkMode} /></p>
            <p><RiMoonLine className={`icon-mode ${darkMode ? 'active' : 'disable'} `} onClick={handleClickDarkMode} /></p>
          </div>

          <input className={`input ${darkMode ? 'dark-mode' : ''}`} type='text' value={displayValue} readOnly />
        </article>

        <div className='board'>
          <button value='7' onClick={handleButtonPress}>7</button>
          <button value='8' onClick={handleButtonPress}>8</button>
          <button value='9' onClick={handleButtonPress}>9</button>
          <button value='+' onClick={handleButtonPress}>+</button>

          <button value='4' onClick={handleButtonPress}>4</button>
          <button value='5' onClick={handleButtonPress}>5</button>
          <button value='6' onClick={handleButtonPress}>6</button>
          <button value='-' onClick={handleButtonPress}>-</button>

          <button value='1' onClick={handleButtonPress}>1</button>
          <button value='2' onClick={handleButtonPress}>2</button>
          <button value='3' onClick={handleButtonPress}>3</button>
          <button value='*' onClick={handleButtonPress}>*</button>

          <button value='0' onClick={handleButtonPress}>0</button>
          <button value='=' onClick={handleButtonPress}> = </button>
          <button value='C' onClick={handleButtonPress}> C </button>
          <button value='/' onClick={handleButtonPress}>/</button>

        </div>

      </main>
    </div>
  )
}
