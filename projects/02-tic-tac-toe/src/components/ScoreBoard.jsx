export function ScoreBoard ({ scoreX, scoreO }) {
  return (
    <div className='score-board'>
      <div>{scoreX}</div>
      <div>{scoreO}</div>
    </div>
  )
}
