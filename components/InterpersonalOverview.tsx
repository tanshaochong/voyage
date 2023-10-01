'use client';
import { ChatRequest, FunctionCallHandler, nanoid } from 'ai';
import { useChat } from 'ai/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { RAW_FEEDBACK } from '@/data/data';
import { cn } from '@/lib/utils';

const InterpersonalOverview = () => {
  const [feedback, setFeedback] = useState({
    positive1: '',
    positive2: '',
    afi: '',
  });

  const functionCallHandler: FunctionCallHandler = async (
    chatMessages,
    functionCall
  ) => {
    if (functionCall.name === 'summarise_feedback') {
      let summarised_feedback = '';
      if (functionCall.arguments) {
        const parsedFunctionCallArguments = JSON.parse(functionCall.arguments);
        // You now have access to the parsed arguments here (assuming the JSON was valid)
        // If JSON is invalid, return an appropriate message to the model so that it may retry?
        // console.log(parsedFunctionCallArguments);
        setFeedback(parsedFunctionCallArguments);
      }
    }
  };

  const { messages, setMessages, append, isLoading } = useChat({
    experimental_onFunctionCall: functionCallHandler,
    api: '/api/completion',
    id: 'summarise',
  });

  useEffect(() => {
    setMessages([]);
    append({
      role: 'user',
      content: RAW_FEEDBACK.join('\n'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>
          Based on feedback for you
          <span className="ml-4 align-middle text-xs font-light text-muted-foreground">
            powered by {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="/assets/OpenAI_Logo.png"
              alt=""
              className="mb-0.5 ml-1 inline-block h-4 align-middle"
            />
          </span>
        </CardTitle>
        <CardDescription>
          Here is what your colleagues have to say about you
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-20"></Skeleton>
            <Skeleton className="h-20"></Skeleton>
            <Skeleton className="h-20"></Skeleton>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="border-green-300 border-2 p-4 rounded-md">
              <span className="font-semibold">Doing great!</span>
              <br /> {feedback.positive1}
            </p>
            <p className="border-green-300 border-2 p-4 rounded-md">
              <span className="font-semibold">Doing great!</span> <br />
              {feedback.positive2}
            </p>
            <p className="border-orange-300 border-2 p-4 rounded-md">
              <span className="font-semibold">To improve -</span> <br />{' '}
              {feedback.afi}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground ml-auto w-[200px] italic text-right mr-4">
          Find out how you can improve on these interpersonal skills
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
