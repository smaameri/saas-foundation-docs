export const CopyPassword = ({ password }) => {
  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
  };

  return (
    <div className="my-4 flex items-center gap-2">
      <strong>Password:</strong>
      <code>{password}</code>
      <button
        type="button"
        aria-label="Copy demo password"
        title="Copy password"
        onClick={copyPassword}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
        </svg>
      </button>
    </div>
  );
};

export const DemoButton = ({ href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        backgroundColor: "#112525",
        borderColor: "#00BBA7",
        color: "#00BBA7",
      }}
      onMouseEnter={(event) => { event.currentTarget.style.backgroundColor = "#183633"; }}
      onMouseLeave={(event) => { event.currentTarget.style.backgroundColor = "#112525"; }}
      onFocus={(event) => { event.currentTarget.style.backgroundColor = "#183633"; }}
      onBlur={(event) => { event.currentTarget.style.backgroundColor = "#112525"; }}
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

export const CustomTip = ({ children }) => (
  <aside
    style={{
      backgroundColor: "#112525",
      borderColor: "#00BBA7",
      color: "#00BBA7",
    }}
    className="my-6 flex gap-3 rounded-lg border p-4 text-sm"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0"
      fill="none"
      stroke="#00BBA7"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
    <div>{children}</div>
  </aside>
);
