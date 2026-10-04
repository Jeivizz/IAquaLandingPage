import Image from 'next/image'

const steps = [
  {
    title: 'Separe 3 pequenas amostras',
    description:
      'Retire três amostras do tanque e espalhe cada uma em uma bandeja clara com um pouco de água.',
  },
  {
    title: 'Fotografe cada amostra',
    description:
      'O IAqua identifica e conta cada pós-larva na foto, sem precisar de internet.',
  },
  {
    title: 'Informe o volume em litros',
    description:
      'Com a média das 3 amostras, o app estima a quantidade total de PLs para o volume informado.',
  },
  {
    title: 'Confira pelo peso total',
    description:
      'Se quiser, valide o resultado com a estimativa pelo peso total e compare os dois números.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-8 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Como funciona
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Da amostra à estimativa do tanque
            </h2>
          </div>
          <ol className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-navy-foreground"
                >
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/larvae-macro.png"
            alt="Vista de cima de pós-larvas de camarão translúcidas em uma bandeja branca com água"
            width={1024}
            height={1024}
            className="aspect-square h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
