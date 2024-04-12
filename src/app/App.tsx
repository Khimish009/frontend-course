import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {selectable: true, red: false}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Change theme</button>
      <AppRouter />
    </div>
  )
}
