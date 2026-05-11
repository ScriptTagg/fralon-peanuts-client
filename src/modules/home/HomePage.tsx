import PageWrapper from "@/shared/components/shared/PageWrapper";
import ContactForm from "../contact/components/ContactForm";
import Testimonials from "../about/sections/Testimonials";
import WasteRecycle from "./sections/WasteRecycle";
import WhyUs from "../about/sections/WhyUs";
import PriceVariants from "./sections/PriceVariants";
import ProductsSection from "../products/sections/ProductsSection";
import KnowUs from "./sections/KnowUs";
import Categories from "./sections/Categories";
import Hero from "./sections/Hero";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Categories />
      <KnowUs />
      <ProductsSection />
      <PriceVariants />
      <WhyUs />
      <WasteRecycle />
      <Testimonials />
      <ContactForm />
    </PageWrapper>
  );
}
