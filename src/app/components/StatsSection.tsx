export function StatsSection() {
  const stats = [
    { value: '350+', label: 'Выпускников' },
    { value: '12', label: 'Модулей курса' },
    { value: '35', label: 'Видео-уроков' },
    { value: '94%', label: 'Трудоустройство' },
  ];

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-0.5 md:space-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-base text-[#6B6080] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}