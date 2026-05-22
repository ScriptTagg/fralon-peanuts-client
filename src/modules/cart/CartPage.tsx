import PageHero from "@/shared/components/layout/PageHero";
import PageWrapper from "@/shared/components/shared/PageWrapper";
import CartSection from "./sections/CartSection";
import MobileCartSection from "./sections/MobileCartSection";

export default function CartPage() {
  return (
    <PageWrapper>
      <PageHero title="Shopping Cart" />
      <CartSection />
      <MobileCartSection />
    </PageWrapper>
  );
}
