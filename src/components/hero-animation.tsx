"use client";

import { useEffect, useRef } from "react";

export function HeroAnimation() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const US = (window as any).UnicornStudio;
    if (US && US.init) {
      US.init();
      return;
    }

    (window as any).UnicornStudio = { isInitialized: false };
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js";
    script.onload = () => {
      (window as any).UnicornStudio.init();
    };
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <div
      data-us-project="EChArBDGoLjv1KHYSRnK"
      className="h-full w-full"
    />
  );
}
