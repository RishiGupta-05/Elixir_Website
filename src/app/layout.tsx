import type { Metadata } from 'next';
import { fontSans } from './font';
import './globals.css';
import { cn } from '@/utils/cn';
import { Navbar } from '@/components/Navbar';
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <div className="relative w-full flex items-center justify-center">
          {/* <Navbar /> */}
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
