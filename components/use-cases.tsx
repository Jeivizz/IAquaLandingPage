import Image from 'next/image'
import { ArrowUpRight, Check, Ruler } from 'lucide-react'

const uses = [
  'Compra e venda com conferência na hora',
  'Estoque de larvicultura sempre atualizado',
  'Transferências entre tanques sem estimativa',
  'Povoamento com densidade sob controle',
]

export function UseCases() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground md:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:px-8">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-3 rounded-[2rem] bg-primary/20 blur-xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30 sm:aspect-[5/4] md:aspect-[4/5]">
            <Image
              src="/images/hatchery.png"
              alt="Técnico fotografando uma amostra de pós-larvas com o celular em uma larvicultura"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/15 bg-navy/70 p-4 backdrop-blur-md">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/60">Processo IAqua</p>
                <p className="mt-1 font-display text-lg font-semibold text-white">Contagem padronizada</p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-3 text-navy shadow-xl sm:-right-8">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary"><Ruler className="size-4" aria-hidden="true" /></span>
            <div><p className="text-[10px] font-semibold uppercase tracking-wider text-navy/50">Mais controle</p><p className="text-sm font-bold">Menos desperdício</p></div>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="size-1.5 rounded-full bg-primary" /> Feito para a carcinicultura
          </p>
          <h2 className="max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl">
            Da amostra ao viveiro, <span className="text-primary">mais certeza</span> em cada decisão.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-foreground/70 text-pretty">
            O IAqua transforma três pequenas amostras em uma estimativa confiável para o volume do tanque. Um processo simples para negociar melhor, povoar com segurança e acompanhar o ciclo sem achismo.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {uses.map((use) => (
              <li key={use} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 text-sm leading-relaxed text-navy-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/10">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" aria-hidden="true" /></span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
