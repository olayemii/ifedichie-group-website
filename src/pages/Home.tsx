import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, Leaf, HeartPulse, Zap } from 'lucide-react';
import heroBg     from '../assets/hero-bg.png';
import agriImg    from '../assets/agriculture.png';
import healthImg  from '../assets/health.png';
import energyImg  from '../assets/energy.png';
import found1     from '../assets/foundation1.png';
import found2     from '../assets/foundation2.png';
import blog1      from '../assets/blog1.png';
import blog2      from '../assets/blog2.png';
import blog3      from '../assets/blog3.png';

/* ── data ─────────────────────────────────────────────────────── */
const businesses = [
  { icon: Leaf,       title: 'Agriculture', sub: 'Sustainable palm oil processing and farmer empowerment', img: agriImg   },
  { icon: HeartPulse, title: 'Health',      sub: 'Expanding access to diagnostics, immunisation, and outreach', img: healthImg },
  { icon: Zap,        title: 'Energy',      sub: 'Responsible oil & gas and sustainable energy', img: energyImg },
];

const blogPosts = [
  { title: 'Empowering Farmers Across Nigeria',  cat: 'Agriculture', img: blog1 },
  { title: 'Expanding Healthcare Access',         cat: 'Health',      img: blog2 },
  { title: 'Building Brighter Futures',           cat: 'Community',   img: blog3 },
];

const stats = [
  { value: '15+', label: 'Years of Impact' },
  { value: '12',  label: 'States Reached' },
  { value: '50k', label: 'Lives Transformed' },
  { value: '3',   label: 'Core Sectors' },
];

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-white min-h-[600px] lg:min-h-[640px] flex flex-col items-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center pt-20 lg:pt-36 px-5">
          <span className="inline-block bg-accent/10 text-accent font-sans font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-5 reveal">
            Building Africa's Future
          </span>
          <h1 className="reveal font-sans font-extrabold text-primary text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] max-w-[580px] mb-5">
            Building Africa's Future with Purpose
          </h1>
          <p className="reveal text-neutral-3 font-sans text-[17px] max-w-[520px] leading-relaxed mb-10">
            From agriculture to health care and energy, the Ifedichie Group is
            transforming industries and enriching lives.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 mb-14">
            <Link to="/contact" className="btn-press bg-secondary text-white font-sans font-bold text-[16px] px-8 py-3.5 rounded-lg hover:bg-red-600 transition-colors">
              Contact us
            </Link>
            <Link to="/about" className="flex items-center gap-2 font-sans font-semibold text-[16px] text-primary border-2 border-primary/20 px-8 py-3.5 rounded-lg hover:border-primary transition-colors">
              Learn more <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Hero landscape image */}
        <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[300px]">
          <img src={heroBg} alt="African landscape" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>
      </section>

      {/* ═══════ STATS TICKER ══════════════════════════════════ */}
      <section className="bg-primary py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="inline-flex items-center gap-6 mx-8 shrink-0">
              <span className="font-sans font-extrabold text-accent text-2xl">{s.value}</span>
              <span className="font-sans text-white/80 text-sm">{s.label}</span>
              <span className="text-white/30 text-xl">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ OUR BUSINESS ═══════════════════════════════════ */}
      <section id="business" className="bg-white py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[42px] mb-3">Our Business</h2>
            <p className="text-neutral-3 font-sans text-base max-w-md mx-auto">
              Three pillars driving sustainable development across Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {businesses.map(({ icon: Icon, title, sub, img }) => (
              <Link to="/business" key={title}
                className="reveal card-lift group bg-[#2A251F] border border-[#808D97]/50 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={18} className="text-accent shrink-0" />
                    <p className="text-white font-sans font-semibold text-[17px]">{title}</p>
                  </div>
                  <p className="text-[#F2F4F5]/70 font-sans text-xs leading-relaxed">{sub}</p>
                </div>
                <div className="img-zoom flex-1">
                  <img src={img} alt={title} className="w-full aspect-[4/3] object-cover" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link to="/business" className="btn-press inline-flex items-center gap-2 bg-primary text-white font-sans font-bold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Explore all businesses <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FOUNDATION ═════════════════════════════════════ */}
      <section id="foundation" className="bg-white py-16 lg:py-20 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
            <p className="font-sans text-primary text-[17px] leading-relaxed max-w-[420px]">
              Through the Ifedichie Group Foundation, we restore hope, break barriers, and transform lives.{' '}
              Join us in{' '}
              <span className="font-extrabold">EDUCATION, HEALTHCARE, COMMUNITY</span>
            </p>
            <Link to="/foundation" className="btn-press shrink-0 bg-secondary text-white font-sans font-bold text-[15px] px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Sponsor this foundation
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="reveal-left img-zoom border border-[#808D97]/40 rounded-2xl overflow-hidden aspect-[610/400]">
              <img src={found1} alt="Foundation education" className="w-full h-full object-cover" />
            </div>
            <div className="reveal-right img-zoom border border-[#808D97]/40 rounded-2xl overflow-hidden aspect-[610/400]">
              <img src={found2} alt="Foundation healthcare" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BLOG PREVIEW ═══════════════════════════════════ */}
      <section id="blog" className="bg-white py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[42px] mb-3">Blog</h2>
            <p className="text-neutral-3 font-sans text-base max-w-md mx-auto">
              Stories, insights and updates from across the Ifedichie Group.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {blogPosts.map((post) => (
              <Link to="/blog" key={post.title}
                className="reveal card-lift bg-white border border-accent/30 rounded-2xl overflow-hidden flex flex-col group"
              >
                <div className="img-zoom relative">
                  <img src={post.img} alt={post.title} className="w-full aspect-[4/3] object-cover" />
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:shadow-md transition-shadow">
                    <ArrowUpRight size={16} className="text-primary" />
                  </button>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <p className="font-sans font-bold text-primary text-[17px] group-hover:text-secondary transition-colors leading-snug">{post.title}</p>
                  <p className="font-sans text-accent text-xs font-semibold">{post.cat}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link to="/blog" className="btn-press inline-flex items-center gap-2 border-2 border-primary text-primary font-sans font-bold text-sm px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
              View all posts <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ CTA BAND ═══════════════════════════════════════ */}
      <section className="bg-primary py-20 px-5 text-center reveal">
        <h2 className="font-sans font-extrabold text-white text-3xl lg:text-[42px] mb-4 max-w-xl mx-auto leading-tight">
          Ready to Partner with Us?
        </h2>
        <p className="text-white/70 font-sans text-base max-w-md mx-auto mb-8">
          Join us in building a sustainable Africa. Let's create impact together.
        </p>
        <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-[16px] px-8 py-4 rounded-lg hover:bg-red-600 transition-colors">
          Get in touch <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}
