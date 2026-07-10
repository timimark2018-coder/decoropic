import type { Locale } from "@/content/types";
import {
  HomeHero,
  HomeBrandPositioning,
  HomeWhyChooseUs,
  HomeOurServices,
  HomeEstimatorSection,
  HomeSolutionsBySpace,
  HomeProductBridge,
  HomeGlobalSourcing,
  HomeFinalCta
} from "@/components/home";

type HomePageProps = {
  locale: Locale;
};

export async function HomePage({ locale }: HomePageProps) {
  return (
    <>
      <HomeHero locale={locale} />
      <HomeBrandPositioning locale={locale} />
      <HomeWhyChooseUs locale={locale} />
      <HomeOurServices locale={locale} />
      <HomeEstimatorSection locale={locale} />
      <HomeSolutionsBySpace locale={locale} />
      <HomeProductBridge locale={locale} />
      <HomeGlobalSourcing locale={locale} />
      <HomeFinalCta locale={locale} />
    </>
  );
}
