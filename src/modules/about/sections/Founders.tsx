import SectionHeading from "@/shared/components/shared/SectionHeading";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import { H5, P } from "@/shared/components/ui/Typography";

export default function Founders() {
  return (
    <SectionWrapper className="section-wrapper">
      <SectionHeading className="text-center">Hear from the owners</SectionHeading>
      <article className="border relative border-primary mx-auto translate-x-10 sm:translate-x-1/6 w-75 sm:w-85 md:w-110 radius-card bg-secondary h-80 sm:h-90 md:h-100 pr-2 sm:pr-4 md:pr-8 flex items-center">
        <div className="w-35 sm:w-44 md:w-57.5 h-85 sm:h-95 md:h-110 absolute left-0 rounded-full bg-accent -translate-x-1/2" />
        <div className="flex flex-col gap-6 max-w-50 md:max-w-60 ml-auto">
          <div className="">
            <H5>Lawrence Nunda</H5>
            <small className="text-foreground-muted text-caption-base">Co-Founder</small>
          </div>
          <P className="text-caption-base md:text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem
          </P>
        </div>
      </article>
    </SectionWrapper>
  );
}
