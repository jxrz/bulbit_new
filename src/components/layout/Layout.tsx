import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import { HelmetProvider } from 'react-helmet-async';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background flex flex-col font-sans relative overflow-x-hidden">
        <Header />
        <main className="flex-grow pt-20 flex flex-col relative w-full">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </div>
    </HelmetProvider>
  );
}