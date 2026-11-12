
import Link from "next/link";
import {
  ArrowUpRight,
  Quote,
  Building2,
  PackageCheck,
  Headphones,
} from "lucide-react";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const companies = [
  { name: "3M", style: "text-5xl font-black tracking-tighter" },
  { name: "stryker", style: "text-4xl font-semibold tracking-tight" },
  { name: "ICA", style: "text-4xl font-black italic tracking-tighter" },
  { name: "solventum", style: "text-3xl font-light tracking-tight" },
  { name: "IBM", style: "text-4xl font-black tracking-tight" },
  { name: "CODIMAC", style: "text-3xl font-black tracking-wide" },
  { name: "TROPICA", style: "font-serif text-3xl font-bold tracking-wide" },
  { name: "SEGURO SOCIAL", style: "text-sm font-bold tracking-widest" },
  { name: "citi", style: "text-5xl font-medium tracking-tight" },
  { name: "CUSHMAN & WAKEFIELD", style: "text-sm font-bold tracking-wider" },
  { name: "hp", style: "text-5xl font-black italic" },
  { name: "foundever", style: "text-3xl font-semibold" },
  { name: "INVU", style: "text-4xl font-black tracking-tight" },
  { name: "BCT", style: "text-4xl font-black italic" },
  { name: "Coloplast", style: "text-3xl font-semibold" },
  { name: "McKinsey & Company", style: "font-serif text-2xl" },
  { name: "CONTRACTOR", style: "text-xl font-black tracking-widest" },
  { name: "Soluciones Industriales", style: "text-xl font-bold leading-6" },
  { name: "Collette Health", style: "text-2xl font-medium" },
  { name: "Banco Promerica", style: "text-2xl font-bold italic" },
];

const testimonials = [
  {
    category: "INVERSIÓN RECUPERADA",
    text: "El control de activos dejó de ser un gasto hormiga: lo que antes se nos iba en inventarios manuales, horas de personal y activos extraviados, hoy lo tenemos bajo control.",
  },
  {
    category: "INVENTARIOS EN MENOS TIEMPO",
    text: "Las tomas físicas que antes nos tomaban días ahora las cerramos mucho más rápido, con lecturas masivas de RFID, sin detener la operación y sin necesitar línea de vista con cada etiqueta.",
  },
  {
    category: "AUDITORÍAS SIN ESTRÉS",
    text: "Llegamos a cada auditoría con cada placa, número de serie y documento de respaldo registrado y disponible al momento. Las auditorías de PROCOMER han salido exitosas.",
  },
  {
    category: "DE EXCEL AL EXPEDIENTE DIGITAL",
    text: "Pasamos de llevar controles en Excel a tener la información de cada activo en el software de Font Sistemas, con su documentación y sus garantías disponibles.",
  },
  {
    category: "DEL INGRESO A LA BAJA",
    text: "Ahora controlamos nuestros activos de principio a fin: desde que ingresan hasta su baja por desuso, desecho o scrap, incluidas las transferencias entre entidades legales.",
  },
  {
    category: "CONTROL QUE PROTEGE",
    text: "El control con código de barras y RFID nos ha ayudado a prevenir robos y fraudes. Y cuando un activo no aparece, el lector nos guía con un indicador de cercanía hasta encontrarlo.",
  },
  {
    category: "ENTRADAS Y SALIDAS BAJO CONTROL",
    text: "Los portales de radiofrecuencia nos han ayudado muchísimo a controlar la entrada y salida de nuestros activos, sin contar a mano.",
  },
  {
    category: "ACTIVOS DENTRO Y FUERA DE LA EMPRESA",
    text: "Podemos saber dónde están nuestros activos, incluso los asignados a quienes trabajan desde casa. Durante la pandemia fue especialmente útil.",
  },
];

const inventoryTestimonials = [
  {
    category: "RECEPCIÓN Y MOVIMIENTOS BAJO CONTROL",
    text: "La mercadería etiquetada se lee al pasar por el portal, sin abrir cajas ni detener la línea. Las entradas y salidas del CEDI quedan trazadas y detectamos las diferencias a tiempo.",
  },
  {
    category: "CONTEOS SIN CERRAR LA OPERACIÓN",
    text: "Hacemos conteos cíclicos con frecuencia, sin tener que parar el centro de distribución para inventariar.",
  },
];

