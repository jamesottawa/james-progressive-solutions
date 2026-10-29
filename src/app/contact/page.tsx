import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { SITE, buildMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Say hi or ask about a project. Based in ${SITE.location}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Say hi, or ask about"
        accent="a project."
        lead={`Curious about something you saw here, or want to talk about a website or tool? Write me a note, or email ${SITE.email} directly. I'm based in ${SITE.location}.`}
      />
      <div className="mx-auto w-full max-w-[var(--content-frame)] px-6 pt-10 sm:px-8 lg:px-[50px]">
        <a
          href={buildMailto()}
          className="text-[0.95rem] font-semibold text-gold-dark underline underline-offset-4 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
        >
          {SITE.email}
        </a>
      </div>
      <ContactSection
        heading="Or use the form."
        lead="A name, an email to reply to, and what's on your mind — that's all this needs."
      />
    </PageLayout>
  );
}
