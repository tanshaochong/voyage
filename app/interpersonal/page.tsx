'use client';

import { ChatRequest, FunctionCallHandler, nanoid } from 'ai';
import { useChat, useCompletion } from 'ai/react';
import { useEffect, useState } from 'react';

import Chat from '@/components/chat';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { RAW_FEEDBACK } from '@/data/data';
import { cn } from '@/lib/utils';

type Feedback = {
  good: String[];
  bad: String[];
};

const InterpersonalPage = () => {
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
  });
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

  const {
    setMessages,
    messages: summaryMessages,
    append: appendSummary,
    isLoading: isSummaryLoading,
  } = useChat({
    experimental_onFunctionCall: functionCallHandler,
    api: '/api/completion',
    id: 'summarisedetails',
  });

  useEffect(() => {
    setMessages([]);
    appendSummary({
      role: 'user',
      content: RAW_FEEDBACK.join('\n'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (key: 'positive1' | 'positive2' | 'afi') => {
    append({
      role: 'user',
      content: `Tell me more about how can improve on the following trait: ${feedback[key]}`,
    });
  };

  return (
    <div className="w-full h-full max-h-full flex flex-col gap-2">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Strengths & Areas for Improvement
      </h2>
      <div className="grid grid-cols-2 gap-6 grow overflow-hidden">
        <div className="flex flex-col gap-2">
          {feedback &&
            Object.entries(feedback).map(([key, value], idx) => {
              return isSummaryLoading ? (
                <Skeleton className="h-48" key={idx}></Skeleton>
              ) : (
                <Card
                  key={idx}
                  className={cn(
                    'border-4',
                    key === 'afi' ? 'border-orange-300' : 'border-green-300'
                  )}
                >
                  <CardHeader
                    className={cn(
                      'font-semibold',
                      key === 'afi' ? 'text-orange-700' : 'text-green-700'
                    )}
                  >
                    {key === 'afi' ? 'To improve -' : 'Doing great!'}
                  </CardHeader>
                  <CardContent className="grid">
                    <p className="">{value}</p>
                    <Button
                      variant={'link'}
                      disabled={isSummaryLoading || isLoading}
                      className="justify-self-end mt-2"
                      onClick={() => {
                        handleClick(key as 'positive1' | 'positive2' | 'afi');
                      }}
                    >
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default InterpersonalPage;
