
import Link from "next/link";
import {
  ArrowUpRight,
  Quote,
  Building2,
  ShieldCheck,
  Database,
} from "lucide-react";

const products = [
  {
    number: "01",
    title: "Control de activos fijos",
    description:
      "Soluciones en la nube para el registro, administración, trazabilidad y monitoreo de activos mediante RFID y código de barras, utilizando tecnología móvil y portales con lectores y antenas fijas de radiofrecuencia.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Control y trazabilidad de inventarios en CEDI y puntos de venta",
    description:
      "Gestione de manera ágil y segura sus inventarios para Centros de Distribución y Puntos de Venta, y elimine el descuadre entre su ERP y su inventario físico con soluciones avanzadas de trazabilidad con tecnología RFID.",
    icon: Database,
  },
  {
    number: "03",
    title: "Monitoreo remoto con sensores para garantizar la cadena de frío",
    description:
      "Controle la cadena de frío de inicio a fin mediante sensores que registran temperatura, humedad, CO₂, impactos, apertura de puertas, geolocalización y tiempo de cada evento durante el transporte.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Hardware y suministros",
    description:
      "Lectores móviles y estacionarios para RFID y código de barras, impresoras especializadas, antenas RFID, etiquetas y tags certificados, además de hardware y sensores de desarrollo propio.",
    icon: Building2,
  },
];

const companies = [
  "3M",
  "stryker",
  "SEGURO SOCIAL",
  "GDM",
  "citi",
  "hp",
  "McKinsey & Company",
  "Banco Promerica",
];

const testimonials = [
  {
    category: "INVERSIÓN RECUPERADA",
    text: "El control de activos dejó de ser un gasto hormiga: lo que antes se nos iba en inventarios manuales, horas de personal y activos extraviados, hoy lo tenemos bajo control.",
  },
  {
    category: "AUDITORÍAS SIN ESTRÉS",
    text: "Llegamos a cada auditoría con cada placa, número de serie y documento de respaldo registrado y disponible al momento. Las auditorías de PROCOMER han salido exitosas.",
  },
  {
    category: "DE EXCEL AL EXPEDIENTE DIGITAL",
    text: "Pasamos de llevar controles en Excel a tener la información de cada activo en el software de Font Sistemas, con su documentación y sus garantías disponibles.",
  },
];

