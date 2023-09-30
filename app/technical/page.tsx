import PersonaliseSection from '@/components/techskill/personalised-section';
import SkillSection from '@/components/techskill/technical-skill-section';
import courseData from '@/data/courses.json';
import { FIREBASE_USER } from '@/data/data';
import recommendData from '@/data/recommended.json';

export type Course = {
  id: string;
  title: string;
  company: string;
  coursetype: string;
  imgurl: string;
  skills: string[];
};

export type Category = {
  name: string;
  courses: Course[];
};

export type Categories = {
  mainCategory: Category[];
};

export default function TechnicalSkillPage() {
  return (
    <div className="container py-4">
      <h1 className="text-3xl font-semibold text-left mr-auto mb-12">
        Hi {FIREBASE_USER.displayName.split(' ')[0]},
        <br />
        Let&apos;s empower your career with these curated courses
      </h1>
      <div className="mb-10">
        <PersonaliseSection recommendedCourses={recommendData.courses} />
      </div>
      <div className="flex flex-col items-center">
        {courseData.mainCategory.map((categories, idx) => (
          <div className="flex justify-center mb-10" key={idx}>
            <SkillSection courseCategory={categories} />
          </div>
        ))}
      </div>
    </div>
  );
}
