'use client';

import React from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
 
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold">
        Loading...
      </div>
    );
  }

  
  if (!session) {
    router.push('/login');
    return null;
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#fffef5] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-orange-100/50 overflow-hidden border border-orange-100">
        {/* Header section */}
        <div className="bg-orange-500 py-10 text-center">
          <h2 className="text-white text-3xl font-black uppercase tracking-widest">
            Mango Library
          </h2>
        </div>

        <div className="relative px-8 pb-12">
          {/* Profile Image */}
          <div className="flex justify-center -mt-16 mb-6">
            <div className="w-32 h-32 rounded-full border-8 border-white shadow-xl overflow-hidden bg-gray-100">
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

          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-900">{user.name}</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full opacity-20"></div>
          </div>

          {/* User Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-orange-50/30 p-6 rounded-3xl border border-orange-100/50">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">
                Full Name
              </p>
              <p className="text-xl font-bold text-gray-800">{user.name}</p>
            </div>

            <div className="bg-orange-50/30 p-6 rounded-3xl border border-orange-100/50">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">
                Email Address
              </p>
              <p className="text-lg font-bold text-gray-800 break-all">
                {user.email}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-orange-200 transform active:scale-95">
              Update Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
