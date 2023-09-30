import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import { SidebarNav } from '@/components/sidebar-nav';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

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
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 min-h-screen max-h-screen">
          <aside className="flex flex-col max-h-screen py-4 lg:bg-light lg:w-1/6 px-2 border-r-gray-500 border-r-2">
            <Image
              src="/assets/Voyage.png"
              alt="logo"
              height={51}
              width={128}
              className="mx-auto"
            />
            <SidebarNav items={sidebarNavItems} className="py-4" />
            <Separator className="mt-auto" />
            <div className="mt-4 px-2 flex items-center gap-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-medium leading-none">Lalit Goel</p>
                <p className="text-sm text-muted-foreground">Staff Engineer</p>
              </div>
            </div>
          </aside>
          <ScrollArea className="h-screen w-5/6 p-4">{children}</ScrollArea>
        </div>
      </body>
    </html>
  );
}
