'use client';

import React from 'react';
import Link from 'next/link';






const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-orange-50 hover:shadow-2xl transition-all duration-500 group animate__animated animate__fadeInUp">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-md">
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-black text-gray-900 mb-1 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-gray-400 font-bold text-sm mb-4">By {book.author}</p>

        <div className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          {book.category}
        </div>

        <Link
          href={`/books/${book.id}`}
          className="block w-full py-4 bg-orange-500 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 active:scale-95 uppercase tracking-widest text-xs"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