export default function HomeSections() {
  return (
    <>
      {/* ABOUT */}
      <section
        id="quienes-somos"
        className="border-b border-white/[0.07] bg-[#091323] text-white"
      >
        <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 md:py-14 lg:px-3 lg:py-16">
          <p className="text-[11px] font-bold tracking-[3px] text-[#5990ff] sm:text-xs">
            QUIÉNES SOMOS
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-[1fr_1.1fr_0.8fr] md:items-center md:gap-8">
            <h2 className="max-w-[340px] text-[23px] font-bold leading-[1.35] tracking-[-0.5px] text-[#edf1fa] sm:text-[27px]">
              Font Sistemas: una empresa de origen familiar.
            </h2>

            <p className="text-[14px] leading-[1.8] text-[#aab3c2] sm:text-[15px]">
              Empresa costarricense con más de 24 años de experiencia en
              sistemas de captura de datos, ofreciendo soluciones tecnológicas
              para optimizar el control de inventarios y activos fijos.
            </p>

            <Link
              href="/quienes-somos"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold leading-6 text-[#75a5ff] transition-colors hover:text-white"
            >
              Conozca nuestra historia
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/[0.07] pt-6 text-[12px] text-[#8b9ab2] sm:text-[13px]">
            <span>
              <strong className="text-[15px] font-bold text-[#5990ff]">
                2002
              </strong>{" "}
              &nbsp; Año de fundación
            </span>

            <span>
              <strong className="text-[15px] font-bold text-[#5990ff]">
                San José
              </strong>{" "}
              &nbsp; Costa Rica
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="productos"
        className="border-b border-white/[0.07] bg-[#091323] text-white"
      >
        <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 md:py-14 lg:px-3 lg:py-16">
          <p className="text-[11px] font-bold tracking-[3px] text-[#5990ff] sm:text-xs">
            SOLUCIONES Y PRODUCTOS
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-[720px] text-[26px] font-bold leading-[1.3] tracking-[-0.7px] text-[#edf1fa] sm:text-[30px] lg:text-[34px]">
              Potencialice sus soluciones actuales integrándolas con las
              nuestras.
            </h2>

            <Link
              href="/productos"
              className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-[#75a5ff] hover:text-white"
            >
              Explorar soluciones
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.number}
                  className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#121f33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#326cff]/50 hover:bg-[#172640] sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#326cff]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#326cff]/20" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-[12px] font-bold tracking-[2px] text-[#5990ff]">
                      {product.number}
                    </span>

                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#326cff]/20 bg-[#326cff]/10 text-[#75a5ff] transition-all duration-300 group-hover:border-[#326cff]/50 group-hover:bg-[#326cff]/20">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="relative mt-5 max-w-[440px] text-[17px] font-bold leading-[1.45] text-[#edf1fa] sm:text-[19px]">
                    {product.title}
                  </h3>

                  <p className="relative mt-3 flex-1 text-[13px] leading-[1.8] text-[#aab3c2] sm:text-[14px]">
                    {product.description}
                  </p>

                  <Link
                    href={`/productos/${Number(product.number)}`}
                    className="group/link relative mt-5 inline-flex w-fit items-center gap-2 text-[12px] font-semibold text-[#75a5ff] transition-colors hover:text-white sm:text-[13px]"
                  >
                    Ver más
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-b border-white/[0.07] bg-[#091323] text-white">
        <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 md:py-14 lg:px-3 lg:py-16">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[2.5px] text-[#5990ff] sm:text-xs">
                NUESTROS CLIENTES
              </p>

              <h2 className="mt-3 text-[23px] font-bold text-[#edf1fa] sm:text-[27px]">
                Empresas que confían en nosotros.
              </h2>
            </div>

            <Link
              href="/casos-de-exito"
              className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#75a5ff] transition-colors hover:text-white sm:text-[13px]"
            >
              Ver casos de éxito
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {companies.map((company, index) => (
              <div
                key={company}
                className="flex h-[105px] items-center justify-center rounded-xl border border-white/[0.07] bg-[#121f33] px-3 text-center transition-all duration-300 hover:border-[#326cff]/40 hover:bg-[#172640]"
              >
                <span
                  className={`text-white ${
                    index === 0
                      ? "text-[40px] font-black tracking-[-3px]"
                      : index === 1
                        ? "text-[32px] font-bold tracking-[-2px]"
                        : index === 2
                          ? "text-[13px] font-bold tracking-[1px]"
                          : index === 3
                            ? "text-[27px] font-black italic"
                            : index === 4
                              ? "text-[36px] font-medium tracking-[-2px]"
                              : index === 5
                                ? "text-[40px] font-black italic"
                                : index === 6
                                  ? "font-serif text-[19px] leading-6"
                                  : "text-[17px] font-bold italic"
                  }`}
                >
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-white/[0.07] bg-[#091323] text-white">
        <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 md:py-14 lg:px-3 lg:py-16">
          <p className="text-[11px] font-bold tracking-[2.5px] text-[#5990ff] sm:text-xs">
            LA VOZ DE NUESTROS CLIENTES
          </p>

          <h2 className="mt-3 text-[25px] font-bold tracking-[-0.5px] text-[#edf1fa] sm:text-[30px]">
            Lo que nuestros clientes nos cuentan.
          </h2>

          <p className="mt-2 max-w-[620px] text-[13px] leading-7 text-[#aab3c2] sm:text-[14px]">
            Experiencias reales que reflejan el valor de nuestras soluciones
            tecnológicas.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={item.category}
                className="group relative flex min-h-[235px] flex-col rounded-2xl border border-white/[0.07] border-t-2 border-t-[#326cff]/60 bg-[#121f33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#326cff]/40 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <Quote
                    size={27}
                    strokeWidth={1.5}
                    className="text-[#5990ff]"
                  />

                  <span className="text-[11px] font-bold text-[#5990ff]">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-5 text-[11px] font-bold tracking-[1.5px] text-[#75a5ff]">
                  {item.category}
                </p>

                <p className="mt-3 flex-1 text-[13px] italic leading-[1.85] text-[#d0d7e4] sm:text-[14px]">
                  “{item.text}”
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/casos-de-exito"
            className="group mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-[#75a5ff] underline underline-offset-4 transition-colors hover:text-white sm:text-[13px]"
          >
            Conozca más experiencias en Casos de éxito
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-b border-white/[0.07] bg-[#091323] text-white">
        <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 md:py-14 lg:px-3 lg:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-[#326cff]/25 bg-[linear-gradient(120deg,#101e3b,#13294d)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#326cff]/15 blur-[80px]" />

            <div className="relative max-w-[650px]">
              <p className="text-[11px] font-bold tracking-[3px] text-[#75a5ff] sm:text-xs">
                CONTACTO Y SOPORTE
              </p>

              <h2 className="mt-4 text-[30px] font-extrabold leading-[1.25] tracking-[-0.8px] text-[#edf1fa] sm:text-[38px]">
                Hablemos de su operación.
              </h2>

              <p className="mt-4 max-w-[540px] text-[14px] leading-[1.8] text-[#b1bfd3] sm:text-[15px]">
                Un diagnóstico inicial sin costo para conocer sus necesidades
                y definir la mejor ruta para optimizar la trazabilidad de sus
                inventarios y activos fijos.
              </p>

              <Link
                href="/contacto"
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#326cff] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_8px_30px_rgba(50,108,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#477dff]"
              >
                Contáctenos
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
