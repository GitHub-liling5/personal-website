import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Contact
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-wide md:text-4xl">
            Let&apos;s talk about a session
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Prefer email. Share a few dates, the kind of photographs you want,
            and any location notes — I&apos;ll reply with availability.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              href={`mailto:${site.email}`}
              className="font-heading text-2xl tracking-wide break-all underline-offset-4 transition-opacity hover:opacity-70 hover:underline md:text-3xl"
            >
              {site.email}
            </a>
            <a
              href={`mailto:${site.email}`}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Write an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
