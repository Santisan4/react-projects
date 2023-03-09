import { Square } from './Square'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Tie' : 'Winner'

  const winnerClassName = winner === 'X'
    ? 'win x'
    : 'win o'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className={winnerClassName}>
          {winner && <Square>{winner}</Square>}
        </header>

        {/* <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer> */}
      </div>
    </section>
  )
}
