import React from 'react'
import Navbar from '../components/Navbar'
import BookImg from '../images/books.png'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className='px-60 pt-10 text-center'>
      <h1 className=' text-center text-5xl font-bold mb-2'>About </h1>
      <div id="section-one" className='flex flex-col md:flex-row gap-10 items-center'>
        <div id='left-content' className='w-full'>
          <img
            src={BookImg}
            alt="Books"
            className="min-w-50 w-full"
          />
        </div>
        <div id="right-content" className='w-full'>
          <h1 className='text-purple-800 text-5xl font-bold mb-2'>About Books</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium reiciendis eum debitis provident aspernatur cupiditate! Laudantium voluptatem reiciendis eos reprehenderit deleniti consequatur vero tempora ipsum animi veniam saepe quasi odio adipisci incidunt ad ipsam ullam, laborum iure magnam. Quia ullam assumenda laudantium error deserunt culpa maxime consectetur consequatur iure?</p>

        </div>
      </div>
      <NavLink
  to="/contact"
  className="bg-purple-800 text-white px-4 py-2 rounded-sm "
>
  Get in touch
</NavLink>
    </div>
  )
}

export default About