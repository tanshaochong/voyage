import Link from 'next/link';

import CourseCard from '@/components/CourseCard';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const TechnicalOverview = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Based on your profile</CardTitle>
        <CardDescription>
          Here are some highlight courses that best suits you
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="grid grid-cols-2 gap-4">
          <CourseCard
            provider="Udemy"
            courseName="Intro to Effective Communication"
          />
          <CourseCard
            provider="PSA In-house"
            courseName="Advanced Remote Crane Operations"
          />
          <CourseCard
            provider="Udemy"
            courseName="Leadership and Team Management"
          />
          <CourseCard provider="PSA In-house" courseName="Intro to Systems" />
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href="/technical"
          className={cn(buttonVariants({ variant: 'default' }), 'ml-auto')}
        >
          More details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TechnicalOverview;
