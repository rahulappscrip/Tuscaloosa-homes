import type { RudderAnalytics } from "@rudderstack/analytics-js";

export const RUDDERSTACK_WRITE_KEY =
  process.env.NEXT_PUBLIC_RUDDERSTACK_WRITE_KEY ??
  "3FIwes2g37H1XfdUELSPWkWFCNM";

export const RUDDERSTACK_DATA_PLANE_URL =
  process.env.NEXT_PUBLIC_RUDDERSTACK_DATA_PLANE_URL ??
  "https://reibarmarkpzik.dataplane.rudderstack.com";

export const OFFER_FORM_ID = "offer-form";
export const OFFER_FORM_NAME = "cash_offer_form";

let rudderAnalytics: RudderAnalytics | null = null;

type GeoContext = {
  ip?: string;
  city?: string;
  country?: string;
  country_code?: string;
  region?: string;
};

let geoContext: GeoContext = {};

export const PAGE_VIEW_EVENT = "Page View";

export function setGeoContext(geo: GeoContext) {
  geoContext = geo;
}

export async function fetchGeoContext() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) {
      return;
    }

    const data = (await response.json()) as {
      ip?: string;
      city?: string;
      country_name?: string;
      country_code?: string;
      region?: string;
    };

    setGeoContext({
      ip: data.ip,
      city: data.city,
      country: data.country_name,
      country_code: data.country_code,
      region: data.region,
    });
  } catch {
    // RudderStack can still enrich IP/geo server-side if enabled.
  }
}

function getEventContext() {
  return {
    ...getDeviceContext(),
    ...geoContext,
  };
}

export function setRudderAnalytics(instance: RudderAnalytics) {
  rudderAnalytics = instance;
}

export function getRudderAnalytics() {
  return rudderAnalytics;
}

export function getDeviceContext() {
  if (typeof window === "undefined") {
    return {};
  }

  const userAgent = navigator.userAgent;
  const isMobile = /Mobi|Android/i.test(userAgent);
  const isTablet = /Tablet|iPad/i.test(userAgent);

  return {
    url: window.location.href,
    path: window.location.pathname,
    search: window.location.search,
    title: document.title,
    referrer: document.referrer || "direct",
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    device_type: isTablet ? "tablet" : isMobile ? "mobile" : "desktop",
    user_agent: userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

export function trackEvent(
  event: string,
  properties: Record<string, unknown> = {},
) {
  const analytics = getRudderAnalytics();
  if (!analytics) {
    return;
  }

  analytics.track(event, {
    ...getEventContext(),
    ...properties,
  });
}

export function trackPageView(
  extraProperties: Record<string, unknown> = {},
) {
  const analytics = getRudderAnalytics();
  if (!analytics) {
    return;
  }

  analytics.track(PAGE_VIEW_EVENT, {
    ...getEventContext(),
    page_name: typeof document !== "undefined" ? document.title : undefined,
    ...extraProperties,
  });
}

export function getFormFieldValue(
  form: HTMLFormElement,
  fieldName: string,
): string {
  const field = form.elements.namedItem(fieldName);
  if (!field) {
    return "";
  }

  if ("value" in field && typeof field.value === "string") {
    return field.value;
  }

  return "";
}

export function getOfferFormPayload(form: HTMLFormElement) {
  return {
    first_name: getFormFieldValue(form, "firstName"),
    last_name: getFormFieldValue(form, "lastName"),
    address: getFormFieldValue(form, "address"),
    reason: getFormFieldValue(form, "reason"),
    phone: getFormFieldValue(form, "phone"),
    email: getFormFieldValue(form, "email"),
  };
}
