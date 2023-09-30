'use client';

import { useChat } from 'ai/react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function Chat() {
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

  return (
    <Card className="border-dashed border-2 flex flex-col overflow-hidden ">
      <div className="flex flex-col grow overflow-auto">
        <CardHeader>
          <CardTitle>Learn more</CardTitle>
        </CardHeader>
        <CardContent className="">
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
