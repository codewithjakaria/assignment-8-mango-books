import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  // আপনার অ্যাপ যদি ৩০০০ পোর্টে চলে তবে ৩০০০ দিবেন, আর ৩০০৪ হলে ৩০০৪।
  // তবে এনভায়রনমেন্ট ভেরিয়েবল ব্যবহার করা সেরা প্র্যাকটিস।
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
});
