
import {
  Code2,
  Wrench,
  Headset,
  CheckCircle2,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const team = [
  {
    name: "Mariana",
    surname: "Font Serrano",
    role: "Gerente Administrativa Financiera",
    image: "/mariana.png",
  },
  {
    name: "Luciana",
    surname: "Font Serrano",
    role: "Gerente de Diseño y Comunicación",
    image: "/luciana.png",
  },
  {
    name: "Andrea",
    surname: "Font Serrano",
    role: "Gerente de Mercadeo e Innovación",
    image: "/andrea.png",
  },
];

const services = [
  {
    icon: Code2,
    title: "Tecnología y desarrollo",
    description:
      "Construyen y actualizan nuestras propias soluciones de software, con integraciones a la medida de cada cliente.",
  },
  {
    icon: Wrench,
    title: "Instalación de hardware en campo",
    description:
      "Instalan portales, antenas y lectores, y dejan cada proyecto funcionando en la operación real del cliente.",
  },
  {
    icon: Headset,
    title: "Soporte y acompañamiento",
    description:
      "Diseño de requerimientos del cliente, desarrollo de requerimientos para ajustarse a las necesidades del cliente, implementación de la solución, puesta en marcha, servicio postventa y actualizaciones continuas de acuerdo con las sugerencias de nuestros clientes y con nuestras propias investigaciones.",
  },
];

export default function QuienesSomos() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080f1e] text-[#e8edf7]">
<Navbar />
      {/* ABOUT INTRO */}
      <section className="border-b border-white/[0.07] bg-gradient-to-r from-[#101d38] to-[#080f1e]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-[#5790ff] sm:text-3xl">
                Quiénes somos
              </h1>
              <span className="h-px w-16 bg-blue-500/30" />
            </div>

            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Font <span className="text-white">Sistemas</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Somos una empresa costarricense, con más de 24 años de
              experiencia en soluciones para captura, control y trazabilidad
              de activos fijos e inventarios, por medio de dispositivos móviles
              y estacionarios, basados en la tecnología de RFID, códigos de
              barras e IoT.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDING FAMILY */}
      <section className="border-b border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="mb-8">
            <p className="mb-3 text-lg font-bold text-[#377bff] sm:text-xl">
              La familia fundadora
            </p>

            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Un padre y sus tres hijas.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Font Sistemas es una empresa de origen familiar, fundada por
              Francisco Font Carranza. Su historia reúne a un padre y sus tres
              hijas, junto con el equipo que forma parte de la empresa.
            </p>
          </div>

          {/* Family Image */}
          <div className="mx-auto max-w-3xl">
            <img
              src="/family-founder.png"
              alt="Familia fundadora de Font Sistemas"
              className="h-auto w-full rounded-xl object-cover shadow-2xl"
            />
          </div>

          {/* Founder */}
          <div className="relative mx-auto mt-8 max-w-2xl">
            <div className="flex justify-center">
              <div className="text-center">
                <img
                  src="/mariana.png"
                  alt="Francisco Font Carranza"
                  className="mx-auto h-24 w-24 rounded-full border-2 border-blue-400/30 object-cover"
                />

                <h3 className="mt-3 text-base font-bold text-[#6da0ff]">
                  Francisco Font Carranza
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Fundador y Gerente General
                </p>
              </div>
            </div>

            {/* Family Members */}
            <div className="relative mt-7 grid grid-cols-3 gap-3 sm:gap-8">
              <div className="absolute left-[16%] right-[16%] top-0 h-px -translate-y-1 bg-blue-500/30" />

              {team.map((person) => (
                <div
                  key={person.name}
                  className="relative flex flex-col items-center pt-1 text-center"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-20 w-20 rounded-full border-2 border-blue-400/30 object-cover sm:h-24 sm:w-24"
                  />

                  <h3 className="mt-3 text-sm font-bold text-[#6da0ff] sm:text-base">
                    {person.name}
                  </h3>

                  <p className="text-xs font-semibold text-blue-300">
                    {person.surname}
                  </p>

                  <p className="mt-2 max-w-[170px] text-[11px] leading-5 text-slate-400 sm:text-xs">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY JOURNEY */}
      <section className="border-b border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <p className="mb-3 text-lg font-bold text-[#377bff] sm:text-xl">
            Nuestra trayectoria
          </p>

          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
            Más de 24 años de experiencia.
          </h2>

          <div className="relative ml-1 space-y-8 border-l border-blue-500/30 pl-6 sm:pl-8">

            {/* Timeline Item 1 */}
            <div className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#377bff] sm:-left-[37px]" />

              <h3 className="mb-3 text-base font-bold text-[#6da0ff] sm:text-lg">
                El origen: una empresa familiar
              </h3>

              <p className="max-w-3xl text-sm leading-7 text-slate-400">
                Francisco Font Carranza fundó Font Sistemas en el 2002 y es su
                Gerente General. Desde el inicio, la empresa se especializó en
                sistemas de captura de datos.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#377bff] sm:-left-[37px]" />

              <h3 className="mb-3 text-base font-bold text-[#6da0ff] sm:text-lg">
                Hoy: RFID, código de barras y sensores IoT
              </h3>

              <p className="mb-3 text-sm leading-7 text-slate-400">
                Al día de hoy contamos con estas soluciones:
              </p>

              <ul className="space-y-2 pl-4 text-sm leading-6 text-slate-400">
                <li className="list-disc">
                  Control y trazabilidad de activos fijos.
                </li>
                <li className="list-disc">
                  Control y trazabilidad de inventarios en CEDI y puntos de
                  venta.
                </li>
                <li className="list-disc">
                  Monitoreo con sensores para la cadena de frío.
                </li>
                <li className="list-disc">
                  Hardware y suministros.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <p className="mb-3 text-lg font-bold text-[#377bff] sm:text-xl">
            Nuestro equipo
          </p>

          <h2 className="max-w-4xl text-2xl font-bold leading-tight sm:text-3xl">
            La familia marca el rumbo; el equipo lo hace posible.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Detrás de la familia Font hay un equipo de profesionales que
            acompaña a cada cliente en su operación diaria. Definen
            requerimientos con los clientes, parametrizan e implementan la
            solución de acuerdo a las necesidades del cliente, capacitan y
            ponen en marcha la solución. Diseñan y desarrollan las soluciones
            a la medida, instalan los portales, configuran los lectores y
            ofrecen un servicio posventa de acuerdo al SLA. Ellos son los que
            hacen posible que nuestras soluciones satisfagan las necesidades
            de cada cliente y se mantenga la operación sin inconvenientes.
          </p>

          {/* Service Cards */}
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-xl border border-blue-500/20 bg-[#101d38] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-[#132342]"
                >
                  <Icon
                    size={22}
                    className="mb-4 text-[#6da0ff]"
                  />

                  <h3 className="mb-3 text-base font-bold text-[#6da0ff]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
