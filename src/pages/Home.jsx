import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
        <div className='text-center px-40 py-50 text-3xl'>
        <h1 className='text-7xl p-10 pt-20'>Hi, We are soilbuddy</h1>
        <div className='p-10 px-10 mx-20'><p className='' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis consequatur, ipsum quisquam facere, a aperiam libero vel aliquid odit dicta enim sequi voluptate tenetur saepe est similique eos dignissimos!</p>
        </div></div>
      <div className='grid p-10 py-10 space-y-7'>
        <section id='Test' className='grid col-1 justify-center space-y-12 w-auto'>
        <Link to="/form"><Card/></Link> 
        <Card />
        </section>
      </div>
    </div>
  )
}

export default Home