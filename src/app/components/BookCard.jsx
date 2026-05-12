'use client';

import React from 'react';
import Link from 'next/link';

const BookCard = ({ book }) => {
  return (
    <div className="bg-[#f3f4f6]/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full border border-gray-100">
      {/* Book Image */}
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-inner bg-white">
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center flex-grow w-full">
        <h3 className="text-lg font-extrabold text-gray-900 mb-1 leading-tight">
          {book.title}
        </h3>
        <p className="text-xs text-gray-500 mb-3 font-medium">
          By {book.author}
        </p>

        <div className="mb-6">
          <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-4 py-1 rounded-full uppercase tracking-wider border border-blue-100">
            {book.category}
          </span>
        </div>

        <Link
          href={`/books/${book.id}`}
          className="mt-auto w-full max-w-[140px] py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-orange-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
