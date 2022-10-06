import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-slate-300 py-3 w-full'>
            <div onClick={() => setOpen(!open)} className=" w-9 md:hidden ml-4 text-blue-800">
                {
                    open ?
                        <XMarkIcon /> : <Bars3CenterLeftIcon />
                }
            </div>
            <div className={`bg-slate-300 flex flex-col mt-5 md:mt-0 mt-none align-center md:flex-row w-full md:flex md:justify-end md:pr-12 items-center absolute md:static duration-500 ease-in  ${open ? 'top-6' : 'top-[-150px]'}`}>
                <Link to='/home' className='text-blue-600 font-bold text-2xl grow' >FOOD SHOP</Link>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/home'>Home</NavLink>
                {/* <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/foods'>Foods</NavLink> */}
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/about-us'>About Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/signup'>SignUp</NavLink>
            </div>
        </nav>


    );
};

export default Navbar;