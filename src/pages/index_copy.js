import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from 'react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Homes() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  function encrypt(text, key) {
    return [...text].map((x, i) => 
      (x.codePointAt() ^ key.charCodeAt(i % key.length) % 255)
       .toString(16)
       .padStart(2,"0")
     ).join('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email };

    // Here you can handle the form submission, e.g., send to an API
    console.log(formData);

    let enc = encrypt(name, "Passphrase");
    let url = "https://rizqy-tradersfamily.github.io/?" + enc; 

    alert("encrypted url:" + url);

    // Reset form fields
    setName('');
    setEmail('');
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Namas
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
