import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Countdown from './components/Countdown'
import Invitation from './components/Invitation'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Guestbook from './components/Guestbook'
import AccountInfo from './components/AccountInfo'
import RSVP from './components/RSVP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header/>
        <Countdown/>
        <Invitation/>
        <Gallery/>
        <Location/>
        <Guestbook/>
        <AccountInfo/>
        <RSVP/>
    </div>
  )
}

export default App
