import {
  BRAND_BROWN,
  BRAND_BROWN_LIGHT,
  BRAND_INK,
  BRAND_MARK_PATHS,
  BRAND_STROKE_WIDTH,
  BRAND_VIEWBOX,
} from "@/lib/brand/mark-path";
import { cn } from "@/lib/utils";

/**
 * The ChatCart shopping bag.
 *
 * Same geometry the app uses for its icon, adaptive layers, splash screen and
 * sign-in screen — see scripts/generate-brand-assets.mjs in the app repository.
 *
 * The bag is line art, so it is stroked and not filled. The stroke is a path
 * property rather than a colour, so `currentColor` on the parent still decides
 * the ink, and scaling the viewBox scales the stroke with it — the mark keeps
 * the same weight as the icon at every size.
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
      fill="none"
      stroke="currentColor"
      strokeWidth={BRAND_STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {BRAND_MARK_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/**
 * The tile-plus-wordmark lockup used in the header and footer.
 *
 * The tile inverts by surface, which is how the site has always done it: an ink
 * tile with a white bag on the light header, a white tile with a brown bag on
 * the ink footer. Either way the bag is the same mark as the app icon, so the
 * logo is recognisably the same object everywhere.
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
  const markSize = size === "lg" ? 19 : 18;

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn("flex shrink-0 items-center justify-center shadow-sm", tile)}
        style={{
          backgroundColor: onDark ? "#ffffff" : BRAND_INK,
          color: onDark ? BRAND_BROWN : "#ffffff",
        }}
      >
        <BrandMark size={markSize} />
      </span>
      <span
        className="text-xl font-black tracking-tight"
        style={{ color: onDark ? "#fbf8f2" : BRAND_INK }}
      >
        Chat
        <span style={{ color: onDark ? BRAND_BROWN_LIGHT : BRAND_BROWN }}>Cart</span>
      </span>
    </span>
  );
}
