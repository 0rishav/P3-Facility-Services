import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const clients = [
  { name: 'Client 1', logo: 'C1' },
  { name: 'Client 2', logo: 'C2' },
  { name: 'Client 3', logo: 'C3' },
  { name: 'Client 4', logo: 'C4' },
  { name: 'Client 5', logo: 'C5' },
  { name: 'Client 6', logo: 'C6' },
];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-full mb-6">
            <span className="text-sm font-semibold text-green-600 dark:text-green-300">Partners</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Our Trusted Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Proud to serve industry leaders across various sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-400 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-emerald-600 dark:group-hover:from-green-400 dark:group-hover:to-emerald-500 transition-all duration-300">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Become Our Client
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
