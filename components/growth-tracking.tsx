import { AlertTriangle, Bell, CalendarClock, Check, TrendingUp } from 'lucide-react'

const points = [
  { x: '8%', y: '92%', week: '0', weight: '0,01 g' },
  { x: '26%', y: '82%', week: '1', weight: '0,03 g' },
  { x: '44%', y: '69%', week: '2', weight: '0,06 g' },
  { x: '62%', y: '52%', week: '3', weight: '0,12 g' },
  { x: '80%', y: '28%', week: '4', weight: '0,21 g' },
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
                Registre o peso de uma unidade a cada semana e veja se o lote está evoluindo dentro do esperado. Uma visão simples para tomar decisões no momento certo.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-border/70 bg-card/80 p-5 shadow-sm">
                <CalendarClock className="mb-5 size-5 text-primary" aria-hidden="true" />
                <h3 className="font-display font-semibold">Pesagem em dia</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Receba um lembrete quando a próxima medição estiver chegando.</p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-card/80 p-5 shadow-sm">
                <Bell className="mb-5 size-5 text-primary" aria-hidden="true" />
                <h3 className="font-display font-semibold">Alertas claros</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Saiba quando o peso está acima, abaixo ou dentro da faixa esperada.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-[#eaf1fb] p-3 shadow-[0_24px_70px_-30px_rgba(13,30,54,0.45)] dark:bg-[#132947] md:p-5">
            <div className="rounded-[1.5rem] bg-card p-5 md:p-7">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Lote berçário 04</p>
                  <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">Peso × semanas</h3>
                </div>
                <div className="rounded-full bg-emerald-500/12 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Em acompanhamento</div>
              </div>

              <div className="relative h-72 overflow-hidden rounded-2xl border border-[#d9e2ec] bg-[#fbfdff] px-3 pb-9 pt-5 dark:border-slate-700 dark:bg-slate-950/40 md:h-80 md:px-5">
                <svg className="absolute inset-x-3 top-4 h-[calc(100%-3.5rem)] w-[calc(100%-1.5rem)] md:inset-x-5 md:w-[calc(100%-2.5rem)]" viewBox="0 0 600 270" preserveAspectRatio="none" aria-label="Gráfico de crescimento semanal">
                  <g stroke="#dce5ee" strokeWidth="1">
                    <path d="M0 30H600M0 100H600M0 170H600M0 240H600" />
                    <path d="M0 30V240M100 30V240M200 30V240M300 30V240M400 30V240M500 30V240M600 30V240" />
                  </g>
                  <path d="M0 239 C105 229 185 211 280 183 S420 115 600 20 L600 115 C460 170 390 215 280 225 S100 250 0 250Z" fill="#73b8e8" fillOpacity=".22" />
                  <path d="M0 244 C105 235 185 216 280 194 S430 125 600 25" fill="none" stroke="#4da8df" strokeWidth="4" strokeDasharray="12 8" />
                  <path d="M0 242 C105 230 185 212 280 180 S410 112 535 55" fill="none" stroke="#2349ad" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <g fill="#0c9a78" stroke="#ffffff" strokeWidth="5">
                    <circle cx="0" cy="242" r="10" fill="#ffffff" stroke="#2349ad" />
                    <circle cx="100" cy="229" r="10" /><circle cx="200" cy="211" r="10" /><circle cx="300" cy="180" r="10" /><circle cx="400" cy="112" r="10" /><circle cx="500" cy="55" r="10" />
                  </g>
                </svg>
                <div className="absolute inset-x-3 bottom-2 flex justify-between text-[10px] text-muted-foreground md:inset-x-5 md:text-xs"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span></div>
                <div className="absolute left-1 top-5 flex h-[calc(100%-3.5rem)] flex-col justify-between text-[10px] text-muted-foreground md:left-2 md:text-xs"><span>0,6 g</span><span>0,4 g</span><span>0,2 g</span><span>0</span></div>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><i className="size-3 bg-sky-400/25" /> Faixa esperada</span>
                <span className="flex items-center gap-2"><i className="h-0.5 w-5 border-t-2 border-dashed border-sky-500" /> Típico</span>
                <span className="flex items-center gap-2"><i className="size-2.5 rounded-full bg-[#2349ad]" /> Pesagens</span>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-amber-500/10 p-4 text-sm text-amber-900 dark:text-amber-200">
                <AlertTriangle className="size-5 shrink-0 text-amber-600 dark:text-amber-300" aria-hidden="true" />
                <span><strong>Próxima pesagem em 2 dias.</strong> Acompanhe para manter o histórico atualizado.</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-4 text-emerald-500" aria-hidden="true" /> Última pesagem dentro da faixa esperada</div>
            </div>
          </div>
        </div>
      </section>
  )
}
