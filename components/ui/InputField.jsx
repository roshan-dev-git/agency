"use client";

export default function InputField({
  label,
  type = "text",
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
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 text-sm"
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
