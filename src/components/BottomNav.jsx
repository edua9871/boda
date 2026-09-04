import { config } from '../config'
import Icon from './Icon'

export default function BottomNav({ activeSection, scrollTo }) {
  const visibleItems = config.nav.filter(({ visible = true }) => visible)

  return (
    <nav
      className="bottom-nav fixed bottom-0 left-0 w-full glass flex items-center px-2 py-3 z-50 shadow-[0_-20px_40px_rgba(0,0,0,0.04)] border-t border-white/20 overflow-x-auto"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      {visibleItems.map(({ id, icon, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`flex flex-1 min-w-[58px] flex-col items-center justify-center text-on-surface-variant transition-all duration-300 active:scale-90 ${
            activeSection === id ? 'nav-active' : ''
          }`}
        >
          <Icon name={icon} />
          <span className="font-label-md text-[10px] mt-0.5">{label}</span>
        </button>
      ))}
    </nav>
  )
}
