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
    <nav className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 py-3 px-6 sticky top-0 z-50 shadow-lg shadow-orange-200/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors backdrop-blur-sm">
            <Library className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-lg text-white tracking-tight drop-shadow-sm">
            BookHub
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all rounded-xl ${
              isActive('/')
                ? 'bg-white/25 text-white'
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
          >
            <Home className="w-4 h-4" />
            Home
          </Link>

          <Link
            href="/books"
            onClick={handleProtectedNavigation}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all rounded-xl ${
              isActive('/books')
                ? 'bg-white/25 text-white'
                : 'text-white/80 hover:text-white hover:bg-white/15'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            All Books
          </Link>

          {session && (
            <Link
              href="/profile"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all rounded-xl ${
                isActive('/profile')
                  ? 'bg-white/25 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/15'
              }`}
            >
              <User className="w-4 h-4" />
              My Profile
            </Link>
          )}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3">
              {/* User info + avatar */}
              <Link
                href="/profile"
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors px-3 py-2 rounded-2xl backdrop-blur-sm border border-white/20"
              >
                <div className="w-8 h-8 rounded-xl overflow-hidden bg-white/30 shadow-sm border-2 border-white/40">
                  <img
                    src={
                      session.user?.image ||
                      'https://www.svgrepo.com/show/507442/user-circle.svg'
                    }
                    alt={session.user?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">
                    Welcome
                  </span>
                  <span className="text-sm font-black text-white">
                    {session.user?.name?.split(' ')[0]}
                  </span>
                </div>
              </Link>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-red-500 text-white text-sm font-bold rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/20 active:scale-95"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-bold text-white/90 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2.5 bg-white text-orange-500 hover:bg-orange-50 text-sm font-black rounded-xl shadow-lg transition-all active:scale-95"
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
