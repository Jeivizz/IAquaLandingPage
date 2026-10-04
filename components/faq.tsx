import { Plus } from 'lucide-react'

const questions = [
  {
    q: 'O app precisa de internet?',
    a: 'Não. O IAqua funciona totalmente offline: a contagem por foto e o cálculo da estimativa são feitos no próprio celular. Só é preciso internet para baixar o app.',
  },
  {
    q: 'Por que três amostras?',
    a: 'Usar a média de três amostras pequenas reduz a variação entre uma coleta e outra e deixa a estimativa para o volume total mais confiável.',
  },
  {
    q: 'Como funciona a conferência pelo peso?',
    a: 'Além da estimativa pela contagem, você pode estimar a quantidade pelo peso total das pós-larvas e comparar os dois resultados.',
  },
  {
    q: 'Por que o app não está no Google Play?',
    a: 'O IAqua ainda não foi publicado nas lojas. Por enquanto, o download é feito direto por esta página, de forma gratuita.',
  },
  {
    q: 'Como instalo o arquivo APK?',
    a: 'Baixe o arquivo pelo celular Android e abra-o. Se aparecer um aviso, permita a instalação de apps desta fonte nas configurações e confirme a instalação.',
  },
]

export function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-8 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Dúvidas
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="flex flex-col md:col-span-2">
          {questions.map((item) => (
            <details
              key={item.q}
              className="group border-b border-border py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pt-3 leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
