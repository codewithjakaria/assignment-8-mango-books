'use client';

import Link from 'next/link';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { Library, Home, BookOpen, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success('Logged out successfully!');
    router.push('/');
  };

  const isActive = path => pathname === path;

  const handleProtectedNavigation = e => {
    if (!session) {
      e.preventDefault();
      toast.error('Please login first to see all books!');
      router.push('/login');
    }
  };

  return (
    <nav className="bg-[#fffef5] border-b border-orange-100 py-3 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
            <Library className="w-7 h-7 text-orange-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-gray-800 tracking-tight leading-none">
              MANGO
            </span>
            <span className="text-xs font-semibold text-orange-500 tracking-[0.2em] uppercase">
              Library
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-lg ${
              isActive('/')
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <Home className="w-4 h-4" />
            Home
          </Link>

          <Link
            href="/books"
            onClick={handleProtectedNavigation}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-lg ${
              isActive('/books')
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            All Books
          </Link>

          {session && (
            <Link
              href="/profile"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                isActive('/profile')
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <User className="w-4 h-4" />
              My Profile
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3 bg-white border border-orange-100 p-1 rounded-full pl-4 shadow-sm">
              <div className="flex flex-col items-end pr-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
                  Welcome
                </span>
                <span className="text-xs font-black text-gray-800">
                  {session.user.name.split(' ')[0]}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2.5 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-600 hover:text-white transition-all shadow-sm"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-orange-100 transition-all active:scale-95 transform hover:-translate-y-0.5"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
