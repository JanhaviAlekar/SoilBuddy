import React from 'react'
import { FaSeedling } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <>

            <footer className="bg-gradient-to-l from-green-700 to-lime-500 h-[25h]  text-white shadow dark:bg-gray-700 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <NavLink to="/" className="text-2xl flex items-center mb-4 sm:mb-0">
                            <FaSeedling />
                            <span className="pl-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SoilBuddy</span>
                        </NavLink>
                        <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-white sm:mb-0 dark:text-white0">
                            <li>
                                <NavLink to='/about' className="mr-4 hover:underline md:mr-6 ">About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/' className="mr-4 hover:underline md:mr-6">Privacy Policy</NavLink>
                            </li>

                            <li>
                                <NavLink to='/contact' className="hover:underline">Contact</NavLink>
                            </li>
                        </ul>
                    </div>                    <span className="block text-base pt-4 text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" className="hover:underline">SoilBuddy™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </>
    )
}

export default Footer