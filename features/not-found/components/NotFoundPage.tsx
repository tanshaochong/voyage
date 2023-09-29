import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import notFoundImage from '../assets/not_found.svg';

export default function NotFoundPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        to="/"
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
      <img src={notFoundImage} alt="not-found" className="mb-12 w-1/3" />
      <p className="text-xl font-semibold italic mb-10">
        Oops! You've wandered into the abyss. Let's get you back on track.
      </p>
      <Link to="/" className={cn(buttonVariants({ variant: 'default' }))}>
        Back to Home
      </Link>
    </div>
  );
}
