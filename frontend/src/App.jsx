import { useState } from 'react'
function home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
function about() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
function contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}
function App() {
  const [page, setPage] = useState('home')
  return (
    <div>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </nav>
      {page === 'home' && <home />}
      {page === 'about' && <about />}
      {page === 'contact' && <contact />}
    </div>
  )
}
export default App
