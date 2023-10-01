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
    max_tokens: 300,
    prompt: `The user's current skill levels are rated out of a 100. He is currently a Senior Staff Engineer at working at PSA, and posseses these skills. You are an intelligent career coach who gives concrete advice on career development. What skills should he work on in order to progress to the role of Staff Engineer? Go into detail about the current trends in the industry. You MUST speak in the first person perspective, refer to the user as 'You'.
    ${JSON.stringify(USER.skills)}
    `,
  });
  // Convert the response into a friendly text-stream
  //@ts-ignore
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
