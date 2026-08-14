import Link from "next/link";
import { primaryNavItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-[#050914] text-white relative z-10">
      <div className="mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Brand Lockup & Short Description */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gold/40 bg-gold/10 font-display text-[0.6rem] font-bold tracking-tight text-gold-light transition-colors duration-200 group-hover:border-gold/70 group-hover:bg-gold/20"
              >
                PS
              </span>
              <span className="flex flex-col justify-center leading-none">
                <span className="font-display text-[1.05rem] font-bold tracking-wider text-white uppercase transition-colors duration-200 group-hover:text-gold-light">
                  JAMES
                </span>
                <span className="mt-0.5 text-[0.48rem] font-bold tracking-[0.26em] text-gold-light/90 uppercase">
                  PROGRESSIVE SOLUTIONS
                </span>
              </span>
            </Link>

            <p className="text-[0.8125rem] text-gray-300 leading-normal max-w-sm">
              Products, practical tools, modern websites, and AI creations — built in public to turn chaos into progress.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-light mb-2.5">
                Navigation
              </h4>
              <ul className="flex flex-col gap-1.5 text-[0.8rem]">
                {primaryNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 font-medium transition-colors hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-light mb-2.5">
                Initiatives
              </h4>
              <ul className="flex flex-col gap-1.5 text-[0.8rem]">
                <li>
                  <Link href="/websites" className="text-gray-300 font-medium transition-colors hover:text-gold-light">
                    Websites
                  </Link>
                </li>
                <li>
                  <Link href="/clarity-project" className="text-gray-300 font-medium transition-colors hover:text-gold-light">
                    CLarity Project
                  </Link>
                </li>
                <li>
                  <Link href="/free-apps" className="text-gray-300 font-medium transition-colors hover:text-gold-light">
                    Free Apps
                  </Link>
                </li>
                <li>
                  <Link href="/ai-creations" className="text-gray-300 font-medium transition-colors hover:text-gold-light">
                    AI Creations
                  </Link>
                </li>
                <li>
                  <Link href="/for-sale" className="text-gray-300 font-medium transition-colors hover:text-gold-light">
                    For Sale
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Action / Contact CTA */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-light">
              Get In Touch
            </h4>
            <p className="text-[0.8rem] text-gray-300 leading-normal">
              Interested in collaborating, redeveloping a website, or learning more about active projects?
            </p>
            <div className="pt-0.5">
              <Link
                href="/about"
                className="group inline-flex h-[36px] items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-4 text-[0.8rem] font-bold text-black shadow-md transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                Work With Us
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.725rem] text-gray-400">
          <p>© {new Date().getFullYear()} James Progressive Solutions. Built in public.</p>
          <p className="text-gray-400">From chaos comes clarity.</p>
        </div>
      </div>
    </footer>
  );
}
