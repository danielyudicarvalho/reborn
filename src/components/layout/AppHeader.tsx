
"use client";

import Link from 'next/link';
import { Flame, Menu, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export function AppHeader() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden">
            <Menu />
        </SidebarTrigger>
        <Link href="/" className="hidden items-center gap-2 md:flex">
          <Flame className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tighter">Blaze Reborn</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        {loading ? (
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        ) : user ? (
          <>
            <span className="hidden sm:inline text-sm text-muted-foreground">Olá, {user.displayName || user.email}</span>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Cadastrar-se</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
