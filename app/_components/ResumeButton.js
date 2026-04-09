import PDFObject from "pdfobject";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

function ResumeButton({ isMobile = true }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      PDFObject.embed("TinHtunOo_Resume.pdf", "#pdf-viewer");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <>
      <button
        className={` ${
          isMobile
            ? "block p-6 w-full hover:bg-text hover:text-white  uppercase text-left"
            : "hidden md:block py-2 px-10 border-2 border-accent text-accent hover:opacity-55 hover:cursor-pointer rounded-4xl font-semibold text-lg"
        }`}
        onClick={() => setOpen(true)}
      >
        Resume
      </button>
      {open && (
        <div className="absolute  inset-0 h-screen bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] h-[90%] relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute md:-top-8 md:-right-10 -top-5 -right-5  rounded-3xl p-1  bg-white cursor-pointer hover:bg-white/80"
            >
              <X />
            </button>

            <div id="pdf-viewer" className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeButton;
