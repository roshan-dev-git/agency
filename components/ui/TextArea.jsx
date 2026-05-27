"use client";

export default function TextArea({
  label,
  placeholder,
  value,
  onChange,
  error,
  name,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-xs tracking-widest uppercase text-[var(--color-text-muted)] mb-2"
        style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 resize-none text-sm"
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={error ? "true" : "false"}
      />
      {error && (
        <span
          id={`${name}-error`}
          className="mt-2 text-xs text-red-400"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
