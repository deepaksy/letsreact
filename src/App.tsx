import ClickCounter from './components/ClickCouner'
import { Link } from 'react-router-dom'
import ReactLogo  from './assets/react-logo.svg'

const App = () => {
  return (
    <div>
  
        <h1>Apps - {process.env.name}</h1>
        <ClickCounter/>
        <Link to={'/hello'}>hello</Link>
        <img src={ReactLogo} alt='react-logo' width={400} />
    </div>
  )
}

export default App