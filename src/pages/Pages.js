import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components'
import Counter from './counter'
import TicTacToe from './tic-tac-toe'
import Timer from './timer'

const Pages = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={'Index'} />
      <Route path='counter' element={<Counter />} />
      <Route path='timer' element={<Timer />} />
      <Route path='tic-tac-toe' element={<TicTacToe />} />
      <Route path='*' element={'404'} />
    </Route>
  </Routes>
)

export default Pages
