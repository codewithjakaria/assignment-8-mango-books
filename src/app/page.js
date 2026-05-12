'use client';

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero'; // আপনার বিদ্যমান Hero
import BookCard from './components/BookCard'; // আপনার তৈরি করা BookCard
import HomeFeatures from './components/HomeFeatures'; // আপনার বিদ্যমান Features

export default function Home() {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await fetch('/data/books.json');
        const data = await res.json();
        // স্ক্রিনশট অনুযায়ী প্রথম ৪টি বই দেখানো হচ্ছে
        setFeaturedBooks(data.slice(0, 4));
      } catch (error) {
        console.error('Error loading featured books:', error);
      }
    };
    loadBooks();
  }, []);

  return (
    <main>
      <Hero />

      {/* Featured Books Section */}
      <section className="bg-[#fffef5] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e293b] mb-2">
              Featured{' '}
              <span className="relative inline-block px-1">
                Books
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded-full"></span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <HomeFeatures />
    </main>
  );
}
