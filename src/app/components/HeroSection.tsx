import { useModal } from "../ModalContext";
import imgFreepik3DGlassIconOfASmartphoneWithALargePlayBu497781 from "@/assets/video.webp";
import imgFreepik3DGlassIconOfAPlayingCardWithADiamondSui497791 from "@/assets/card.webp";
import imgFreepik3DGlassIconOfABrowserWindowWithARisingLi497801 from "@/assets/web.webp";
import imgFreepik3DGlassIconOfACasinoChipWithConcentricCir497811 from "@/assets/coin.webp";
import imgFreepik3DGlassIconOfADesktopMonitorScreenShowing497821 from "@/assets/monitor.webp";
import imgFreepik3DGlassIconOfACasinoDiceCubeWithDotsOnT497831 from "@/assets/gambl.webp";

export function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-4 pt-20 max-w-7xl mx-auto">
      <div className="absolute top-[62%] md:top-[26%] left-[80%] md:left-[16%] w-18 md:w-28 h-18 md:h-28 rotate-20 animate-[float_6.5s_ease-in-out_infinite_0.5s]">
        <img
          src={imgFreepik3DGlassIconOfACasinoDiceCubeWithDotsOnT497831}
          alt="Gambling Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-[80%] left-[8%] md:top-[35%] md:left-[6%] w-30 md:w-55 h-30 md:h-80 animate-[float_6s_ease-in-out_infinite]">
        <img
          src={imgFreepik3DGlassIconOfAPlayingCardWithADiamondSui497791}
          alt="Playing Card Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-[4%] left-[68%] md:bottom-[10%] md:left-[15%] w-24 md:w-34 h-24 md:h-34 animate-[float_6.8s_ease-in-out_infinite_0.8s]">
        {" "}
        <img
          src={imgFreepik3DGlassIconOfABrowserWindowWithARisingLi497801}
          alt="Browser Window Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-[12%] right-[40%] md:right-[15%] md:top-[22%] w-16 md:w-42 h-16 md:h-42 animate-[float_7s_ease-in-out_infinite_1s]">
        <img
          src={imgFreepik3DGlassIconOfACasinoChipWithConcentricCir497811}
          alt="Casino Chip Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-[15%] right-[65%] md:right-[7%] md:top-[51%] w-22 md:w-40 h-22 md:h-40 animate-[float_8s_ease-in-out_infinite_2s]">
        <img
          src={imgFreepik3DGlassIconOfADesktopMonitorScreenShowing497821}
          alt="Desktop Monitor Icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-[70%] right-[8%] md:right-[16%] md:bottom-[12%] w-32 md:w-48 h-32 md:h-48 animate-[float_7.5s_ease-in-out_infinite_1.5s]">
        <img
          src={imgFreepik3DGlassIconOfASmartphoneWithALargePlayBu497781}
          alt="Smartphone Icon"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="absolute inset-0">
          <div
            className="absolute -top-[20px] md:-top-[40px] left-1/2 -translate-x-1/2 w-[95%] h-[450px] min-[405px]:h-[400px] min-[429px]:h-[350px] min-[500px]:h-[300px] md:h-[400px] lg:h-[480px] opacity-30"
            style={{
              background:
                "linear-gradient(174deg, #9333EA 8%, #C026D3 33%, #A855F7 54%, #7C3AED 75%, #6D28D9 92%)",
              filter: "blur(3px)",
            }}
          />{" "}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[82vw] md:w-[85%] h-[290px] min-[405px]:h-[230px] min-[500px]:h-[180px] sm:h-[200px] md:h-[240px] lg:h-[290px] opacity-20"
            style={{
              background:
                "linear-gradient(174deg, #9333EA 8%, #C026D3 33%, #A855F7 54%, #7C3AED 75%, #6D28D9 92%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/15 border border-purple-400/25 backdrop-blur-md mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text- font-semibold text-purple-200 tracking-wide uppercase">
              Набор открыт — Поток #4
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl max-w-[85%] md:max-w-none leading-[1.05] sm:text-6xl md:text-7xl lg:text-[96px]  mx-auto font-black tracking-tight text-white">
            Gambling Motion
            <br />
            Design School
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg lg:text-[22px] text-[#B0A7C4] max-w-[85%] md:max-w-[500px] mx-auto leading-relaxed ">
            Научись создавать креативы в сфере iGaming с нуля. After Effects,
            AI-генерация, войсоверы, дипфейки и performance-маркетинг.
          </p>

          {/* CTA Buttons */}
          <div className="mt-14 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => openModal("Начать обучение (hero)")}
              className="sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 font-semibold text-lg cursor-pointer shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-600/40 transition-all active:scale-[0.97] hover:scale-[1.02]"
            >
              Начать обучение →
            </button>

            <a
              href="#portfolio"
              className="sm:w-auto px-10 py-4 rounded-full border border-purple-400/30 text-white/80 font-semibold cursor-pointer hover:bg-white/5 backdrop-blur-sm transition-all"
            >
              Смотреть работы
            </a>
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
