import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

export default function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {selectable: true, red: false}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}
