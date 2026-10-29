import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this site handles contact messages and visitor analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Privacy"
        title="Plain-language"
        accent="privacy notice."
        lead="This is a small personal site. Here is what happens with your information."
      />
      <section className="mx-auto w-full max-w-[var(--content-frame)] px-6 py-12 sm:px-8 lg:px-[50px]">
        <div className="max-w-[65ch] space-y-8 text-lead text-body">
          <div>
            <h2 className="font-display text-card-title font-semibold text-black">Messages you send</h2>
            <p className="mt-2">
              If you use the contact form or email {SITE.email}, I use your name, email address and
              message only to reply to you. I don&apos;t sell or share them.
            </p>
          </div>
          <div>
            <h2 className="font-display text-card-title font-semibold text-black">Visitor analytics</h2>
            <p className="mt-2">
              The site uses Vercel Web Analytics to count page views and see which pages are
              visited. It doesn&apos;t use advertising cookies or follow you across other sites.
            </p>
          </div>
          <div>
            <h2 className="font-display text-card-title font-semibold text-black">Questions</h2>
            <p className="mt-2">
              To ask about or delete anything you&apos;ve sent me, email {SITE.email}. I&apos;m based
              in {SITE.location}.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
