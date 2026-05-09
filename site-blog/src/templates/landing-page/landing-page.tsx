import { HeroSection, FeatureSection, SupportSection, CustomerStorySection } from "./sections"

export const LandingPage = () => {
    return (
        <article className="flex flex-col gap-10 md:gap-20">
            <HeroSection></HeroSection>
            <FeatureSection></FeatureSection>
            <SupportSection></SupportSection>
            <CustomerStorySection></CustomerStorySection>
        </article>
    )
}