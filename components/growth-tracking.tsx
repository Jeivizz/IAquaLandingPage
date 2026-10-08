import { AlertTriangle, Bell, CalendarClock, Check, TrendingUp } from 'lucide-react'

const points = [
  { x: 0, y: 242, week: '0', weight: '0,01 g' },
  { x: 100, y: 229, week: '1', weight: '0,03 g' },
  { x: 200, y: 211, week: '2', weight: '0,06 g' },
  { x: 300, y: 180, week: '3', weight: '0,12 g' },
  { x: 400, y: 112, week: '4', weight: '0,21 g' },
  { x: 500, y: 55, week: '5', weight: '0,34 g' },
]

export function GrowthTracking() {
  return (
      <section id="crescimento" className="overflow-hidden py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="grid size-9 place-items-center rounded-2xl bg-primary/12">
                <TrendingUp className="size-4" aria-hidden="true" />
              </span>
                Crescimento
              </div>

              <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">
                Acompanhe o desenvolvimento, semana após semana.
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Registre o peso de uma unidade a cada semana e veja se o lote está
                evoluindo dentro do esperado. Uma visão simples para tomar decisões
                no momento certo.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-border/70 bg-card/80 p-5 shadow-sm">
                <CalendarClock
                    className="mb-5 size-5 text-primary"
                    aria-hidden="true"
                />
                <h3 className="font-display font-semibold">Pesagem em dia</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Receba um lembrete quando a próxima medição estiver chegando.
                </p>
              </div>

              <div className="rounded-3xl border border-border/70 bg-card/80 p-5 shadow-sm">
                <Bell
                    className="mb-5 size-5 text-primary"
                    aria-hidden="true"
                />
                <h3 className="font-display font-semibold">Alertas claros</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Saiba quando o peso está acima, abaixo ou dentro da faixa esperada.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] shadow-[0_24px_70px_-30px_rgba(13,30,54,0.45)]">
            <div className="rounded-[1.5rem] bg-card p-5 md:p-7">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Lote berçário 04
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">
                    Peso × semanas
                  </h3>
                </div>

                <div className="rounded-full bg-emerald-500/12 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Em acompanhamento
                </div>
              </div>

              {/* Gráfico */}
              <div className="relative overflow-hidden rounded-2xl border border-[#d9e2ec] bg-[#fbfdff] dark:border-slate-700 dark:bg-slate-950/40">

                {/* Área real do gráfico.
                  O aspect-ratio impede que o SVG fique vertical no mobile. */}
                <div className="relative aspect-[2.05/1] w-full px-3 pt-4 pb-8 sm:px-4">
                  <svg
                      className="absolute inset-x-3 top-4 h-[calc(100%-3rem)] w-[calc(100%-1.5rem)] sm:inset-x-4 sm:w-[calc(100%-2rem)]"
                      viewBox="0 0 600 270"
                      preserveAspectRatio="xMidYMid meet"
                      aria-label="Gráfico de crescimento semanal"
                  >
                    {/* Grade horizontal */}
                    <g
                        stroke="#dbe5ef"
                        strokeWidth="1"
                        strokeDasharray="3 5"
                    >
                      <line x1="0" y1="30" x2="600" y2="30" />
                      <line x1="0" y1="100" x2="600" y2="100" />
                      <line x1="0" y1="170" x2="600" y2="170" />
                      <line x1="0" y1="240" x2="600" y2="240" />
                    </g>

                    {/* Grade vertical — alinhada às semanas */}
                    <g
                        stroke="#e4ebf2"
                        strokeWidth="1"
                        strokeDasharray="2 6"
                    >
                      <line x1="0" y1="30" x2="0" y2="240" />
                      <line x1="100" y1="30" x2="100" y2="240" />
                      <line x1="200" y1="30" x2="200" y2="240" />
                      <line x1="300" y1="30" x2="300" y2="240" />
                      <line x1="400" y1="30" x2="400" y2="240" />
                      <line x1="500" y1="30" x2="500" y2="240" />
                      <line x1="600" y1="30" x2="600" y2="240" />
                    </g>

                    {/* Faixa esperada */}
                    <path
                        d="
                      M0 239
                      C105 229 185 211 280 183
                      S420 115 600 20
                      L600 115
                      C460 170 390 215 280 225
                      S100 250 0 250
                      Z
                    "
                        fill="#73b8e8"
                        fillOpacity=".22"
                    />

                    {/* Linha típica */}
                    <path
                        d="
                      M0 244
                      C105 235 185 216 280 194
                      S430 125 600 25
                    "
                        fill="none"
                        stroke="#4da8df"
                        strokeWidth="4"
                        strokeDasharray="12 8"
                    />

                    {/* Linha principal */}
                    <path
                        d="
                      M0 242
                      C105 230 185 212 280 180
                      S410 112 535 55
                    "
                        fill="none"
                        stroke="#2349ad"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Pontos exatamente sobre a linha */}
                    <g>
                      {points.map((point, index) => (
                          <circle
                              key={point.week}
                              cx={point.x}
                              cy={point.y}
                              r="8"
                              fill={index === 0 ? '#ffffff' : '#0c9a78'}
                              stroke="#2349ad"
                              strokeWidth="4"
                              vectorEffect="non-scaling-stroke"
                          />
                      ))}
                    </g>
                  </svg>

                  {/* Eixo X */}
                  <div className="absolute inset-x-3 bottom-2 flex justify-between text-[10px] text-muted-foreground sm:inset-x-4 sm:text-xs">
                    {points.map((point) => (
                        <span key={point.week}>{point.week}</span>
                    ))}
                  </div>

                  {/* Eixo Y */}
                  <div className="absolute left-1 top-4 flex h-[calc(100%-3rem)] flex-col justify-between text-[10px] text-muted-foreground sm:left-2 sm:text-xs">
                    <span>0,6 g</span>
                    <span>0,4 g</span>
                    <span>0,2 g</span>
                    <span>0 g</span>
                  </div>
                </div>
              </div>

              {/* Legenda */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <i className="size-3 rounded-sm bg-sky-400/25" />
                Faixa esperada
              </span>

                <span className="flex items-center gap-2">
                <i className="h-0.5 w-5 border-t-2 border-dashed border-sky-500" />
                Típico
              </span>

                <span className="flex items-center gap-2">
                <i className="size-2.5 rounded-full bg-[#2349ad]" />
                Pesagens
              </span>
              </div>

              {/* Alerta */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-amber-500/10 p-4 text-sm text-amber-900 dark:text-amber-200">
                <AlertTriangle
                    className="size-5 shrink-0 text-amber-600 dark:text-amber-300"
                    aria-hidden="true"
                />

                <span>
                <strong>Próxima pesagem em 2 dias.</strong> Acompanhe para manter
                o histórico atualizado.
              </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Check
                    className="size-4 text-emerald-500"
                    aria-hidden="true"
                />
                Última pesagem dentro da faixa esperada
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}