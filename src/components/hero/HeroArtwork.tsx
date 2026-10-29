import Image from "next/image";
import sceneWireframesFilled from "../../../public/images/hero/james-hero-wireframes-filled.png";
import psEmblem from "../../../public/images/hero/ps-emblem-clean.png";

/*
 * Hero artwork using the final approved scene (Clean Plate version + Baked Wireframes).
 *
 * Architecture:
 * The target image is a full-bleed background across the entire Hero section.
 * We use object-cover within a constrained aspect-ratio container to perfectly 
 * match the 1672x941 reference coordinates without distortion.
 *
 * STEP 1B: Hero Wireframe Content Baked Pass
 * Wireframe content (AI brain, code brackets, website preview, tag, app grid) is baked
 * directly into the background PNG asset (`james-hero-wireframes-filled.png`).
 * All DOM-overlay wireframe elements have been removed.
 */
export function HeroArtwork() {
  return (
    <div className="absolute inset-0 hidden lg:block -z-10 pointer-events-none">
      <Image
        src={sceneWireframesFilled}
        alt="A figure at a multi-monitor desk, surrounded by product, website and app cards rising into a golden vortex above a sunlit city."
        placeholder="blur"
        priority
        fill
        className="object-cover object-center"
      />

      {/* Standalone PS Emblem & Light Core Overlay */}
      <div 
        className="absolute top-[14.25%] left-[69.9%] w-[16%] aspect-square"
      >
        {/* Layer 1: Broader subtle radial light bloom (Background context) */}
        <div 
          className="absolute -inset-[40%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,225,160,0.35)_0%,rgba(224,180,92,0.18)_40%,rgba(224,180,92,0.05)_65%,transparent_80%)] blur-2xl pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Layer 2: Inner warm core illumination (Behind emblem) */}
        <div 
          className="absolute -inset-[10%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,245,210,0.5)_0%,rgba(224,180,92,0.25)_50%,transparent_75%)] blur-xl pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Layer 3: Standalone Emblem PNG with tuned back illumination */}
        <Image
          src={psEmblem}
          alt=""
          priority
          fill
          className="object-contain relative z-10 drop-shadow-[0_0_18px_rgba(255,220,130,0.45)] drop-shadow-[0_0_35px_rgba(224,180,92,0.3)]"
        />

        {/* Layer 4: Front Light Spill & Edge Bloom (Integrates emblem smoothly into central light source) */}
        <div 
          className="absolute inset-[5%] rounded-full z-20 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(255,250,225,0.35)_0%,rgba(255,220,140,0.18)_45%,rgba(224,180,92,0.06)_70%,transparent_85%)] blur-md"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
