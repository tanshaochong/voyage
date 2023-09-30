'use client';

import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { handleLogout } from '@/utils/authUtils';

const LogoutDialogue = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={cn(buttonVariants({ variant: 'default' }))}>
        Logout
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Logout Confirmation</DialogTitle>
          <DialogDescription>
            Are you sure you want to logout?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleLogout().then(() => {
                setOpen(false);
              });
            }}
          >
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialogue;
