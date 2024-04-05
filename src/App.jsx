import { useState } from 'react'

function App() {
  const [player, setPlayer] = useState('X')
  const [currentMove, setCurrentMove] = useState(0)
  const [history, setHistory] = useState([Array(9).fill(null)])

  const makeMove = (cell) => {
    const nextSteps = history[currentMove].slice()

    if (nextSteps[cell]) {
      return
    }

    nextSteps[cell] = player

    setPlayer(player === 'X' ? 'O' : 'X')
    setCurrentMove(currentMove + 1)
    setHistory([...history.slice(0, currentMove + 1), nextSteps])
  }

  return (
    <>
      <h1>Tic-tac-toe</h1>
      <h2>Next player: {player}</h2>

      <table border={1}>
        <tbody>
          <tr>
            <td onClick={() => makeMove(0)}>{history[currentMove][0]}</td>
            <td onClick={() => makeMove(1)}>{history[currentMove][1]}</td>
            <td onClick={() => makeMove(2)}>{history[currentMove][2]}</td>
          </tr>
          <tr>
            <td onClick={() => makeMove(3)}>{history[currentMove][3]}</td>
            <td onClick={() => makeMove(4)}>{history[currentMove][4]}</td>
            <td onClick={() => makeMove(5)}>{history[currentMove][5]}</td>
          </tr>
          <tr>
            <td onClick={() => makeMove(6)}>{history[currentMove][6]}</td>
            <td onClick={() => makeMove(7)}>{history[currentMove][7]}</td>
            <td onClick={() => makeMove(8)}>{history[currentMove][8]}</td>
          </tr>
        </tbody>
      </table>
    </>)
}

export default App
