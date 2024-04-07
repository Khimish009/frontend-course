import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {selectable: true, red: false}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  )
}
