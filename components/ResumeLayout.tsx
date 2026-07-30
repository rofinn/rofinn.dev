import { Waves } from "@/components/Waves";

export function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    // Waves is `fixed` with no `left`, so it sits at its static position and
    // has to hang off a plain block wrapper to line up with the other pages.
    <div className="resume">
      <Waves />
      <div className="flex flex-col items-center justify-center py-8 min-h-screen">
        <div className="max-w-4xl w-full p-4">{children}</div>
        <div className="w-full max-w-4xl flex justify-end">
          <a
            href="/cv/document.pdf"
            download
            className="mt-4 px-4 py-2 border border-blue text-blue rounded hover:brightness-125"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
