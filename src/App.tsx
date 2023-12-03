import ClickCounter from './components/ClickCouner'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
  
        <h1>Apps - {process.env.name}</h1>
        <ClickCounter/>
        <Link to={'/hello'}>hello</Link>
    </div>
  )
}

export default App