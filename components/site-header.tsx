import { Download } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks } from '@/lib/site'

export function SiteHeader() {
return ( <header className="absolute inset-x-0 top-0 z-20"> <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:h-auto md:px-12 md:py-5"> <div
       className="pointer-events-none absolute inset-x-4 top-3 -z-10 h-14 rounded-2xl border border-white/10 bg-navy/35 shadow-2xl shadow-black/10 backdrop-blur-xl md:inset-x-8"
       aria-hidden="true"
     />
    <a href="#" aria-label="IAqua — início" className="text-navy-foreground">
      <Logo />
    </a>

    <nav aria-label="Principal" className="hidden md:block">
      <ul className="flex items-center gap-8 text-sm text-navy-foreground/80">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="transition hover:text-primary">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <a
      href="#download"
      className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
    >
      <Download className="size-4" aria-hidden="true" />
      Baixar app
    </a>
  </div>
</header>
)
}
