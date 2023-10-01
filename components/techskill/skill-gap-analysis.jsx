'use client';
import { PersonStanding } from 'lucide-react';
import React from 'react';

import Advice from '@/components/techskill/Advice';
import { Separator } from '@/components/ui/separator';
import {
  POSITION_PROGRESSION,
  POSITION_TO_SKILL_LEVEL,
  USER,
} from '@/data/data';
import { cn } from '@/lib/utils';

const SkillGapAnalysis = () => {
  return (
    <div className="space-y-6 mb-10">
      {/* <h3 className="text-xl font-semibold">
        Your Career Roadmap / Skill Gap Analysis
      </h3> */}
      <div className="flex gap-2 justify-center flex-wrap">
        {USER.skills.map((skill, idx) => {
          return (
            <span
              key={idx}
              className="bg-blue-100 p-2 rounded-md font-light text-center"
            >
              {skill.title}
              <br />
              <span className="font-semibold">{skill.level}</span>
            </span>
          );
        })}
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols:2 md:grid-cols-3 lg:grid-cols-4 items-start w-full">
        {POSITION_PROGRESSION.map((pos, idx) => {
          return (
            <div key={idx} className="grid gap-2 mb-4">
              <li
                className={cn(
                  "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block",
                  pos in USER.positions
                    ? 'after:border-blue-100 text-blue-600'
                    : ''
                )}
              >
                <span
                  className={cn(
                    'flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md lg:h-10 lg:w-10 ',
                    pos in USER.positions ? 'bg-blue-100' : ''
                  )}
                >
                  <PersonStanding />
                </span>
              </li>
              <span className="text-muted-foreground text-sm font-semibold">
                {pos}
              </span>
              <span className="text-muted-foreground text-sm font-light">
                {USER.positions[pos]
                  ? `${USER.positions[pos].start} - ${
                      USER.positions[pos].end == -1
                        ? 'Present'
                        : USER.positions[pos].end
                    }`
                  : '-'}
              </span>
              <span className="text-muted-foreground text-sm ">
                {Object.entries(POSITION_TO_SKILL_LEVEL[pos]).map(
                  ([key, value], idx) => {
                    return (
                      <p key={idx}>
                        <span className="font-light">{key}</span>:
                        <span
                          className={cn(
                            USER.skills.filter((s) => s.title === key)[0]
                              .level > value
                              ? 'text-green-500'
                              : 'text-orange-500'
                          )}
                        >
                          &nbsp;{value}
                        </span>
                      </p>
                    );
                  }
                )}
              </span>
            </div>
          );
        })}
      </ol>
      <Separator className="mb-4" />
      <div className="">
        <p className="text-lg font-semibold mb-2">
          Advice from our intelligent career coach{' '}
          <span className="ml-4 align-middle text-xs font-light text-muted-foreground">
            powered by {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="/assets/OpenAI_Logo.png"
              alt=""
              className="mb-0.5 ml-1 inline-block h-4 align-middle"
            />
          </span>
        </p>
        <Advice />
      </div>
    </div>
  );
};

export default SkillGapAnalysis;
