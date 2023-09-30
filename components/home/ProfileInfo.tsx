'use client';

interface Skill {
  title: String;
  level: number;
}

interface ProfileInfoProps {
  skills: Skill[];
}

export function ProfileInfo({ skills }: ProfileInfoProps) {
  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill: Skill) => {
      return (
        <div key={skill.level} className="flex items-center w-1/2">
          <div className="space-y-1">
            <p className="text-sm font-medium">{skill.title}</p>
          </div>
          <div className="ml-auto font-medium">
            <p className="text-sm font-medium">{skill.level}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center h-fit w-full my-4">
      {renderSkills(skills)}
    </div>
  );
}
