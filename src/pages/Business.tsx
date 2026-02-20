import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, HeartPulse, Zap, ChevronRight } from 'lucide-react';
import heroBg    from '../assets/hero-bg.png';
import agriImg   from '../assets/agriculture.png';
import healthImg from '../assets/health.png';
import energyImg from '../assets/energy.png';
import found1    from '../assets/foundation1.png';

const sectors = [
  {
    icon: Leaf,
    title: 'Agriculture',
    tagline: 'Feeding Africa Sustainably',
    color: 'bg-accent',
    img: agriImg,
    desc: 'Our agricultural arm focuses on sustainable palm oil processing, smallholder farmer empowerment, and agro-processing value chains. We work directly with over 2,000 farming families to improve yields, market access, and livelihoods.',
    highlights: ['Palm oil processing (certified sustainable)', 'Farmer cooperative networks', 'Agro-processing & value addition', 'Export to 5 international markets'],
    stats: [{ v: '2,000+', l: 'Farmers Supported' }, { v: '40%', l: 'Yield Improvement' }, { v: '5', l: 'Export Markets' }],
  },
  {
    icon: HeartPulse,
    title: 'Health',
    tagline: 'Reaching the Underserved',
    color: 'bg-secondary',
    img: healthImg,
    desc: 'Ifedichie Health expands access to quality diagnostics, immunisation campaigns, and community health outreach across underserved regions. Our network of clinics and mobile units serves rural and peri-urban populations.',
    highlights: ['Diagnostics & pathology laboratories', 'Immunisation & vaccination drives', 'Community health worker training', 'Telemedicine & digital health'],
    stats: [{ v: '100k+', l: 'Patients Seen' }, { v: '24', l: 'Health Facilities' }, { v: '8', l: 'States Covered' }],
  },
  {
    icon: Zap,
    title: 'Energy',
    tagline: 'Powering Africa Responsibly',
    color: 'bg-primary',
    img: energyImg,
    desc: 'Our energy division operates responsibly in oil & gas upstream activities while investing in renewables — solar mini-grids, bioenergy, and LPG distribution. We balance commercial viability with environmental accountability.',
    highlights: ['Upstream oil & gas operations', 'Solar mini-grid deployment', 'LPG distribution network', 'Clean cooking solutions'],
    stats: [{ v: '15MW', l: 'Solar Capacity' }, { v: '30k', l: 'Homes Powered' }, { v: '12', l: 'Energy Projects' }],
  },
];

export default function Business() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative bg-[#2A251F] min-h-[360px] flex flex-col items-center justify-center text-center px-5 overflow-hidden py-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-[#2A251F]/80" />
        </div>
        <div className="relative z-10">
          <span className="inline-block bg-accent/20 text-accent font-sans font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 reveal">
            Our Business
          </span>
          <h1 className="reveal font-sans font-extrabold text-white text-4xl lg:text-[52px] leading-tight max-w-2xl mx-auto mb-4">
            Three Sectors, One Vision
          </h1>
          <p className="reveal text-white/70 font-sans text-[17px] max-w-xl mx-auto leading-relaxed">
            Agriculture, Health, and Energy — each industry chosen for its transformative potential across Africa.
          </p>
        </div>
      </section>

      {/* ═══ SECTORS ════════════════════════════════════════════ */}
      {sectors.map(({ icon: Icon, title, tagline, color, img, desc, highlights, stats }, i) => (
        <section
          key={title}
          className={`py-20 lg:py-28 px-5 lg:px-24 ${i % 2 === 1 ? 'bg-[#F9FAF5]' : 'bg-white'}`}
        >
          <div className={`max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            {/* Text */}
            <div className={i % 2 === 1 ? 'reveal-right lg:col-start-1' : 'reveal-left'}>
              <div className={`inline-flex items-center gap-2 ${color} text-white text-xs font-sans font-bold px-3 py-1.5 rounded-full mb-5`}>
                <Icon size={14} /> {tagline}
              </div>
              <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[40px] mb-4 leading-tight">{title}</h2>
              <p className="text-neutral-3 font-sans text-base leading-relaxed mb-6">{desc}</p>
              <ul className="flex flex-col gap-2 mb-8">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 font-sans text-sm text-primary">
                    <ChevronRight size={16} className="text-accent shrink-0 mt-0.5" /> {h}
                  </li>
                ))}
              </ul>
              <div className="flex gap-6 mb-8">
                {stats.map(({ v, l }) => (
                  <div key={l}>
                    <p className="font-sans font-extrabold text-accent text-2xl">{v}</p>
                    <p className="font-sans text-neutral-3 text-xs mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-sm px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
                Get involved <ArrowUpRight size={16} />
              </Link>
            </div>
            {/* Image */}
            <div className={`${i % 2 === 1 ? 'reveal-left lg:col-start-2' : 'reveal-right'} img-zoom rounded-2xl overflow-hidden`}>
              <img src={img} alt={title} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </section>
      ))}

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="bg-secondary py-20 px-5 text-center reveal">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="img-zoom rounded-2xl overflow-hidden aspect-[610/300]">
            <img src={found1} alt="Partnership" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center text-left px-4">
            <h2 className="font-sans font-extrabold text-white text-3xl lg:text-[36px] mb-4 leading-tight">
              Partner with Ifedichie Group
            </h2>
            <p className="text-white/80 font-sans text-base leading-relaxed mb-6">
              We're always looking for strategic partners, investors, and collaborators who share our commitment to sustainable African development.
            </p>
            <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-white text-secondary font-sans font-bold text-sm px-6 py-3 rounded-lg hover:bg-surface transition-colors self-start">
              Contact our team <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
