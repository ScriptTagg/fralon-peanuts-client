import SectionHeading from "@/shared/components/shared/SectionHeading";
import { P } from "@/shared/components/ui/Typography";
import { Check } from "lucide-react";
import Ordervalue from "../components/Ordervalue";

export default function OrderDetails() {
  return (
    <div className="flex flex-col gap-4 w-full items-center max-w-229 mx-auto">
      <Check className="size-20 text-success" />
      <div className="flex items-center flex-col gap-2">
        <SectionHeading className="text-center">Your order has been placed</SectionHeading>
        <P className="text-center">Thank you for shopping with us, your order has been received</P>
      </div>
      <div className="radius-card bg-secondary gap-6 flex flex-wrap items-center justify-between p-6 w-full">
        <Ordervalue title="Order ID">#89h94ha982jh849</Ordervalue>
        <Ordervalue title="Payment Method">Mpesa</Ordervalue>
        <Ordervalue title="Transaction ID">#ufa8a784ru7y5f</Ordervalue>
        <Ordervalue title="Delivery Date">11 June 2026</Ordervalue>
      </div>
    </div>
  );
}
