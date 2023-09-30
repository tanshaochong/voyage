'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@radix-ui/react-alert-dialog';
import { MessageSquareIcon } from 'lucide-react';

import { FeedbackForm } from '@/components/home';
import { Button } from '@/components/ui/button';

export function FeedbackFormDialog() {
  return (
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
  );
}
