"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  faqCategories,
  faqCtaBands,
  faqTopicTabs,
} from "@/data/faq-page";
import { CtaBand } from "@/components/how-it-works/CtaBand";
import { FaqCategorySection } from "@/components/faq/FaqCategorySection";

const SCROLL_OFFSET = 120;

export function FaqTopicExplorer() {
  const [activeId, setActiveId] = useState<string>(faqTopicTabs[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isScrollingRef = useRef(false);

  const scrollToCategory = useCallback((id: string) => {
    const element = sectionRefs.current[id];
    if (!element) return;

    isScrollingRef.current = true;
    setActiveId(id);

    const top =
      element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });

    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.5],
      },
    );

    const elements = faqTopicTabs
      .map((tab) => sectionRefs.current[tab.id])
      .filter((element): element is HTMLElement => element !== null);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-10" aria-label="FAQ topic explorer">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="lg:grid lg:grid-cols-[minmax(200px,260px)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <nav
            className="mb-6 lg:sticky lg:top-24 lg:mb-0 lg:self-start"
            aria-label="FAQ categories"
          >
            <p className="font-secondary mb-3 hidden text-[0.72rem] font-bold tracking-[0.14em] text-slate uppercase lg:block">
              Browse by topic
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {faqTopicTabs.map((tab) => {
                const isActive = activeId === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => scrollToCategory(tab.id)}
                    className={`font-secondary flex shrink-0 items-center gap-2 rounded-lg border px-3.5 py-2.5 text-left text-[0.82rem] font-semibold transition-colors lg:w-full lg:px-4 lg:py-3 lg:text-[0.88rem] ${
                      isActive
                        ? "border-teal/30 bg-teal-tint text-teal-dark"
                        : "border-mist bg-white text-slate hover:border-teal/20 hover:bg-ice/60 hover:text-navy"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        isActive ? "bg-teal" : "bg-mist"
                      }`}
                      aria-hidden
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </nav>

          <div>
            {faqCategories.map((category, index) => (
              <div key={category.id}>
                <FaqCategorySection
                  ref={(node) => {
                    sectionRefs.current[category.id] = node;
                  }}
                  category={category}
                />

                {category.id === "cat-process" ? (
                  <div className="-mx-6 my-2">
                    <CtaBand {...faqCtaBands[0]} />
                  </div>
                ) : null}

                {index === faqCategories.length - 1 ? (
                  <div className="-mx-6 mt-2">
                    <CtaBand {...faqCtaBands[1]} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
