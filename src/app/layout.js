import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import 'animate.css';

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

        <main style={{ minHeight: '80vh' }}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
