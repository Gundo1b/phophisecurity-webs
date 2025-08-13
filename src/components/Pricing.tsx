import React from 'react';
import { Star, Clock, Users } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Grade A',
      price: 'R 800.00',
      duration: '1 Week',
      icon: <Star className="w-8 h-8" />,
      features: ['Professional Security Training', 'Certification Included', 'Job Placement Assistance', '24/7 Support']
    },
    {
      name: 'Grade B',
      price: 'R 800.00',
      duration: '1 Week',
      icon: <Users className="w-8 h-8" />,
      features: ['Basic Security Training', 'Certification Included', 'Practical Training', 'Career Guidance']
    },
    {
      name: 'Grade B and A',
      price: 'R 1300.00',
      duration: '2 Weeks',
      popular: true,
      icon: <Clock className="w-8 h-8" />,
      features: ['Combined Training Package', 'Both Certifications', 'Extended Training', 'Priority Support']
    },
    {
      name: 'EDC',
      price: 'R 1600.00',
      duration: '2 Weeks',
      icon: <Star className="w-8 h-8" />,
      features: ['Elementary Development Course', 'Advanced Training', 'Specialized Skills', 'Certificate']
    },
    {
      name: 'EDC and B',
      price: 'R 2500.00',
      duration: '3 Weeks',
      icon: <Users className="w-8 h-8" />,
      features: ['Comprehensive Package', 'Multiple Certifications', 'Extended Duration', 'Job Guarantee']
    },
    {
      name: 'EDCBA',
      price: 'R 3000.00',
      duration: '4 Weeks',
      icon: <Clock className="w-8 h-8" />,
      features: ['Complete Training Program', 'All Certifications', 'Maximum Duration', 'Full Support']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Training Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive security training programs. All courses include certification and job placement assistance.
          </p>
          <div className="mt-6 inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full">
            <span className="font-bold">BLACK FRIDAY SPECIAL: 31.5% OFF until November 29, 2024</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all hover:shadow-xl hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-teal-500 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6">
                  {pkg.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-teal-600 mb-2">{pkg.price}</div>
                <p className="text-gray-600 mb-8">Duration: {pkg.duration}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-colors ${
                  pkg.popular
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-teal-100 hover:text-teal-700'
                }`}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}