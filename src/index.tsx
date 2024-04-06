import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/index.scss'

render(
    <Router>
      <App />
    </Router>,
    document.querySelector('#root')
)
