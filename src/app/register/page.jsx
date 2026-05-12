'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoUrl: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async e => {
    e.preventDefault();
    setLoading(true);

    try {

      const { data, error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        image: formData.photoUrl,
        callbackURL: '/login',
      });

      if (error) {
       
        toast.error(error.message || 'Registration failed!');
        console.error('BetterAuth Error:', error);
      } else {
        
        toast.success('Registration successful! Please login.');
        router.push('/login');
      }
    } catch (err) {
      toast.error('Something went wrong!');
      console.error('System Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffef5] px-4 py-12">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] border border-orange-100 shadow-2xl shadow-orange-100/50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Create Account
          </h2>
          <p className="text-gray-500 font-medium">
            Join our digital library community
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
       
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
              placeholder="Jakaria Ahmed"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
              placeholder="name@example.com"
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

      
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Photo URL
            </label>
            <input
              type="text"
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
              placeholder="https://image-link.com"
              value={formData.photoUrl}
              onChange={e =>
                setFormData({ ...formData, photoUrl: e.target.value })
              }
              required
            />
          </div>

      
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
              placeholder="••••••••"
              value={formData.password}
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

       
          <button
            disabled={loading}
            type="submit"
            className={`w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-orange-200 transform active:scale-[0.98] ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Creating Account...' : 'Register Now'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-gray-400 font-semibold tracking-widest">
              Or Register with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={async () => {
            await authClient.signIn.social({
              provider: 'google',
              callbackURL: '/',
            });
          }}
          className="w-full py-4 border-2 border-gray-50 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-[0.98]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-6 h-6"
            alt="Google"
          />
          <span className="text-gray-700">Continue with Google</span>
        </button>

        <div className="mt-10 text-center">
          <p className="text-gray-500 font-medium">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-orange-600 font-bold hover:underline underline-offset-4"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
