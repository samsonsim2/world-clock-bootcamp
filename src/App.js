import React from 'react'
import logo from './logo.png'
import './App.css'
import WorldClock from './components/WorldClock'

function App() {
  return (
    <>
      <header className='hero-image'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>

      <div>
        <WorldClock
          clockData={[
            'America/Los_Angeles',
            'Europe/London',
            'Asia/Singapore',
            'Africa/Lagos',
          ]}
        />
      </div>
    </>
  )
}

export default App
