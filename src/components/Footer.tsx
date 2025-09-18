import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fintesia</h3>
            <p className="text-gray-400">
              Soluciones digitales de optimización y automatización para emprendedores, pymes y autónomos.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#soluciones" className="text-gray-400 hover:text-white">
                  Soluciones
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {/* Replace these with your actual social media links */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Image src="/social/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Image src="/social/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Image src="/social/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fintesia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 