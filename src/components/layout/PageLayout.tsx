import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * Shell for every destination page: the same sticky header and footer the
 * homepage uses, wrapping the page's own content.
 *
 * The homepage composes Header/Footer itself and is deliberately left alone,
 * so this exists alongside it rather than replacing that arrangement.
 */
export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
