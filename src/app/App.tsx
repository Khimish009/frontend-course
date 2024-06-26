import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import {Sidebar} from "widgets/Sidebar";

export default function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {selectable: true, red: false}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
