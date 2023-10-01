'use client';

import {
  GraduationCap,
  Home,
  LayoutDashboard,
  Users2,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  const iconMappings: Record<string, JSX.Element> = {
    '/home': <Home className="w-5 h-5" />,
    '/overview': <LayoutDashboard className="w-5 h-5" />,
    '/technical': <Wrench className="w-5 h-5" />,
    '/interpersonal': <Users2 className="w-5 h-5" />,
    '/learn': <GraduationCap className="w-5 h-5" />,
  };

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex justify-start gap-4 h-12',
            pathname === item.href ? 'bg-muted' : ''
          )}
        >
          {iconMappings[item.href]} {item.title}
        </Link>
      ))}
      <Alert className="bg-blue-50 border-none">
        <AlertTitle className="text-slate-700">Demo Only</AlertTitle>
        <AlertDescription className="text-slate-700">
          Click
          <Link href="/demo" className={'underline'}>
            &nbsp;here&nbsp;
          </Link>
          to see the raw data that we pass into our AI models.
        </AlertDescription>
      </Alert>
    </nav>
  );
}
