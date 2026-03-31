import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Нужен ли опыт в дизайне или анимации?',
      answer: 'Нет, курс рассчитан на новичков. Мы начинаем с самых основ и постепенно переходим к сложным техникам. Главное — желание учиться и время на практику.',
    },
    {
      question: 'Какое оборудование необходимо для обучения?',
      answer: 'Потребуется компьютер с минимум 16GB RAM (рекомендуется 32GB), процессор Intel i5/Ryzen 5 или лучше, и видеокарта с 4GB памяти. Также понадобится подписка на Adobe Creative Cloud.',
    },
    {
      question: 'Сколько времени займёт обучение?',
      answer: 'Курс рассчитан на 3 месяца при занятиях по 2-3 часа в день. Однако доступ к материалам сохраняется от 3 до 12 месяцев в зависимости от тарифа.',
    },
    {
      question: 'Есть ли гарантия трудоустройства?',
      answer: 'Тариф ULTRA включает гарантию трудоустройства при условии выполнения всех заданий и успешной защиты финального проекта. Для остальных тарифов предоставляется помощь в составлении резюме и подготовке к собеседованиям.',
    },
    {
      question: 'Можно ли учиться из любой страны?',
      answer: 'Да, курс полностью онлайн. Все материалы доступны 24/7, поддержка в чате работает в режиме часовых поясов.',
    },
    {
      question: 'Что если курс мне не подойдёт?',
      answer: 'Мы предоставляем гарантию возврата средств в течение первых 14 дней обучения, если вы решите, что курс вам не подходит.',
    },
  ];

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/6 border border-purple-500/15">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight px-2">
            <span className="text-[#F1F0F5]">Частые </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#16112A] border border-purple-500/15 rounded-xl md:rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-3 md:gap-4 text-left"
              >
                <span className="font-bold text-[#F1F0F5] text-sm md:text-lg">
                  {faq.question}
                </span>
                <svg 
                  className={`w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 20 20"
                >
                  <path d="M8.99819 3.74924L14.2471 8.99819L8.99819 14.2471" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-5">
                  <p className="text-[#9D95B0] text-xs md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}