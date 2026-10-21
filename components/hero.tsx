import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src={site.hero.src}
        alt={site.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-hero-zoom"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="animate-fade-up font-heading text-5xl tracking-[0.08em] text-white uppercase md:text-7xl lg:text-8xl">
          {site.name}
        </p>
        <p className="animate-fade-up mt-5 max-w-md text-base text-white/85 delay-100 md:text-lg">
          {site.tagline}
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3 delay-200">
          <a
            href="#work"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-stone-900 hover:bg-white/90"
            )}
          >
            View work
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
