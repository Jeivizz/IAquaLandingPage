import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brands/iaqua-logo-white.svg"
      alt="IAqua"
      width={215}
      height={69}
      className={cn('h-9 w-auto', className)}
      priority
    />
  )
}
