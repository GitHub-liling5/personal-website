import { site } from "@/lib/site"

export function Intro() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            {site.intro.title}
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-wide md:text-4xl">
            Who I am
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-lg">
          {site.intro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