const hardwareTestimonials = [
  {
    category: "EQUIPOS Y RESPALDO EN UN SOLO LUGAR",
    text: "Los lectores y terminales Zebra resisten el ritmo de bodega, día tras día. Contamos con hardware, software y soporte del mismo equipo, lo que simplifica la operación.",
  },
  {
    category: "ETIQUETAS QUE SÍ DURAN",
    text: "Las etiquetas y ribbons mantienen la calidad de impresión y no hay que reimprimir a cada rato. También conseguimos los suministros con el mismo proveedor de nuestros equipos.",
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-9 max-w-[760px]">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#4d87ff]" />
        <p className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#6199ff] sm:text-[13px]">
          {label}
        </p>
      </div>

      <h2 className="text-[27px] font-bold leading-[1.2] tracking-[-0.7px] text-[#edf1fa] sm:text-[32px] lg:text-[36px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-[680px] text-[14px] leading-[1.8] text-[#aab3c2] sm:text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
}

function TestimonialCard({ category, text, wide = false }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] border-t-2 border-t-[#31558d] bg-[#151e2d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4380ff]/50 hover:bg-[#192438] sm:p-6 ${
        wide ? "min-h-[175px]" : "min-h-[210px]"
      }`}
    >
      <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-blue-500/[0.04] blur-2xl transition group-hover:bg-blue-500/[0.10]" />

      <Quote
        size={25}
        strokeWidth={1.8}
        className="mb-5 text-[#5788d1]"
      />

      <h4 className="mb-3 text-[12px] font-bold uppercase leading-[1.5] tracking-[1px] text-[#75a9ff] sm:text-[13px]">
        {category}
      </h4>

      <p className="text-[13px] leading-[1.8] text-[#c2ccdc] sm:text-[14px]">
        {text}
      </p>
    </article>
  );
}

function TestimonialGroup({ title, icon: Icon, items, wide = false }) {
  return (
    <div className="mb-12">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#326cff]/20 bg-[#326cff]/10 text-[#75a9ff]">
          <Icon size={20} />
        </div>

        <h3 className="text-[17px] font-bold leading-[1.4] text-[#eaf0fc] sm:text-[19px]">
          {title}
        </h3>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 ${
          wide ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {items.map((item, index) => (
          <TestimonialCard
            key={item.category}
            category={item.category}
            text={item.text}
            wide={wide}
          />
        ))}
      </div>
    </div>
  );
}

export default function SuccessStories() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#091323] text-white">
<Navbar />
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(35,91,210,0.10),transparent_35%)]" />

      {/* MAIN CONTENT */}
      <div className="relative z-[1] mx-auto max-w-[1200px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">

        {/* HERO / SUCCESS STORIES */}
        <section id="casos-de-exito">

          <div className="mb-10 max-w-[780px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#326cff]" />
              <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#6199ff]">
                FONT SISTEMAS · EXPERIENCIA Y CONFIANZA
              </span>
            </div>

            <h1 className="text-[36px] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#edf1fa] sm:text-[46px] lg:text-[54px]">
              Casos de{" "}
              <span className="bg-gradient-to-r from-[#2868ff] to-[#78a9ff] bg-clip-text text-transparent">
                éxito
              </span>
            </h1>

            <h2 className="mt-5 max-w-[650px] text-[22px] font-semibold leading-[1.4] text-[#dce5f5] sm:text-[27px]">
              Empresas que confían en nosotros y crecen con nuestras soluciones.
            </h2>

            <p className="mt-5 max-w-[690px] text-[14px] leading-[1.9] text-[#aab3c2] sm:text-[16px]">
              Más de 24 años implementando soluciones de captura de datos,
              control de activos fijos y trazabilidad de inventarios en
              empresas de Costa Rica y la región.
            </p>
          </div>

          {/* COMPANY LOGOS */}
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#8fa3c1] sm:text-[14px]">
              Algunas empresas que confían en nosotros
            </h3>

            <Building2
              size={21}
              className="shrink-0 text-[#4d83d8]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group flex min-h-[115px] items-center justify-center rounded-2xl border border-white/[0.06] bg-[#151f30] px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#326cff]/40 hover:bg-[#1b2a42]"
              >
                <span
                  className={`${company.style} text-center text-[#dce5f5] transition-colors duration-300 group-hover:text-white`}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 max-w-[650px] text-[12px] leading-[1.8] text-[#74839a] sm:text-[13px]">
            Por políticas de confidencialidad, no todos nuestros clientes
            permiten mostrar su logo en nuestro sitio. Estos son solo algunos
            de ellos.
          </p>
        </section>

        {/* DIVIDER */}
        <div className="my-14 border-t border-white/[0.08] sm:my-20" />

        {/* TESTIMONIALS */}
        <section id="testimonios">

          <SectionHeading
            label="La voz de nuestros clientes"
            title="Lo que nuestros clientes nos cuentan."
            description="Recogemos lo que nuestros clientes nos han compartido sobre su experiencia con nuestras soluciones. Para respetar su confidencialidad, no identificamos a las empresas en cada comentario."
          />

          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#326cff]/20 bg-[#326cff]/[0.08] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#6199ff]" />
            <p className="text-[11px] font-medium text-[#8fb5ff] sm:text-[12px]">
              Comentarios resumidos; no son citas textuales.
            </p>
          </div>

          {/* CATEGORY 1 */}
          <TestimonialGroup
            title="Control de activos fijos"
            icon={PackageCheck}
            items={testimonials}
          />

          {/* CATEGORY 2 */}
          <TestimonialGroup
            title="Control y trazabilidad de inventarios en CEDI y puntos de venta"
            icon={Building2}
            items={inventoryTestimonials}
            wide
          />

          {/* CATEGORY 3 */}
          <TestimonialGroup
            title="Hardware y suministros"
            icon={Headphones}
            items={hardwareTestimonials}
            wide
          />

        </section>

        {/* CONTACT CTA */}
        <section className="relative mt-16 overflow-hidden rounded-3xl border border-[#31558d]/40 bg-[#101e38] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">

          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#326cff]/10 blur-[90px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-[650px]">

              <p className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#6199ff]">
                HAGAMOS CRECER SU OPERACIÓN
              </p>

              <h2 className="mt-4 text-[28px] font-bold leading-[1.25] tracking-[-0.7px] text-[#edf1fa] sm:text-[34px]">
                Su empresa puede ser la siguiente.
              </h2>

              <p className="mt-4 text-[14px] leading-[1.8] text-[#aab3c2] sm:text-[15px]">
                Cuéntenos qué necesita controlar y rastrear. Nuestro equipo
                le ayudará a encontrar una solución tecnológica a la medida
                de las necesidades de su empresa.
              </p>

            </div>

            <Link
              href="/contacto"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#326cff] px-7 py-4 text-[13px] font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#477dff]"
            >
              Contáctenos
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
