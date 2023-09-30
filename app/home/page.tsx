import { ArrowLeft, ArrowRightCircle, MessageSquareIcon } from 'lucide-react';
import Link from 'next/link';

import { FeedbackForm } from '@/components/home/FeedbackForm';
import { ProfileInfo } from '@/components/home/ProfileInfo';
import { Progress } from '@/components/home/Progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
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
import { ToastAction } from '@/components/ui/toast';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="flex justify-center w-full h-full box-border columns-2 gap-5 p-5 ">
      <div className="justify-center items-center w-full h-fit flex flex-col">
        <Card className=" p-6 h-full flex flex-col justify-center items-center">
          <CardHeader>
            <CardTitle>Welcome Back.</CardTitle>
          </CardHeader>
          <Avatar className="w-44 h-44 mt-5">
            <AvatarImage />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>

          <div className="mt-5 mb-1 text-2xl font-semibold">Lalit Goel</div>
          <small className="text-xl font-light leading-none mb-10">
            Staff Engineer
          </small>

          <ProfileInfo />

          <Alert className="">
            <AlertTitle>New courses available!</AlertTitle>
            <AlertDescription>
              Check out new courses to boost your performance.
            </AlertDescription>
          </Alert>
          <div className="w-full h-full gap-5 flex justify-center mt-5">
            <Button>Logout</Button>
          </div>
        </Card>
      </div>
      <div className="w-full h-full flex flex-col">
        <Card className="h-fit w-full mb-5">
          <CardHeader>
            <CardTitle>Track your progress</CardTitle>
            <CardDescription>Your PSA journey, at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link
              href="/overview"
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              Find out more
              <ArrowRightCircle className="ml-3" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Give feedback, to anyone</CardTitle>
          </CardHeader>
          <CardContent>Give feedback to your peers.</CardContent>
          <CardFooter className="justify-end align-bottom h-fit pr-5">
            <FeedbackFormDialog />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export function FeedbackFormDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <MessageSquareIcon className="h-5 mr-3" />
          Send Feedback
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <FeedbackForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
