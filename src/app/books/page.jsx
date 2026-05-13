'use client';

import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { Search, Filter } from 'lucide-react';

export default function AllBooksPage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const loadBooks = async () => {
      try {
      
        const res = await fetch('/data/books.json');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error('Data Load Error:', error);
      }
    };
    loadBooks();
  }, []);

  const categories = ['All', 'Story', 'Tech', 'Science'];

  
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#fffef5] min-h-screen pt-10 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
    
        <div className="relative mb-12 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search books by title..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-orange-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
     
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-orange-100 sticky top-28 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4 text-orange-600" /> Filter by
                Category
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-4 py-3 rounded-xl font-bold transition-all text-sm ${
                      selectedCategory === cat
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
                        : 'text-gray-500 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

         
          <div className="flex-grow">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-bold">No books found!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
