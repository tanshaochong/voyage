'use client';

import { Home, LayoutDashboard, Users2, Wrench } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
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
        <div
          key={item.href}
          className={cn(
            pathname === item.href
              ? 'bg-muted hover:bg-muted cursor-pointer'
              : 'hover:bg-muted cursor-pointer',
            'flex flex-row items-center p-2 rounded'
          )}
        >
          {iconMappings[item.href]}
          <Link
            href={item.href}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start'
            )}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  );
}
