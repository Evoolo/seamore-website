import { Fragment, type CSSProperties } from "react";

/**
 * Wraps each word in a mask so headings can rise into place word by word.
 * `start` continues the stagger when one heading is built from several pieces.
 */
export function Words({ text, start = 0, className }: { text: string; start?: number; className?: string }) {
  return <>{text.split(/\s+/).filter(Boolean).map((word, index) => <Fragment key={`${index}-${word}`}>
    <span className="w"><span className={className} style={{ "--i": start + index } as CSSProperties}>{word}</span></span>{" "}
  </Fragment>)}</>;
}

export function wordCount(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}
