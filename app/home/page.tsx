'use client';

import { FeedbackForm } from '@/components/home/FeedbackForm';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export default function HomePage() {
  return (
    <div className="container flex justify-center w-full h-full columns-2 gap-5 p-5 box-border">
      <div className="justify-center items-center w-full h-full">
        <Card className=" p-3 flex flex-col h-full justify-center items-center">
          <Avatar className="w-44 h-44 mt-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="mt-5 mb-1 text-2xl font-semibold">John Doe</div>
          <small className="text-xl font-light leading-none mb-10">
            Senior Manager
          </small>

          <Alert className="">
            <AlertTitle>New Course Available!</AlertTitle>
            <AlertDescription>
              Check out these new courses to boost your performance.
            </AlertDescription>
          </Alert>
        </Card>
      </div>
      <div className="w-full h-full flex flex-col">
        <Card className="h-full mb-5">
          <CardHeader>
            <CardTitle>Check out your thing.</CardTitle>
            <CardDescription>View your recommendations here!</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button>Find out more</Button>
          </CardFooter>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Give some feedback.</CardTitle>
          </CardHeader>
          <CardContent>
            <FeedbackFormDialog />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function FeedbackFormDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Send Feedback</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <FeedbackForm />
      </AlertDialogContent>
    </AlertDialog>
  );
}
