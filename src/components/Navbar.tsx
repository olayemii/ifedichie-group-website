import { useState, useEffect } from 'react';
import { Link, NavLink as RNavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about',      dropdown: ['Our Story', 'Leadership', 'Mission & Vision'] },
  { label: 'Our Business', to: '/business',   dropdown: ['Agriculture', 'Health', 'Energy'] },
  { label: 'Foundation',   to: '/foundation' },
  { label: 'Blog',         to: '/blog' },
];

export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,   setScrolled]    = useState(false);
  const [activeDD,   setActiveDD]    = useState<string | null>(null);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setActiveDD(null); }, [pathname]);

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDD = (label: string) =>
    setActiveDD((prev) => (prev === label ? null : label));

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-5 lg:px-24 flex items-center justify-between h-[76px]">

        {/* ── Logo ── */}
        <Link to="/" className="flex-shrink-0" aria-label="Ifedichie Group home">
          <img src={logo} alt="Ifedichie Group" className="h-14 w-auto object-contain" />
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map(({ label, to, dropdown }) => (
            <li key={label} className="relative group">
              {dropdown ? (
                <>
                  <button
                    onClick={() => toggleDD(label)}
                    className="nav-link flex items-center gap-1 text-[#292929] font-sans font-medium text-[15px] hover:text-secondary transition-colors"
                  >
                    {label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${activeDD === label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDD === label && (
                    <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-scale-in">
                      {dropdown.map((item) => (
                        <Link
                          key={item}
                          to={to}
                          onClick={() => setActiveDD(null)}
                          className="block px-5 py-2.5 text-sm text-gray-700 font-sans hover:bg-gray-50 hover:text-secondary transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <RNavLink
                  to={to}
                  className={({ isActive }) =>
                    `nav-link text-[#292929] font-sans font-medium text-[15px] hover:text-secondary transition-colors ${isActive ? 'active' : ''}`
                  }
                >
                  {label}
                </RNavLink>
              )}
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-press bg-secondary text-white font-sans font-bold text-[15px] px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors items-center"
        >
          Contact us
        </Link>

        {/* ── Mobile toggle ── */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100 shadow-lg`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navItems.map(({ label, to, dropdown }) => (
            <div key={label}>
              {dropdown ? (
                <>
                  <button
                    onClick={() => toggleDD(label)}
                    className="flex w-full items-center justify-between px-1 py-3 text-[15px] font-sans font-medium text-[#292929] border-b border-gray-100"
                  >
                    {label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDD === label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDD === label && (
                    <div className="pl-4 flex flex-col gap-1 py-1">
                      {dropdown.map((item) => (
                        <Link
                          key={item}
                          to={to}
                          onClick={() => setMenuOpen(false)}
                          className="py-2 text-sm text-gray-600 hover:text-secondary transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={to}
                  className="block px-1 py-3 text-[15px] font-sans font-medium text-[#292929] border-b border-gray-100 hover:text-secondary transition-colors"
                >
                  {label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-3 btn-press bg-secondary text-white font-sans font-bold text-[15px] px-6 py-3 rounded-lg text-center hover:bg-red-600 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Overlay to close dropdowns */}
      {activeDD && (
        <div className="fixed inset-0 z-40" onClick={() => setActiveDD(null)} />
      )}
    </header>
  );
}
