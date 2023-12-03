import 
{
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'
import App from './App'

import Hello from './Hello.mdx'
import Navbar from './components/Navbar'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/hello' element={<Hello/>} />
        </Routes>   
    </Router>
  )
}

export default AppRouter