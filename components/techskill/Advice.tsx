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
        <p>{completion}</p>
      )}
    </div>
  );
};

export default Advice;
