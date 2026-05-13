'use client';

import React from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 font-medium text-sm">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#faf9f6] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Top label */}
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-orange-400 mb-8">
          My Account
        </p>

        {/* Main card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-orange-100/60 border border-orange-50">
          {/* Banner */}
          <div className="h-28 bg-gradient-to-br from-orange-400 via-orange-500 to-amber-500 relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            ></div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center -mt-14 mb-4">
            <div className="w-28 h-28 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-orange-100 rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src={
                  user.image ||
                  'https://www.svgrepo.com/show/507442/user-circle.svg'
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & email */}
          <div className="text-center px-8 pb-2">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              {user.name}
            </h1>
            <p className="text-gray-400 text-sm mt-1">{user.email}</p>
          </div>

          {/* Divider */}
          <div className="mx-8 my-6 border-t border-gray-100"></div>

          {/* Info grid */}
          <div className="px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-100/50">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 mb-2">
                Full Name
              </p>
              <p className="text-base font-bold text-gray-800">{user.name}</p>
            </div>

            <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-100/50">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 mb-2">
                Email Address
              </p>
              <p className="text-base font-bold text-gray-800 break-all">
                {user.email}
              </p>
            </div>

            <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-100/50">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 mb-2">
                Account Status
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-base font-bold text-gray-800">Active</p>
              </div>
            </div>

            <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-100/50">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 mb-2">
                Member Since
              </p>
              <p className="text-base font-bold text-gray-800">
                {new Date(user.createdAt || Date.now()).toLocaleDateString(
                  'en-US',
                  { month: 'long', year: 'numeric' },
                )}
              </p>
            </div>
          </div>

          {/* Update button */}
          <div className="px-8 pb-8">
            <button className="w-full py-4 bg-gray-900 hover:bg-orange-500 text-white font-bold rounded-2xl transition-all duration-300 text-sm uppercase tracking-widest shadow-lg active:scale-95 transform">
              Update Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
