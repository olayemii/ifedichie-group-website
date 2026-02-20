import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const explore = [
  { label: 'About Us',     to: '/about' },
  { label: 'Our Business', to: '/business' },
  { label: 'Foundation',   to: '/foundation' },
  { label: 'Blog',         to: '/blog' },
  { label: 'Contact us',   to: '/contact' },
];

const business = [
  { label: 'Agriculture', to: '/business' },
  { label: 'Health',      to: '/business' },
  { label: 'Energy',      to: '/business' },
];

const company = [
  { label: 'Help & FAQ',          to: '/contact' },
  { label: 'Terms & Conditions',  to: '/contact' },
  { label: 'Privacy Policy',      to: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[260px_1fr_1fr_300px] gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/">
              <img src={logo} alt="Ifedichie Group" className="h-14 w-auto object-contain" />
            </Link>
            <div className="flex flex-col gap-2">
              <a href="tel:08028232323" className="flex items-center gap-2 text-white/90 font-lexend text-sm hover:text-white transition-colors">
                <Phone size={14} className="shrink-0" /> 090-FindCura, 08028232323
              </a>
              <a href="mailto:support@ifedichie.com" className="flex items-center gap-2 text-white/90 font-lexend text-sm hover:text-white transition-colors">
                <Mail size={14} className="shrink-0" /> support@ifedichie.com
              </a>
            </div>
            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={['Facebook','Instagram','LinkedIn'][i]}
                  className="w-8 h-8 bg-[#011305] rounded flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-3">
            <p className="text-[#E6ECFE] font-lexend text-xs font-semibold uppercase tracking-widest">Explore</p>
            {explore.map(({ label, to }) => (
              <Link key={label} to={to} className="text-white/90 font-lexend text-sm hover:text-white hover:underline transition-colors">{label}</Link>
            ))}
          </div>

          {/* Our Business */}
          <div className="flex flex-col gap-3">
            <p className="text-[#E6ECFE] font-lexend text-xs font-semibold uppercase tracking-widest">Our Business</p>
            {business.map(({ label, to }) => (
              <Link key={label} to={to} className="text-white/90 font-lexend text-sm hover:text-white hover:underline transition-colors">{label}</Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <p className="text-[#E6ECFE] font-lexend text-xs font-semibold uppercase tracking-widest">Company</p>
              {company.map(({ label, to }) => (
                <Link key={label} to={to} className="text-white/90 font-lexend text-sm hover:text-white hover:underline transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[#E6ECFE] font-lexend text-xs font-semibold uppercase tracking-widest">Newsletter</p>
              <p className="text-white/80 font-lexend text-sm mt-1">Stay updated with our latest news</p>
            </div>
            {sent ? (
              <p className="text-white font-sans font-semibold text-sm py-2">Thanks for subscribing! 🎉</p>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg flex overflow-hidden h-11">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 text-sm text-neutral-4 outline-none bg-transparent font-sans min-w-0"
                />
                <button
                  type="submit"
                  className="bg-surface text-secondary font-sans font-bold text-sm px-4 hover:bg-red-100 transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/70 font-lexend text-xs text-center">© {new Date().getFullYear()} Ifedichie Group. All Rights Reserved.</p>
          <div className="bg-white rounded-full px-4 py-1 flex items-center gap-2">
            <span className="text-black text-[10px] font-semibold font-lexend uppercase tracking-wide">Powered by</span>
            <span className="text-secondary font-sans font-bold text-[10px]">IFEDICHIE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
