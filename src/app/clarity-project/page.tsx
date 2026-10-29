import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { ClarityPageContent } from "@/components/clarity/ClarityPageContent";

export const metadata: Metadata = {
  title: "The CLarity Project: Bringing Order to Complex Situations",
  description: "CLarity is an ongoing application being built to help people organize scattered information, understand how events connect, identify missing pieces, and move toward clearer next steps.",
};

export default function ClarityProjectPage() {
  return (
    <PageLayout>
      <ClarityPageContent />
    </PageLayout>
  );
}
