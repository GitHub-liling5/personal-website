"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { site } from "@/lib/site"

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="#top"
          className="font-heading text-sm tracking-[0.28em] text-white uppercase transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-xs tracking-[0.18em] text-white/85 uppercase sm:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="text-xs tracking-[0.18em] text-white/90 uppercase transition-opacity hover:opacity-70 sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-white/15 bg-black/55 px-6 py-5 backdrop-blur-md sm:hidden"
      >
        <ul className="flex flex-col gap-4 text-xs tracking-[0.18em] text-white/90 uppercase">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-opacity hover:opacity-70"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              className="transition-opacity hover:opacity-70"
              onClick={() => setOpen(false)}
            >
              Email
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
