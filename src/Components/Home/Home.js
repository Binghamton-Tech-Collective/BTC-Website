import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
            <div className="h-screen flex flex-col">
        {/* First quarter - Logo */}
        <div className="h-1/4 w-full bg-gray-100">
          <img 
            src="/BingTcExtended.jpg" 
            alt="BTC Logo" 
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* About Us section - now taller */}
        <div className="h-1/3 bg-gray-100 flex items-center">
          <div className="container mx-auto px-8 flex">
            <div className="w-2/3 pr-12">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Welcome to the Binghamton Tech Collective, a community of tech enthusiasts, developers, and innovators. We are dedicated to fostering a collaborative environment where individuals can learn, grow, and contribute to the tech community. Our mission is to create innovative products that positively impact the students at Binghamton University.
              </p>
              <Link to="/join" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 text-lg inline-flex items-center">
                Join Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="w-1/3">
              <img 
                src="/TeamPhotoPlaceholder.jpg" 
                alt="Our Team" 
                className="shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Remaining space */}
        <div className="flex-grow"></div>
      </div>
    </>
  )
}

export default Home
