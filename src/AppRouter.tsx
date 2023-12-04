import 
{
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'
import App from './App'

import About from './pages/About'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import DocLayout from './components/DocLayout'
import Test from './pages/Test'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <DocLayout>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/docs' element={<Homepage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/test' element={<Test/>} />
        </Routes>   
        </DocLayout>
    </Router>
  )
}

export default AppRouter