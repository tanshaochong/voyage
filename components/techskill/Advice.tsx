'useClient';

import { useCompletion } from 'ai/react';
import React, { useEffect } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';

const Advice = () => {
  const { completion, complete, isLoading } = useCompletion({
    api: '/api/completion/text',
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'An error occured',
        description: 'Please refresh the page',
      });
    },
  });

  useEffect(() => {
    complete('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLineBreaks = (str: string): string[] => {
    const arr = str.split('.');
    const res = [];
    for (let i = 0; i < arr.length; i += 3) {
      let s = arr[i];
      arr[i + 1] ? (s += arr[i + 1] + '. ') : null;
      arr[i + 2] ? (s += arr[i + 2] + '. ') : null;
      res.push(s);
    }
    return res;
  };

  return (
    <div>
      {isLoading ? (
        <div className="space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </div>
      ) : (
        <p>
          {completion &&
            addLineBreaks(completion).map((para, idx) => {
              return (
                <span key={idx}>
                  <span>{para}</span>
                  <br />
                  <br />
                </span>
              );
            })}
        </p>
      )}
    </div>
  );
};

export default Advice;
