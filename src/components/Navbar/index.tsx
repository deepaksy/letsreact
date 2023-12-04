import useTheme from '../../helpers/useTheme'
import Button from '../Button'
import './index.scss'
import ReactLogo from '../../assets/react.svg'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react'

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)
  const {isDark,toggleTheme} = useTheme()

  /** Handle Navbar sticky on scroll */
  const handleNavbarScroll = useCallback(() => {
    if(navRef.current!=null) {
      console.log(navRef.current.offsetTop);
      if(navRef.current?.offsetTop > 2){
        navRef.current.classList.add('sticky')
        console.log(`added sticky`);
      }
      else {
        navRef.current.classList.remove('sticky')
        console.log(`removed sticky`);
      }
    }
  },[])

  /**listen to scroll event */
  useLayoutEffect(() => {
    window.addEventListener('scroll',handleNavbarScroll)
    return () => window.removeEventListener('scroll',handleNavbarScroll)
  },[navRef])




  return (
    <nav ref={navRef} className='navbar-container'>
      <div className='navbar-left'>
        <img src={ReactLogo} alt='react-logo' className='react-logo' />
      </div>
      <div className='navbar-search-bar'>
        searchbar
      </div>
      <div className='navbar-right'>
      <Button  onClick={()=>toggleTheme()}>{isDark?'light':'dark'}</Button>
      </div>
    </nav>
  )
}

export default Navbar