import Image from "next/image";
import aboutCloudTexture from "../../../public/images/about/about-cloud-texture.png";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-gold/20 bg-cream relative z-10 overflow-hidden"
    >
      {/* Decorative Atmospheric Texture Layer (Pale Cream / Blue Cloud Render at ~6% Opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-[0.06]" 
        aria-hidden="true"
      >
        <Image
          src={aboutCloudTexture}
          alt=""
          placeholder="blur"
          fill
          className="object-cover object-[80%_20%]"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--content-frame)] px-6 sm:px-8 lg:px-[50px] py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          {/* Left Column: Eyebrow & Heading */}
          <div className="lg:col-span-5">
            <p className="text-eyebrow font-semibold uppercase tracking-[0.22em] text-gold-dark mb-2.5">
              About James
            </p>
            <h2 
              id="about-heading" 
              className="font-display text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold text-black tracking-tight leading-[1.1]"
            >
              Built by James, in public.
            </h2>
          </div>

          {/* Right Column: Paragraph with Editorial Vertical Divider */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-gold/25 flex flex-col justify-center">
            <p className="text-[1.05rem] sm:text-[1.125rem] text-body/90 leading-relaxed font-normal">
              James Progressive Solutions is where James shares the products, apps, websites, and AI
              experiments he is building, including the ongoing CLarity project. It is a running
              account of the work as it happens, not a finished portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

