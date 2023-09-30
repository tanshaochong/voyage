import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import { SidebarNav } from '@/components/sidebar-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voyage',
  description: '',
};

const sidebarNavItems = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'Your Overview',
    href: '/overview',
  },
  {
    title: 'Technical Skills',
    href: '/technical',
  },
  {
    title: 'Interpersonal Skills',
    href: '/interpersonal',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 min-h-screen">
          <aside className="lg:bg-light lg:w-56 px-2 border-r-gray-500 border-r-2">
            {/* <h1 className="text-4xl text-center py-8 underline text-slate-700 border-b">
              Voyage
            </h1> */}
            <Image
              src="/assets/Voyage.png"
              alt="logo"
              height={125}
              width={125}
              className="mx-auto mt-4"
            />
            <SidebarNav items={sidebarNavItems} className="py-4" />
          </aside>
          <div className="flex-1 p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
