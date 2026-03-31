import imgFreepik3DGlassIconOfASmartphoneWithALargePlayBu497781 from "@/assets/video.webp";
import imgFreepik3DGlassIconOfAPlayingCardWithADiamondSui497791 from "@/assets/card.webp";
import imgFreepik3DGlassIconOfABrowserWindowWithARisingLi497801 from "@/assets/web.webp";
import imgFreepik3DGlassIconOfACasinoChipWithConcentricCir497811 from "@/assets/coin.webp";
import imgFreepik3DGlassIconOfADesktopMonitorScreenShowing497821 from "@/assets/monitor.webp";
import imgFreepik3DGlassIconOfACasinoDiceCubeWithDotsOnT497831 from "@/assets/gambl.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-4 pt-20">
      <div className="hidden sm:block absolute top-[15%] left-[8%] w-20 md:w-32 h-20 md:h-32 opacity-80 animate-[float_6s_ease-in-out_infinite]">
        <img
          src={imgFreepik3DGlassIconOfAPlayingCardWithADiamondSui497791}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-[12%] right-[5%] md:right-[10%] w-14 md:w-28 h-14 md:h-28 opacity-80 animate-[float_7s_ease-in-out_infinite_1s]">
        <img
          src={imgFreepik3DGlassIconOfACasinoChipWithConcentricCir497811}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-[45%] right-[8%] md:right-[15%] w-16 md:w-24 h-16 md:h-24 opacity-80 animate-[float_8s_ease-in-out_infinite_2s]">
        <img
          src={imgFreepik3DGlassIconOfADesktopMonitorScreenShowing497821}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="hidden sm:block absolute top-[10%] left-[10%] md:left-[15%] w-14 md:w-20 h-14 md:h-20 opacity-80 animate-[float_6.5s_ease-in-out_infinite_0.5s]">
        <img
          src={imgFreepik3DGlassIconOfABrowserWindowWithARisingLi497801}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-[20%] left-[5%] md:left-[10%] w-16 md:w-20 h-16 md:h-20 opacity-80 rotate-[17deg] animate-[float_7.5s_ease-in-out_infinite_1.5s]">
        <img
          src={imgFreepik3DGlassIconOfACasinoDiceCubeWithDotsOnT497831}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-[13%] right-[15%] md:right-[8%] w-20 md:w-28 h-20 md:h-28 opacity-80 animate-[float_6.8s_ease-in-out_infinite_0.8s]">
        <img
          src={imgFreepik3DGlassIconOfASmartphoneWithALargePlayBu497781}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="hidden sm:block absolute bottom-[10%] right-[8%] w-16 md:w-24 h-16 md:h-24 opacity-80 animate-[float_6.2s_ease-in-out_infinite_0.3s]">
        <img
          src={imgFreepik3DGlassIconOfABrowserWindowWithARisingLi497801}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="absolute inset-0">
          <div
            className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[90vw] h-[250px] md:h-[380px] opacity-30"
            style={{
              background:
                "linear-gradient(174deg, #9333EA 8%, #C026D3 33%, #A855F7 54%, #7C3AED 75%, #6D28D9 92%)",
              filter: "blur(3px)",
            }}
          />{" "}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[77vw] h-[250px] md:h-[340px] opacity-20"
            style={{
              background:
                "linear-gradient(174deg, #9333EA 8%, #C026D3 33%, #A855F7 54%, #7C3AED 75%, #6D28D9 92%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/15 border border-purple-400/25 backdrop-blur-md mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-purple-200 tracking-wide uppercase">
              Набор открыт — Поток #4
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[96px] font-black tracking-tight text-white">
            Gambling Motion
            <br />
            Design School
          </h1>

          {/* Description */}
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-[#B0A7C4] max-w-2xl mx-auto leading-relaxed">
            Научись создавать креативы в сфере iGaming с нуля. After Effects,
            AI-генерация, войсоверы, дипфейки и performance-маркетинг.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 font-semibold text-lg shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-600/40 transition-all active:scale-[0.97] hover:scale-[1.02]">
              Начать обучение →
            </button>

            <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-purple-400/30 text-white/80 font-semibold hover:bg-white/5 backdrop-blur-sm transition-all">
              Смотреть работы
            </button>
          </div>
        </div>
      </div>

      {/* Float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}
