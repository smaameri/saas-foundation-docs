import { useState } from "react";

export const CopyPassword = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-4 flex items-center gap-2">
      <strong>Password:</strong>
      <code>{password}</code>
      <button
        type="button"
        aria-label="Copy demo password"
        title={copied ? "Copied!" : "Copy password"}
        onClick={copyPassword}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100"
      >
        {copied ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m5 12 4 4L19 6" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
          </svg>
        )}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? "Password copied" : ""}</span>
    </div>
  );
};

export const DemoButton = ({ href }) => {
  const [active, setActive] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        backgroundColor: active ? "#183633" : "#112525",
        borderColor: "#00BBA7",
        color: "#00BBA7",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="my-6 inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-center font-semibold no-underline shadow-none transition-colors duration-150"
    >
      Go to Live Demo
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    </a>
  );
};
