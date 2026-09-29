import Link from "next/link";

export type LinkCard = {
  title: string;
  href: string;
  body?: string;
  meta?: string;
};

/**
 * A plain grid of internal links.
 *
 * Used by the glossary, comparison and city index pages. These are the pages
 * that let a crawler discover everything else on the site in two hops, so the
 * links are real <a> elements in the initial HTML rather than anything
 * client-rendered.
 */
export function LinkCards({
  cards,
  columns = 2,
}: {
  cards: LinkCard[];
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={`grid gap-4 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      {cards.map((card) => (
        <li key={card.href}>
          <Link
            href={card.href}
            className="group flex h-full flex-col rounded-2xl border border-[rgba(23,33,31,0.1)] bg-white p-5 transition-colors hover:border-[rgba(166,124,82,0.36)]"
          >
            {card.meta ? (
              <span className="text-[11px] font-black uppercase tracking-wider text-[#A67C52]">
                {card.meta}
              </span>
            ) : null}
            <span className="mt-1 font-black leading-snug text-[#17211f] group-hover:text-[#8B623E]">
              {card.title}
            </span>
            {card.body ? (
              <span className="mt-2 text-sm leading-6 text-[#66746f]">{card.body}</span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
