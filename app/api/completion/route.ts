import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';
import type { ChatCompletionCreateParams } from 'openai/resources/chat/completions';

import { RAW_FEEDBACK } from '@/data/data';

const functions: ChatCompletionCreateParams.Function[] = [
  {
    name: 'summarise_feedback',
    description:
      'I want you to act as a helpful career coach. The user came to you to summarise the feedback received by him, give him 2 positive and 1 area for improvement. Speak in the first person perspective and refer to the user as "You"',
    parameters: {
      type: 'object',
      properties: {
        positive1: {
          type: 'string',
          description:
            'first positive feedback in one phrase. refer to the recipient as "You"',
        },
        positive2: {
          type: 'string',
          description:
            'second positive feedback in one phrase. refer to the recipient as "You"',
        },
        afi: {
          type: 'string',
          description:
            'one area for improvement in one phrase. refer to the recipient as "You"',
        },
      },
      required: ['positive1', 'positive2', 'afi'],
    },
  },
];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// And use it like this:
export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
    functions,
  });
  //@ts-ignore
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
