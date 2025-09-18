'use client';

import Image from "next/image";
import ContactForm from '@/components/ContactForm';
import SolutionsCarousel from '@/components/SolutionsCarousel';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div 
          className="container mx-auto px-4 py-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Soluciones Digitales para tu Negocio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Optimización y automatización digital para emprendedores, pymes y autónomos. Especialistas en comercio electrónico.
          </p>
          <motion.a
            href="#contacto"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comienza Ahora
          </motion.a>
        </motion.div>
      </section>

      {/* Soluciones Section */}
      <section id="soluciones" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestras Soluciones
          </motion.h2>
          <SolutionsCarousel />
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestro Equipo
          </motion.h2>
          <div className="space-y-16">
            {/* Team Member 1 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 h-[600px] relative">
                {/* Replace with your actual image */}
                <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-6">Tu Nombre</h3>
                <p className="text-xl text-gray-600 mb-6">
                  Breve descripción personal y profesional.
                </p>
                <p className="text-lg text-gray-600">
                  Experiencia y especialización en el campo.
                </p>
              </div>
            </motion.div>
            {/* Add more team members following the same structure */}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contacto
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
