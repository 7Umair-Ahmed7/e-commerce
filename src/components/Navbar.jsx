import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = ({handleSearch}) => {
    return (
        <nav className=' flex justify-between items-center bg-[#4C4CFA] px-4 py-2 h-[12vh]'>
            <div className="logo font-bold text-xl">E-COMMERCE</div>
            <div className='flex items-center justify-between gap-4'>
                <input onChange={handleSearch} className='bg-transparent px-2 py-1 border border-black rounded-md' type="text" placeholder='Search products' />
                <ul className='flex items-center justify-center gap-2'>
                    <NavLink to="/" className={({isActive})=>`${isActive ? "font-semibold" : ""} cursor-pointer hover:font-semibold`}>Products</NavLink>
                    <NavLink to="/cart" className={({isActive})=>`${isActive ? "font-semibold" : ""} cursor-pointer hover:font-semibold`}>Cart</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
