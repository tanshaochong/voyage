import SkillSection from '@/components/techskill/technical-skill-section';
import courseData from '@/data/courses.json';
import { FIREBASE_USER } from '@/data/data';

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
    <div className="container py-4 grid grid-cols-1">
      <h1 className="text-3xl font-semibold text-left mr-auto mb-8">
        Hi {FIREBASE_USER.displayName.split(' ')[0]},
        <br />
        Let&apos;s empower your career with these curated courses
      </h1>

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
