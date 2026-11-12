
"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import {
  Cloud,
  Cpu,
  Tag,
  Rocket,
  Layers,
  ClipboardCheck,
  Headset,
  Play,
} from "lucide-react";

import HomeSections from "./HomeSections";
import Footer from "./Footer";

const steps = [
  {
    title: "Software SaaS",
    description: "Nuestro propio software en la modalidad SaaS.",
    icon: Cloud,
  },
  {
    title: "Hardware certificado",
    description:
      "Equipos certificados para garantizar una captura de datos precisa y confiable.",
    icon: Cpu,
  },
  {
    title: "Consumibles",
    description:
      "Consumibles especializados para cada tipo de necesidad.",
    icon: Tag,
  },
  {
    title: "Implementación",
    description:
      "100% de implementación para la puesta en marcha de las soluciones.",
    icon: Rocket,
  },
  {
    title: "Azure IaaS",
    description:
      "Servicio IaaS para el hospedaje seguro en Microsoft Azure.",
    icon: Layers,
  },
  {
    title: "Tomas físicas",
    description:
      "Colaboración en tomas físicas de activos e inventarios para facilitar la puesta en marcha.",
    icon: ClipboardCheck,
  },
  {
    title: "Postventa",
    description:
      "Excelente servicio postventa: soporte, nuevas versiones y mejoras sugeridas por nuestros clientes.",
    icon: Headset,
  },
];

const TOTAL = steps.length;
const ANGLE_STEP = 360 / TOTAL;

// Circle node positions
const nodeStyles = steps.map((_, index) => {
  const angle = (index * ANGLE_STEP * Math.PI) / 180;

  const x = Math.sin(angle).toFixed(4);
  const y = (-Math.cos(angle)).toFixed(4);

  return {
    left: `calc(50% + var(--orbit-r) * ${x})`,
    top: `calc(48% + var(--orbit-r) * ${y})`,
  };
});

