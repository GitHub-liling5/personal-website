import Image from "next/image"

import { site } from "@/lib/site"

export function WorkGallery() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-xl">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Portfolio
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-wide md:text-4xl">
            My work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A short selection. Every image below is a placeholder — swap them
            for your own files when ready.
          </p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.work.map((item, index) => (
            <li
              key={item.id}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="text-sm">{item.title}</span>
                  <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
