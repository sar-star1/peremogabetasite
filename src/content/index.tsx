import { Fragment, type ReactNode } from "react";
import sections from "./slots.json";
import published from "./published.json";

// Text and photos the bakery edits from the dashboard ("Публічний сайт").
// slots.json lists every editable slot with its default; published.json is
// fetched from the dashboard at build time (scripts/fetch-content.mjs) and
// overrides those defaults. Layout and design stay in code.

export type SlotType = "text" | "longtext" | "image";

const defaults = new Map<string, string>(
  sections.flatMap((s) => s.slots.map((slot) => [slot.key, slot.default] as const))
);
const overrides = published as Record<string, string>;

/** Current value of a content slot: the published edit, else the default. */
export function c(key: string): string {
  const fallback = defaults.get(key);
  if (fallback === undefined) throw new Error(`Unknown content slot "${key}" — add it to src/content/slots.json`);
  const value = overrides[key];
  return typeof value === "string" && value.trim() ? value : fallback;
}

/** Inline text where **double asterisks** mark a highlighted phrase. */
export function rich(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="text-foreground">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/** A longtext slot rendered as paragraphs (separated by blank lines). */
export function Paragraphs({ k }: { k: string }) {
  return (
    <>
      {c(k)
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{rich(p)}</p>
        ))}
    </>
  );
}

/** Plain text of a slot with the ** markers removed (for alt text, structured data). */
export function plain(key: string): string {
  return c(key).replace(/\*\*/g, "");
}
