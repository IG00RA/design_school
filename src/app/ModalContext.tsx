import { createContext, useContext, useState, type ReactNode } from "react";

interface ModalContextType {
  openModal: (source: string) => void;
  closeModal: () => void;
  isOpen: boolean;
  source: string;
}

const ModalContext = createContext<ModalContextType>(null!);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("");

  const openModal = (src: string) => {
    setSource(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, source }}>
      {children}
    </ModalContext.Provider>
  );
}
