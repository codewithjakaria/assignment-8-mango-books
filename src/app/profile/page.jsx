'use client';

import React from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-[#fffef5] flex items-center justify-center p-6 py-20">
      {/* Main Profile Card */}
      <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(251,146,60,0.15)] overflow-hidden border border-orange-50/50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 py-12 text-center relative">
          <h2 className="text-white text-3xl font-black uppercase tracking-[0.3em]">
            Mango Library
          </h2>
          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-[3rem]"></div>
        </div>

        <div className="px-8 pb-12 text-center">
          {/* Profile Image with Ring Effect */}
          <div className="relative inline-block -mt-20 mb-6">
            <div className="w-36 h-36 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white group transition-transform hover:scale-105">
              <img
                src={
                  user.image ||
                  'https://www.svgrepo.com/show/507442/user-circle.svg'
                }
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              {user.name}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-8 bg-orange-200 rounded-full"></span>
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">
                User Information
              </p>
              <span className="h-[2px] w-8 bg-orange-200 rounded-full"></span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-orange-50/40 p-6 rounded-[2rem] border border-orange-100/50 group hover:bg-orange-50 transition-colors">
              <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2 text-left ml-2">
                Full Name
              </p>
              <p className="text-lg font-bold text-gray-800 text-left ml-2">
                {user.name}
              </p>
            </div>

            <div className="bg-orange-50/40 p-6 rounded-[2rem] border border-orange-100/50 group hover:bg-orange-50 transition-colors">
              <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2 text-left ml-2">
                Email Address
              </p>
              <p className="text-lg font-bold text-gray-800 text-left ml-2 truncate">
                {user.email}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full md:w-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg rounded-2xl transition-all shadow-lg shadow-orange-200 active:scale-95 transform hover:-translate-y-1">
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
}
