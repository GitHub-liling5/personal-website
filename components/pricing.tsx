import { site } from "@/lib/site"

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-xl">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Sessions
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-wide md:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple packages so you can plan a sitting. Custom briefs welcome —
            write me with dates and location.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {site.pricing.map((tier) => (
            <div
              key={tier.name}
              className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <h3 className="font-heading text-xl tracking-wide md:col-span-4">
                {tier.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">
                {tier.detail}
              </p>
              <p className="text-lg md:col-span-3 md:text-right">{tier.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
