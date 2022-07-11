import { NavLink, Outlet } from 'react-router-dom'

const MENU = [
  {
    title: '計數器',
    path: 'counter',
  },
  {
    title: '碼表',
    path: 'timer',
  },
  {
    title: '圈圈叉叉',
    path: 'tic-tac-toe',
  },
]

const Layout = () => (
  <>
    <header>
      <nav>
        <ol style={{ display: 'flex', padding: 0 }}>
          {MENU.map(({ title = '', path = '' }) => (
            <li key={path} style={{ marginLeft: 35 }}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ol>
      </nav>
    </header>
    <hr />
    <main>
      <Outlet />
    </main>
  </>
)

export default Layout
