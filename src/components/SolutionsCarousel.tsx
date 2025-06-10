'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import './embla-peek.css';

const solutions = [
  {
    title: "Desarrollo Web Económico",
    description: "El desarrollo web más accesible del mercado, sin comprometer la calidad y el rendimiento.",
    icon: "💻"
  },
  {
    title: "Facturador Automático",
    description: "Solución especializada para facturación en Argentina, automatizando todo el proceso.",
    icon: "📄"
  },
  {
    title: "E-commerce Integral",
    description: "Lanzamiento y gestión completa de tu tienda online, integrada con software de gestión.",
    icon: "🛍️"
  },
  {
    title: "Desarrollos Específicos",
    description: "Soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.",
    icon: "⚙️"
  },
  {
    title: "Automatizaciones",
    description: "Automatizaciones avanzadas con n8n e integración de IA para optimizar tus procesos.",
    icon: "🤖"
  }
];

const SolutionsCarousel = () => {
  // Forzar render solo en cliente para evitar hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="embla-peek__viewport" ref={emblaRef}>
        <div className="embla-peek__container">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="embla-peek__slide flex-shrink-0 min-h-[260px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg h-full transform transition-transform duration-300 hover:scale-105 flex flex-col justify-center">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        onClick={scrollPrev}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        onClick={scrollNext}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default SolutionsCarousel; 