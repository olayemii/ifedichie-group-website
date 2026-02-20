import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const explore = [
  { label: 'About us',                to: '/about' },
  { label: 'Blog',                    to: '/blog' },
  { label: 'Contact us',              to: '/contact' },
  { label: 'Sponsorship & Partnerships', to: '/contact' },
];

const business = [
  { label: 'Agriculture', to: '/business' },
  { label: 'Health',      to: '/business' },
  { label: 'Energy',      to: '/business' },
];

const company = [
  { label: 'Help & FAQ',         to: '/contact' },
  { label: 'Terms & Conditions', to: '/contact' },
  { label: 'Privacy Policy',     to: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(''); }
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[220px_1fr_1fr_1fr_280px] gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/">
              <img src={logo} alt="Ifedichie Group" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <div className="flex flex-col gap-1.5">
              <p className="font-sans text-white/90 text-sm">090-00000, 080000000000</p>
              <p className="font-sans text-white/90 text-sm">support@ifedichie.com</p>
            </div>
            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={['Facebook', 'Instagram', 'LinkedIn'][i]}
                  className="w-8 h-8 bg-[#1A1A1A] rounded flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={15} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-white text-xs font-bold uppercase tracking-widest mb-1">EXPLORE</p>
            {explore.map(({ label, to }) => (
              <Link key={label} to={to} className="font-sans text-white/80 text-sm hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Our Business */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-white text-xs font-bold uppercase tracking-widest mb-1">OUR BUSINESS</p>
            {business.map(({ label, to }) => (
              <Link key={label} to={to} className="font-sans text-white/80 text-sm hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-white text-xs font-bold uppercase tracking-widest mb-1">COMPANY</p>
            {company.map(({ label, to }) => (
              <Link key={label} to={to} className="font-sans text-white/80 text-sm hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-sans text-white text-xs font-bold uppercase tracking-widest mb-1">NEWSLETTER</p>
              <p className="font-sans text-white/80 text-sm">Join our news letter</p>
            </div>
            {sent ? (
              <p className="font-sans text-white font-semibold text-sm py-2">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-lg h-11 bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 text-sm text-gray-800 outline-none bg-transparent font-sans min-w-0"
                />
                <button
                  type="submit"
                  className="bg-white text-secondary font-sans font-bold text-sm px-4 hover:bg-gray-50 transition-colors shrink-0 border-l border-gray-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/70 text-xs">© All Rights Reserved.</p>
          <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2">
            <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wide">POWERED BY</span>
            <span className="text-secondary font-sans font-bold text-[10px]">Kwaekatel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
