import { DownloadButton } from '@/components/download-button'

const installSteps = [
  'Toque em baixar pelo celular Android',
  'Abra o arquivo e permita a instalação',
  'Pronto: use mesmo sem internet',
]

export function DownloadCta() {
  return (
    <section id="download" className="scroll-mt-8 px-6 pb-20 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-14">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Baixe o IAqua e faça sua primeira estimativa hoje
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Gratuito para Android. Ainda não está nas lojas, então o download é
            feito direto por aqui.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-5">
          <DownloadButton variant="navy" />
          <ol className="flex flex-col gap-2 text-sm">
            {installSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 text-xs font-bold"
                >
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
