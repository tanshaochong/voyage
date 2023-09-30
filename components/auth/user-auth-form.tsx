'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Github, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { userAuthSchema } from '@/lib/validations/auth';
import {
  handleGoogleOAuth,
  handleLogin,
  handleRegister,
} from '@/utils/authUtils';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'login' | 'register';
}

type FormData = z.infer<typeof userAuthSchema>;

export default function UserAuthForm({
  className,
  type,
  ...props
}: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    if (type == 'login') {
      handleLogin(data.email, data.password).then(() => {
        setIsLoading(false);
        router.push('/');
      });
    }
    if (type == 'register') {
      handleRegister(data.email, data.password).then(() => {
        setIsLoading(false);
        router.push('/');
      });
    }
  }

  const router = useRouter();

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading || isGoogleLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email">Password</Label>
            <Input
              id="password"
              placeholder="Your password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading || isGoogleLoading}
              {...register('password')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={false}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {type.charAt(0).toUpperCase() + type.slice(1)} with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-4">
        <button
          type="button"
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGoogleLoading(true);
            handleGoogleOAuth().then(() => {
              setIsGoogleLoading(false);
              router.push('/');
            });
          }}
          disabled={isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Image
              src={'/assets/google.svg'}
              alt="google"
              className="mr-2 h-4 w-4"
              height={16}
              width={16}
            />
          )}
          Google
        </button>
        <button
          type="button"
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGitHubLoading(true);
          }}
          // disabled={isGitHubLoading}
          disabled={true}
        >
          {isGitHubLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Github className="mr-2 h-4 w-4" />
          )}{' '}
          Github
        </button>
      </div>
    </div>
  );
}
