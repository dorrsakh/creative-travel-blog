"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { Globe2, Pause, Play } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Marquee } from "@/components/motion/marquee";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const links = [{ href: "/", label: "Home" }, { href: "/archive", label: "Articles" }, { href: "/about", label: "About" }];
  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">Skip to content</a>
      <aside className="sidebar">
        <nav className="navigation" aria-label="Main navigation">
          {links.map(({ href, label }) => {
            const active = href === "/archive" ? pathname.startsWith("/article") || pathname === href : pathname === href;
            return <Link key={href} href={href} aria-current={active ? "page" : undefined}>
              {active && <motion.span className="nav-active" layoutId="navigation-pill" transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }} />}
              <span>{label}</span>
            </Link>;
          })}
        </nav>
        <div className="sidebar-content">
          <Link href="/" className="wordmark" aria-label="The Roam Report home">The Roam<br />Report</Link>
          {/* Original illustration exported from the viewable design document. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="train" src="/images/train.svg" width="120" height="110" alt="Hand-drawn train winding through clouds" />
          <p>Stories and photos of long walks,<br className="desktop-break" /> wrong turns, and everyday discoveries</p>
        </div>
        <div className={`location-bar ${paused ? "is-paused" : ""}`}>
          <Marquee speed={32} fade={false} gap="16px">
            <span>Currently in</span><Globe2 size={17} aria-hidden="true" /><span>Dallol, Ethiopia</span><Globe2 size={17} aria-hidden="true" /><span>14.2417° N</span><Globe2 size={17} aria-hidden="true" /><span>40.3169° E</span><Globe2 size={17} aria-hidden="true" />
          </Marquee>
          <button className="marquee-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? "Play location ticker" : "Pause location ticker"} aria-pressed={paused}>{paused ? <Play size={13} /> : <Pause size={13} />}</button>
        </div>
      </aside>
      <main id="content" className="main-content" tabIndex={-1}>{children}</main>
    </div>
  );
}
