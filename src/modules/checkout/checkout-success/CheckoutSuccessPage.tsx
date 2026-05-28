import PageHero from "@/shared/components/layout/PageHero";
import PageWrapper from "@/shared/components/shared/PageWrapper";
import OrderDetails from "./sections/OrderDetails";
import OrderSuccessSummary from "./components/OrderSuccessSummary";
import NavButton from "@/shared/components/ui/NavButton";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";

export default function CheckoutSuccessPage() {
  return (
    <PageWrapper>
      <PageHero title="Order success" />
      <SectionWrapper className="flex flex-col gap-6">
        <OrderDetails />
        <OrderSuccessSummary />
        <NavButton path="/" className="mx-auto">
          Back to Homepage
        </NavButton>
      </SectionWrapper>
    </PageWrapper>
  );
}
