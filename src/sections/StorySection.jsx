import { config } from '../config'

export default function StorySection() {
  const { story } = config

  return (
    <section
      id="story"
      className="page-section bg-surface-container-low py-20"
    >
      <div className="max-w-5xl mx-auto px-margin-mobile">
        <div className="text-center mb-stack-xl">
          <h2 className="font-headline-md text-primary mb-stack-sm">
            {story.title}
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="space-y-stack-xl">
          {story.items.map(({ id, date, title, text, image, reverse }) => (
            <div
              key={id}
              className={`flex flex-col ${
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-stack-lg`}
            >
              {/* Photo */}
              <div className="w-full md:w-1/2 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text card */}
              <div className="w-full md:w-1/2 glass p-stack-lg rounded-xl border border-white/40">
                <span className="font-label-md text-secondary mb-2 block">
                  {date}
                </span>
                <h3 className="font-headline-md text-primary mb-4">{title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
