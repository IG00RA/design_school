import svgPaths from "../../imports/svg-dtowb7qz47";

export function LearningFormatSection() {
  const features = [
    {
      icon: svgPaths.p1261c280,
      title: 'Записанные уроки',
      description: '35 структурированных видео-уроков с пошаговыми инструкциями. Смотри в своём темпе.',
    },
    {
      icon: svgPaths.p7f46200,
      title: 'Закрытое комьюнити',
      description: 'Telegram-чат с менторами и студентами. Быстрая обратная связь и networking.',
    },
    {
      icon: svgPaths.p19608400,
      title: 'Ревью работ',
      description: 'Каждый проект проходит детальное ревью от действующих арт-директоров iGaming.',
    },
    {
      icon: svgPaths.p12463200,
      title: 'Практические задания',
      description: 'Реальные брифы и кейсы из индустрии. Создавай портфолио во время обучения.',
    },
  ];

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/6 border border-purple-500/15">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              Как устроено обучение
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-[#F1F0F5]">Учись так, как удобно </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              тебе
            </span>
          </h2>
        </div>

        {/* Features List */}
        <div className="space-y-5 md:space-y-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-3 md:gap-4 items-start"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="#A78BFA" strokeWidth="1.66667" viewBox="0 0 20 20" strokeLinecap="round" strokeLinejoin="round">
                  <path d={feature.icon} />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-0.5 md:space-y-1">
                <h3 className="text-base md:text-lg font-bold text-[#F1F0F5]">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-[#9D95B0] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}