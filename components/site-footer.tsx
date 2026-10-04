import { MadeBy } from '@/components/made-by'
import { company } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <MadeBy />
          <p className="text-sm text-navy-foreground/60">
            {'© '}
            {new Date().getFullYear()} IAqua · {company.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
