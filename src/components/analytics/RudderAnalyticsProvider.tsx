"use client";

import { RudderAnalytics } from "@rudderstack/analytics-js";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  RUDDERSTACK_DATA_PLANE_URL,
  RUDDERSTACK_WRITE_KEY,
  fetchGeoContext,
  getRudderAnalytics,
  setRudderAnalytics,
  trackEvent,
  trackPageView,
} from "@/lib/analytics/rudderstack";

const SCROLL_MILESTONES = [25, 50, 75, 100] as const;

function getClickLabel(element: Element) {
  const text = element.textContent?.replace(/\s+/g, " ").trim() ?? "";
  return text.slice(0, 120);
}

export function RudderAnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const initializedRef = useRef(false);
  const isInitialPathRef = useRef(true);
  const scrollMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    initializedRef.current = true;
    const analytics = new RudderAnalytics();

    analytics.load(RUDDERSTACK_WRITE_KEY, RUDDERSTACK_DATA_PLANE_URL, {
      integrations: { All: true },
    });

    setRudderAnalytics(analytics);

    analytics.ready(async () => {
      await fetchGeoContext();
      trackPageView();
    });
  }, []);

  useEffect(() => {
    scrollMilestonesRef.current = new Set();

    if (isInitialPathRef.current) {
      isInitialPathRef.current = false;
      return;
    }

    const analytics = getRudderAnalytics();
    analytics?.ready(async () => {
      await fetchGeoContext();
      trackPageView();
    });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        return;
      }

      const depth = Math.round((window.scrollY / scrollable) * 100);

      for (const milestone of SCROLL_MILESTONES) {
        if (depth >= milestone && !scrollMilestonesRef.current.has(milestone)) {
          scrollMilestonesRef.current.add(milestone);
          trackPageView({
            scroll_depth: `${milestone}%`,
            scroll_depth_percent: milestone,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const clickable = target.closest("button, a[href], input[type='submit']");
      if (!clickable) {
        return;
      }

      trackEvent("button_clicked", {
        element_tag: clickable.tagName.toLowerCase(),
        element_text: getClickLabel(clickable),
        element_id: clickable.id || undefined,
        href:
          clickable instanceof HTMLAnchorElement
            ? clickable.href
            : clickable.getAttribute("href") || undefined,
        page_section: clickable.closest("section")?.id || undefined,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return children;
}