// WhatsApp icon
function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />

      <path
        d="M9 8.8c0 3.2 2.9 6.2 6.2 6.2l1.1-1.2-1.9-1-0.9 0.6c-0.9-0.4-1.9-1.4-2.3-2.3l0.6-0.9-1-1.9L9 8.8z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Hero() {
  const [state, setState] = useState({
    step: 0,
    rot: 0,
  });

  const [videoPlaying, setVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const activeStep = state.step;
  const ActiveIcon = steps[activeStep].icon;

  // Move clockwise to selected step
  const goTo = (index) => {
    setState((prev) => ({
      step: index,
      rot:
        prev.rot +
        ((index - prev.step + TOTAL) % TOTAL) * ANGLE_STEP,
    }));
  };

  // Automatic circle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => ({
        step: (prev.step + 1) % TOTAL,
        rot: prev.rot + ANGLE_STEP,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Video play / pause
  const handleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setVideoPlaying(true);
      } else {
        video.pause();
        setVideoPlaying(false);
      }
    } catch (error) {
      console.error("Video playback error:", error);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#091323] text-white">

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_20%,rgba(35,91,210,0.16),transparent_35%),linear-gradient(90deg,#091323,#0b1427)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_bottom,transparent_48px,rgba(148,163,184,0.8)_49px,transparent_50px)] [background-size:100%_50px]" />

      {/* MAIN CONTAINER */}

      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-5 pb-16 pt-8 sm:px-8 md:pt-10 lg:grid-cols-[minmax(0,1.9fr)_minmax(320px,0.9fr)] lg:gap-12 lg:px-3 lg:pb-20 lg:pt-7">

        {/* LEFT CONTENT */}

        <div className="min-w-0">

          {/* MAIN HEADING - EXACTLY TWO LINES */}

          <div className="max-w-[850px]">

            <h1 className="text-[clamp(30px,3.8vw,44px)] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#edf1fa]">

              <span className="block">
                Expertos en{" "}
                <span className="bg-gradient-to-r from-[#2868ff] to-[#78a9ff] bg-clip-text text-transparent">
                  captura de datos
                </span>
              </span>

              <span className="mt-1 block whitespace-nowrap text-[clamp(23px,3.3vw,42px)] tracking-[-1.2px]">
                para inventarios y activos fijos
              </span>

            </h1>

            <p className="mt-5 max-w-[690px] text-[16px] leading-[1.7] text-[#aab3c2] sm:text-[18px]">
              Le brindamos rapidez, trazabilidad y exactitud en la información
              de sus inventarios y activos fijos mediante{" "}
              <span className="font-semibold text-[#73a5ff]">
                RFID, código de barras y sensores IoT.
              </span>
            </p>

          </div>

          {/* STATISTICS */}

          <div className="mt-5 grid grid-cols-3 border-y border-white/10 py-5 text-center">

            <div className="border-r border-white/10 px-2">
              <h3 className="text-[25px] font-bold text-[#3475ff] sm:text-[29px]">
                24+
              </h3>

              <p className="mt-1 text-[9px] font-medium tracking-[1px] text-[#71809a] sm:text-[11px]">
                AÑOS DE EXPERIENCIA
              </p>
            </div>

            <div className="border-r border-white/10 px-2">
              <h3 className="text-[20px] font-bold text-[#3475ff] sm:text-[29px]">
                Llave en mano
              </h3>

              <p className="mt-1 text-[9px] font-medium tracking-[1px] text-[#71809a] sm:text-[11px]">
                SOLUCIÓN INTEGRAL
              </p>
            </div>

            <div className="px-2">
              <h3 className="text-[25px] font-bold text-[#3475ff] sm:text-[29px]">
                100%
              </h3>

              <p className="mt-1 text-[9px] font-medium tracking-[1px] text-[#71809a] sm:text-[11px]">
                DESARROLLO PROPIO
              </p>
            </div>

          </div>

          {/* SEVEN STEPS HEADING */}

          <div className="pt-6 text-center">

            <p className="text-[15px] font-medium tracking-[4px] text-[#3475ff] sm:text-[18px]">
              NUESTRA OFERTA INTEGRAL
            </p>

            <p className="mx-auto mt-2 max-w-[350px] text-[15px] leading-6 text-[#aeb6c5]">
              <span className="font-bold text-[#76a8ff]">
                Siete pasos esenciales
              </span>{" "}
              que entregamos en cada proyecto.
            </p>

          </div>

          {/* INTERACTIVE ANIMATED CIRCLE */}

          <div className="relative mx-auto mt-8 h-[390px] w-full max-w-[490px] [--orbit-r:122px] sm:h-[420px] sm:[--orbit-r:165px]">

            {/* OUTER DASHED CIRCLE */}

            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2865d5]/50 sm:h-[330px] sm:w-[330px]" />

            {/* STATIC INNER CIRCLE */}

            <div className="pointer-events-none absolute left-1/2 top-[48%] z-[1] h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6195ff]/60 bg-[radial-gradient(circle,rgba(30,64,120,0.34),rgba(10,24,47,0.95)_75%)] shadow-[0_0_45px_rgba(36,101,255,0.20)] sm:h-[225px] sm:w-[225px]" />

            {/* ROTATING BLUE GLOW */}

            <div className="pointer-events-none absolute left-1/2 top-[48%] z-[2] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 sm:h-[330px] sm:w-[330px]">

              <div
                className="h-full w-full rounded-full"
                style={{
                  transform: `rotate(${state.rot}deg)`,
                  transition:
                    "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",

                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(36,100,255,0.04) 285deg, rgba(36,100,255,0.25) 315deg, rgba(40,105,255,0.95) 345deg, rgba(100,160,255,1) 360deg)",

                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 10px))",

                  mask:
                    "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 10px))",

                  filter:
                    "drop-shadow(0 0 12px rgba(40,105,255,0.9))",
                }}
              />

            </div>

            {/* CENTER CONTENT */}

            <div className="absolute left-1/2 top-[48%] z-10 flex h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full px-4 text-center sm:h-[225px] sm:w-[225px]">

              {/* CENTER ICON */}

              <div
                key={`icon-${activeStep}`}
                className="animate-[centerFade_0.55s_ease]"
              >
                <ActiveIcon
                  size={30}
                  className="mb-2 text-[#75aaff]"
                  strokeWidth={2}
                />
              </div>

              {/* STEP NUMBER */}

              <span
                key={`number-${activeStep}`}
                className="animate-[centerFade_0.55s_ease] text-[11px] font-semibold text-[#73a7ff] sm:text-[12px]"
              >
                Paso {activeStep + 1} de {TOTAL}
              </span>

              {/* STEP TITLE */}

              <h3
                key={`title-${activeStep}`}
                className="mt-2 animate-[centerFade_0.55s_ease] text-[14px] font-bold text-[#edf2ff] sm:text-[16px]"
              >
                {steps[activeStep].title}
              </h3>

              {/* STEP DESCRIPTION */}

              <p
                key={`description-${activeStep}`}
                className="mt-2 line-clamp-4 animate-[centerFade_0.55s_ease] text-[11px] leading-[1.4] text-[#aeb7c8] sm:text-[13px]"
              >
                {steps[activeStep].description}
              </p>

            </div>

            {/* CIRCLE NODES */}

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={step.title}
                  onClick={() => goTo(index)}
                  aria-label={`Paso ${index + 1}: ${step.title}`}
                  aria-pressed={isActive}
                  style={nodeStyles[index]}
                  className="group absolute z-20 h-[43px] w-[43px] -translate-x-1/2 -translate-y-1/2 sm:h-[50px] sm:w-[50px]"
                >

                  {/* NODE ICON */}

                  <span
                    className={`relative grid h-full w-full place-items-center rounded-full border transition-all duration-500 ${
                      isActive
                        ? "scale-110 border-[#5790ff] bg-[#326cff] text-white shadow-[0_0_25px_rgba(50,108,255,0.95),0_0_55px_rgba(50,108,255,0.55)]"
                        : "border-[#2453a0]/70 bg-[#0b172a] text-[#75aaff] group-hover:scale-110 group-hover:border-[#4380ff] group-hover:bg-[#142b50]"
                    }`}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </span>

                  {/* NODE LABEL */}

                  <span
                    className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] leading-4 transition-colors sm:text-[12px] ${
                      isActive
                        ? "font-bold text-[#83b0ff]"
                        : "text-[#9ca8ba] group-hover:text-white"
                    }`}
                  >

                    <span className="text-[#4c83ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {" "}· {step.title}

                  </span>

                </button>
              );
            })}

          </div>

        </div>

        {/* RIGHT VIDEO CARD */}

        <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:mt-0 lg:pt-0">

          <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#172337] p-[7px] shadow-[0_20px_70px_rgba(0,0,0,0.35)]">

            {/* VIDEO */}

            <div className="relative h-[470px] overflow-hidden rounded-t-[24px] bg-[#172337] sm:h-[560px] lg:h-[690px]">

              <video
                ref={videoRef}
                poster="/images/hero-video-poster.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
                controls={videoPlaying}
                onEnded={() => setVideoPlaying(false)}
              >
                <source
                  src="/videos/font-sistemas.mp4"
                  type="video/mp4"
                />
              </video>

              {/* VIDEO OVERLAY */}

              {!videoPlaying && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#091323]/60 via-transparent to-[#091323]/90" />
              )}

              {/* VIDEO HEADING */}

              {!videoPlaying && (
                <div className="pointer-events-none absolute left-4 right-4 top-5 z-10 text-center">

                  <p className="text-[12px] font-bold tracking-[2px] text-white/80">
                    @fontsistemas
                  </p>

                  <p className="mt-2 text-[14px] font-bold text-white">
                    Captura de datos para inventarios y activos fijos
                  </p>

                </div>
              )}

              {/* PLAY BUTTON */}

              {!videoPlaying && (
                <button
                  onClick={handleVideo}
                  aria-label="Reproducir video"
                  className="absolute left-1/2 top-1/2 z-20 grid h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#326cff] text-white shadow-[0_0_35px_rgba(50,108,255,0.45)] transition hover:scale-110 hover:bg-[#5285ff]"
                >
                  <Play size={27} fill="currentColor" />
                </button>
              )}

              {/* VIDEO CAPTION */}

              {!videoPlaying && (
                <div className="pointer-events-none absolute bottom-[25%] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-xl bg-black/50 px-4 py-2 text-[16px] font-extrabold text-white shadow-lg">
                  Somos Font Sistemas,
                </div>
              )}

            </div>

            {/* CONTACT BUTTON */}

            <Link
              href="/contacto"
              className="group flex h-[65px] items-center justify-between rounded-b-[20px] bg-[#326cff] px-6 text-white transition-colors duration-300 hover:bg-[#477dff]"
            >

              <span className="flex items-center gap-3 text-[16px] font-semibold">
                <WhatsAppIcon size={22} />
                Contáctenos
              </span>

              {/* ARROW */}

              <span className="text-[22px] font-normal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>

            </Link>

          </div>

        </div>

      </div>

      {/* CENTER TEXT ANIMATION */}

      <style jsx>{`
        @keyframes centerFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[centerFade_0\\.55s_ease\\] {
            animation: none;
          }
        }
      `}</style>

      {/* HOME SECTIONS */}

      <HomeSections />

      {/* FOOTER */}

      <Footer />

    </section>
  );
}
