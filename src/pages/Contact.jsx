import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-60 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-300">tayyab90m@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-300">+92 (307) 6160255</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-300">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;