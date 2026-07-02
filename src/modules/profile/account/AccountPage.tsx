"use client";
import PageWrapper from "@/shared/components/shared/PageWrapper";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import { LogOut } from "lucide-react";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import AddressDetailsForm from "./components/AddressDetailsForm";
import LogoutButton from "@/modules/auth/logout/components/LogoutButton";
import AccountInfo from "./components/AccountInfo";
import PageHero from "@/shared/components/layout/PageHero";
import { useAuth } from "@/modules/auth/shared/hooks/useAuth";

export default function AccountPage() {
  const { profile: user } = useAuth();

  return (
    <PageWrapper>
      <PageHero title="Account" />
      <SectionWrapper>
        <div className="flex flex-col gap-6 max-w-217.5 mx-auto">
          <AccountInfo user={user} />

          <div className="border border-foreground-border radius-card p-4 sm:p-6 flex flex-col gap-4">
            <PersonalDetailsForm user={user} />
          </div>

          <div className="border border-foreground-border radius-card p-4 sm:p-6 flex flex-col gap-4">
            <AddressDetailsForm user={user} />
          </div>
          <div className="self-end">
            <LogoutButton>
              <LogOut className="size-5" /> Log out
            </LogoutButton>
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}
