export function FaqJoeStrip({ text }: { text: string }) {
  const firstSentenceEnd = text.indexOf(". ");
  const lead =
    firstSentenceEnd === -1 ? text : text.slice(0, firstSentenceEnd + 1);
  const rest = firstSentenceEnd === -1 ? "" : text.slice(firstSentenceEnd + 2);

  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl border border-mist bg-navy p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
      <div
        className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-teal bg-[#243044] sm:mx-0"
        aria-hidden
      >
        <span className="font-primary text-xl font-extrabold text-teal">JL</span>
      </div>
      <p className="font-secondary text-center text-[0.88rem] leading-relaxed text-white/80 sm:text-left sm:text-[0.9rem]">
        <strong className="font-semibold text-white">{lead}</strong>
        {rest ? ` ${rest}` : null}
      </p>
    </div>
  );
}
