import useTheme from '../../helpers/useTheme'
import Button from '../Button'
import './index.scss'
import ReactLogo from '../../assets/react.svg'

const Navbar = () => {
  const {isDark,toggleTheme} = useTheme()
  return (
    <nav className='navbar-container'>
      <div className='navbar-left'>
        <img src={ReactLogo} alt='react-logo' className='react-logo' />
      </div>
      <div>
        searchbar
      </div>
      <div className='navbar-right'>
      <Button  onClick={()=>toggleTheme()}>{isDark?'light':'dark'}</Button>
      </div>
    </nav>
  )
}

export default Navbar