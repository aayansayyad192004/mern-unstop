import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">
          Welcome to Unstop
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Unstop is your one-stop platform to discover competitions, challenges, and career opportunities.
          Elevate your skills, participate in top contests, and unlock exciting professional growth.
        </p>
        <div className="flex justify-center space-x-6">
          {/* Replacing the Explore Competitions and Join Now buttons with a single Get Started button */}
          <Link 
            to="/sign-in" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Why Unstop?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Discover Opportunities</h3>
            <p className="text-gray-700">
              Participate in a wide range of contests, hackathons, and challenges designed to foster innovation and creativity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Showcase Your Talent</h3>
            <p className="text-gray-700">
              Build your portfolio by showcasing your achievements, and gain recognition from top companies and peers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Get Hired</h3>
            <p className="text-gray-700">
              Explore career opportunities, internships, and job referrals based on your performance and skills.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-indigo-50 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">What Our Users Say</h2>
        <div className="flex justify-center space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-gray-700 mb-4">
              "Unstop helped me find incredible opportunities that advanced my career. The platform is easy to use and full of great competitions."
            </p>
            <p className="font-semibold text-indigo-600">John Doe</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-gray-700 mb-4">
              "A perfect platform to connect with top companies and showcase my skills. The challenges helped me build my portfolio."
            </p>
            <p className="font-semibold text-indigo-600">Jane Smith</p>
            <p className="text-sm text-gray-500">Product Designer</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Join Unstop today to participate in top competitions and unlock career opportunities.
        </p>
        <Link
          to="/sign-in"
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Start Your Journey
        </Link>
      </div>
    </div>
  );
}
