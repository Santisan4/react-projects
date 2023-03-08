export function saveGameToStorage ({ board, turn }) {
  // guardar partida aqui
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export function resetGameStorage () {
  // borramos datos de localStorage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
