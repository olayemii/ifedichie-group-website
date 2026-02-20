import { Link } from 'react-router-dom';
import heroBg  from '../assets/hero-bg.png';
import found1  from '../assets/foundation1.png';
import found2  from '../assets/foundation2.png';
import agriImg from '../assets/agriculture.png';
import blog2   from '../assets/blog2.png';

const pillars = [
  {
    tag:  'Education',
    heading: 'Scholarships & School Support',
    text: 'We fund scholarships, build classrooms, and equip learners with the tools they need to excel — from primary school through university.',
    img: blog2,
  },
  {
    tag:  'Healthcare',
    heading: 'Community Health Outreach',
    text: 'Free medical camps, maternal health support, and mobile diagnostic units bring quality care to the most underserved communities.',
    img: found1,
  },
  {
    tag:  'Community',
    heading: 'Youth & Women Empowerment',
    text: 'Vocational training, clean water access, and food security programmes transform communities and create lasting self-sufficiency.',
    img: agriImg,
  },
];

const stats = [
  { value: '10,000+', label: 'Beneficiaries annually' },
  { value: '500+',    label: 'Scholarships awarded' },
  { value: '12',      label: 'States covered' },
  { value: '18+',     label: 'Years of impact' },
];

export default function Foundation() {
  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden">
        <img
          src={heroBg}
          alt="Ifedichie Foundation"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p className="reveal font-sans font-semibold text-accent text-xs uppercase tracking-widest mb-3">
            Ifedichie Foundation
          </p>
          <h1 className="reveal font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-[60px] mb-5">
            Restoring Hope.<br />Transforming Lives.
          </h1>
          <div className="reveal">
            <Link to="/contact" className="btn-primary text-[16px] px-8 py-3.5">
              Sponsor this Foundation
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT STATS ════════════════════════════════════════ */}
      <section className="bg-accent py-10 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="reveal">
              <p className="font-sans font-extrabold text-white text-3xl lg:text-4xl">{value}</p>
              <p className="font-sans text-white/80 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INTRO ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="reveal-left">
            <p className="font-sans font-semibold text-accent text-sm uppercase tracking-wider mb-3">Who We Are</p>
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[38px] leading-tight mb-5">
              Beyond Business —<br />A Legacy of Giving
            </h2>
            <p className="font-sans text-neutral-3 text-[15px] leading-relaxed mb-4">
              Established in 2015, the Ifedichie Group Foundation is our philanthropic commitment
              to Africa beyond commerce. We believe sustainable business must be paired with
              genuine community investment.
            </p>
            <p className="font-sans text-neutral-3 text-[15px] leading-relaxed mb-7">
              Our programmes target three critical pillars: Education, Healthcare, and Community
              Development — areas where targeted investment creates multi-generational impact.
            </p>
            <Link to="/contact" className="btn-primary">
              Partner with us
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

      {/* ═══ THREE PILLARS ═══════════════════════════════════════ */}
      {pillars.map(({ tag, heading, text, img }, i) => (
        <section
          key={tag}
          className={`py-14 lg:py-20 px-5 lg:px-16 ${i % 2 === 0 ? 'bg-[#F9FAF5]' : 'bg-white'}`}
        >
          <div className={`max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            <div className={i % 2 === 1 ? 'reveal-right lg:col-start-1' : 'reveal-left'}>
              <span className="inline-block bg-accent/10 text-accent font-sans font-bold text-xs px-3 py-1.5 rounded-full mb-4">
                {tag}
              </span>
              <h3 className="font-sans font-extrabold text-primary text-2xl lg:text-[30px] mb-4 leading-tight">
                {heading}
              </h3>
              <p className="font-sans text-neutral-3 text-[15px] leading-relaxed mb-6">{text}</p>
              <Link to="/contact" className="btn-primary">
                Support {tag}
              </Link>
            </div>
            <div className={`${i % 2 === 1 ? 'reveal-left lg:col-start-2' : 'reveal-right'} img-zoom rounded-2xl overflow-hidden`}>
              <img src={img} alt={heading} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </section>
      ))}

      {/* ═══ CTA ═════════════════════════════════════════════════ */}
      <section className="bg-secondary py-20 px-5 text-center">
        <div className="max-w-[560px] mx-auto reveal">
          <h2 className="font-sans font-extrabold text-white text-3xl lg:text-[40px] mb-4 leading-tight">
            Be Part of the Change
          </h2>
          <p className="font-sans text-white/80 text-[16px] leading-relaxed mb-8">
            Your sponsorship directly transforms lives across Africa.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-secondary font-sans font-bold text-[16px] px-8 py-3.5 rounded-lg hover:bg-surface transition-colors"
          >
            Sponsor the Foundation
          </Link>
        </div>
      </section>
    </>
  );
}
