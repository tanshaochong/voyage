'use client';

import { useChat, useCompletion } from 'ai/react';
import { useEffect, useState } from 'react';

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
    initialMessages: [
      {
        id: 'system prompt',
        role: 'system',
        content:
          "You are a helpful career coach. Answer the users' questions, limiting your responses to 4 sentences.",
      },
    ],
  });

  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const getFeedback = async () => {
    await fetch('/api/feedback/summed')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFeedback(data.data);
      });
  };

  const handleClick = (id: number) => {
    append({
      role: 'user',
      content: `Tell me more about how can improve on the following trait: ${feedback?.good[id]}`,
    });
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <div className="w-full h-full max-h-full flex flex-col gap-2">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        The Good
      </h2>
      <div className="grid grid-cols-2 gap-6 grow overflow-hidden">
        <div className="flex flex-col gap-2">
          {feedback &&
            feedback.good.map((line, idx) => {
              return (
                <div key={idx} className="">
                  <Card>
                    <CardHeader>{line}</CardHeader>
                    <CardContent className="grid">
                      <p className="text-muted-foreground">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque impedit ab distinctio, facere eaque iste
                        vitae? Repudiandae debitis quam facere?
                      </p>
                      <Button
                        disabled={isLoading}
                        className="justify-self-end"
                        onClick={() => {
                          handleClick(idx);
                        }}
                      >
                        Learn more
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
        <Card className="border-dashed border-2 flex flex-col overflow-hidden ">
          <div className="flex flex-col grow overflow-auto">
            <CardHeader>
              <CardTitle>Learn more</CardTitle>
            </CardHeader>
            <CardContent className="">
              {messages.slice(1).map((m, index) => (
                <p key={index} className="pb-2">
                  {m.role === 'user' ? 'User: ' : 'AI: '}
                  {m.content}
                </p>
              ))}
            </CardContent>
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
      </div>
    </div>
  );
};

export default InterpersonalPage;
