import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import AddProduct from './pages/AddBook'
import Dashboard from './pages/Dashboard'
import Porduct from './pages/Porduct'
import AddBook from './pages/AddBook'
import ReadingBook from './pages/ReadingBook'
import Footer from './components/Footer'

function App() {

  return (
    <>
    

<Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Porduct />} />
        <Route path="/reading/:id" element={<ReadingBook />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
