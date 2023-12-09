import ReactLogo  from './assets/react-logo.svg'
import { Fragment } from 'react'
import './App.scss'

const App = () => {
  return (
    <Fragment>
      <section className='section'>
        <img src={ReactLogo} alt='react-logo' className='logo1' />
        <h1 className='tag'>A Javascript library for building mobile and single-page web user-interfaces</h1>
      </section>

      <section className='section block'>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </section>

      <section className='section block'>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
      </section>

      <section className='section block'>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
        <h1>Helloooo</h1>
      </section>
    </Fragment>
  )
}

export default App