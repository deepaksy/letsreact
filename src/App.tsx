import React from 'react'
import ClickCounter from './components/ClickCouner'

const App = () => {
  return (
    <div>
        <h1>Apps - {process.env.name}</h1>
        <ClickCounter/>
    </div>
  )
}

export default App