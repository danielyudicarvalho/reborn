import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Cassino',
    description: 'Os melhores jogos de cassino online estão aqui.',
    href: '/casino',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'casino table',
  },
  {
    title: 'Esportes',
    description: 'Aposte nos seus times e atletas favoritos.',
    href: '/sports',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sports stadium',
  },
];

export function GameSections() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title} className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-primary/20">
            <Image
              src={section.imageUrl}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={section.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative flex h-80 flex-col justify-end p-6">
              <h2 className="font-headline text-3xl font-bold text-white">{section.title}</h2>
              <p className="mt-2 text-white/90">{section.description}</p>
              <Button asChild className="mt-4 w-fit">
                <Link href={section.href}>
                  Ir para {section.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
