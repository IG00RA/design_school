export function FinalCTASection() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* CTA Card */}
        <div className="relative rounded-3xl md:rounded-[36px] border border-purple-500/40 overflow-hidden">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(81,55,144,0.56) 35%, rgba(51,36,93,0.78) 52.5%, rgba(37,26,68,0.89) 61.25%, rgba(22,17,42,1) 70%)'
            }}
          />

          {/* Rotated container for effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-50 -rotate-[54deg] scale-150">
            <div className="w-full h-full rounded-3xl md:rounded-[36px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-5 sm:px-8 lg:px-16 py-10 md:py-16 text-center space-y-5 md:space-y-8">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight px-2">
              <span className="text-[#F1F0F5]">Готов создавать </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                креативы
              </span>
              <span className="text-[#F1F0F5]">, которые конвертят?</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-lg text-[#9D95B0] max-w-lg mx-auto px-2">
              Присоединяйся к потоку #4 и начни зарабатывать в iGaming
            </p>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <button className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white font-semibold text-sm md:text-lg shadow-[0_4px_30px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.5)] transition-all hover:scale-105">
                Записаться на курс →
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 text-center text-xs md:text-sm text-[#6B6080]">
          <p>© 2026 Gambling Motion Design School. Все права защищены.</p>
        </div>
      </div>
    </section>
  );
}