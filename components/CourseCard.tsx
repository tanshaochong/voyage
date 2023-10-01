import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CourseCardProps {
  provider: string;
  courseName: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ provider, courseName }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{provider}</CardTitle>
        <CardDescription className="text-xs truncate">
          {courseName}
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter>
        <Button className="ml-auto" variant="ghost">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
