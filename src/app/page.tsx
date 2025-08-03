import { WelcomeBanner } from '@/components/home/WelcomeBanner';
import { GameSections } from '@/components/home/GameSections';
import { PaymentSection } from '@/components/home/PaymentSection';
import { SponsorshipSection } from '@/components/home/SponsorshipSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 py-8">
      <WelcomeBanner />
      <GameSections />
      <PaymentSection />
      <SponsorshipSection />
    </div>
  );
}
