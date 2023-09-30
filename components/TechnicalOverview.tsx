import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const TechnicalOverview = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Based on your profile</CardTitle>
        <CardDescription>
          Here are some highlight courses that best suits you
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="grid grid-cols-2 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">More details</Button>
      </CardFooter>
    </Card>
  );
};

export default TechnicalOverview;
