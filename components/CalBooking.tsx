"use client";

/**
 * Embed Cal bookings via a hosted iframe.
 *
 * This keeps event types, availability, and pricing in Cal, but means we theme
 * and size a third-party app from the outside. The CSS variable overrides below
 * are not public API, and the width cap avoids a browser-specific iframe
 * reflow loop near Cal's 1024px layout breakpoint.
 */

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cal, { getCalApi } from "@calcom/embed-react";
import { PiArrowLeftBold } from "react-icons/pi";
import { variants } from "@catppuccin/palette";

const CAL_LINK = "rory.finnegan";
const CAL_NAMESPACE = "profile";
const CAL_ORIGIN = "https://app.cal.com";

const { latte, frappe } = variants;

// Cal's tokens do not line up one-to-one with Catppuccin. Keep the semantic
// mapping here, and take every color from the palette package.
function calTheme(flavor: typeof latte) {
  return {
    "cal-brand": flavor.teal.hex,
    "cal-brand-emphasis": flavor.sky.hex,
    "cal-brand-text": flavor.base.hex,
    "cal-brand-subtle": flavor.surface0.hex,
    "cal-brand-accent": flavor.base.hex,
    "cal-bg": flavor.crust.hex,
    "cal-bg-emphasis": flavor.surface0.hex,
    "cal-bg-subtle": flavor.mantle.hex,
    "cal-bg-muted": flavor.base.hex,
    "cal-bg-inverted": flavor.text.hex,
    "cal-bg-attention": flavor.peach.hex,
    "cal-bg-error": flavor.red.hex,
    "cal-bg-semantic-info-subtle": flavor.surface0.hex,
    "cal-bg-semantic-attention-subtle": flavor.surface0.hex,
    "cal-bg-semantic-error-subtle": flavor.surface0.hex,
    "cal-border": flavor.surface0.hex,
    "cal-border-emphasis": flavor.overlay2.hex,
    "cal-border-subtle": flavor.surface1.hex,
    "cal-border-muted": flavor.surface0.hex,
    "cal-text": flavor.text.hex,
    "cal-text-emphasis": flavor.text.hex,
    "cal-text-subtle": flavor.subtext1.hex,
    "cal-text-muted": flavor.overlay2.hex,
    "cal-text-inverted": flavor.base.hex,
    "cal-text-info": flavor.sky.hex,
    "cal-text-success": flavor.green.hex,
    "cal-text-attention": flavor.yellow.hex,
    "cal-text-error": flavor.red.hex,
    "cal-text-semantic-info": flavor.sky.hex,
    "cal-text-semantic-attention": flavor.yellow.hex,
    "cal-text-semantic-error": flavor.red.hex,
    // It sits on our own background, so it doesn't need its own card outline.
    "cal-border-booker": "transparent",
    "cal-border-booker-width": "0px",

    // The coss-ui half (see note 1 up top). Like the cal-* tokens, these are
    // declared on :root/.dark. That is the scope the embed's injected
    // stylesheet overrides, so we can set them from out here.
    background: flavor.crust.hex,
    foreground: flavor.text.hex,
    card: flavor.mantle.hex,
    "card-foreground": flavor.text.hex,
    popover: flavor.mantle.hex,
    "popover-foreground": flavor.text.hex,
    primary: flavor.teal.hex,
    "primary-foreground": flavor.base.hex,
    secondary: flavor.surface0.hex,
    "secondary-foreground": flavor.text.hex,
    muted: flavor.surface0.hex,
    "muted-foreground": flavor.overlay2.hex,
    accent: flavor.surface0.hex,
    "accent-foreground": flavor.text.hex,
    destructive: flavor.red.hex,
    "destructive-foreground": flavor.base.hex,
    border: flavor.surface0.hex,
    input: flavor.surface0.hex,
    ring: flavor.teal.hex,
  };
}

const CAL_CSS_VARS_PER_THEME = {
  light: calTheme(latte),
  dark: calTheme(frappe),
};

// Opens the connection to Cal ahead of the iframe, so the handshake is already
// done by the time the embed actually loads.
function preconnectCal() {
  if (document.querySelector(`link[rel="preconnect"][href="${CAL_ORIGIN}"]`)) {
    return;
  }

  let link = document.createElement("link");
  link.rel = "preconnect";
  link.href = CAL_ORIGIN;
  document.head.appendChild(link);
}

// The nav calls this through a dynamic import. A static import would pull this
// module, and Cal's bundle with it, into the chunk every page loads. Loading
// the module is the real preload. This call only warms the connection.
export function preloadCal() {
  if (typeof window === "undefined") return;
  preconnectCal();
}

let calSetupPromise: Promise<void> | undefined;
let eventTypeSelectedListeners = new Set<() => void>();

function setupCal() {
  if (calSetupPromise) return calSetupPromise;

  calSetupPromise = (async () => {
    let cal = await getCalApi({ namespace: CAL_NAMESPACE });
    cal("ui", {
      cssVarsPerTheme: CAL_CSS_VARS_PER_THEME,
      layout: "month_view",
    });
    cal("on", {
      action: "eventTypeSelected",
      callback: () => {
        eventTypeSelectedListeners.forEach((listener) => listener());
      },
    });
  })();

  return calSetupPromise;
}

// Returns to the event list. The embed offers no built-in way back.
// This uses a border rather than a ring. Tailwind rings are box-shadows, and
// Firefox draws those unevenly around a small circle, so the outline looks
// broken. A border renders as one continuous stroke.
function BackToEventTypes({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Show all event types"
      title="All event types"
      onClick={onClick}
      className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-teal bg-crust text-teal shadow-md transition hover:scale-125 hover:brightness-125"
    >
      <PiArrowLeftBold className="h-4 w-4 transition" />
    </button>
  );
}

export function CalBooking() {
  let { resolvedTheme } = useTheme();
  let [mounted, setMounted] = useState(false);
  let [eventSelected, setEventSelected] = useState(false);
  // Bumped to remount <Cal>, since picking an event type has no built-in way
  // back to the event list.
  let [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // A theme change remounts <Cal> too, which lands back on the event list.
  useEffect(() => {
    setEventSelected(false);
  }, [resolvedTheme]);

  useEffect(() => {
    let onEventTypeSelected = () => setEventSelected(true);
    eventTypeSelectedListeners.add(onEventTypeSelected);
    setupCal();

    return () => {
      eventTypeSelectedListeners.delete(onEventTypeSelected);
    };
  }, []);

  if (!mounted) return null;

  return (
    // Capped under Cal's 1024px breakpoint. See the "iframe dance" note up top.
    <div className="mx-auto w-full max-w-[1000px]">
      {eventSelected && (
        <BackToEventTypes
          onClick={() => {
            setEventSelected(false);
            setResetKey((key) => key + 1);
          }}
        />
      )}
      {/* <Cal> only wires up its iframe once, so remount it to apply a theme
          change or to reset back to the event list. */}
      <Cal
        key={`${resolvedTheme}-${resetKey}`}
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", minHeight: "700px" }}
        config={{
          layout: "month_view",
          theme: resolvedTheme === "dark" ? "dark" : "light",
        }}
      />
    </div>
  );
}
