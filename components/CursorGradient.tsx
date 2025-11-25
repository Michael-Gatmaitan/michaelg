"use client";

import { useEffect } from "react"

export function CursorGradient() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (typeof window === "undefined") return;

      const x = `${event.clientX}px`
      const y = `${event.clientY}px`

      document.documentElement.style.setProperty("--cursor-x", x)
      document.documentElement.style.setProperty("--cursor-y", y)
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
    };
  }, []);

  return null;
}


