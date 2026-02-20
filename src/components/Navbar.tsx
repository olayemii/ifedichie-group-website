import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home',         to: '/' },
  {
    label: 'About Us',
    to: '/about',
    dropdown: [
      { label: 'Our Story',        to: '/about' },
      { label: 'Leadership',       to: '/about' },
      { label: 'Mission & Vision', to: '/about' },
    ],
  },
  {
    label: 'Our Business',
    to: '/business',
    dropdown: [
      { label: 'Agriculture', to: '/business' },
      { label: 'Health',      to: '/business' },
      { label: 'Energy',      to: '/business' },
    ],
  },
  { label: 'Foundation', to: '/foundation' },
  { label: 'Blog',       to: '/blog' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDD,   setActiveDD]   = useState<string | null>(null);
  const { pathname } = useLocation();
  const ddRef = useRef<HTMLDivElement>(null);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDD(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) {
        setActiveDD(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-5 lg:px-16 flex items-center justify-between h-[76px]">

        {/* Logo */}
        <Link to="/" aria-label="Ifedichie Group home" className="flex-shrink-0">
          <img src={logo} alt="Ifedichie" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <ul ref={ddRef as any} className="hidden lg:flex items-center gap-7">
          {navItems.map(({ label, to, dropdown }) => (
            <li key={label} className="relative">
              {dropdown ? (
                <>
                  <button
                    onClick={() => setActiveDD(activeDD === label ? null : label)}
                    className={`nav-link flex items-center gap-1 ${
                      pathname.startsWith(to) ? 'active' : ''
                    }`}
                  >
                    {label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDD === label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 transition-all duration-200 origin-top ${
                      activeDD === label
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    {dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setActiveDD(null)}
                        className="block px-5 py-2.5 text-sm font-sans text-neutral-1 hover:text-secondary hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-primary text-[15px] px-6 py-2.5"
        >
          Contact us
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-primary hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navItems.map(({ label, to, dropdown }) => (
            <div key={label}>
              {dropdown ? (
                <>
                  <button
                    onClick={() => setActiveDD(activeDD === label ? null : label)}
                    className="flex w-full items-center justify-between px-1 py-3 font-sans font-medium text-[15px] text-primary border-b border-gray-100"
                  >
                    {label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDD === label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDD === label && (
                    <div className="pl-4 flex flex-col py-1">
                      {dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="py-2.5 text-sm font-sans text-neutral-3 hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-1 py-3 font-sans font-medium text-[15px] border-b border-gray-100 transition-colors ${
                      isActive ? 'text-secondary' : 'text-primary'
                    }`
                  }
                >
                  {label}
                </NavLink>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-4 btn-primary justify-center text-center"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
