import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.tiktok.com/@rufina.sistr?lang=ru-RU" target="_blank">
          <img src="./public/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=GNrdg3PzpJQ" target="_blank">
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8GnprWrZFtl2Wu9JAFK94eUl0oLjHlbGiEEiRSSH&s" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> My + Tiktok</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          поставь лайк {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
