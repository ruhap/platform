import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { BsX } from "react-icons/bs";
import useOnClickOutside from "@/hooks/useOnClickOutside";

type ModalProps = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};

const Modal = ({ children, show, onClose }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsBrowser(true);
    return () => setIsBrowser(false);
  }, []);

  useOnClickOutside(modalRef, onClose);

  if (!isBrowser) return null;
  if (!show) return null;

  const wrapper = (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex overflow-auto bg-black/90">
      <div
        ref={modalRef}
        className="relative m-auto flex w-full max-w-md flex-col rounded bg-white p-8"
      >
        <button className="absolute right-4 top-4" onClick={onClose}>
          <BsX className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(
    wrapper,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
