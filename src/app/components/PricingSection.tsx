export function PricingSection() {
  const plans = [
    {
      name: "LITE",
      price: "€299",
      features: [
        "Доступ к платформе на 3 месяца",
        "35 видео-уроков",
        "Базовая поддержка в чате",
        "Сертификат по окончанию",
      ],
    },
    {
      name: "PRO",
      price: "€499",
      popular: true,
      features: [
        "Всё из LITE",
        "Доступ к платформе на 6 месяцев",
        "Ревью работ от менторов",
        "Закрытое комьюнити",
        "Карьерная консультация",
        "Помощь в трудоустройстве",
      ],
    },
    {
      name: "ULTRA",
      price: "€799",
      features: [
        "Всё из PRO",
        "Доступ к платформе на 12 месяцев",
        "Персональный ментор",
        "1-на-1 созвоны",
        "Приоритетное ревью работ",
        "Гарантия трудоустройства",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/6 border border-purple-500/15">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              Тарифы
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight px-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Выбери свой план
            </span>
          </h2>
          <p className="text-sm md:text-lg text-[#9D95B0] max-w-2xl mx-auto px-2 leading-relaxed">
            Гибкие тарифы под любой бюджет и цели. Все планы включают доступ к
            полной программе курса.
          </p>
        </div>

        {/* Pricing Cards - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-md md:max-w-none mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#16112A] flex flex-col border rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-5 md:space-y-6 ${
                plan.popular
                  ? "border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                  : "border-purple-500/15 hover:border-purple-500/30"
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 px-3 md:px-4 py-0.5 md:py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                  Популярный
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center space-y-1.5 md:space-y-2">
                <h3 className="text-xs md:text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  {plan.name}
                </h3>
                <div className="text-4xl md:text-5xl font-black text-[#F1F0F5]">
                  {plan.price}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 md:space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 md:gap-3"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M16.6667 5L7.5 14.1667L3.33333 10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs md:text-sm text-[#D1D0D8]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 md:py-3.5 mt-auto rounded-full font-semibold transition-all text-sm md:text-base ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-[0_4px_30px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.5)] hover:scale-105"
                    : "border border-purple-500/40 text-[#F1F0F5] hover:bg-purple-500/10"
                }`}
              >
                Выбрать план
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
