'use client';

import { useState } from 'react';

import { Category } from '@/app/technical/page';
import CourseCard from '@/components/techskill/technical-course-card';
import { Button } from '@/components/ui/button';

export default function SkillSection({
  courseCategory,
}: {
  courseCategory: Category;
}) {
  const [showMore, setShowMore] = useState(false);

  const renderCourseCards = () => {
    const coursesToRender = showMore
      ? courseCategory.courses
      : courseCategory.courses.slice(0, 3);

    return (
      <div className="grid grid-cols-3 gap-y-5 gap-x-10">
        {coursesToRender.map((course) => (
          <div key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="mx-10 leadership-section">
      <h2 className="text-3xl my-5 font-weight:400 dark:text-white">
        {courseCategory.name}
      </h2>
      {renderCourseCards()}
      {courseCategory.courses.length > 3 && (
        <Button
          className="my-5 hover:shadow-lg text-base"
          variant="outline"
          size="lg"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </section>
  );
}
