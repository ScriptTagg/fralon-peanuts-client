import PageHero from "@/shared/components/layout/PageHero";
import PageWrapper from "@/shared/components/shared/PageWrapper";
import CheckoutForm from "./components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <PageWrapper>
      <PageHero title="Checkout" />
      <CheckoutForm />
    </PageWrapper>
  );
}
