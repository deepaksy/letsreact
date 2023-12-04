import 
{
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'
import App from './App'

import About from './pages/About'
import Navbar from './components/Navbar'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/about' element={<About/>} />
        </Routes>   
    </Router>
  )
}

export default AppRouter