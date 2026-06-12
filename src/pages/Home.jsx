import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import BookImg from '../images/books.png'

function Home() {
  const [books, setBooks] = useState([]);

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
              className="min-w-50 w-full"
            />
          </div>

        </div>
      </main>

      <div className='px-24 pt-12'>
        <div id='cards' className='max-w-7xl mx-auto flex items-center justify-between gap-20'>
          <div id='card' className='p-10 border border-gray-300 rounded-2xl'>
            <h1 className="text-2xl font-bold mb-2">Organize</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet.sit amet.</p>
          </div>

          <div id='card' className='p-10 border border-gray-300 rounded-2xl'>
            <h1 className="text-2xl font-bold mb-2">Track Progress</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet.sit amet.</p>
          </div>

          <div id='card' className='p-10 border border-gray-300 rounded-2xl'>
            <h1 className="text-2xl font-bold mb-2">Discover</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet.sit amet.</p>
          </div>
        </div>


      </div>

      <section className="px-24 py-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
    <div>
      <h2 className="text-5xl font-bold text-purple-800">500+</h2>
      <p className="text-gray-500 mt-2">Books Added</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold text-purple-800">120+</h2>
      <p className="text-gray-500 mt-2">Active Readers</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold text-purple-800">2,000+</h2>
      <p className="text-gray-500 mt-2">Reading Sessions</p>
    </div>
  </div>
</section>

<section className="px-24 py-20">
  <div className="max-w-5xl mx-auto bg-purple-800 text-white rounded-3xl p-12 text-center">
    <h2 className="text-4xl font-bold mb-4">
      Ready to Start Reading?
    </h2>

    <p className="mb-8 text-lg">
      Organize your books and enjoy reading every day.
    </p>

    <NavLink
      to="/books"
      className="inline-block bg-white text-purple-800 px-6 py-3 rounded-md font-semibold"
    >
      Explore Books
    </NavLink>
  </div>
</section>


    </>

  )
}

export default Home