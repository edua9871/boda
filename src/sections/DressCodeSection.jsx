import { config } from '../config'
import Icon from '../components/Icon'

export default function DressCodeSection() {
  const { dressCode } = config

  return (
    <section
      id="dress-code"
      className="page-section bg-primary text-on-primary flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-margin-mobile text-center">
        <h2 className="font-headline-md text-surface-container-lowest mb-stack-lg">
          {dressCode.title}
        </h2>

        <div className="grid grid-cols-2 gap-stack-xl">
          <div className="space-y-stack-sm">
            <Icon
              name="checkroom"
              className="text-secondary-fixed text-5xl"
            />
            <h4 className="font-label-md uppercase tracking-widest text-secondary-fixed">
              {dressCode.men.label}
            </h4>
            <p className="font-body-md opacity-80">{dressCode.men.text}</p>
          </div>

          <div className="space-y-stack-sm">
            <Icon
              name="styler"
              className="text-secondary-fixed text-5xl"
            />
            <h4 className="font-label-md uppercase tracking-widest text-secondary-fixed">
              {dressCode.women.label}
            </h4>
            <p className="font-body-md opacity-80">{dressCode.women.text}</p>
          </div>
        </div>

        <p className="mt-stack-xl font-body-md italic opacity-70">
          {dressCode.colorNote}
        </p>
      </div>
    </section>
  )
}
