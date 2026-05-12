import './globals.css';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Mango Books',
  description: 'Library Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        <Toaster position="top-center" reverseOrder={false} />

        <Navbar />
        {/* ফুটার আপাতত বাদ দেওয়া হয়েছে */}
        <main style={{ minHeight: '80vh', paddingTop: '100px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
