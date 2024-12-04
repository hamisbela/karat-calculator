import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>Email: support@karatcalculator.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>We provide comprehensive bitwise operation calculations for developers and computer science enthusiasts.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Bitwise Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}