import PageHero from "@/shared/components/layout/PageHero";
import PageWrapper from "@/shared/components/shared/PageWrapper";
import OrderDetails from "./sections/OrderDetails";

export default function CheckoutSuccessPage() {
  return (
    <PageWrapper>
      <PageHero title="Order success" />
      <OrderDetails />
    </PageWrapper>
  );
}
