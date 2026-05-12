'use client';

import Link from 'next/link';
import React from 'react';
import { Library, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#fffef5] border-t border-orange-100 pt-16 pb-8 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                <Library className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-gray-800 tracking-tight leading-none">
                  MANGO
                </span>
                <span className="text-[10px] font-semibold text-orange-500 tracking-[0.2em] uppercase">
                  Library
                </span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              A modern digital library experience. Explore books, filter by
              categories, and borrow titles seamlessly.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-orange-600 text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-gray-500 hover:text-orange-600 text-sm transition-colors"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-500 hover:text-orange-600 text-sm transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                Kushtia, Bangladesh
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                +880 1234-567890
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
                support@mangobooks.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-blue-600 hover:shadow-md transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-blue-400 hover:shadow-md transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-pink-600 hover:shadow-md transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Mango Books. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
