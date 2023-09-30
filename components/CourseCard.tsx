import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const CourseCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Udemy</CardTitle>
        <CardDescription className="text-xs truncate">
          Intro to Effective Communication
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
