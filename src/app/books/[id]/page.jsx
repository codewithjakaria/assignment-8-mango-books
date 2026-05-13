'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { ArrowLeft, Book, User, Info, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BookDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [book, setBook] = useState(null);

 
  useEffect(() => {
    if (!isPending && !session) {
      toast.error('Please login first to view details!');
      router.push('/login');
    }
  }, [session, isPending, router]);


  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch('/data/books.json');
      const data = await res.json();
      const foundBook = data.find(b => b.id === parseInt(id));
      setBook(foundBook);
    };
    fetchBook();
  }, [id]);

  const handleBorrow = () => {
    toast.success(`Successfully borrowed "${book.title}"!`); 
  };

  if (isPending || !book)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fffef5] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to All Books
        </Link>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-orange-100/50 border border-orange-50 flex flex-col md:flex-row gap-12">
          {/* Left: Book Cover */}
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={book.image_url}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 space-y-6">
            <div>
              <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest">
                {book.category}
              </span>
              <h1 className="text-4xl font-black text-gray-900 mt-4 leading-tight">
                {book.title}
              </h1>
              <p className="text-lg font-bold text-gray-400 mt-2 flex items-center gap-2">
                <User className="w-5 h-5" /> {book.author}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                <Info className="w-4 h-4 text-orange-500" /> Description
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {book.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-xl border border-green-100 font-bold text-sm">
                <CheckCircle className="w-4 h-4" /> {book.available_quantity}{' '}
                copies left
              </div>
            </div>

            <button
              onClick={handleBorrow}
              className="w-full md:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-orange-200 active:scale-95 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              Borrow This Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
