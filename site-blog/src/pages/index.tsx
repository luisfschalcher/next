import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { SupportSection } from "@/components/support-section";
import { CustomerStorySection } from "@/components/customer-story-section";

export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <SupportSection></SupportSection>
      <CustomerStorySection></CustomerStorySection>
    </article>
  );
}
