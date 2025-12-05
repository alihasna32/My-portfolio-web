import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '/Logo.png';
import { House, BriefcaseBusiness, Mail, UserRound } from 'lucide-react';

const Header = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
                <img src={Logo} className="w-12 h-12" alt="Logo" />
                <span className="text-2xl font-bold text-gray-800 dark:text-white">Ali Hasan</span>
            </div>

            {/* Desktop Menu - Visible on lg screens and up */}
            <nav className="hidden lg:flex">
                <ul className="flex items-center space-x-1">
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/">
                            <House   className='w-4' />    Home
                        </Link>
                    </li>
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/about') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/about">
                            <UserRound className='w-4' /> About
                        </Link>
                    </li>
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/portfolio') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/portfolio">
                            <BriefcaseBusiness className='w-4' /> Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/contact') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/contact">
                            <Mail className='w-4' /> Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile/Tablet Drawer - Visible on screens smaller than lg */}
            <div className="drawer drawer-end lg:hidden w-auto">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Button to open drawer */}
                    <label htmlFor="my-drawer-5" className="btn btn-ghost drawer-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 stroke-current"
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

                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-2">
                        {/* Close button inside drawer */}
                        <li className="self-end">
                            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="btn btn-sm btn-circle btn-ghost">
                                ✕
                            </label>
                        </li>
                        <li>
                            <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/">
                                <House className="w-4" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/about') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/about">
                                <UserRound className="w-4" /> About
                            </Link>
                        </li>
                        <li>
                            <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/portfolio') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/portfolio">
                                <BriefcaseBusiness className="w-4" /> Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${isActive('/contact') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`} to="/contact">
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
