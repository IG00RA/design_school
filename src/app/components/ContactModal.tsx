import { useState, useEffect } from "react";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";
const POSTBACK_BASE_URL = import.meta.env.VITE_POSTBACK_URL || "https://mustage-tracker.com/click";

function getClickId(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("clickid") || "";
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactModal({ isOpen, onClose, source }: ContactModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setStatus("sending");

    try {
      const clickId = getClickId();

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          source,
          clickId,
        }),
      });

      // Postback to tracker
      if (clickId) {
        const postbackUrl = `${POSTBACK_BASE_URL}?cnv_id=${encodeURIComponent(clickId)}&payout=0&cnv_status=lead`;
        fetch(postbackUrl, { method: "GET", mode: "no-cors" }).catch(() => {});
      }

      setStatus("success");
      setName("");
      setContact("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl md:rounded-3xl border border-purple-500 bg-[#16112A] shadow-[0_0_40px_rgba(139,92,246,0.3)] p-6 md:p-8 space-y-6 animate-[modalIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M2 2L14 14M14 2L2 14" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pr-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-[#F1F0F5]">
            Оставь контакт – мы свяжемся с тобой
          </h3>
          <p className="text-sm md:text-base text-[#9D95B0] leading-relaxed">
            Расскажем детали курса, ответим на вопросы и поможем с выбором тарифа
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center space-y-3 py-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-[#F1F0F5]">Заявка отправлена!</p>
            <p className="text-sm text-[#9D95B0]">Менеджер свяжется с тобой в течение 60 минут в рабочее время</p>
          </div>
        ) : (
          <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-white/5 border border-purple-500/25 text-white placeholder-[#6B6080] text-sm md:text-base focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Телефон, Telegram или почта"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-white/5 border border-purple-500/25 text-white placeholder-[#6B6080] text-sm md:text-base focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 md:py-3.5 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white font-semibold text-sm md:text-base shadow-[0_4px_30px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.5)] hover:scale-[1.02] transition-all cursor-pointer disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Отправка..." : "Записаться на курс"}
              </button>

              {status === "error" && (
                <p className="text-center text-xs text-red-400">
                  Ошибка отправки. Попробуй ещё раз.
                </p>
              )}
            </form>

            {/* Fine print */}
            <p className="text-center text-xs text-[#6B6080]">
              Менеджер свяжется с тобой в течение 60 минут в рабочее время
            </p>
          </>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
