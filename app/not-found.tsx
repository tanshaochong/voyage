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
    <div className="container flex h-screen flex-col items-center justify-center">
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
      <Link href="/home" className={cn(buttonVariants({ variant: 'default' }))}>
        Back to Home
      </Link>
    </div>
  );
}
