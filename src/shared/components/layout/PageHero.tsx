import { Breadcrumbs } from "../shared/Breadcrumbs";
import Header from "./Header";
import SectionWrapper from "../shared/SectionWrapper";
import PageHeading from "../shared/PageHeading";

export default function PageHero({ title }: { title: string }) {
  return (
    <div className="relative bg-[url('/images/fralon-hero_img.png')] bg-center bg-cover">
      <Header />
      <SectionWrapper className="flex flex-col gap-2 py-4">
        <PageHeading className="capitalize">{title}</PageHeading>
        <Breadcrumbs />
      </SectionWrapper>
    </div>
  );
}
