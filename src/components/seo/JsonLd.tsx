import type { Schema } from "@/lib/seo";

/**
 * Renders JSON-LD as a plain <script> tag.
 *
 * Next's own guidance is explicit that this should NOT be next/script — that
 * component is built for executable JavaScript, and structured data is data.
 *
 * "<" is escaped to its unicode form so a string in the payload can never break
 * out of the script tag.
 */
export function JsonLd({ data }: { data: Schema | Schema[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
