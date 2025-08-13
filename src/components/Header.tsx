import React, { useState } from 'react';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Top bar */}
      <div className="bg-teal-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>079 435 0000 / 015 023 1437</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>phophisec@gmail.com</span>
            </div>
          </div>
          <div className="text-xs">24/7 SERVICE EVERYDAY</div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
              <Shield className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">PHOPHI SECURITY SERVICES</h1>
              <p className="text-sm text-teal-700 font-semibold">AND TRAINING</p>
              <p className="text-xs text-gray-600">WE WILL ALWAYS BE WATCHING</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-700 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-teal-700 transition-colors">Services</a>
            <a href="#training" className="text-gray-700 hover:text-teal-700 transition-colors">Training</a>
            <a href="#pricing" className="text-gray-700 hover:text-teal-700 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-700 transition-colors">Contact</a>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-teal-700 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-teal-700 transition-colors">Services</a>
              <a href="#training" className="text-gray-700 hover:text-teal-700 transition-colors">Training</a>
              <a href="#pricing" className="text-gray-700 hover:text-teal-700 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-700 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}