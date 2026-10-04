import Image from 'next/image'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site'

export function MadeBy({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="text-xs uppercase tracking-widest text-navy-foreground/60">
        Feito por
      </span>
      <Image
        src="/brands/embasa-logo.svg"
        alt={company.name}
        width={546}
        height={216}
        className="h-10 w-auto"
      />
    </div>
  )
}
