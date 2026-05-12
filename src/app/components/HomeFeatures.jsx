'use client';

import React from 'react';
import Link from 'next/link';
import { BookCopy, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const HomeFeatures = () => {
  return (
    <div className="bg-[#fffef5] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1e293b] flex flex-col items-center gap-2">
            <span>
              Why{' '}
              <span className="relative inline-block px-1">
                Choose
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-orange-400/80 -z-10 rounded-full"></span>
              </span>{' '}
              Us?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 transition-colors duration-500">
              <BookCopy className="w-10 h-10 text-orange-600 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Huge Collection
            </h3>
            <p className="text-gray-500 text-base leading-relaxed px-4">
              Choose your favorite from a collection of thousands of books.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 transition-colors duration-500">
              <ShieldCheck className="w-10 h-10 text-orange-600 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Easy Borrow
            </h3>
            <p className="text-gray-500 text-base leading-relaxed px-4">
              A modern system for borrowing books quickly without any hassle.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500 transition-colors duration-500">
              <Zap className="w-10 h-10 text-orange-600 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Quick Update
            </h3>
            <p className="text-gray-500 text-base leading-relaxed px-4">
              Be the first to get updates on all new books.
            </p>
          </div>
        </div>

        {/* Browse by Category Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-[#1e293b]">
            Browse by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#e0f0ff] py-16 rounded-[2rem] text-center group hover:shadow-lg transition-all cursor-pointer border border-blue-100">
            <h3 className="text-3xl font-black text-blue-800 mb-4">Story</h3>
            <Link
              href="/books?category=Story"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
            >
              See All Books <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-[#e6fffa] py-16 rounded-[2rem] text-center group hover:shadow-lg transition-all cursor-pointer border border-teal-100">
            <h3 className="text-3xl font-black text-teal-800 mb-4">Tech</h3>
            <Link
              href="/books?category=Tech"
              className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-3 transition-all"
            >
              See All Books <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-[#f3ebff] py-16 rounded-[2rem] text-center group hover:shadow-lg transition-all cursor-pointer border border-purple-100">
            <h3 className="text-3xl font-black text-purple-800 mb-4">
              Science
            </h3>
            <Link
              href="/books?category=Science"
              className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all"
            >
              See All Books <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
