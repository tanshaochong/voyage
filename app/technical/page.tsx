import SkillSection from '@/components/techskill/technical-skill-section';
import courseData from '@/data/courses.json';

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
    <div className="flex flex-col justify-center">
      <h1 className="mt-10 text-2xl font-medium text-center mb-10">
        Empowering Your Career. Curated For you.
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
