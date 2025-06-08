import Image from "next/image";
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transformando el Futuro Financiero
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Soluciones financieras innovadoras diseñadas para impulsar el crecimiento de tu negocio
          </p>
          <a
            href="#contacto"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Comienza Ahora
          </a>
        </div>
      </section>

      {/* Soluciones Section */}
      <section id="soluciones" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestras Soluciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for success cases - you can add your content later */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Caso de Éxito {item}</h3>
                <p className="text-gray-600">
                  Descripción del caso de éxito. Aquí puedes agregar los detalles de cada caso.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-gray-600 mb-6">
                En Fintesia, nos especializamos en proporcionar soluciones financieras
                innovadoras que ayudan a las empresas a alcanzar su máximo potencial.
                Nuestro equipo de expertos combina años de experiencia con un enfoque
                moderno para ofrecer resultados excepcionales.
              </p>
              <p className="text-lg text-gray-600">
                Nos enorgullece trabajar con empresas de todos los tamaños, desde
                startups hasta corporaciones establecidas, ayudándolas a navegar
                por el complejo mundo financiero con confianza y éxito.
              </p>
            </div>
            <div className="relative h-[500px]">
              {/* Placeholder for your image - replace src with your actual image */}
              <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
