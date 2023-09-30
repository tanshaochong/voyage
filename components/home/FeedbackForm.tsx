'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Cross } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { AlertDialogCancel } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Toast } from '@/components/ui/toast';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  team: z.string().min(2, {
    message: 'Team must be at least 2 characters long',
  }),
  feedback: z.string().min(2, {
    message: 'Feedback must be at least 2 characters long',
  }),
});

export function FeedbackForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      team: '',
      feedback: '',
    },
  });

  const [success, setSuccess] = useState(false);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSuccess(true);
    showToast(true);
  }

  const showToast = (isSuccess: boolean) => {
    if (isSuccess) {
      toast({
        title: 'Hooray! Your message has been sent.',
        description: 'Thank you for your feedback!',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="team"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team</FormLabel>
              <FormControl>
                <Input placeholder="Team Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormDescription>Send some contructive feedback!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter feedback here!" {...field} />
              </FormControl>
              <FormDescription>
                Your feedback will be anonymised and analysed by our AI model,
                and sent to the receiver.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="justify-between flex">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
