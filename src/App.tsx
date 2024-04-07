import { Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {selectable: true, red: false}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
