import { ArrowLeft, ArrowRight, MessageSquareIcon } from 'lucide-react';
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
    <div className="container grid grid-cols-2 justify-center w-full h-full box-border gap-4 py-4">
      <div className="w-full flex flex-col grow">
        <Card className="p-6 h-full w-full flex flex-col gap-2 items-center">
          <div>
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <div className="text-2xl font-semibold">Lalit Goel</div>
            <small className="text-sm text-muted-foreground leading-none">
              Staff Engineer
            </small>
          </div>
          <ProfileInfo />
          <Alert>
            <AlertTitle>New courses available!</AlertTitle>
            <AlertDescription>
              Check out new courses to boost your performance.
            </AlertDescription>
          </Alert>
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
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              <ArrowRight className="h-5 mr-3" />
              Find out more
            </Link>
          </CardFooter>
        </Card>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Give feedback, to anyone</CardTitle>
            <CardDescription>Give feedback to your peers</CardDescription>
          </CardHeader>
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
          Send feedback
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <FeedbackForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
