'use client';

import { useEffect } from 'react';

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
        <div key={skill.level} className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{skill.title}</p>
            <p className="text-sm text-muted-foreground">
              Effective communication
            </p>
          </div>
          <div className="ml-10 mr-5 font-medium">{skill.level}</div>
        </div>
      );
    });
  };

  return <div className="space-y-4 h-fit my-4">{renderSkills(skills)}</div>;
}
