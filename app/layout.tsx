import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { SidebarNav } from '@/components/sidebar-nav';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
  {
    title: 'Learn',
    href: '/learn',
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
          <aside className="flex z-10 justify-center flex-wrap w-screen lg:flex-col lg:pb-4 lg:pt-8 lg:h-[calc(100vh-1rem)] bg-white lg:w-1/6 px-2 border-r-gray-200 border-2 rounded-lg lg:ml-4 lg:my-2 fixed">
            <div className="hidden lg:block">
              <Link href="/home">
                <Image
                  src="/assets/Voyage.png"
                  alt="logo"
                  height={51}
                  width={128}
                  className="mx-auto mb-4"
                />
              </Link>
            </div>
            <SidebarNav items={sidebarNavItems} className="py-4" />
            <Separator className="hidden lg:block" />
            <Alert className="bg-blue-50 border-none my-4 hidden lg:block">
              <AlertTitle className="text-slate-700">Demo Only</AlertTitle>
              <AlertDescription className="text-slate-700">
                Click
                <Link href="/demo" className={'underline'}>
                  &nbsp;here&nbsp;
                </Link>
                to see the raw data that we pass into our AI models.
              </AlertDescription>
            </Alert>
            <Separator className="mt-auto bg-transparent" />
            <div className="hidden lg:block">
              <ProfileMenu />
            </div>
          </aside>
          {/* <ScrollArea className="lg:h-screen w-5/6 p-4"> */}
          <div className="pt-32 w-screen lg:h-screen lg:w-5/6 lg:pt-4 lg:p-4 lg:ml-[calc(100vw/6+1rem)]">
            {children}
          </div>
          <Toaster />
          {/* </ScrollArea> */}
        </div>
      </body>
    </html>
  );
}
