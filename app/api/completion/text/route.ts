import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

import { USER } from '@/data/data';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    stream: true,
    temperature: 0.6,
    max_tokens: 500,
    prompt: `I want you to act as a helpful career coach who gives concrete advice on career development. A user has come to you to seek advice on how to improve his technical skills to better suit his current role and facilitate his career progression. The user is currently a Senior Engineer working at PSA. What skills should he work on in order to progress to the role of Staff Engineer? Go into detail about the current trends in the industry. You MUST speak in the first person perspective, refer to the user as 'You'.
    Here are the user's skills given in a JSON format: ${JSON.stringify(
      USER.skills
    )}. The user's current skill levels are rated out of a 100.
    `,
  });
  // Convert the response into a friendly text-stream
  //@ts-ignore
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
