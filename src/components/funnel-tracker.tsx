"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { buildCheckoutUrl, trackFunnelEvent } from "@/lib/funnel";

export function FunnelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    trackFunnelEvent("page_view");

    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const checkoutLink = target?.closest<HTMLAnchorElement>(
        "a[data-funnel-checkout]"
      );

      if (checkoutLink) {
        checkoutLink.href = buildCheckoutUrl(
          checkoutLink.href,
          window.location.search
        );
      }

      const eventTarget = target?.closest<HTMLElement>(
        "[data-funnel-event]"
      );
      const name = eventTarget?.dataset.funnelEvent;

      if (
        name === "contact_cta_click" ||
        name === "academy_entry_click" ||
        name === "academy_checkout_click"
      ) {
        trackFunnelEvent(name, {
          label: eventTarget?.dataset.funnelLabel,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, search]);

  return null;
}
