import Link from "next/link";
import type { FaqContentBlock } from "@/data/faq-page";

export function FaqRichAnswer({
  blocks,
}: {
  blocks: readonly FaqContentBlock[];
}) {
  return (
    <div className="font-secondary space-y-3 text-[0.9rem] leading-relaxed text-slate sm:text-base">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-1.5 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index}>
            {block.before}
            <Link
              href={block.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal transition-colors hover:text-teal-dark"
            >
              {block.linkLabel}
            </Link>
            .
          </p>
        );
      })}
    </div>
  );
}
