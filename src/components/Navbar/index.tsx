import useTheme from '../../helpers/useTheme'
import Button from '../Button'
import './index.scss'

const Navbar = () => {
  const {isDark,toggleTheme} = useTheme()
  return (
    <nav>
      <Button onClick={()=>toggleTheme()}>{isDark?'light':'dark'}</Button>
    </nav>
  )
}

export default Navbar