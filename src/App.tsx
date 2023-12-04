import { Link } from 'react-router-dom'
import ReactLogo  from './assets/react-logo.svg'
import { Fragment } from 'react'
import './App.scss'

const App = () => {
  return (
    <Fragment>
      <div className='sec1'>
      <div className='sec1-left'>
        <img src={ReactLogo} alt='react-logo' width={400} />
      </div>
      <div className='sec1-right'>
        <h1>React A beautiful javascript framework for building user-interface</h1>
      </div>
      </div>
      <div style={{
        minHeight:'100vh'
      }}>
        hi
      </div>
      <div style={{
        minHeight:'100vh'
      }}>
        hi
      </div>
      <div style={{
        minHeight:'100vh'
      }}>
        hi
      </div>
      <div style={{
        minHeight:'100vh'
      }}>
        hi
      </div>
    </Fragment>
  )
}

export default App