import { Link } from 'react-router-dom';
import { ArrowUpRight, Target, Eye, Heart, Shield, Sprout, Users } from 'lucide-react';
import heroBg  from '../assets/hero-bg.png';
import found1  from '../assets/foundation1.png';
import found2  from '../assets/foundation2.png';
import agriImg from '../assets/agriculture.png';

const values = [
  { icon: Heart,   title: 'Integrity',       desc: 'We hold ourselves to the highest ethical standards in every decision and action.' },
  { icon: Sprout,  title: 'Sustainability',   desc: 'We invest in solutions that preserve resources for future generations.' },
  { icon: Users,   title: 'Community First',  desc: 'Every initiative is designed with African communities at its heart.' },
  { icon: Shield,  title: 'Excellence',       desc: 'We strive for world-class quality across all our sectors.' },
];

const timeline = [
  { year: '2005', event: 'Ifedichie Group founded with a vision to transform African agriculture.' },
  { year: '2010', event: 'Expanded into healthcare, opening first diagnostics centre in Abuja.' },
  { year: '2015', event: 'Launched the Ifedichie Foundation, reaching 10,000+ beneficiaries.' },
  { year: '2018', event: 'Entered the energy sector, developing responsible oil & gas operations.' },
  { year: '2023', event: 'Operations now span 12 states with 50,000+ lives transformed.' },
];

const team = [
  { name: 'Dr. Chukwuemeka Ifedichie', role: 'Founder & Group CEO', img: found1 },
  { name: 'Ngozi Adeyemi',             role: 'Chief Operating Officer', img: found2 },
  { name: 'Ibrahim Suleiman',          role: 'Head, Agriculture Division', img: agriImg },
];

export default function About() {
  return (
    <>
      {/* ═══ PAGE HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-primary min-h-[360px] flex flex-col items-center justify-center text-center px-5 overflow-hidden py-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10">
          <span className="inline-block bg-accent/20 text-accent font-sans font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 reveal">
            About Us
          </span>
          <h1 className="reveal font-sans font-extrabold text-white text-4xl lg:text-[52px] leading-tight max-w-2xl mx-auto mb-4">
            Who We Are
          </h1>
          <p className="reveal text-white/75 font-sans text-[17px] max-w-xl mx-auto leading-relaxed">
            A diversified African conglomerate driving purposeful growth across agriculture, healthcare, and energy.
          </p>
        </div>
      </section>

      {/* ═══ OUR STORY ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="reveal-left">
            <span className="text-accent font-sans font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[40px] mt-3 mb-5 leading-tight">
              Two Decades of Purposeful Impact
            </h2>
            <p className="text-neutral-3 font-sans text-base leading-relaxed mb-4">
              Founded in 2005, the Ifedichie Group began with a simple but powerful belief: that Africa's greatest resource is its people and its land. What started as an agribusiness initiative in the Niger Delta has grown into a diversified conglomerate touching the lives of hundreds of thousands.
            </p>
            <p className="text-neutral-3 font-sans text-base leading-relaxed mb-6">
              Today, we operate across three critical sectors — Agriculture, Healthcare, and Energy — each aligned with the urgent development needs of the African continent.
            </p>
            <Link to="/contact" className="btn-press inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-sm px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Partner with us <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={found1} alt="Our story" className="w-full h-full object-cover" />
            </div>
            <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5] mt-8">
              <img src={found2} alt="Our journey" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION & VISION ════════════════════════════════════ */}
      <section className="bg-[#F9FAF5] py-20 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="reveal-left bg-white rounded-2xl p-8 border border-accent/20 card-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
              <Target size={24} className="text-accent" />
            </div>
            <h3 className="font-sans font-extrabold text-primary text-2xl mb-3">Our Mission</h3>
            <p className="text-neutral-3 font-sans text-base leading-relaxed">
              To harness Africa's natural and human resources responsibly, creating scalable businesses that generate shared prosperity — for investors, communities, and the continent at large.
            </p>
          </div>
          <div className="reveal-right bg-primary rounded-2xl p-8 card-lift">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5">
              <Eye size={24} className="text-accent" />
            </div>
            <h3 className="font-sans font-extrabold text-white text-2xl mb-3">Our Vision</h3>
            <p className="text-white/80 font-sans text-base leading-relaxed">
              To be Africa's most impactful conglomerate — a trusted partner for communities, a benchmark for ethical business, and a bridge between Africa's potential and the world's opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[40px] mb-3">Our Core Values</h2>
            <p className="text-neutral-3 font-sans text-base max-w-md mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal card-lift bg-[#F9FAF5] rounded-2xl p-6 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon size={26} className="text-accent" />
                </div>
                <h4 className="font-sans font-bold text-primary text-lg">{title}</h4>
                <p className="text-neutral-3 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ════════════════════════════════════════════ */}
      <section className="bg-primary py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="font-sans font-extrabold text-white text-3xl lg:text-[40px] mb-3">Our Journey</h2>
            <p className="text-white/60 font-sans text-base">Milestones that define who we are today.</p>
          </div>
          <div className="relative pl-8 border-l-2 border-accent/40 flex flex-col gap-10 stagger">
            {timeline.map(({ year, event }) => (
              <div key={year} className="reveal relative">
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-accent border-4 border-primary" />
                <span className="font-sans font-extrabold text-accent text-sm block mb-1">{year}</span>
                <p className="font-sans text-white/80 text-base leading-relaxed">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP ══════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[40px] mb-3">Leadership Team</h2>
            <p className="text-neutral-3 font-sans text-base max-w-md mx-auto">Visionary leaders driving Africa's growth story.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 stagger">
            {team.map(({ name, role, img }) => (
              <div key={name} className="reveal card-lift text-center group">
                <div className="img-zoom rounded-2xl overflow-hidden aspect-square mb-5">
                  <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-sans font-bold text-primary text-lg">{name}</h4>
                <p className="font-sans text-accent text-sm font-semibold mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
