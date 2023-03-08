import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si x u o ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos todas las posiciones
  // si no hay espacios vacios
  // empate
  return newBoard.every((square) => square !== null)
}
