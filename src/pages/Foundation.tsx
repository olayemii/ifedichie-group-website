import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, HeartPulse, Users, ChevronRight } from 'lucide-react';
import heroBg   from '../assets/hero-bg.png';
import found1   from '../assets/foundation1.png';
import found2   from '../assets/foundation2.png';
import agriImg  from '../assets/agriculture.png';
import healthImg from '../assets/health.png';
import blog1    from '../assets/blog1.png';

const pillars = [
  {
    icon: BookOpen,
    title: 'Education',
    color: 'bg-accent',
    desc: 'We fund scholarships, build classrooms, and equip learners with the tools they need to excel — from primary school to university level.',
    highlights: ['500+ scholarships awarded annually', 'School construction & renovation', 'Digital literacy programmes', 'Teacher training & mentorship'],
    img: blog1,
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    color: 'bg-secondary',
    desc: 'Our community health outreach brings free medical care, vaccines, and maternal health support to the most underserved populations across Nigeria.',
    highlights: ['Free medical camps & screenings', 'Maternal & child health support', 'Community health worker training', 'Medical equipment donation'],
    img: healthImg,
  },
  {
    icon: Users,
    title: 'Community',
    color: 'bg-primary',
    desc: 'From clean water projects to youth empowerment, we invest in the infrastructure and human capital that transforms communities for generations.',
    highlights: ['Clean water & sanitation projects', 'Youth vocational training', 'Women empowerment initiatives', 'Food security programmes'],
    img: agriImg,
  },
];

const impactStats = [
  { value: '10,000+', label: 'Beneficiaries reached annually' },
  { value: '500+',   label: 'Scholarships awarded' },
  { value: '12',     label: 'States covered' },
  { value: '18+',    label: 'Years of giving back' },
];

export default function Foundation() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative bg-primary min-h-[400px] flex flex-col items-center justify-center text-center px-5 overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-accent/20 text-accent font-sans font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 reveal">
            Ifedichie Foundation
          </span>
          <h1 className="reveal font-sans font-extrabold text-white text-4xl lg:text-[52px] leading-tight mb-5">
            Restoring Hope. Transforming Lives.
          </h1>
          <p className="reveal text-white/75 font-sans text-[17px] leading-relaxed mb-8 max-w-xl mx-auto">
            The Ifedichie Group Foundation is our commitment to Africa beyond business — investing in the people who make everything possible.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-[16px] px-8 py-3.5 rounded-lg hover:bg-red-600 transition-colors">
              Sponsor the Foundation <ArrowUpRight size={18} />
            </Link>
            <a href="#pillars" className="inline-flex items-center gap-2 font-sans font-semibold text-[16px] text-white border-2 border-white/30 px-8 py-3.5 rounded-lg hover:border-white transition-colors">
              Learn more <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT STATS ══════════════════════════════════════ */}
      <section className="bg-accent py-12 px-5">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {impactStats.map(({ value, label }) => (
            <div key={label} className="reveal">
              <p className="font-sans font-extrabold text-white text-3xl lg:text-4xl mb-1">{value}</p>
              <p className="font-sans text-white/80 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INTRO ══════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="reveal-left">
            <span className="text-accent font-sans font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[40px] mt-3 mb-5 leading-tight">
              Beyond Business — A Legacy of Giving
            </h2>
            <p className="text-neutral-3 font-sans text-base leading-relaxed mb-4">
              Established in 2015, the Ifedichie Group Foundation is the philanthropic arm of the Ifedichie Group. We believe that sustainable business must be paired with genuine community investment.
            </p>
            <p className="text-neutral-3 font-sans text-base leading-relaxed mb-6">
              Our programmes target three critical pillars: Education, Healthcare, and Community Development — areas where targeted investment creates multi-generational impact.
            </p>
            <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-sm px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Partner with us <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={found1} alt="Foundation impact" className="w-full h-full object-cover" />
            </div>
            <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5] mt-8">
              <img src={found2} alt="Community development" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS ════════════════════════════════════════════ */}
      <div id="pillars">
        {pillars.map(({ icon: Icon, title, color, desc, highlights, img }, i) => (
          <section
            key={title}
            className={`py-20 lg:py-28 px-5 lg:px-24 ${i % 2 === 1 ? 'bg-[#F9FAF5]' : 'bg-white'}`}
          >
            <div className={`max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'reveal-right lg:col-start-1' : 'reveal-left'}>
                <div className={`inline-flex items-center gap-2 ${color} text-white text-xs font-sans font-bold px-3 py-1.5 rounded-full mb-5`}>
                  <Icon size={14} /> {title}
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
                <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-sm px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
                  Support {title} <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className={`${i % 2 === 1 ? 'reveal-left lg:col-start-2' : 'reveal-right'} img-zoom rounded-2xl overflow-hidden`}>
                <img src={img} alt={title} className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="bg-secondary py-20 px-5 text-center reveal">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-sans font-extrabold text-white text-3xl lg:text-[40px] mb-4 leading-tight">
            Be Part of the Change
          </h2>
          <p className="text-white/80 font-sans text-base leading-relaxed mb-8">
            Your partnership — whether through sponsorship, donations, or volunteering — directly transforms lives across Africa.
          </p>
          <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-white text-secondary font-sans font-bold text-[16px] px-8 py-4 rounded-lg hover:bg-surface transition-colors">
            Sponsor the Foundation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
