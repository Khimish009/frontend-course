import { Routes, Route, Link } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { AboutPage } from './pages/AboutPage/AboutPage'

export default function App() {
  return (
    <div className="app">
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  )
}
