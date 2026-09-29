import { BRAND_MARK_PATH, BRAND_VIEWBOX } from "@/lib/brand/mark-path";
import { cn } from "@/lib/utils";

/**
 * The ChatCart storefront mark.
 *
 * Same geometry the app uses for its icon, adaptive layers, splash screen and
 * sign-in screen — see scripts/generate-brand-assets.mjs in the app repository.
 * Fill is `currentColor`, so Tailwind text colour controls it.
 */
export function BrandMark({
  size = 18,
  className,
  title,
}: {
  size?: number;
  className?: string;
  /** Supply only when the mark is the sole label; otherwise it is decorative. */
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={BRAND_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d={BRAND_MARK_PATH} fill="currentColor" fillRule="nonzero" clipRule="nonzero" />
    </svg>
  );
}

/**
 * The tile-plus-wordmark lockup used in the header and footer.
 *
 * `onDark` swaps the wordmark colours for the ink footer; the tile stays brand
 * brown in both cases so the logo is recognisably the same object as the app
 * icon and the sign-in badge.
 */
export function Logo({
  size = "md",
  onDark = false,
  className,
}: {
  size?: "md" | "lg";
  onDark?: boolean;
  className?: string;
}) {
  const tile = size === "lg" ? "h-10 w-10 rounded-2xl" : "h-9 w-9 rounded-2xl";
  const markSize = size === "lg" ? 21 : 19;
  const wordmark = size === "lg" ? "text-xl" : "text-xl";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center bg-[#A67C52] text-white shadow-sm",
          tile
        )}
      >
        <BrandMark size={markSize} />
      </span>
      <span
        className={cn(
          "font-black tracking-tight",
          wordmark,
          onDark ? "text-[#fbf8f2]" : "text-[#17211f]"
        )}
      >
        Chat<span className="text-[#C49A6C]">Cart</span>
      </span>
    </span>
  );
}
