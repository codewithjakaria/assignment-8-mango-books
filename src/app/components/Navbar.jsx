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

  return (
    <nav className="bg-[#fffef5] border-b border-orange-100 py-3 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* লোগো সেকশন */}
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

        {/* মাঝখানের লিঙ্কসমূহ - Home, All Books এবং My Profile পাশাপাশি */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${
              isActive('/')
                ? 'text-orange-600 border-b-2 border-orange-500'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/books"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${
              isActive('/books')
                ? 'text-orange-600 border-b-2 border-orange-500'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            All Books
          </Link>
          {/* My Profile লিঙ্কটি এখানে যোগ করা হলো */}
          <Link
            href="/profile"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${
              isActive('/profile')
                ? 'text-orange-600 border-b-2 border-orange-500'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <User className="w-4 h-4" />
            My Profile
          </Link>
        </div>

        {/* ডানদিকের বাটন সেকশন */}
        <div className="flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3 bg-white border border-gray-200 p-1 rounded-full pl-4 shadow-sm">
              <span className="text-sm font-bold text-gray-700">
                {session.user.name.split(' ')[0]}
              </span>
              <button
                onClick={handleLogout}
                className="p-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-600 hover:text-white transition-all"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl shadow-md shadow-orange-200 transition-all active:scale-95"
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
