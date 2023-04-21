import React from 'react'
import Records from '../db.json'



const Form = () => {
  
  Records.map(Record => {
  
  return (
    <>
    <div className='m-20 p-20 '>
    <label for="countries" className="block mb-2 text-sm font-medium text-white dark:text-black">Select your country</label>
    <select id="countries" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option>{record.state}</option>
      <option>France</option>
      <option>Germany</option>
    </select>
    </div>
    </>
  )
})
}

export default Form