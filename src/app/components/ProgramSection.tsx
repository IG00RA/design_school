export function ProgramSection() {
  const modules = [
    {
      number: '01',
      title: 'Индустрия и основы',
      description: 'Погружение в iGaming-вертикаль, настройка среды, анатомия креативов',
      lessons: [
        '1.1 iGaming-маркетинг',
        '1.2 Рабочая среда',
        '1.3 Анатомия креатива',
        '1.4 Интерфейс AE',
      ],
    },
    {
      number: '02',
      title: 'Анимация и базовые техники',
      description: 'Кейфреймы, слои, шейпы, текст и работа с ассетами',
      lessons: [
        '2.1 Кейфреймы и интерполяция',
        '2.2 Shape Layers',
        '2.3 Текст и типографика',
        '2.4 Ассеты',
        '2.5 Первый креатив',
      ],
    },
    {
      number: '03',
      title: 'Эффекты и продвинутая работа',
      description: 'Встроенные эффекты, плагины, tracking, цветокоррекция',
      lessons: [
        '3.1 Эффекты AE',
        '3.2 Плагины',
        '3.3 Цветокоррекция',
        '3.4 Motion Tracking',
        '3.5 Rotoscoping',
      ],
    },
    {
      number: '04',
      title: 'AI-генерация и Deepfake',
      description: 'Новейшие AI-технологии для создания и автоматизации креативов',
      lessons: [
        '4.1 Midjourney/SD',
        '4.2 Анимация картинок',
        '4.3 Lip Sync',
        '4.4 AI-голос',
        '4.5 Футажи',
      ],
    },
    {
      number: '05',
      title: 'Expressions и 3D',
      description: 'JavaScript в AE, 3D-пространство, автоматизация — уровень профессионала',
      lessons: [
        '5.1 Введение в Expressions',
        '5.2 Продвинутые Expressions',
        '5.3 3D в After Effects',
      ],
    },
    {
      number: '06',
      title: 'Performance Marketing',
      description: 'Метрики, аналитика, психология конверсий — маркетинговая сторона креативов',
      lessons: [
        '6.1 Метрики и аналитика',
        '6.2 Психология конверсии',
        '6.3 Форматы и площадки',
        '6.4 Compliance и ограничения',
        '6.5 Креативная стратегия',
      ],
    },
  ];

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/6 border border-purple-500/15">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              Программа курса
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight px-2">
            <span className="text-[#F1F0F5]">От новичка до </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              профи
            </span>
            <span className="text-[#F1F0F5]"> за 12 модулей</span>
          </h2>
          <p className="text-sm md:text-lg text-[#9D95B0] max-w-2xl mx-auto px-2 leading-relaxed">
            Пошаговая программа: от основ After Effects до создания полноценных рекламных креативов для iGaming вертикали.
          </p>
        </div>

        {/* Program Grid - Single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mb-6 md:mb-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-[#16112A] border border-purple-500/15 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-3 md:space-y-4 hover:border-purple-500/30 transition-all"
            >
              {/* Module Number */}
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-500/20 to-purple-500/5">
                {module.number}
              </div>

              {/* Module Title */}
              <h3 className="text-lg md:text-2xl font-bold text-[#F1F0F5] tracking-tight">
                {module.title}
              </h3>

              {/* Module Description */}
              <p className="text-sm md:text-base text-[#9D95B0]">
                {module.description}
              </p>

              {/* Lessons List */}
              <ul className="space-y-2 md:space-y-3 pt-1 md:pt-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex items-start gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 rounded-sm bg-purple-500 mt-1.5 md:mt-2 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-[#D1D0D8]">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Final Module - Full Width */}
          <div className="lg:col-span-2 bg-[#16112A] border border-purple-500/15 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-3 md:space-y-4 hover:border-purple-500/30 transition-all">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-500/20 to-purple-500/5">
              07
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-[#F1F0F5] tracking-tight">
              Финальный проект и трудоустройство
            </h3>
            <p className="text-sm md:text-base text-[#9D95B0]">
              Реальный бриф, производство, оценка готовности, процесс найма в компаниях
            </p>
            <ul className="space-y-2 md:space-y-3 pt-1 md:pt-2">
              <li className="flex items-start gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 rounded-sm bg-purple-500 mt-1.5 md:mt-2 flex-shrink-0" />
                <span className="text-xs md:text-sm text-[#D1D0D8]">7.1 Реальный бриф + производство</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 rounded-sm bg-purple-500 mt-1.5 md:mt-2 flex-shrink-0" />
                <span className="text-xs md:text-sm text-[#D1D0D8]">7.2 Защита проекта и фидбек</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 rounded-sm bg-purple-500 mt-1.5 md:mt-2 flex-shrink-0" />
                <span className="text-xs md:text-sm text-[#D1D0D8]">7.3 Процесс найма в iGaming</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 rounded-sm bg-purple-500 mt-1.5 md:mt-2 flex-shrink-0" />
                <span className="text-xs md:text-sm text-[#D1D0D8]">7.4 Финальная оценка и собеседование</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}