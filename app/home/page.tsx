import { ArrowRight, MessageSquareIcon } from 'lucide-react';
import Link from 'next/link';

import { FeedbackForm, Goals, ProfileInfo, Progress } from '@/components/home/';
import { FeedbackFormDialog } from '@/components/home/FeedbackFormDialog';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FIREBASE_USER, USER } from '@/data/data';
import { cn } from '@/lib/utils';

const extractInitials = (fullName: String): String => {
  const words = fullName.split(' ');
  const initials = words.map((word) => word.charAt(0).toUpperCase());
  return initials.join('');
};

export default function HomePage() {
  return (
    <div className="container py-4">
      <h1 className="text-3xl font-semibold text-left mr-auto mb-8">
        Hi {FIREBASE_USER.displayName.split(' ')[0]},
        <br />
        Welcome to your voyage
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 justify-center w-full h-full box-border gap-4">
        <div className="w-full flex flex-col grow lg:col-span-2">
          <Card className="p-6 h-full w-full flex flex-col gap-2 items-center">
            <div>
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage />
                <AvatarFallback>
                  {extractInitials(FIREBASE_USER.displayName)}
                </AvatarFallback>
              </Avatar>
              <div className="text-2xl font-semibold">
                {FIREBASE_USER.displayName}
              </div>
              <small className="text-sm text-muted-foreground leading-none">
                {FIREBASE_USER.currentPos}
              </small>
            </div>
            <ProfileInfo skills={USER.skills} />
            {/* <Alert>
            <AlertTitle>New courses available!</AlertTitle>
            <AlertDescription>
              Check out new courses to boost your performance.
              </AlertDescription>
          </Alert> */}
            <Goals />
          </Card>
        </div>
        <div className="w-full flex flex-col grow lg:col-span-3">
          <Card className="w-full mb-5">
            <CardHeader>
              <CardTitle>Give feedback, to anyone</CardTitle>
              <CardDescription className="text-justify">
                Provide anonymous feedback about your team and managers. Our
                smart career coach will compile the responses and share with
                them insights on what others think of them.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="default">
                    <MessageSquareIcon className="h-5 mr-3" />
                    Send feedback
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <FeedbackForm />
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
          <Card className="w-full flex flex-col grow">
            <CardHeader>
              <CardTitle>Track your progress</CardTitle>
              <CardDescription>Your PSA journey, at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress skills={USER.skills} />
            </CardContent>
            <CardFooter className="mt-auto">
              <Link
                href="/overview"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'ml-auto'
                )}
              >
                <ArrowRight className="h-5 mr-3" />
                Find out more
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
