import { useState } from 'react'
import { Button } from '../../components'

const Timer = () => {
  const [timer, setTimer] = useState(0)
  const [holder, setHolder] = useState(null)

  const handleClick = () => {
    if (holder) {
      clearInterval(holder)
      setHolder(null)
      return
    }

    setHolder(
      setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    )
  }

  return (
    <>
      <h1>碼表</h1>
      <h2>Timer: {timer} 秒</h2>
      <Button onClick={handleClick} disabled={Boolean(holder)}>
        開始
      </Button>
      <Button onClick={handleClick} disabled={!Boolean(holder)}>
        暫停
      </Button>
      <Button onClick={() => setTimer(0)}>清空</Button>
    </>
  )
}

export default Timer
