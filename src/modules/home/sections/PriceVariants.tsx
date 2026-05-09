import SectionHeading from "@/shared/components/shared/SectionHeading";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import { H5, P } from "@/shared/components/ui/Typography";
import PriceVariantCard from "../components/PriceVariantCard";
import { Button } from "@/shared/components/ui/button";
import { MoveRight } from "lucide-react";

export default function PriceVariants() {
  return (
    <SectionWrapper className="section-wrapper">
      <SectionHeading className="text-center">
        Business person or everyday consumer?
        <br />
        We've got you
      </SectionHeading>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 place-items-center gap-4 md:gap-6">
        <PriceVariantCard className="bg-primary">
          <H5 className="text-background">Retail Purchases</H5>
          <P className="text-secondary">Perfect for households and individuals buying for personal use.</P>
          <Button variant="accent" className="mt-2">
            Shop retail <MoveRight />
          </Button>
        </PriceVariantCard>

        <PriceVariantCard>
          <H5 className="">Wholesale & Bulk Orders</H5>
          <P>Designed for businesses, resellers, and food service providers.</P>
          <Button className="mt-2">
            Shop wholesale <MoveRight />
          </Button>
        </PriceVariantCard>
      </div>
    </SectionWrapper>
  );
}
