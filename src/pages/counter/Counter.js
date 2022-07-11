import { useState } from 'react'
import { Button } from '../../components'

const Action = ({ setCount }) => {
  const handleAdd = num => setCount(prev => prev + num)
  const handleSubtract = num => setCount(prev => prev - num)
  const handleClear = () => setCount(0)

  return (
    <>
      <Button onClick={() => handleAdd(1)}>+1</Button>
      <Button onClick={() => handleAdd(2)}>+2</Button>
      <Button onClick={() => handleAdd(3)}>+3</Button>
      <br />
      <Button onClick={() => handleSubtract(1)}>-1</Button>
      <Button onClick={() => handleSubtract(2)}>-2</Button>
      <Button onClick={() => handleSubtract(3)}>-3</Button>
      <br />
      <Button onClick={handleClear}>清空</Button>
    </>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>計數器</h1>
      <h2>Counter: {count}</h2>
      <Action setCount={setCount} />
    </>
  )
}

export default Counter
