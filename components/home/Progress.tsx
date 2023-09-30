'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Leadership',
    total: Math.floor(Math.random() * 100),
  },
  {
    name: 'Crane',
    total: Math.floor(Math.random() * 100),
  },
  {
    name: 'Teamwork',
    total: Math.floor(Math.random() * 100),
  },
  {
    name: 'Python',
    total: Math.floor(Math.random() * 100),
  },
  {
    name: 'Wellbeing',
    total: Math.floor(Math.random() * 100),
  },
];

export function Progress() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#000000"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#000000"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#000000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
