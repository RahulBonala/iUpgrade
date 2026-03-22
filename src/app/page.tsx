import Hero from '@/components/Hero';
import TrendingList from '@/components/TrendingList';
import SavingsCalculator from '@/components/SavingsCalculator';
import FAQ from '@/components/FAQ';
import SocialProof from '@/components/SocialProof';
import HowItWorksSnippet from '@/components/HowItWorksSnippet';
import CompareDrawer from '@/components/CompareDrawer';

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <TrendingList />
      <SavingsCalculator />
      <HowItWorksSnippet />
      <FAQ />
      <CompareDrawer />
    </main>
  );
}
