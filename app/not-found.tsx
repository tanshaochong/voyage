'use client';

import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={'/assets/not_found.svg'}
        alt="not-found"
        className="mb-12 w-1/3"
      />
      <p className="text-xl font-semibold italic mb-10">
        Oops! You&apos;ve wandered into the abyss. Let&apos;s get you back on
        track.
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: 'default' }))}>
        Back to Home
      </Link>
    </div>
  );
}
