import Link from 'next/link';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { RAW_FEEDBACK, USER } from '@/data/data';

const page = () => {
  return (
    <div className="container py-2 grid grid-cols-1 gap-2">
      <Alert className="bg-blue-50 border-none">
        <AlertTitle className="text-slate-700 text-lg">
          Welcome to the behind-the-scenes of our demo.
        </AlertTitle>
        <AlertDescription className="text-slate-700">
          Found here is the raw data that we pass into our AI models to generate
          personalised recommendations.
        </AlertDescription>
      </Alert>
      <p className="font-semibold mt-2">
        Parameters for our intelligent career coach
        <span className="ml-4 align-middle text-xs font-light text-muted-foreground">
          powered by {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="/assets/OpenAI_Logo.png"
            alt=""
            className="mb-0.5 ml-1 inline-block h-4 align-middle"
          />
        </span>
      </p>
      <div className="p-4 border-2 rounded-md">
        <p className="text-muted-foreground font-light text-xs">
          Technical Skills
        </p>
        <p className="text-sm">
          <pre className="whitespace-pre-wrap text-xs">
            {JSON.stringify(
              {
                model: 'gpt-3.5-turbo-instruct',
                temperature: 0.6,
                max_tokens: 500,
                prompt: `I want you to act as a helpful career coach who gives concrete advice on career development. A user has come to you to seek advice on how to improve his technical skills to better suit his current role and facilitate his career progression. The user is currently a Senior Engineer working at PSA. What skills should he work on in order to progress to the role of Staff Engineer? Go into detail about the current trends in the industry. You MUST speak in the first person perspective, refer to the user as 'You'. Here are the user's skills given in a JSON format: [USER.SKILLS]. The user's current skill levels are rated out of a 100.`,
              },
              null,
              4
            )}
          </pre>
        </p>
      </div>
      <div className="p-4 border-2 rounded-md">
        <p className="text-muted-foreground font-light text-xs">
          Interpersonal Skills
        </p>
        <p className="text-sm">
          <pre className="whitespace-pre-wrap text-xs">
            {JSON.stringify(
              {
                model: 'gpt-3.5-turbo',
                functions: '[CUSTOM FUNCTION]',
                prompt: `I want you to act as a helpful career coach. The user came to you to summarise the feedback received by him, give him 2 positive and 1 area for improvement. Speak in the first person perspective and refer to the user as "You"`,
              },
              null,
              4
            )}
          </pre>
        </p>
      </div>
      <div className="p-4 border-2 rounded-md">
        <p className="text-muted-foreground font-light text-xs">Chatbot</p>
        <p className="text-sm">
          <pre className="whitespace-pre-wrap text-xs">
            {JSON.stringify(
              {
                model: 'gpt-3.5-turbo',
                functions: '[CUSTOM FUNCTION]',
                prompt: `I want you to act as a helpful career coach who gives concrete advice on career development. The user is curious about the topic of interpersonal skills, and wishes to learn more about how he can build on his strengths and work on his areas for improvements. Answer the users' questions relating to interpersonal skills, limiting your responses to 4 sentences.`,
              },
              null,
              4
            )}
          </pre>
        </p>
      </div>
      <p className="font-semibold mt-2">John&apos;s raw feedback</p>
      {RAW_FEEDBACK.map((item, idx) => {
        return (
          <div key={idx} className="p-4 border-2 rounded-md">
            <p className="text-muted-foreground font-light text-xs">
              Anonymous {idx}
            </p>
            <p className="text-sm">{item}</p>
          </div>
        );
      })}
      <p className="font-semibold mt-2">John&apos;s profile</p>
      <pre className="bg-gray-50 rounded-md p-4 whitespace-pre-wrap text-xs">
        {JSON.stringify(USER, null, 4)}
      </pre>
    </div>
  );
};

export default page;
