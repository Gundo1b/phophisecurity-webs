import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Professional Security Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Grade A and B Security Training and Services. Comprehensive protection solutions for your peace of mind.
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6" />
                <span className="text-lg font-semibold">24/7 Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">Certified Training</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Get Quote Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-teal-700 transition-all">
                View Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Security Guard"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm">HOURS SERVICE</div>
                <div className="text-xs">EVERYDAY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}