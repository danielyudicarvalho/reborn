import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function WelcomeBanner() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="overflow-hidden bg-card/50">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 text-center md:p-12 md:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Onde a diversão <span className="text-primary">nunca</span> para!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Junte-se a milhares de jogadores e descubra um universo de jogos e apostas esportivas.
            </p>
            <div className="mt-8 flex justify-center gap-4 md:justify-start">
              <Button size="lg" asChild>
                <Link href="/register">Cadastrar-se agora</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden h-64 md:h-auto md:block">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Promotional banner for Blaze Reborn"
              fill
              className="object-cover"
              data-ai-hint="gaming excitement"
              priority
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
