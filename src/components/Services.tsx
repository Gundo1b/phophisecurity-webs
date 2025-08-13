import React from 'react';
import { Shield, Eye, Users, AlarmPlus as Alarm, Camera, FileCheck, UserCheck, Building } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Services',
      description: 'Professional security personnel for all your protection needs'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guarding',
      description: 'Trained security guards for residential and commercial properties'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Access Control',
      description: 'Advanced access control systems and personnel management'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Event Management',
      description: 'Complete security solutions for events and gatherings'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Armed Response',
      description: 'Rapid response security services with trained personnel'
    },
    {
      icon: <Alarm className="w-8 h-8" />,
      title: 'Alarm Installation',
      description: 'Professional installation and monitoring of security systems'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'CCTV Installation',
      description: 'High-quality surveillance camera systems and monitoring'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'PSIRA Renewal & Collection',
      description: 'Complete PSIRA registration and renewal services'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Business Activities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive security solutions and training services to keep you protected 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-lg mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-6">
                Long distance learning approved. Part Time Students costs with Extra 
                to Job Assistance and Training.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Government Buildings</li>
                <li>• Private and Public Schools</li>
                <li>• University and Colleges</li>
                <li>• Hospital and Clinics</li>
                <li>• Hotels, Lodge and Accomodation</li>
                <li>• Malls and Shopping Complex</li>
                <li>• Mining sector Private and Public Properties</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-2xl font-bold text-teal-600 mb-2">PSIRA Registered</h4>
                <p className="text-gray-600 mb-4">Reg No: 2017/139340/70</p>
                <p className="text-sm text-gray-500">PSIRA Training No: 1770</p>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 font-bold">AVOID THE WORST. PUT SAFETY FIRST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}