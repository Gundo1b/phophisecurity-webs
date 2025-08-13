import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PHOPHI SECURITY</h3>
                <p className="text-sm text-gray-400">SERVICES & TRAINING</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional security services and training with 24/7 support. We will always be watching.
            </p>
            <p className="text-teal-400 font-semibold">PSIRA Reg No: 2017/139340/70</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Security Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guarding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Access Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Event Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CCTV Installation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Training</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Grade A Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grade B Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EDC Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PSIRA Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Job Placement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>079 435 0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>015 023 1437</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>phophisec@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>665 MPHEPHU DRIVE<br />THOHOYANDOU P</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Phophi Security Services and Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}