"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Lightweight NProgress-style loader — no extra npm package needed.
// Uses the #nprogress styles already defined in globals.css.

let timer = null;
let progressEl = null;
let spinnerEl = null;
let current = 0;
let isStarted = false;

function createElements() {
  if (document.getElementById("nprogress")) return;

  const bar = document.createElement("div");
  bar.className = "bar";
  bar.innerHTML = '<div class="peg"></div>';

  const spinner = document.createElement("div");
  spinner.className = "spinner";
  spinner.innerHTML = '<div class="spinner-icon"></div>';

  const el = document.createElement("div");
  el.id = "nprogress";
  el.appendChild(bar);
  el.appendChild(spinner);

  document.body.appendChild(el);
  progressEl = bar;
  spinnerEl = spinner;
}

function setProgress(n) {
  current = n;
  if (progressEl) {
    progressEl.style.width = n * 100 + "%";
    progressEl.style.opacity = "1";
    progressEl.style.transition = "width 200ms ease, opacity 200ms ease";
  }
}

function start() {
  if (isStarted) return;
  isStarted = true;
  createElements();
  setProgress(0.05);

  // Trickle up to 0.9 automatically
  timer = setInterval(() => {
    const inc =
      current < 0.2 ? 0.1
      : current < 0.5 ? 0.04
      : current < 0.8 ? 0.02
      : current < 0.99 ? 0.005
      : 0;
    if (inc > 0) setProgress(Math.min(current + inc, 0.994));
  }, 200);
}

function done() {
  if (!isStarted) return;
  clearInterval(timer);
  timer = null;
  isStarted = false;

  setProgress(1);

  // Fade out after completing
  setTimeout(() => {
    const el = document.getElementById("nprogress");
    if (el) {
      el.style.transition = "opacity 300ms ease";
      el.style.opacity = "0";
    }
    setTimeout(() => {
      const el = document.getElementById("nprogress");
      if (el) el.remove();
      progressEl = null;
      spinnerEl = null;
      current = 0;
    }, 300);
  }, 100);
}

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Every time the route changes (pathname or query), complete the loader
    done();
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercept link clicks to start the loader before navigation begins
    function handleClick(e) {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only trigger for internal navigation (same origin, no hash-only)
      const isInternal =
        href.startsWith("/") ||
        (href.startsWith(window.location.origin) &&
          !href.startsWith("#"));

      const isHashOnly = href.startsWith("#");
      const hasTarget = anchor.target === "_blank";

      if (isInternal && !isHashOnly && !hasTarget) {
        start();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null; // renders nothing — works purely via DOM manipulation
}