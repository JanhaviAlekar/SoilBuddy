import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Navbar />
       <div className='text-center px-40 text-3xl'>
        <h1 className='text-7xl p-5'>Hi, We are soilbuddy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis consequatur, ipsum quisquam facere, a aperiam libero vel aliquid odit dicta enim sequi voluptate tenetur saepe est similique eos dignissimos!</p>
       </div>
      <div className='grid p-10 py-10 space-y-7'>
        <section id='Test' className='grid col-1 justify-center space-y-7 w-auto'> 
        <Card />
        <Card />
        </section>
        
      </div>
      <Footer/>
    </div>
  )
}

export default App
