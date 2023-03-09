import { useState } from 'react'

import confetti from 'canvas-confetti'
import './App.css'

import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index'
import { ScoreBoard } from './components/ScoreBoard'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')

    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const [count, setCount] = useState(() => {
    const scoresFromLocalStorage = window.localStorage.getItem('scores')

    return scoresFromLocalStorage
      ? JSON.parse(scoresFromLocalStorage)
      : { X: 0, O: 0 }
  })

  const updateBoard = (index) => {
    // no permitir sobreescribir
    if (board[index] || winner) return
    // actualizar tablero
    const newBoard = structuredClone(board)
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiamos turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // aca guardamos partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setCount({
        ...count,
        [newWinner]: count[newWinner] + 1
      })
      // guardamos puntos en localStorage
      window.localStorage.setItem('scores', JSON.stringify({
        ...count,
        [newWinner]: count[newWinner] + 1
      }))
      setWinner(newWinner)
      setTimeout(resetGame, 2000)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
      setTimeout(resetGame, 2000)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const resetCounter = () => {
    setCount({
      X: 0,
      O: 0
    })

    window.localStorage.removeItem('scores')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      {/* <button onClick={resetGame}>Empezar </button> */}
      <button onClick={resetCounter}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <ScoreBoard scoreO={count.O} scoreX={count.X} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App
