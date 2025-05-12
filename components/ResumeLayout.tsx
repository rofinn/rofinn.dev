export function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 min-h-screen">
      <div className="resume max-w-4xl w-full p-4">{children}</div>
      <div className="flex justify-end">
        <a
          href="/cv/document.pdf"
          download
          className="mt-4 px-4 py-2 border border-blue text-blue rounded hover:border-subtext1 hover:text-subtext1"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
