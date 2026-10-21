import Link from "next/link"

import { site } from "@/lib/site"

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="#top"
          className="font-heading text-sm tracking-[0.28em] text-white uppercase transition-opacity hover:opacity-80"
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
        <a
          href={`mailto:${site.email}`}
          className="text-xs tracking-[0.18em] text-white/90 uppercase transition-opacity hover:opacity-70 sm:hidden"
        >
          Email
        </a>
      </div>
    </header>
  )
}
