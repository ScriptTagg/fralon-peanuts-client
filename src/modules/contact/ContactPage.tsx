import PageWrapper from "@/shared/components/shared/PageWrapper";
import PageHeading from "@/shared/components/shared/PageHeading";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import ContactAction from "@/modules/contact/sections/ContactAction";
import WorkingHours from "@/modules/contact/sections/WorkingHours";
import LocationMap from "@/modules/contact/sections/LocationMap";
import ContactForm from "./components/ContactForm";
import PageHero from "@/shared/components/layout/PageHero";

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero title="Contact Us" />
      <ContactAction />
      <ContactForm />
      <WorkingHours />
      <LocationMap />
    </PageWrapper>
  );
}
