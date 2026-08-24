export default function MaterialIcon({ name, className = '', size = 20 }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: size, width: size, height: size, lineHeight: 1 }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
