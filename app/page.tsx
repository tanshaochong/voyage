import Link from 'next/link';

import { auth } from '@/app/firebase';
import { Button, buttonVariants } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import LogoutDialogue from '@/features/auth/components/LogoutDialogue';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="">
      <div className="min-h-screen grid place-items-center">
        <div className="flex flex-col gap-4 items-center">
          <p>Hello World</p>
          <p>
            Currently logged in as:{' '}
            <span className="font-bold">
              {auth.currentUser?.displayName ||
                auth.currentUser?.email ||
                'nobody'}
            </span>
          </p>
          {auth.currentUser ? (
            <LogoutDialogue />
          ) : (
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <Toaster />
    </main>
  );
}
