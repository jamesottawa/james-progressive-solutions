import { categories } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";

/*
 * Card row reproducing the approved reference image's band at
 * x=90..1579 (the 1489px content column), y=650..815.
 *
 * Five equal columns of ~285px with ~16px gaps. The reference has NO section
 * heading above these cards — they sit directly beneath the hero — so none is
 * added here.
 */
export function CategoryGrid() {
  return (
    <section
      id="work"
      aria-label="Explore the work"
      className="mx-auto w-full max-w-[var(--content-frame)] scroll-mt-28 px-6 sm:px-8 lg:px-[50px]"
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </ul>
    </section>
  );
}
