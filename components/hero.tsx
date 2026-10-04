import Image from 'next/image'
import { WifiOff } from 'lucide-react'
import { DownloadButton } from '@/components/download-button'
import { MadeBy } from '@/components/made-by'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgb(255_255_255_/_0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-16 -z-10 size-96 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[28rem] rounded-full border border-primary/15" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-28 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:pb-28 md:pt-36">
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="flex w-fit items-center gap-2 rounded-full border border-navy-foreground/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-navy-foreground/80">
            <WifiOff className="size-3.5 text-primary" aria-hidden="true" />
            Funciona 100% offline
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
            Três fotos. A estimativa de{' '}
            <span className="whitespace-nowrap">pós-larvas</span> do{' '}
            <span className="text-primary">lote inteiro.</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-navy-foreground/75 text-pretty">
            Fotografe 3 pequenas amostras e o IAqua conta cada PL de camarão e
            estima o total para o volume em litros que você informar. Sem
            internet, direto no tanque.
          </p>
          <DownloadButton />
          <p className="text-sm text-navy-foreground/60">
            Download gratuito, direto por aqui. Em breve nas lojas.
          </p>
          <MadeBy className="border-t border-navy-foreground/15 pt-6" />

        </div>

        <div className="relative mx-auto w-full max-w-md animate-in fade-in zoom-in-95 duration-1000 md:max-w-none">
          <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-primary/25 via-transparent to-cyan-300/10 blur-2xl" aria-hidden="true" />
          <div className="float-slow relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-sm">
          <Image
            src="/images/app-screen.png"
            alt="Tela do IAqua mostrando uma amostra com pós-larvas marcadas em laranja e o total de PLs contadas"
            width={1024}
            height={1024}
            priority
            className="h-auto w-full drop-shadow-[0_28px_60px_rgb(0_0_0_/_35%)] [mask-image:radial-gradient(closest-side,black_80%,transparent)]"
          />
          </div>
        </div>
      </div>
    </section>
  )
}
