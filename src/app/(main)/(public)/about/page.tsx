import PageWrapper from "@/shared/components/shared/PageWrapper";
import PageHeading from "@/shared/components/shared/PageHeading";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import AboutIntro from "@/modules/about/sections/AboutIntro";
import ProductsSection from "@/modules/products/sections/ProductsSection";
import Identity from "@/modules/about/sections/Identity";
import WhyUs from "@/modules/about/sections/WhyUs";
import Testimonials from "@/modules/about/sections/Testimonials";
import Founders from "@/modules/about/sections/Founders";

export default function About() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <PageHeading>About Page</PageHeading>
      </SectionWrapper>
      <AboutIntro />
      <Identity />
      <Founders />
      <WhyUs />
      <ProductsSection />
      <Testimonials />
    </PageWrapper>
  );
}
