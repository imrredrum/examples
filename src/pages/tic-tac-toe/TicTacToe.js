import { useState } from 'react'
import { calculateWinner } from '../../utils/helpers'
import './TicTacToe.css'

const Square = ({ value = 0, onClick = () => {} }) => (
  <button className='square' onClick={onClick}>
    {value}
  </button>
)

const Board = ({ squares, handleClick }) => (
  <div>
    {Array(3)
      .fill(null)
      .map((_, rowIndex) => (
        <div key={rowIndex} className='board-row'>
          {Array(3)
            .fill(null)
            .map((_, columnIndex) => (
              <Square
                key={rowIndex * 3 + columnIndex}
                value={squares[rowIndex * 3 + columnIndex]}
                onClick={() => handleClick(rowIndex * 3 + columnIndex)}
              />
            ))}
        </div>
      ))}
  </div>
)

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [step, setStep] = useState(0)
  const [isXNext, setIsXNext] = useState(true)

  const handleClick = i => {
    const newHistory = history.slice(0, step + 1)
    const current = newHistory[newHistory.length - 1]
    const newSquares = current.squares.slice()

    if (calculateWinner(newSquares) || newSquares[i]) return

    newSquares[i] = isXNext ? 'X' : 'O'

    setHistory(
      newHistory.concat([
        {
          squares: newSquares,
        },
      ])
    )
    setStep(newHistory.length)
    setIsXNext(prev => !prev)
  }

  const jumpTo = step => {
    setStep(step)
    setIsXNext(step % 2 === 0)
  }

  const current = history[step].squares
  const winner = calculateWinner(current)

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current} handleClick={handleClick} />
      </div>
      <div className='game-info'>
        <div>{winner ? `勝者: ${winner}` : `輪到: ${isXNext ? 'X' : 'O'}`}</div>
        <ol>
          {history.map((_, index) => (
            <li key={index}>
              <button onClick={() => jumpTo(index)}>
                {index ? `回到第 ${index} 步` : '重頭開始'}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Game
