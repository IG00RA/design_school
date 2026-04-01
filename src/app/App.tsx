import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProgramSection } from './components/ProgramSection';
import { ToolsSection } from './components/ToolsSection';
import { LearningFormatSection } from './components/LearningFormatSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#16112A] text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PortfolioSection />
        <ProgramSection />
        <ToolsSection />
        <LearningFormatSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
