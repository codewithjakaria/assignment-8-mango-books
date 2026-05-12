'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('/assets/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-1.5 rounded-full mb-6 animate-bounce">
          <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
          <span className="text-orange-100 text-xs font-bold uppercase tracking-widest">
            Best Digital Library 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Find Your <span className="text-orange-500">Next</span> Read
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Find your favorite book from our vast collection and borrow it
          digitally. We are with you on this journey of knowledge.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/books"
            className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-xl shadow-orange-500/20 transition-all flex items-center gap-2 active:scale-95"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2 active:scale-95"
          >
            <BookOpen className="w-5 h-5 text-orange-400" />
            Learn More
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-8 text-gray-400">
          <div className="text-center">
            <p className="text-white font-bold text-xl">10k+</p>
            <p className="text-[10px] uppercase tracking-widest">Books</p>
          </div>
          <div className="w-[1px] h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-white font-bold text-xl">5k+</p>
            <p className="text-[10px] uppercase tracking-widest">Users</p>
          </div>
          <div className="w-[1px] h-8 bg-white/10"></div>
          <div className="text-center">
            <p className="text-white font-bold text-xl">24/7</p>
            <p className="text-[10px] uppercase tracking-widest">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
