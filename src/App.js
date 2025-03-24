import {Router, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Map from './components/Map'

import './App.css'

const App = () => (
  <Router>
  
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/map" component={Map} />
  
  </Router>
)

export default App
