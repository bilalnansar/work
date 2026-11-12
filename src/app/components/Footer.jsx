
import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes somos", href: "/quienes-somos" },
    { name: "Productos", href: "/productos" },
    { name: "Casos de éxito", href: "/casos-de-exito" },
    { name: "Contacto", href: "/contacto" },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/50687853480",
      label: "WhatsApp",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="relative w-full overflow-hidden border-t border-white/[0.07] bg-[#080f1d] text-white">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-[#326cff]/[0.07] blur-[100px]" />

        <div className="relative mx-auto max-w-[1120px] px-5 py-12 sm:px-8 md:py-14 lg:px-3 lg:py-16">

          {/* TOP SECTION */}
          <div className="grid gap-10 border-b border-white/[0.08] pb-10 md:grid-cols-[1.3fr_1fr] md:items-start">

            {/* BRAND */}
            <div className="max-w-[420px]">
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="Font Sistemas - Inicio"
              >
                <Image
                  src="/font-sistemas-logo.png"
                  alt="Font Sistemas"
                  width={160}
                  height={75}
                  className="h-[68px] w-[150px] object-contain object-left"
                />
              </Link>

              <p className="mt-4 text-sm leading-7 text-[#98a5b8] sm:text-[15px]">
                Expertos en captura de datos para inventarios y activos fijos.
                Transformamos la gestión empresarial mediante tecnología RFID,
                código de barras e IoT.
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.035] text-[#aab3c2] transition-all duration-300 hover:-translate-y-1 hover:border-[#326cff]/50 hover:bg-[#326cff]/15 hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* NAVIGATION + CONTACT */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">

              {/* NAVIGATION */}
              <div>
                <h3 className="text-sm font-bold tracking-[1px] text-white sm:text-base">
                  Navegación
                </h3>

                <div className="mt-5 flex flex-col items-start gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-[13px] text-[#98a5b8] transition-colors hover:text-white sm:text-sm"
                    >
                      {item.name}

                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-sm font-bold tracking-[1px] text-white sm:text-base">
                  Contacto
                </h3>

                <div className="mt-5 flex flex-col gap-5">

                  {/* LOCATION */}
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-[#5990ff]"
                    />

                    <div>
                      <p className="text-sm font-semibold text-[#e5ebf6]">
                        San José
                      </p>

                      <p className="mt-1 text-xs text-[#8998ad] sm:text-[13px]">
                        Costa Rica
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <a
                    href="tel:+50687853480"
                    className="flex items-center gap-3 text-[13px] text-[#98a5b8] transition-colors hover:text-white sm:text-sm"
                  >
                    <Phone size={17} className="shrink-0 text-[#5990ff]" />
                    (+506) 8785-3480
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:info@fontsistemas.com"
                    className="flex items-center gap-3 break-all text-[13px] text-[#98a5b8] transition-colors hover:text-white sm:text-sm"
                  >
                    <Mail size={17} className="shrink-0 text-[#5990ff]" />
                    info@fontsistemas.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="flex flex-col justify-between gap-7 pt-8 sm:flex-row sm:items-end">

            {/* WOMEN OWNED */}
            <div>
              <p className="text-[10px] font-bold tracking-[2px] text-[#77869c]">
                NUESTRO COMPROMISO
              </p>

              <div className="mt-3 flex items-center gap-3">
                <div className="leading-[0.85] text-white">
                  <p className="text-xl font-black tracking-tight sm:text-[22px]">
                    WOMEN
                  </p>

                  <p className="text-xl font-black tracking-tight sm:text-[22px]">
                    OWNED
                  </p>
                </div>

                <div className="h-10 w-px bg-white/15" />

                <span className="max-w-[150px] text-[10px] leading-[1.7] tracking-[1px] text-[#8998ad]">
                  EMPOWERING
                  <br />
                  INNOVATION
                </span>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-left sm:text-right">
              <p className="text-xs text-[#8998ad] sm:text-[13px]">
                © 2026 Font Sistemas.
              </p>

              <p className="mt-2 text-[11px] text-[#65748a] sm:text-xs">
                RFID · IoT · Inventarios · Trazabilidad
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/50687853480"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#20c76a] text-white shadow-[0_8px_30px_rgba(32,199,106,0.28)] transition-all duration-300 hover:scale-110 hover:bg-[#18b85e] sm:bottom-7 sm:right-7 sm:h-[58px] sm:w-[58px]"
      >
        <FaWhatsapp size={27} />

        <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-xl border border-white/10 bg-[#111b2b] px-4 py-3 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
          ¿En qué le podemos ayudar?
        </span>
      </a>
    </>
  );
};

export default Footer;
