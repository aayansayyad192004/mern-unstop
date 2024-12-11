import React from 'react';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen">
      {/* About Unstop Section */}
      <div className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">About Unstop</h1>
        <p className="text-lg text-gray-700 mb-8">
          Unstop is a leading platform designed to connect individuals with competitions, challenges, and career opportunities. Our mission is to provide a space where users can discover a wide variety of contests, hackathons, and challenges that help them develop their skills and enhance their career prospects.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          With a focus on skill development and professional growth, Unstop offers a diverse range of opportunities in areas such as coding, product design, business strategy, and much more. Participants can not only showcase their talents but also gain recognition from top companies and peers.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Whether you're looking to test your skills, build a portfolio, or explore career opportunities, Unstop is here to help you on your journey. Join the community today and start discovering new challenges and career paths that align with your interests and expertise.
        </p>

        {/* Call to Action Section */}
        <div className="px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Join Unstop today to participate in top competitions and unlock exciting career opportunities.
          </p>
          <a
            href="/sign-in"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
