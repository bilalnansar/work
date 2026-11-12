
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const productLinks = [
  "Control y trazabilidad de activos fijos",
  "Control y trazabilidad de inventarios en CEDI y puntos de venta",
  "Monitoreo con sensores de cadena de frío",
  "Hardware y suministros",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#091323] text-white">

      {/* NAVBAR CONTAINER */}
      <nav className="mx-auto flex min-h-[90px] max-w-[1120px] items-center justify-between px-5 sm:px-8 lg:px-3">

        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/font-logo.png"
            alt="Font Sistemas"
            width={145}
            height={76}
            priority
            className="h-[68px] w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">

          <Link
            href="/"
            className="text-[15px] font-semibold text-white/70 transition hover:text-white"
          >
            Inicio
          </Link>

          <Link
            href="/quienes-somos"
            className="text-[15px] font-semibold text-white/70 transition hover:text-white"
          >
            Quiénes somos
          </Link>

          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1.5 text-[15px] font-semibold text-white/70 transition hover:text-white"
            >
              Productos

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-5 w-[365px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#091323] p-3 shadow-2xl shadow-black/40">

                {productLinks.map((item, index) => (
                  <Link
                    key={item}
                    href={`/productos/${index + 1}`}
                    onClick={() => setProductsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-[14px] leading-5 text-white/75 transition hover:bg-white/5 hover:text-[#3475ff]"
                  >
                    {item}
                  </Link>
                ))}

                <div className="mt-2 border-t border-white/10 pt-3">
                  <Link
                    href="/productos"
                    onClick={() => setProductsOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-[#3475ff] transition hover:text-blue-300"
                  >
                    Ver todos los productos →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/casos-de-exito"
            className="text-[15px] font-semibold text-white/70 transition hover:text-white"
          >
            Casos de éxito
          </Link>

          <Link
            href="/contacto"
            className="text-[15px] font-semibold text-white/70 transition hover:text-white"
          >
            Contacto
          </Link>

          {/* CONTACT BUTTON */}
          <Link
            href="/contacto"
            className="rounded-full bg-[#326cff] px-6 py-3 text-[14px] font-semibold text-[#071323] transition hover:bg-[#5485ff]"
          >
            Contáctenos
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/15 p-2 text-white transition hover:bg-white/5 lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#091323] px-5 py-5 shadow-xl lg:hidden">

          <div className="mx-auto flex max-w-[1120px] flex-col gap-1 sm:px-3">

            <Link
              onClick={closeMenu}
              href="/"
              className="rounded-lg px-3 py-3 text-white/80 transition hover:bg-white/5"
            >
              Inicio
            </Link>

            <Link
              onClick={closeMenu}
              href="/quienes-somos"
              className="rounded-lg px-3 py-3 text-white/80 transition hover:bg-white/5"
            >
              Quiénes somos
            </Link>

            {/* MOBILE PRODUCTS */}
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-white/80 transition hover:bg-white/5"
            >
              Productos

              <ChevronDown
                size={17}
                className={`transition-transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="ml-3 border-l border-white/10 pl-3">

                {productLinks.map((item, index) => (
                  <Link
                    key={item}
                    href={`/productos/${index + 1}`}
                    onClick={closeMenu}
                    className="block py-3 text-sm text-white/60 transition hover:text-[#3475ff]"
                  >
                    {item}
                  </Link>
                ))}

                <Link
                  href="/productos"
                  onClick={closeMenu}
                  className="block py-3 text-sm text-[#3475ff]"
                >
                  Ver todos los productos →
                </Link>
              </div>
            )}

            <Link
              onClick={closeMenu}
              href="/casos-de-exito"
              className="rounded-lg px-3 py-3 text-white/80 transition hover:bg-white/5"
            >
              Casos de éxito
            </Link>

            <Link
              onClick={closeMenu}
              href="/contacto"
              className="rounded-lg px-3 py-3 text-white/80 transition hover:bg-white/5"
            >
              Contacto
            </Link>

            <Link
              onClick={closeMenu}
              href="/contacto"
              className="mt-3 rounded-full bg-[#326cff] px-5 py-3 text-center font-semibold text-[#071323] transition hover:bg-[#5485ff]"
            >
              Contáctenos
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
