import { useRef, useState, useEffect } from "react";
import { useModal } from "../ModalContext";
import svgPaths from "../../imports/svg-m623g10kr6";

import video1 from "@/assets/video/1.mp4";
import video2 from "@/assets/video/2.mp4";
import video3 from "@/assets/video/3.mp4";
import video4 from "@/assets/video/4.mp4";
import video5 from "@/assets/video/5.mp4";
import video6 from "@/assets/video/6.mp4";
import video7 from "@/assets/video/7.mp4";
import video8 from "@/assets/video/8.mp4";
import video9 from "@/assets/video/9.mp4";

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
];

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 0.3;
    const onLoaded = () => setDuration(formatTime(video.duration));
    const onEnded = () => setPlaying(false);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      className="group relative aspect-square rounded-2xl overflow-hidden border border-purple-500/15 bg-black/40 hover:border-purple-500/40 transition-all cursor-pointer"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="metadata"
      />

      {/* Play Button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
      >
        <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-purple-500/25 border-2 border-purple-400/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/40 transition-all">
          {playing ? (
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="white"
              viewBox="0 0 18 18"
            >
              <path d={svgPaths.p31874c80} />
            </svg>
          )}
        </button>
      </div>

      {/* Time Badge */}
      <div className="absolute top-3 md:top-4 right-3 md:right-4 px-2 md:px-3 py-0.5 md:py-1 rounded-lg bg-black/55 backdrop-blur-sm">
        <span className="text-[10px] md:text-xs text-white/85 font-medium font-mono">
          {duration || "0:00"}
        </span>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const { openModal } = useModal();

  return (
    <section id="portfolio" className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/6 border border-purple-500/15">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              Портфолио
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight px-2">
            <span className="text-[#F1F0F5]">Работы наших </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              студентов
            </span>
          </h2>
          <p className="text-sm md:text-lg text-[#9D95B0] max-w-2xl mx-auto px-2 leading-relaxed">
            Реальные креативы, созданные во время обучения. Каждый проект
            проходит ревью от действующих арт-директоров.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {videos.map((src, index) => (
            <VideoCard key={index} src={src} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6 md:mt-12">
          <button
            onClick={() => openModal("Смотреть ещё (portfolio)")}
            className="px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-purple-500/40 text-[#F1F0F5] font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2 text-sm md:text-base cursor-pointer"
          >
            <span>Смотреть ещё</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 18 18"
            >
              <path d="M3.75 9H14.25" strokeLinecap="round" />
              <path d="M9 3.75L14.25 9L9 14.25" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
