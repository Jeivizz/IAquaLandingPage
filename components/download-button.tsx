import { Download } from 'lucide-react'
import { appDownload } from '@/lib/site'
import { cn } from '@/lib/utils'

export function DownloadButton({
  variant = 'primary',
  className,
}: {
  variant?: 'primary' | 'navy'
  className?: string
}) {
  return (
    <a
      href={appDownload.url}
      className={cn(
        'group flex w-fit items-center gap-3 rounded-xl px-5 py-3 shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:brightness-110 focus-visible:ring-primary focus-visible:ring-offset-navy'
          : 'bg-navy text-navy-foreground hover:brightness-125 focus-visible:ring-navy focus-visible:ring-offset-primary',
        className,
      )}
    >
      <Download
        className="size-5 transition group-hover:translate-y-0.5"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base font-semibold">
          Baixar para {appDownload.platform}
        </span>
        <span className="text-xs opacity-80">
          {'Arquivo APK · versão '}
          {appDownload.version}
        </span>
      </span>
    </a>
  )
}
