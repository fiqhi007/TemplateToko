import Search from './Search'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar  bg-customWhite py-4 border-b-4 border-black'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='logo'>
            <h1>Logo</h1>
            </div>
            <div className='menu'>
            <ul className='flex'>
                <li className='px-4'>Home</li>
                <li className='px-4'>About</li>
                <li className='px-4'>Services</li>
                <li className='px-4'>Contact</li>
            </ul>
            
            </div>
            <Search />
        </div>

    </div>
  

    </>
  )
}

export default Navbar