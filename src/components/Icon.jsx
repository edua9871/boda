// Simple wrapper for Material Symbols Outlined icons
export default function Icon({ name, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  )
}
