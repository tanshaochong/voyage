import PersonaliseSection from '@/components/techskill/personalised-section';
import SkillGapAnalysis from '@/components/techskill/skill-gap-analysis';
import { Separator } from '@/components/ui/separator';
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
    <div className="container py-4 grid grid-cols-1">
      <h1 className="text-3xl font-semibold text-left mr-auto mb-8">
        Hi {FIREBASE_USER.displayName.split(' ')[0]},
        <br />
        Let&apos;s chart your career into the future
      </h1>
      <p className="text-lg font-semibold mb-4">Your skill gap analysis</p>
      <SkillGapAnalysis />
      <Separator className="mb-4" />
      <p className="text-lg font-semibold mb-4">
        Curated courses for you{' '}
        <span className="ml-4 align-middle text-xs font-light text-muted-foreground">
          powered by {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="/assets/OpenAI_Logo.png"
            alt=""
            className="mb-0.5 ml-1 inline-block h-4 align-middle"
          />
        </span>
      </p>
      <PersonaliseSection recommendedCourses={recommendData.courses} />
    </div>
  );
}
