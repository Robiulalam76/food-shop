import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-slate-300 py-4 w-full'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden ml-4">
                {
                    open ?
                        <XMarkIcon /> : <Bars3CenterLeftIcon />
                }
            </div>
            <div className={`bg-slate-300 flex flex-col mt-4 md:mt-0 mt-none align-center md:flex-row w-full md:flex md:justify-end md:pr-12 items-center absolute md:static duration-500 ease-in  ${open ? 'top-6' : 'top-[-150px]'}`}>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/foods'>Foods</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/about-us'>About Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefined'} to='/signup'>SignUp</NavLink>
            </div>
        </nav>


    );
};

export default Navbar;