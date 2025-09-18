'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Fintesia
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#soluciones" className="text-gray-600 hover:text-blue-600">
              Soluciones
            </Link>
            <Link href="#nosotros" className="text-gray-600 hover:text-blue-600">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-gray-600 hover:text-blue-600">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Replace these with your actual social media links */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Image src="/social/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Image src="/social/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Image src="/social/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/#soluciones"
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluciones
            </Link>
            <Link
              href="/#nosotros"
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/#contacto"
              className="block hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 