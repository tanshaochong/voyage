'use client';

import { useChat } from 'ai/react';
import { RefObject } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

export default function Chat({
  chatRef,
}: {
  chatRef: RefObject<HTMLDivElement>;
}) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
  } = useChat({
    api: '/api/chat',
    id: 'chat',
    initialMessages: [
      {
        id: 'system prompt',
        role: 'system',
        content:
          "You are a helpful career coach. Answer the users' questions, limiting your responses to 4 sentences.",
      },
    ],
    onResponse: () => {
      if (chatRef && chatRef.current) {
        chatRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
    onFinish: () => {
      if (chatRef && chatRef.current) {
        chatRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
    onError: () => {
      toast({
        title: 'An error occured.',
        description: 'Please refresh the page.',
      });
    },
  });

  return (
    <Card className=" border-2 flex flex-col overflow-hidden ">
      <div className="flex flex-col grow overflow-auto">
        <CardHeader>
          <CardTitle>Learn more about how to develop these skills</CardTitle>
        </CardHeader>
        <CardContent className="">
          {messages.length === 1 && (
            <div className="border-dashed border-2 rounded-md p-16 flex flex-col items-center gap-8">
              <p className="text-center text-2xl text-muted-foreground">
                Ask our intelligent career coach how you can improve on your
                interpersonal skills
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-center">powered by</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/OpenAI_Logo.png" alt="" className=" h-10" />
              </div>
            </div>
          )}
          {messages.slice(1).map((m, index) => (
            <p
              key={index}
              className={cn(
                'p-4 rounded-md',
                m.role === 'user' ? '' : 'bg-muted'
              )}
            >
              {/* {m.role === 'user' ? 'User: ' : 'AI: '} */}
              {m.content}
            </p>
          ))}
        </CardContent>
        <span ref={chatRef}></span>
      </div>
      <CardFooter className="">
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            disabled={isLoading}
            value={input}
            placeholder="Ask questions to learn more..."
            onChange={handleInputChange}
          />
        </form>
      </CardFooter>
    </Card>
  );
}
