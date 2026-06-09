import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import BookImg from '../images/book-removebg-preview.png'

function Home() {
  return (
    <>
      <main className="px-24 pt-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-20">

          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl font-bold mb-2">
              Track your Books.
            </h1>

            <h1 className="text-5xl font-bold mb-6">
              Love your <span className="text-purple-800">reading</span>.
            </h1>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex gap-4">
              <NavLink
                to="/"
                className="bg-purple-800 text-white px-6 py-3 rounded-md"
              >
                Get Started For Free
              </NavLink>

              <NavLink
                to="/"
                className="border border-purple-800 text-purple-800 px-6 py-3 rounded-md"
              >
                Watch Demo
              </NavLink>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <img
              src={BookImg}
              alt="Books"
              className="max-w-lg w-full"
            />
          </div>

        </div>
      </main>

      <div className='px-24 pt-12'>
        <div id='cards' className='max-w-7xl mx-auto flex items-center justify-between gap-20'>
          <div id='card' className='p-10 border border-gray-100 rounded-2xl'>
            <h1 className="text-2xl font-bold mb-2">Organize</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet.sit amet.</p>
          </div>

          <div id='card' className='p-10 border border-gray-100 rounded-2xl'>
            <h1 className="text-2xl font-bold mb-2">Track Progress</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet.sit amet.</p>
          </div>

          <div id='card' className='p-10 border border-gray-100 rounded-2xl'>
            <h1 className="text-2xl font-bold mb-2">Discover</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet.sit amet.</p>
          </div>
        </div>


      </div>

    </>

  )
}

export default Home