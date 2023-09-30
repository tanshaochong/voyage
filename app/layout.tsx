import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { SidebarNav } from '@/components/sidebar-nav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProfileMenu } from '@/components/ui/profile-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';

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
    title: 'Overview',
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
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 min-h-screen max-h-screen">
          <aside className="flex flex-col max-h-screen pb-4 pt-8 lg:bg-light lg:w-1/6 px-2 border-r-gray-200 border-2 rounded-lg ml-4 my-2">
            <Link href="/home">
              <Image
                src="/assets/Voyage.png"
                alt="logo"
                height={51}
                width={128}
                className="mx-auto mb-4"
              />
            </Link>
            <SidebarNav items={sidebarNavItems} className="py-4" />
            <Separator className="mt-auto bg-transparent" />
            <ProfileMenu />
            <Toaster />
          </aside>
          <ScrollArea className="h-screen w-5/6 p-4">{children}</ScrollArea>
        </div>
      </body>
    </html>
  );
}
