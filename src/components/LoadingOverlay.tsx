"use client";

import { useEffect, useState } from "react";
import "../style/loading.css";

type Props = {
  minDisplayMs?: number;
};

export default function LoadingOverlay({ minDisplayMs = 1400 }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    const hide = () => {
      if (!mounted) return;
      // give a little time for a nicer fade
      setTimeout(() => setVisible(false), 300);
    };

    const onLoad = () => hide();

    // If the page already loaded, hide shortly after mount
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // fallback: ensure it disappears after minDisplayMs
    const fallback = setTimeout(() => {
      hide();
    }, minDisplayMs + 500);

    return () => {
      mounted = false;
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, [minDisplayMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900/95 to-slate-800/95 text-white transition-opacity duration-700">
      <div className="loader" />
    </div>
  );
}
