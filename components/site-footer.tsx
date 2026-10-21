import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-heading tracking-[0.2em] text-foreground uppercase">
          {site.name}
        </p>
        <p>
          © {new Date().getFullYear()} ·{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  )
}
