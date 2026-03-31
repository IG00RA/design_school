import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40312 from "@/assets/after_effects.webp";
import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40311 from "@/assets/midjourney.webp";
import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40313 from "@/assets/ai_voiceover.webp";
import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40314 from "@/assets/deepfake_tools.webp";
import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40315 from "@/assets/premiere_pro.webp";
import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40316 from "@/assets/audition.webp";
import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40317 from "@/assets/spy.webp";
import imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40318 from "@/assets/automation.webp";

export function ToolsSection() {
  const tools = [
    {
      name: "After Effects",
      description:
        "Основной рабочий инструмент для создания motion-креативов любой сложности",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40312,
    },
    {
      name: "Midjourney & SD",
      description:
        "AI-генерация визуалов, фонов и персонажей для рекламных материалов",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40311,
    },
    {
      name: "AI Voiceover",
      description:
        "Озвучка через ElevenLabs, синтез голоса и клонирование под любое ГЕО",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40313,
    },
    {
      name: "Deepfake Tools",
      description:
        "Создание deepfake-видео и говорящих персонажей для рекламных нужд",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40314,
    },
    {
      name: "Premiere Pro",
      description:
        "Монтаж и финальный рендер рекламных роликов под все форматы",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40315,
    },
    {
      name: "Audition",
      description:
        "Обработка аудио, микширование треков и подготовка саунд-дизайна",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40316,
    },
    {
      name: "Spy-сервисы",
      description:
        "Анализ конкурентов через AdHeart, SpyHouse и другие инструменты мониторинга",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40317,
    },
    {
      name: "Automation",
      description:
        "Скрипты и шаблоны для ускорения продакшена: Templater, nexrender, JSX",
      icon: imgFreepik3DGlassIconOfASquareRoundedRectangleAppIc40318,
    },
  ];

  return (
    <section id="tools" className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/6 border border-purple-500/15">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              Стек инструментов
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight px-2">
            <span className="text-[#F1F0F5]">Инструменты, которые ты </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              освоишь
            </span>
          </h2>
          <p className="text-sm md:text-lg text-[#9D95B0] max-w-2xl mx-auto px-2 leading-relaxed">
            Весь арсенал моушн-дизайнера в iGaming — от классического AE до
            новейших AI-инструментов.
          </p>
        </div>

        {/* Tools Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 md:space-y-4 group"
            >
              {/* Icon Container */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                {/* Gradient Background */}
                <div
                  className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(70,46,123,0.1) 35%, rgba(0,0,0,0) 70%)",
                  }}
                />
                {/* Icon */}
                <div className="relative w-24 h-24 md:w-36 md:h-36 drop-shadow-[0_4px_100px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Tool Name */}
              <h3 className="text-base md:text-2xl font-bold text-[#F1F0F5]">
                {tool.name}
              </h3>

              {/* Tool Description */}
              <p className="text-xs md:text-sm text-[#9D95B0] leading-relaxed max-w-[180px] md:max-w-[200px]">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
