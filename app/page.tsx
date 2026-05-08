import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Transform Your Property with Professional Pressure Washing</h1>
        <h2 className="text-2xl mt-2">Expert Exterior Cleaning for Homes and Businesses</h2>
        <p className="mt-4 text-lg font-semibold">
          <a href="#cta" className="text-white bg-blue-600 px-4 py-2 rounded">Get Your Same-Day Quote Today!</a>
        </p>
      </header>

      <section className="w-full max-w-4xl text-center mb-10">
        <h3 className="text-3xl font-bold mb-5">Our Services</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="p-4 bg-white shadow rounded">Residential Pressure Washing</li>
          <li className="p-4 bg-white shadow rounded">Commercial Pressure Washing</li>
          <li className="p-4 bg-white shadow rounded">Deck and Patio Cleaning</li>
          <li className="p-4 bg-white shadow rounded">Driveway and Sidewalk Washing</li>
          <li className="p-4 bg-white shadow rounded">Gutter Cleaning</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl text-center mb-10">
        <h3 className="text-3xl font-bold mb-5">Why Choose Us?</h3>
        <ul className="list-disc list-inside">
          <li>Licensed and Insured Professionals</li>
          <li>Fast and Efficient Service</li>
          <li>Eco-Friendly Cleaning Solutions</li>
          <li>Satisfaction Guaranteed</li>
        </ul>
      </section>

      <section id="cta" className="w-full max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-5">Get Started Today!</h3>
        <p className="mb-4">Contact us now for a quick quote!</p>
        <a href="#" className="text-white bg-blue-600 px-4 py-2 rounded">Request a Quote</a>
      </section>
    </div>
  );
};

export default HomePage;
