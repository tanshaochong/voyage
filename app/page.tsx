import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { auth } from '@/config/firebase';
import LogoutDialogue from '@/features/auth/components/LogoutDialogue';

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
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
