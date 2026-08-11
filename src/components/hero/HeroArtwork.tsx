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
    <div className="absolute inset-0 hidden lg:block -z-10 pointer-events-none" aria-hidden="true">
      <Image
        src={sceneWireframesFilled}
        alt=""
        placeholder="blur"
        priority
        fill
        className="object-cover object-center"
      />

      {/* Standalone PS Emblem & Light Core Overlay (Preserved for Step 2 alignment) */}
      <div 
        className="absolute top-[14.25%] left-[69.9%] w-[16%] aspect-square"
      >
        {/* Layer 1: Broader subtle radial light bloom */}
        <div 
          className="absolute -inset-[40%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,225,160,0.35)_0%,rgba(224,180,92,0.18)_40%,rgba(224,180,92,0.05)_65%,transparent_80%)] blur-2xl pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Layer 2: Inner warm core illumination */}
        <div 
          className="absolute -inset-[10%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,245,210,0.5)_0%,rgba(224,180,92,0.25)_50%,transparent_75%)] blur-xl pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Layer 3: Standalone Emblem PNG with dual warm drop-shadows */}
        <Image
          src={psEmblem}
          alt=""
          priority
          fill
          className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,220,130,0.4)] drop-shadow-[0_0_35px_rgba(224,180,92,0.25)]"
        />
      </div>
    </div>
  );
}
