import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { loginUser } from '../services/auth';
import { NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
    setError("");
    loginUser(email, password)
    .then(() => {
      window.location.href = "/";
    }).catch((error) => {
      setError(error);
    })
  }

  return (
     <main className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-md">
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        Log in to BookTracker
      </h1>

      <p className="text-gray-600 text-center mb-8">
        Welcome back! Please log in to continue.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </span>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-gray-300 py-3 px-4"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </span>

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            type="password"
            placeholder="Enter your password"
            required
            className="w-full rounded-lg border border-gray-300 py-3 px-4"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-900 transition"
        >
          Log In
        </button>

       
          <NavLink
            to="/register"
            className="text-purple-800 font-semibold"
          >
            Register
          </NavLink>
        
      </form>
    </div>
  </div>
</main>
  )
}

export default Login