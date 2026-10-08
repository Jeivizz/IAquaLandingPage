import { DownloadCta } from '@/components/download-cta'
import { Estimate } from '@/components/estimate'
import { Faq } from '@/components/faq'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { UseCases } from '@/components/use-cases'
import { GrowthTracking} from "@/components/growth-tracking";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Estimate />
        <GrowthTracking />
        <UseCases />
        <Faq />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  )
}
