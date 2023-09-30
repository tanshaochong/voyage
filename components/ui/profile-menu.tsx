import { ChevronRight } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FIREBASE_USER } from '@/data/data.js';

export function ProfileMenu() {
  const words = FIREBASE_USER.displayName.split(' ');
  let initials = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    initials += word[0].toUpperCase();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex h-fit align-middle rounded-full p-3"
        >
          <div className="flex items-center justify-start gap-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-base font-medium leading-none text-left mb-1">
                {FIREBASE_USER.displayName}
              </p>
              <p className="text-xs text-muted-foreground text-left">
                {FIREBASE_USER.currentPos}
              </p>
            </div>
            <ChevronRight />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {FIREBASE_USER.displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {FIREBASE_USER.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
