
'use client';

import { AuthForm } from "@/components/auth/AuthForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoginPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.push('/');
        }
    }, [user, loading, router]);

    if (loading || user) {
        return (
            <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center p-4">
                <div className="w-full max-w-sm space-y-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
            </div>
        )
    }

    return (
        <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center p-4">
            <AuthForm mode="login" />
        </div>
    );
}
