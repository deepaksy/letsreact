import 
{
BrowserRouter as Router,
Routes,
Route,
} from 'react-router-dom'
import App from './App'

import About from './pages/About'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import Grid from './pages/Grid'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Layout>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/docs' element={<Homepage/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/test' element={<Test/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/grid' element={<Grid/>} />
        </Routes>   
        </Layout>
    </Router>
  )
}

export default AppRouter