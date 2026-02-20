import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import heroBg    from '../assets/hero-bg.png';
import agriImg   from '../assets/agriculture.png';
import healthImg from '../assets/health.png';
import energyImg from '../assets/energy.png';
import found1    from '../assets/foundation1.png';
import found2    from '../assets/foundation2.png';
import blog1     from '../assets/blog1.png';
import blog2     from '../assets/blog2.png';
import blog3     from '../assets/blog3.png';

const businesses = [
  { title: 'Agriculture', sub: 'Sustainable palm oil processing and farmer empowerment', img: agriImg },
  { title: 'Health',      sub: 'Expanding access to diagnostics, immunisation, and outreach', img: healthImg },
  { title: 'Energy',      sub: 'Responsible oil & gas and sustainable energy', img: energyImg },
];

const blogPosts = [
  { title: 'Empowering Farmers Across Nigeria',  cat: 'Agriculture', img: blog1 },
  { title: 'Expanding Healthcare Access',         cat: 'Health',      img: blog2 },
  { title: 'Building Brighter Futures',           cat: 'Community',   img: blog3 },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="bg-white">
        {/* Text content */}
        <div className="flex flex-col items-center text-center px-5 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <h1 className="reveal font-sans font-extrabold text-primary text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] max-w-[580px] mb-5">
            Building Africa's Future with Purpose
          </h1>
          <p className="reveal text-neutral-3 font-sans text-[17px] max-w-[480px] leading-relaxed mb-8">
            From agriculture to health care and energy, the Ifedichie Group is
            transforming industries and enriching lives.
          </p>
          <div className="reveal">
            <Link to="/business" className="btn-primary text-[16px] px-8 py-3.5">
              Explore more
            </Link>
          </div>
        </div>

        {/* Full-width hero image */}
        <div className="img-zoom w-full h-[260px] sm:h-[340px] lg:h-[400px]">
          <img
            src={heroBg}
            alt="African landscape"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* ═══ OUR BUSINESS ════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[40px] text-center mb-10">
            Our Business
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {businesses.map(({ title, sub, img }) => (
              <Link
                key={title}
                to="/business"
                className="reveal card-lift group bg-[#2A251F] rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Text on top */}
                <div className="px-5 pt-5 pb-3">
                  <p className="font-sans font-bold text-white text-lg leading-snug mb-1">{title}</p>
                  <p className="font-sans text-white/60 text-[13px] leading-relaxed">{sub}</p>
                </div>
                {/* Image fills rest */}
                <div className="img-zoom flex-1 min-h-[220px]">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOUNDATION ══════════════════════════════════════════ */}
      <section className="bg-white py-10 lg:py-16 px-5 lg:px-16">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
          {/* Top: text + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
            <p className="font-sans text-primary text-[17px] leading-relaxed max-w-[440px]">
              Through the Ifedichie Group Foundation, we restore hope, break barriers,
              and transform lives. Join us in{' '}
              <span className="font-extrabold">EDUCATION, HEALTHCARE, COMMUNITY</span>
            </p>
            <Link
              to="/foundation"
              className="btn-primary shrink-0"
            >
              Sponsor this foundation
            </Link>
          </div>

          {/* Two images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="reveal-left img-zoom rounded-2xl overflow-hidden aspect-[3/2]">
              <img src={found1} alt="Foundation — education" className="w-full h-full object-cover" />
            </div>
            <div className="reveal-right img-zoom rounded-2xl overflow-hidden aspect-[3/2]">
              <img src={found2} alt="Foundation — health" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOG ════════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[40px] text-center mb-10">
            Blog
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {blogPosts.map(({ title, cat, img }) => (
              <Link
                key={title}
                to="/blog"
                className="reveal card-lift group bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Image with arrow overlay */}
                <div className="img-zoom relative">
                  <img src={img} alt={title} className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-secondary group-hover:text-white transition-colors">
                    <ArrowUpRight size={15} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                {/* Text */}
                <div className="p-4">
                  <p className="font-sans font-bold text-primary text-[16px] leading-snug mb-1 group-hover:text-secondary transition-colors">
                    {title}
                  </p>
                  <p className="font-sans text-accent text-xs font-semibold">{cat}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
