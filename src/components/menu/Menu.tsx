import cn from "clsx";
import type { IBaseCategory } from "../../types";

interface Props<T extends string> {
  activeCategory: T;
  setActiveCategory: (slug: T) => void;
  categories: IBaseCategory<T>[];
  itemClassName?: string;
}

export function Menu<T extends string>({
  activeCategory,
  setActiveCategory,
  categories,
  itemClassName,
}: Props<T>) {
  return (
    <nav className="inline-block">
      <ul className="flex gap-3 items-center">
        {categories.map((category) => (
          <li key={category.slug}>
            <button
              onClick={() => {
                setActiveCategory(category.slug);
              }}
              className={cn(
                itemClassName,
                "px-3 py-0.5 border-2 rounded-full",
                activeCategory === category.slug
                  ? "border-[#1d6ab2]"
                  : "border-transparent"
              )}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
