import PageWrapper from "@/shared/components/shared/PageWrapper";
import OrderHistorySection from "./sections/OrderHistorySection";
import PageHero from "@/shared/components/layout/PageHero";

export default function OrderHistoryPage() {
  return (
    <PageWrapper>
      <PageHero title="Order History" />
      <OrderHistorySection />
    </PageWrapper>
  );
}
