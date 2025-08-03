import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const sponsors = [
  {
    name: 'Neymar Jr',
    imageUrl: 'https://placehold.co/150x150.png',
    imageHint: 'athlete portrait',
    description: 'Embaixador Global',
  },
  {
    name: 'Botafogo',
    imageUrl: 'https://placehold.co/150x150.png',
    imageHint: 'sports team logo',
    description: 'Patrocinador Master',
  },
  {
    name: 'Atlético-GO',
    imageUrl: 'https://placehold.co/150x150.png',
    imageHint: 'sports team logo',
    description: 'Patrocinador Master',
  },
   {
    name: 'Santos FC',
    imageUrl: 'https://placehold.co/150x150.png',
    imageHint: 'sports team logo',
    description: 'Patrocinador Master',
  },
];

export function SponsorshipSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-headline text-3xl font-bold">
        Nossos Patrocínios
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {sponsors.map((sponsor) => (
          <Card key={sponsor.name} className="flex flex-col items-center justify-center p-6 text-center transition-all hover:bg-card/80 hover:scale-105">
             <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    data-ai-hint={sponsor.imageHint}
                />
             </div>
            <CardContent className="mt-4 p-0">
              <h3 className="text-lg font-semibold">{sponsor.name}</h3>
              <p className="text-sm text-muted-foreground">{sponsor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
