import { useState } from 'react';

export default function PersonaliseCard({ course }) {
  const [visibleSkills] = useState(course.skills);
  return (
    <div className="flex rounded-[20px] h-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="ml-8 mr-4 my-5 h-full w-full">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={course.imgurl}
            alt="filler"
            className="h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
          />
        }
      </div>
      <div className="flex flex-col my-10 justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {course.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {course.company}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {course.description}
        </p>

        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
            {course.coursetype}
          </p>
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
