'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface Skill {
  title: String;
  level: number;
}

interface ProfileInfoProps {
  skills: Skill[];
}

export function Progress({ skills }: ProfileInfoProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={skills}>
        <XAxis
          dataKey="title"
          stroke="#000000"
          fontSize={10}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#000000"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          type="number"
          domain={[0, 100]}
        />
        <Bar dataKey="level" fill="#000000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
