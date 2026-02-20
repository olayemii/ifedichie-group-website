import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-50 sticky top-0 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[99px]">
        <div className="flex items-center justify-between h-[79px]">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Ifedichie Group" className="h-[55px] w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[#292929] font-['Georgia',serif] text-[16px] hover:text-secondary transition-colors font-normal border-b-2 border-secondary">
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-[#292929] font-['Georgia',serif] text-[16px] hover:text-secondary transition-colors font-normal"
                onClick={() => { setAboutOpen(!aboutOpen); setBusinessOpen(false); }}
              >
                About Us
                <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Our Story</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Leadership</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Mission & Vision</a>
                </div>
              )}
            </div>

            {/* Our Business Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-[#292929] font-['Georgia',serif] text-[16px] hover:text-secondary transition-colors font-normal"
                onClick={() => { setBusinessOpen(!businessOpen); setAboutOpen(false); }}
              >
                Our Business
                <ChevronDown size={16} className={`transition-transform ${businessOpen ? 'rotate-180' : ''}`} />
              </button>
              {businessOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Agriculture</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Health</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Energy</a>
                </div>
              )}
            </div>

            <a href="#foundation" className="text-[#292929] font-['Georgia',serif] text-[16px] hover:text-secondary transition-colors font-normal">
              Foundation
            </a>
            <a href="#blog" className="text-[#292929] font-['Georgia',serif] text-[16px] hover:text-secondary transition-colors font-normal">
              Blog
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:flex bg-[#FF3D23] text-white font-bold text-[16px] px-6 py-3 rounded-[8px] hover:bg-red-600 transition-colors items-center justify-center"
          >
            Contact us
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-[#292929] text-[16px] font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>

            <div>
              <button
                className="flex items-center justify-between w-full text-[#292929] text-[16px] font-medium py-2 border-b border-gray-100"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About Us
                <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-2">
                  <a href="#" className="text-sm text-gray-600 py-1" onClick={() => setIsMenuOpen(false)}>Our Story</a>
                  <a href="#" className="text-sm text-gray-600 py-1" onClick={() => setIsMenuOpen(false)}>Leadership</a>
                  <a href="#" className="text-sm text-gray-600 py-1" onClick={() => setIsMenuOpen(false)}>Mission & Vision</a>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-[#292929] text-[16px] font-medium py-2 border-b border-gray-100"
                onClick={() => setBusinessOpen(!businessOpen)}
              >
                Our Business
                <ChevronDown size={16} className={`transition-transform ${businessOpen ? 'rotate-180' : ''}`} />
              </button>
              {businessOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-2">
                  <a href="#" className="text-sm text-gray-600 py-1" onClick={() => setIsMenuOpen(false)}>Agriculture</a>
                  <a href="#" className="text-sm text-gray-600 py-1" onClick={() => setIsMenuOpen(false)}>Health</a>
                  <a href="#" className="text-sm text-gray-600 py-1" onClick={() => setIsMenuOpen(false)}>Energy</a>
                </div>
              )}
            </div>

            <a href="#foundation" className="text-[#292929] text-[16px] font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              Foundation
            </a>
            <a href="#blog" className="text-[#292929] text-[16px] font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>

            <a
              href="#contact"
              className="bg-[#FF3D23] text-white font-bold text-[16px] px-6 py-3 rounded-[8px] hover:bg-red-600 transition-colors text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </a>
          </div>
        </div>
      )}

      {/* Overlay to close dropdowns */}
      {(aboutOpen || businessOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => { setAboutOpen(false); setBusinessOpen(false); }}
        />
      )}
    </nav>
  );
}
