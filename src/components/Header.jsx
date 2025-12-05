import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '/Logo.png';
import { House, BriefcaseBusiness, Mail, UserRound } from 'lucide-react';

const Header = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const drawerRef = useRef(null);

    const closeDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = false;
        }
    };

    return (
        <header className="flex justify-between items-center mb-8 bg-gray-900/30 backdrop-blur-md border border-white/10 shadow-lg px-6 py-1.5 rounded-lg max-sm:px-2 max-sm:py-1 max-sm:h-12 sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2">
                <img src={Logo} className="w-12 h-12 max-sm:w-10 max-sm:h-10" alt="Logo" />
                <span className="text-2xl font-bold text-white max-sm:text-xl">Ali Hasan</span>
            </Link>

            {/* Desktop Menu - Visible on lg screens and up */}
            <nav className="hidden lg:flex">
                <ul className="flex items-center space-x-1">
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/">
                            <House className='w-4' />    Home
                        </Link>
                    </li>
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/about') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/about">
                            <UserRound className='w-4' /> About
                        </Link>
                    </li>
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/portfolio') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/portfolio">
                            <BriefcaseBusiness className='w-4' /> Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/contact') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/contact">
                            <Mail className='w-4' /> Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile/Tablet Drawer - Visible on screens smaller than lg */}
            <div className="drawer drawer-end lg:hidden w-auto">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" ref={drawerRef} />
                <div className="drawer-content">
                    {/* Button to open drawer */}
                    <label htmlFor="my-drawer-5" className="btn btn-ghost drawer-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 stroke-current text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                </div>

                <div className="drawer-side z-50 ">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gray-900/30 backdrop-blur-md border border-white/10 shadow-lg text-base-content flex flex-col gap-2">
                        {/* Close button inside drawer */}
                        <li className="self-end right-5 bottom-0.5">
                            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="btn btn-sm btn-circle btn-ghost text-white bg-error">
                                ✕
                            </label>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/">
                                <House className="w-4" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/about') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/about">
                                <UserRound className="w-4" /> About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/portfolio') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/portfolio">
                                <BriefcaseBusiness className="w-4" /> Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link onClick={closeDrawer} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary ${isActive('/contact') ? 'bg-primary text-white' : 'text-gray-300'}`} to="/contact">
                                <Mail className="w-4" /> Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
