import PageWrapper from "@/shared/components/shared/PageWrapper";
import Support from "./sections/Support";
import Help from "./sections/Help";
import ReportBug from "./sections/ReportBug";
import PageHero from "@/shared/components/layout/PageHero";

export default function HelpAndSupportPage() {
  return (
    <PageWrapper>
      <PageHero title="Help & Support" />
      <ReportBug />
      <Support />
      <Help />
    </PageWrapper>
  );
}
