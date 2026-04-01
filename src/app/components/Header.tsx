import { useState } from "react";
import { useModal } from "../ModalContext";

const navLinks = [
  { label: "Программа", href: "#program" },
  { label: "Примеры", href: "#portfolio" },
  { label: "Инструменты", href: "#tools" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0612]/50 backdrop-blur-xl border border-b-[#8B5CF6]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-2xl px-6">
          {/* Logo */}
          <a href="#" className="text-xl font-black tracking-tight text-white">
            GMDS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => openModal("Записаться (header)")}
              className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
            >
              Записаться
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-purple-400 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-purple-400 transition-all ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-purple-400 transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="mx-4 mt-1 rounded-2xl bg-[#1E1836]/95 backdrop-blur-xl border border-white/[0.06] px-6 py-4 flex flex-col gap-3 mb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-white/70 hover:text-white py-2 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mt-2 text-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-sm font-semibold text-white cursor-pointer"
            onClick={() => { setMobileOpen(false); openModal("Записаться (mobile header)"); }}
          >
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}
