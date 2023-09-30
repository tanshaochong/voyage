import Link from 'next/link';

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

const InterpersonalOverview = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Based on your feedbacks</CardTitle>
        <CardDescription>
          Here are what your colleagues have to say about you
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At est
          suscipit aspernatur earum, eaque id aperiam labore excepturi nihil
          sed! Accusantium rerum quod esse explicabo provident adipisci beatae,
          numquam placeat.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground ml-auto w-[200px] italic text-right mr-4">
          Find out how you can improve these soft skills
        </p>
        <Link
          href="/interpersonal"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          Tell me more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InterpersonalOverview;
