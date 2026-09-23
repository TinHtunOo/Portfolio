"use client";

import PDFObject from "pdfobject";
import { FileText, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

function ResumeButton({ isMobile = true }) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      const path = "/TinHtunOo_Resume.pdf";
      if (PDFObject.supportsPDFs) {
        PDFObject.embed(path, "#pdf-viewer");
      } else {
        const viewer = document.querySelector("#pdf-viewer");
        if (viewer) {
          viewer.innerHTML = `<iframe src="${path}" style="width:100%;height:100%;border:0;"></iframe>`;
        }
      }
    }
    return () => {
      document.body.style.overflow = isMobile ? "hidden" : "auto";
    };
  }, [open]);

  return (
    <>
      <button
        className={
          isMobile
            ? "block w-full rounded-xl bg-accent p-6 text-left font-semibold uppercase text-white transition hover:bg-accent/90"
            : "hidden cursor-pointer rounded-full border-2 border-accent px-7 py-2.5 text-base font-semibold text-accent transition hover:bg-accent hover:text-white md:inline-flex md:items-center md:gap-2"
        }
        onClick={() => setOpen(true)}
      >
        {!isMobile && <FileText size={18} />}
        Resume
      </button>

      {open &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
            <div className="relative h-[90%] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close resume"
                className="absolute right-5 top-17 md:right-8 md:top-16  z-10 flex  h-6 w-6 md:h-10 md:w-10 cursor-pointer items-center justify-center rounded-full bg-white text-text shadow-md transition hover:bg-accent hover:text-white"
              >
                <X />
              </button>
              <div id="pdf-viewer" className="h-full w-full" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default ResumeButton;
