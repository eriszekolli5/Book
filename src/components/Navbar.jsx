import React, { useEffect, useState } from "react"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <nav className='shadow-sm sticky top-0 z-50 bg-white'>
                <div className='flex justify-between items-center max-w-6xl mx-auto py-5 px-4'>

                    <Link to="/" className="text-2xl font-bold">
                        Book<span className='text-purple-800'>Tracker</span>
                    </Link>

                    <ul className="flex items-center gap-6">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/books">Books</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                        <li>
              <NavLink
                to="/login"
                className="bg-purple-800 text-white px-4 py-2 rounded-sm"
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register"
                className="bg-purple-800 text-white px-4 py-2 rounded-sm"
              >
                Get Started
              </NavLink>
            </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Navbar