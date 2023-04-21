import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import Form  from './components/Form'
import { Link , Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Forms from './pages/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Forms/>}/>

        </Routes>
        <Footer/>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
