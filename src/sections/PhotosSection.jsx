import { config } from '../config'
import Icon from '../components/Icon'

export default function PhotosSection() {
  const { photos, couple, footer } = config

  return (
    <section
      id="photos"
      className="page-section bg-surface flex flex-col items-center justify-center text-center py-20"
    >
      <div className="max-w-4xl mx-auto px-margin-mobile w-full">
        <h2 className="font-headline-md text-primary mb-stack-md">
          {photos.title}
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-stack-xl">
          {photos.subtitle}
        </p>

        <div className="flex flex-col items-center space-y-stack-lg">
          {/* Upload card */}
          <div className="glass p-stack-lg rounded-2xl border border-outline-variant/30 w-full max-w-sm">
            <Icon
              name="cloud_upload"
              className="text-secondary text-6xl mb-4"
            />
            <p className="font-body-md text-on-surface-variant mb-stack-lg">
              {photos.instruction}
            </p>
            <a
              href={photos.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-on-secondary px-12 py-5 rounded-full font-label-md hover:shadow-lg transition-all transform hover:scale-105 active:translate-y-1"
            >
              <Icon name="add_a_photo" className="mr-2 align-middle text-[18px]" />
              {photos.uploadText}
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-outline-variant/30">
          <h2 className="font-headline-md text-primary mb-4">
            {couple.initials}
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xs mx-auto mb-6">
            {footer.thankYouText}
          </p>
        </footer>
      </div>
    </section>
  )
}
