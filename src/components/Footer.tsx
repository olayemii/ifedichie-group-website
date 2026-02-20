import { useState } from 'react';
import logo from '../assets/logo.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-[#FF3D23] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[63px] pt-[76px] pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[119px]">

          {/* Brand column */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Ifedichie Group" className="h-[55px] w-auto" />
            <div className="flex flex-col gap-3">
              <p className="text-white text-[14px] font-['Lexend',sans-serif]">090-FindCura, 08028232323</p>
              <p className="text-white text-[14px] font-['Lexend',sans-serif]">support@example.com</p>
            </div>
            {/* Social icons */}
            <div className="flex gap-2.5 items-center">
              <a href="#" aria-label="Facebook" className="bg-[#011305] p-2 rounded-sm hover:opacity-80 transition-opacity flex items-center justify-center w-8 h-8">
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-[#011305] p-2 rounded-sm hover:opacity-80 transition-opacity flex items-center justify-center w-8 h-8">
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-[#011305] p-2 rounded-sm hover:opacity-80 transition-opacity flex items-center justify-center w-8 h-8">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-3">
            <p className="text-[#E6ECFE] text-[14px] font-['Lexend',sans-serif] uppercase tracking-wide">Explore</p>
            <a href="#" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">About us</a>
            <a href="#business" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Our Business</a>
            <a href="#foundation" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Foundation</a>
            <a href="#blog" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Blog</a>
            <a href="#contact" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Contact us</a>
          </div>

          {/* Our Business */}
          <div className="flex flex-col gap-3">
            <p className="text-[#E6ECFE] text-[14px] font-['Lexend',sans-serif] uppercase tracking-wide">Our Business</p>
            <a href="#" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Agriculture</a>
            <a href="#" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Health</a>
            <a href="#" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Energy</a>
          </div>

          {/* Company + Newsletter */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-3">
              <p className="text-[#E6ECFE] text-[14px] font-['Lexend',sans-serif] uppercase tracking-wide">Company</p>
              <a href="#" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Help & FAQ</a>
              <a href="#" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Terms & Conditions</a>
              <a href="#" className="text-white text-[14px] font-['Lexend',sans-serif] hover:underline">Privacy Policy</a>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-[#E6ECFE] text-[14px] font-['Lexend',sans-serif] uppercase tracking-wide">Newsletter</p>
                <p className="text-[#E6ECFE] text-[12px] font-['Lexend',sans-serif] mt-1">Join our newsletter</p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="bg-white rounded-[8px] flex items-center overflow-hidden h-[40px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 text-[14px] text-[#8B8072] outline-none bg-transparent min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#FFE0DC] text-[#FF3D23] font-bold text-[14px] px-4 py-2 hover:bg-red-100 transition-colors flex-shrink-0 h-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#E6ECFE] text-[12px] font-['Lexend',sans-serif]">© All Rights Reserved.</p>
          <div className="bg-white rounded-[20px] px-4 py-1 flex items-center gap-2">
            <span className="text-black text-[10px] font-semibold font-['Poppins',sans-serif]">POWERED BY</span>
            <span className="text-[#FF3D23] text-[10px] font-bold font-['Poppins',sans-serif]">IFEDICHIE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
