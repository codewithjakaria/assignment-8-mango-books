'use client';

import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/data/books.json')
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 4)))
      .catch(err => console.error(err));
  }, []);

  return (
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
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
