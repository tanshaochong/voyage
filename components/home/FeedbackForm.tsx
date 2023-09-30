'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
import { Textarea } from '@/components/ui/textarea';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

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

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { toast } = useToast();

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
          <Button
            type="submit"
            onClick={() => {
              toast({
                title: 'Hooray! Your message has been sent.',
                description: 'Thank you for your feedback!',
                action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
              });
              console.log('Toasting');
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
