import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Pricing } from "@/components/pricing"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorkGallery } from "@/components/work-gallery"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <WorkGallery />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
