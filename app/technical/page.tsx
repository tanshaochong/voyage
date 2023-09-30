import SkillSection from '@/components/technical-skill-section';
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
  // list of skill sections
  return (
    <div>
      {courseData.mainCategory.map((categories, idx) => (
        <div className="flex justify-center mb-10" key={idx}>
          <SkillSection courseCategory={categories} />
        </div>
      ))}
    </div>
  );
}
