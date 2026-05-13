'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/bundle';

import BookCard from './components/BookCard';
import HomeFeatures from './components/HomeFeatures';
import Footer from './components/Footer';

export default function Home() {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await fetch('/data/books.json');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setFeaturedBooks(data.slice(0, 8));
      } catch (error) {
        console.error(error);
      }
    };
    loadBooks();
  }, []);

  return (
    <main>
      <section className="relative h-[550px] flex items-center justify-center text-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="Library"
          />
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Find Your Next <span className="text-orange-500">Read</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
            Explore a vast collection of books across various categories. Borrow
            your favorite titles digitally today!
          </p>
          <Link
            href="/books"
            className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-full transition-all transform hover:scale-105 shadow-2xl inline-block"
          >
            Browse Now
          </Link>
        </div>
      </section>

      <div className="bg-orange-100 py-4 border-y border-orange-200">
        <Marquee gradient={false} speed={60}>
          <div className="flex items-center gap-10">
            <span className="text-orange-800 font-bold uppercase tracking-widest text-sm">
              🔥 New Arrivals: Mastering Next.js 15
            </span>
            <span className="text-orange-800 font-bold uppercase tracking-widest text-sm">
              | Special Discount on Memberships!
            </span>
            <span className="text-orange-800 font-bold uppercase tracking-widest text-sm">
              | The Silent Shadows is now available!
            </span>
            <span className="text-orange-800 font-bold uppercase tracking-widest text-sm">
              | Quantum Horizon - Best Seller of the Month
            </span>
          </div>
        </Marquee>
      </div>

      <section className="bg-[#fffef5] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e293b] mb-2 uppercase tracking-tight">
              Featured{' '}
              <span className="relative inline-block px-1">
                Books
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-orange-500 rounded-full"></span>
              </span>
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper pb-12"
          >
            {featuredBooks.map(book => (
              <SwiperSlide key={book.id}>
                <div className="pb-4">
                  <BookCard book={book} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <HomeFeatures />
      <Footer />
    </main>
  );
}
