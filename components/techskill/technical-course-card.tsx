import { useState } from 'react';

import { Course } from '@/app/technical/page';

export default function CourseCard({ course }: { course: Course }) {
  const [visibleSkills] = useState(course.skills);

  return (
    <div className="relative flex flex-col rounded-[20px] max-w-[450px] bg-white bg-clip-border shadow-3xl shadow-md shadow-shadow-500 w-full p-4 border-gray-200 border hover:shadow-lg transition-transform hover:scale-105">
      <div className="h-full w-full">
        <div className="mb-3 relative w-full">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={course.imgurl}
              alt="filler"
              className="b-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            />
          }
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <div className="mb-2">
            <p className="mt-1 text-md font-medium text-gray-600 md:mt-2">
              {course.company}
            </p>
            <p className="text-lg font-bold text-navy-700"> {course.title} </p>
          </div>
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <div className="flex">
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {course.coursetype}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          {visibleSkills.map((skill) => (
            <button
              key={skill}
              className="bg-gray-100 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-light text-sm skills-button"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
