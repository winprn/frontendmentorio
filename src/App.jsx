import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header, Content } from './components'
import './App.scss'

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
    </div>
  )
}

export default App
