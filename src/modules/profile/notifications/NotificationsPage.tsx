import PageWrapper from "@/shared/components/shared/PageWrapper";
import NotificationsSection from "./sections/NotificationsSection";
import PageHero from "@/shared/components/layout/PageHero";

export default function NotificationsPage() {
  return (
    <PageWrapper>
      <PageHero title="Notifications" />
      <NotificationsSection />
    </PageWrapper>
  );
}
