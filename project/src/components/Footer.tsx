import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:contact@stylestore.com" className="flex items-center space-x-2 hover:text-gray-300">
                <Mail className="h-5 w-5" />
                <span>contact@stylestore.com</span>
              </a>
              <a href="https://instagram.com/stylestore" className="flex items-center space-x-2 hover:text-gray-300">
                <Instagram className="h-5 w-5" />
                <span>@stylestore</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/terms" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/shipping" className="hover:text-gray-300">Shipping Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get special offers and updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} StyleStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}