import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Items from './components/Items/Items'
import Blog from './components/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Items></Items>
      <Blog></Blog>
    </div>
  )
}

export default App
