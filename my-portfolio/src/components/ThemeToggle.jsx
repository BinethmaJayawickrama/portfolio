export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="iconBtn" onClick={onToggle} aria-label="Toggle theme" title="Toggle theme">
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
