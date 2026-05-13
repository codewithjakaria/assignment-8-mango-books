'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { Camera, ArrowLeft, Save, X } from 'lucide-react'; 
import Link from 'next/link';

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
  });

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        image: session.user.image || '',
      });
    }
  }, [session]);

  const handleUpdate = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.updateUser({
        name: formData.name,
        image: formData.image,
      });

      if (error) {
        toast.error(error.message || 'Update failed!');
      } else {
        toast.success('Profile updated successfully!');
        router.push('/profile');
        router.refresh();
      }
    } catch (err) {
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };


  const clearInput = field => {
    setFormData({ ...formData, [field]: '' });
  };

  if (isPending)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffef5]">
        <div className="animate-pulse text-orange-500 font-bold">
          Loading...
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fffef5] px-4 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-100/40">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/profile"
            className="p-2 hover:bg-orange-50 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h2 className="text-2xl font-black text-gray-900">Update Profile</h2>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
        
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={
                  formData.image ||
                  'https://ui-avatars.com/api/?name=' + formData.name
                }
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-orange-100 shadow-md"
              />
              <div className="absolute bottom-0 right-0 p-1.5 bg-orange-500 rounded-full border-2 border-white">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-4 pr-12 rounded-2xl border border-gray-200 bg-gray-50 text-slate-900 font-medium focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all"
                placeholder="Your Name"
                required
              />
              {formData.name && (
                <button
                  type="button"
                  onClick={() => clearInput('name')}
                  className="absolute right-4 p-1 rounded-full hover:bg-gray-200 text-gray-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Profile Photo URL
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData.image}
                onChange={e =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-5 py-4 pr-12 rounded-2xl border border-gray-200 bg-gray-50 text-slate-900 font-medium focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all"
                placeholder="https://image-url.com"
              />
              {formData.image && (
                <button
                  type="button"
                  onClick={() => clearInput('image')}
                  className="absolute right-4 p-1 rounded-full hover:bg-gray-200 text-gray-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            <Save className="w-5 h-5" />
            {loading ? 'Updating...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}
