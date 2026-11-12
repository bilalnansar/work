
import {
  Headset,
  Phone,
  Clock3,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactSection() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
<Navbar />
      <section className="mx-auto max-w-[1120px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pb-20">

        {/* PAGE HEADING */}
        <div className="mb-10 max-w-[560px]">

          <div className="mb-5 flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-[#69a1ff] sm:text-4xl">
              Contacto
            </h1>

            <div className="h-px w-24 bg-blue-500/20" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.3] tracking-tight text-gray-100 sm:text-4xl">
            Hablemos de
            <br />
            su operación.
          </h2>

          <p className="mt-5 max-w-[460px] text-sm leading-7 text-gray-400 sm:text-base">
            Cuéntenos qué necesita rastrear. Un diagnóstico inicial sin costo
            para definir su ruta de trazabilidad.
          </p>

        </div>

        {/* CONTACT CONTENT */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.9fr_0.82fr]">

          {/* CONTACT FORM */}
          <div className="rounded-[22px] border border-white/[0.09] bg-[#161f2e] p-6 sm:p-8">

            <form
              action="/api/contact"
              method="POST"
              className="space-y-6"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[2px] text-[#7794b9]"
                >
                  Nombre y empresa
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Su nombre y empresa"
                  required
                  className="h-12 w-full rounded-[13px] border border-white/[0.09] bg-[#0f1725] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[2px] text-[#7794b9]"
                >
                  Correo corporativo
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nombre@empresa.com"
                  required
                  className="h-12 w-full rounded-[13px] border border-white/[0.09] bg-[#0f1725] px-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[2px] text-[#7794b9]"
                >
                  ¿Qué activos necesita monitorear?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describa brevemente su operación y qué necesita rastrear"
                  required
                  className="min-h-[140px] w-full resize-y rounded-[14px] border border-white/[0.09] bg-[#0f1725] px-4 py-3 text-sm leading-7 text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3069f5] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4b80ff] hover:shadow-lg hover:shadow-blue-500/20"
              >
                Enviar solicitud

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="flex flex-col gap-4">

            {/* SUPPORT CARD */}
            <div className="rounded-[19px] border border-blue-500/25 bg-[#101e3a] p-6 transition-all duration-300 hover:border-blue-400/50">

              <div className="mb-4 flex items-center gap-3">
                <Headset size={19} className="text-[#4386ff]" />

                <h3 className="text-xs font-bold uppercase tracking-[2px] text-[#4386ff]">
                  Soporte permanente
                </h3>
              </div>

              <p className="text-sm leading-7 text-gray-300">
                Nuestro equipo acompaña su operación antes, durante y después
                de la puesta en marcha.
              </p>

            </div>

            {/* PHONE CARD */}
            <div className="group rounded-[18px] border border-white/[0.09] bg-[#161f2e] p-6 transition-all duration-300 hover:border-blue-500/30">

              <div className="mb-4 flex items-center gap-3">
                <Phone size={17} className="text-gray-500" />

                <h3 className="text-xs font-semibold uppercase tracking-[2px] text-[#7794b9]">
                  Teléfono
                </h3>
              </div>

              <a
                href="tel:+50687853480"
                className="text-sm font-medium text-[#4386ff] transition-colors hover:text-blue-300"
              >
                (+506) 8785-3480
              </a>

            </div>

            {/* HOURS CARD */}
            <div className="group rounded-[18px] border border-white/[0.09] bg-[#161f2e] p-6 transition-all duration-300 hover:border-blue-500/30">

              <div className="mb-4 flex items-center gap-3">
                <Clock3 size={17} className="text-gray-500" />

                <h3 className="text-xs font-semibold uppercase tracking-[2px] text-[#7794b9]">
                  Horario
                </h3>
              </div>

              <p className="text-sm leading-7 text-gray-300">
                Lunes a viernes, 8 a. m. – 5 p. m.
              </p>

            </div>

            {/* EMAIL CARD */}
            <div className="group rounded-[18px] border border-white/[0.09] bg-[#161f2e] p-6 transition-all duration-300 hover:border-blue-500/30">

              <div className="mb-4 flex items-center gap-3">
                <Mail size={17} className="text-gray-500" />

                <h3 className="text-xs font-semibold uppercase tracking-[2px] text-[#7794b9]">
                  E-mail
                </h3>
              </div>

              <a
                href="mailto:contacto@fontsistemas.co.cr"
                className="break-all text-sm font-medium text-[#4386ff] transition-colors hover:text-blue-300"
              >
                contacto@fontsistemas.co.cr
              </a>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
