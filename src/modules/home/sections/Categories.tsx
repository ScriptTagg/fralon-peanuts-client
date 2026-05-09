import SectionHeading from "@/shared/components/shared/SectionHeading";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import CategoryCard from "../components/CategoryCard";
import { Button } from "@/shared/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Categories() {
  return (
    <SectionWrapper className="section-wrapper">
      <SectionHeading className="text-center">We do everything peanuts</SectionHeading>
      <div className="flex flex-col gap-6 items-center lg:flex-row w-full">
        <CategoryCard>
          <Button variant="ghost">
            Peanut Butter <MoveRight />
          </Button>
        </CategoryCard>
        <CategoryCard>
          <Button variant="ghost">
            Peanut Flour <MoveRight />
          </Button>
        </CategoryCard>
        <CategoryCard>
          <Button variant="ghost">
            Roasted Peanuts <MoveRight />
          </Button>
        </CategoryCard>
      </div>
    </SectionWrapper>
  );
}
