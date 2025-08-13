import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-teal-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl opacity-90">
            Get in touch for professional security services and training programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 text-teal-200" />
                <div>
                  <h4 className="font-semibold mb-1">Phone Numbers</h4>
                  <p className="opacity-90">079 435 0000</p>
                  <p className="opacity-90">015 023 1437</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 text-teal-200" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="opacity-90">phophisec@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 text-teal-200" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="opacity-90">665 MPHEPHU DRIVE THOHOYANDOU P</p>
                  <p className="opacity-90">NEXT TO JJ'S LIQUOR STORE</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1 text-teal-200" />
                <div>
                  <h4 className="font-semibold mb-1">Operating Hours</h4>
                  <p className="opacity-90">24/7 Service Everyday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-800">Select Service</option>
                  <option value="training" className="text-gray-800">Security Training</option>
                  <option value="guard" className="text-gray-800">Security Guard Services</option>
                  <option value="installation" className="text-gray-800">CCTV Installation</option>
                  <option value="psira" className="text-gray-800">PSIRA Services</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}