import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import ReviewCard from "./ReviewCard";
import { reviews } from "../content/about-content";

export default function TestimonialsCarousel() {
  return (
    <Carousel className="flex flex-col items-center gap-6">
      <CarouselContent className="flex md:gap-6 items-center">
        {reviews.map((review) => (
          <CarouselItem key={review.id} className="w-fit md:pl-6 basis-full">
            <ReviewCard review={review} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-fit flex items-center justify-between gap-2">
        <CarouselPrevious variant="ghost" className="p-5 text-primary" />
        <CarouselNext variant="ghost" className="p-5 text-primary" />
      </div>
    </Carousel>
  );
}
