import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please fill all the fields");
      return
    }

    if (!email) {
      setError("Please fill all the fields");
      return
    }

    if (!password) {
      setError("Please fill all the fields");
      return
    }

    if (!confirmPassword) {
      setError("Please fill all the fields");
      return
    }

    registerUser({ fullName, email, password, confirmPassword }).then((result) => {
      console.log(result);
      navigate('/login');
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-md">
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        Create your Account
      </h1>

      <p className="text-gray-600 text-center mb-8">
        Start tracking your reading journey.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <p className="rounded-lg bg-red-100 text-red-600 p-3 text-sm">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>

          <input
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setError("");
            }}
            minLength={3}
            required
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 py-3 px-4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 py-3 px-4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            minLength={6}
            required
            type="password"
            placeholder="Create a password"
            className="w-full rounded-lg border border-gray-300 py-3 px-4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>

          <input
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
            minLength={6}
            required
            type="password"
            placeholder="Confirm your password"
            className="w-full rounded-lg border border-gray-300 py-3 px-4"
          />
        </div>

        {confirmPassword && password !== confirmPassword && (
          <p className="text-red-500 text-sm">
            Passwords do not match
          </p>
        )}

        <button
          disabled={password !== confirmPassword}
          type="submit"
          className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-900 disabled:bg-gray-400"
        >
          Register
        </button>

        
          <NavLink
            to="/login"
            className="text-purple-800 font-semibold"
          >
            Log In
          </NavLink>
      </form>
    </div>
  </div>
</main>
  );
}

export default Register