'use client';

import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., validate the inputs, send to backend)
    console.log("Username:", username, "Email:", email, "Password:", password, "Confirm Password:", confirmPassword, "Gender:", gender, "Date of Birth:", dob);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96"> {/* Set width to 24rem (384px) */}
        <h2 className="text-3xl font-semibold text-center text-indigo-800 mb-8">Create Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-lg font-medium text-indigo-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-indigo-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-indigo-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-indigo-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-cyan-900 text-lg font-medium">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="dob" className="block text-lg font-medium text-cyan-900">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-indigo-700">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
