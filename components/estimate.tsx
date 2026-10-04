import { Scale, WifiOff } from 'lucide-react'

const samples = [
  { label: 'Amostra 1', count: 412 },
  { label: 'Amostra 2', count: 398 },
  { label: 'Amostra 3', count: 405 },
]

const highlights = [
  {
    icon: WifiOff,
    title: 'Sem internet, sem problema',
    description:
      'Contagem e estimativa acontecem no próprio celular. Funciona na fazenda, no berçário ou no caminhão de transporte.',
  },
  {
    icon: Scale,
    title: 'Dupla conferência pelo peso',
    description:
      'Compare a estimativa por contagem com a estimativa pelo peso total e negocie com mais segurança.',
  },
]

export function Estimate() {
  return (
    <section id="estimativa" className="scroll-mt-8 bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Estimativa
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Conte pouco, saiba o total
            </h2>
            <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
              Não é preciso contar o tanque inteiro. A partir de três amostras
              pequenas, o IAqua calcula a média e projeta a quantidade de
              pós-larvas para quantos litros você precisar.
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <Icon
                  className="mt-1 size-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-semibold">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="flex flex-col gap-4 rounded-3xl bg-navy p-6 text-navy-foreground shadow-xl md:p-8">
          <figcaption className="text-xs font-medium uppercase tracking-widest text-navy-foreground/60">
            Exemplo de estimativa
          </figcaption>
          <dl className="grid grid-cols-3 gap-3">
            {samples.map((sample) => (
              <div
                key={sample.label}
                className="flex flex-col gap-1 rounded-xl bg-navy-foreground/5 p-4 ring-1 ring-navy-foreground/10"
              >
                <dt className="text-xs text-navy-foreground/60">
                  {sample.label}
                </dt>
                <dd className="font-display text-2xl font-bold tabular-nums">
                  {sample.count}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex items-center justify-between border-b border-navy-foreground/10 pb-4 text-sm">
            <span className="text-navy-foreground/70">Média por amostra</span>
            <span className="font-semibold tabular-nums">405 PLs</span>
          </div>
          <div className="flex items-center justify-between border-b border-navy-foreground/10 pb-4 text-sm">
            <span className="text-navy-foreground/70">Volume informado</span>
            <span className="font-semibold tabular-nums">500 L</span>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl bg-primary p-5 text-primary-foreground">
            <span className="text-sm">Estimativa total</span>
            <span className="font-display text-4xl font-bold tabular-nums md:text-5xl">
              2.025.000
            </span>
            <span className="text-sm">pós-larvas</span>
          </div>
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="flex items-center gap-2 text-navy-foreground/70">
              <Scale className="size-4 text-primary" aria-hidden="true" />
              Conferência pelo peso total
            </span>
            <span className="font-semibold tabular-nums">≈ 2.010.000</span>
          </div>
        </figure>
      </div>
    </section>
  )
}
