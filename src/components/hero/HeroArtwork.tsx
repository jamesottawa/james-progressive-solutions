import Image from "next/image";
import sceneFinal from "../../../public/images/hero/hero-scene-final.png";

/*
 * Hero artwork using the final approved uncropped image.
 *
 * To prevent the baked-in UI on the left from conflicting with the live UI,
 * we strictly clip the image on the desktop layout using a right-aligned container.
 * The left 40% of the screen is rendered as empty cream, providing a clean
 * canvas for the live headline and CTAs.
 */
export function HeroArtwork() {
  return (
    <div className="absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
      {/* Container strictly covering the right portion to hide baked UI on the left.
          Width is 60% so the crop boundary falls safely to the right of the baked text. */}
      <div className="absolute inset-y-0 right-0 w-[60%] overflow-hidden">
        <Image
          src={sceneFinal}
          alt=""
          placeholder="blur"
          priority
          fill
          sizes="60vw"
          className="object-cover object-[right_top]"
        />
        {/* Soften the left crop edge into the cream background */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-cream via-cream/50 to-transparent" />
      </div>

      {/* Soften bottom edge into the cream beneath the card row. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream via-cream/60 to-transparent" />
    </div>
  );
}
