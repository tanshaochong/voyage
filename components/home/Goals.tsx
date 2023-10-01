'use client';

import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { USER } from '@/data/data';

export const Goals = () => {
  const renderGoals = (
    goals: {
      description: string;
      isComplete: boolean;
    }[]
  ) => {
    return goals.map((goal, idx) => {
      return (
        <Card key={goal.description + idx} className="w-48">
          <CardHeader>
            <CardTitle className="text-sm">{goal.description}</CardTitle>
            <CardDescription className="text-xs">
              {goal.isComplete ? 'Completed' : 'Not completed'}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="ml-auto" variant="ghost">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      );
    });
  };

  const calculateProgress = (
    goals: {
      description: string;
      isComplete: boolean;
    }[]
  ) => {
    const numIncomplete = goals.filter((goal) => goal.isComplete).length;
    console.log(Math.round(numIncomplete / goals.length) * 100);
    return Math.round((numIncomplete / goals.length) * 100);
  };

  return (
    <Card className="w-full mt-auto">
      <CardHeader>
        <CardTitle className="mb-4">Your goals progress</CardTitle>
        <Progress value={calculateProgress(USER.goals)} />
      </CardHeader>
      <CardContent>
        {/* Goals area */}
        <ScrollArea className="h-fit w-full">
          <div className="flex flex-row gap-4 pb-4">
            {renderGoals(USER.goals)}
          </div>
          <ScrollBar orientation="horizontal"></ScrollBar>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
