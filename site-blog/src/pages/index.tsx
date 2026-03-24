import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { SupportSection } from "@/components/support-section";
import { CustomerStorySection } from "@/components/customer-story-section";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <SupportSection></SupportSection>
      <CustomerStorySection></CustomerStorySection>
      <CallToAction></CallToAction>
    </article>
  );
}
