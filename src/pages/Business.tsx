import { Link } from 'react-router-dom';
import businessHero from '../assets/business-hero.png';
import agriImg      from '../assets/agriculture.png';
import healthImg    from '../assets/health.png';
import energyImg    from '../assets/energy.png';

const cards = [
  {
    title: 'Palm Oil Processing',
    desc:  'Lorem ipsum sit amet',
    img:   agriImg,
  },
  {
    title: 'Quality Assurance',
    desc:  'Lorem ipsum sit amet',
    img:   healthImg,
  },
  {
    title: 'Distribution & Export Services',
    desc:  'Lorem ipsum sit amet connectetur',
    img:   energyImg,
  },
];

export default function Business() {
  return (
    <>
      {/* ═══ HERO — full-bleed image + overlay ═══════════════════ */}
      <section className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] overflow-hidden">
        <img
          src={businessHero}
          alt="Our Business — Ifedichie Group"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="reveal font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-[60px] mb-4">
            Our Business
          </h1>
          <p className="reveal font-sans text-white/85 text-[16px] max-w-[560px] leading-relaxed mb-8">
            We operate across three key industries critical to Africa's future—
            Agriculture, Health, and Energy. Each business reflects our
            commitment to sustainability, innovation, and empowerment.
          </p>
          <div className="reveal">
            <Link to="/contact" className="btn-primary text-[16px] px-8 py-3.5">
              Explore more
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ AGRICULTURE INTRO ═══════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[42px] mb-5">
            Agriculture
          </h2>
          <p className="reveal font-sans text-accent text-[15px] lg:text-[17px] italic leading-relaxed">
            Palm oil is more than an ingredient.<br />
            it is our story of sustainability, tradition, and transformation.<br />
            At Ifediiche Agriculture, we harness the potential of palm oil with respect
            for its cultural heritage and commitment to sustainable processing.
          </p>
        </div>
      </section>

      {/* ═══ WHAT WE DO ══════════════════════════════════════════ */}
      <section className="bg-white pb-16 lg:pb-24 px-5 lg:px-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[40px] mb-4">
              What we do
            </h2>
            <p className="reveal font-sans text-accent text-[15px] italic leading-relaxed max-w-[500px] mx-auto">
              We are creating livelihoods, securing food for communities,<br />
              and contributing to Africa's agricultural resilience.
            </p>
          </div>

          {/* 3 dark image cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {cards.map(({ title, desc, img }) => (
              <div
                key={title}
                className="reveal card-lift bg-[#2A251F] rounded-2xl overflow-hidden"
              >
                <div className="img-zoom aspect-[4/3]">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="px-5 py-4">
                  <p className="font-sans font-bold text-white text-[15px]">{title}</p>
                  <p className="font-sans text-white/55 text-xs mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 reveal">
            <Link to="/contact" className="btn-primary text-[15px] px-8 py-3.5">
              Become a Distributor
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HEALTH SECTOR ═══════════════════════════════════════ */}
      <section className="bg-[#F9FAF5] py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[42px] mb-5">
            Health
          </h2>
          <p className="reveal font-sans text-accent text-[15px] lg:text-[17px] italic leading-relaxed mb-10">
            Expanding access to quality diagnostics, immunisation campaigns,
            and community health outreach across underserved regions of Africa.
          </p>
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 stagger">
          {['Community Diagnostics', 'Immunisation Drives', 'Telemedicine & Digital Health'].map((item, i) => (
            <div key={item} className="reveal card-lift bg-white rounded-2xl overflow-hidden border border-gray-100">
              <div className="img-zoom aspect-[4/3]">
                <img src={[agriImg, healthImg, energyImg][i]} alt={item} className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-4">
                <p className="font-sans font-bold text-primary text-[15px]">{item}</p>
                <p className="font-sans text-neutral-3 text-xs mt-1">Lorem ipsum sit amet</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ENERGY SECTOR ═══════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[42px] mb-5">
            Energy
          </h2>
          <p className="reveal font-sans text-accent text-[15px] lg:text-[17px] italic leading-relaxed mb-10">
            Responsible oil &amp; gas operations paired with investment in solar
            mini-grids and clean cooking solutions powering Africa's energy future.
          </p>
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 stagger">
          {['Upstream Oil & Gas', 'Solar Mini-Grids', 'LPG Distribution'].map((item, i) => (
            <div key={item} className="reveal card-lift bg-[#2A251F] rounded-2xl overflow-hidden">
              <div className="img-zoom aspect-[4/3]">
                <img src={[energyImg, agriImg, healthImg][i]} alt={item} className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-4">
                <p className="font-sans font-bold text-white text-[15px]">{item}</p>
                <p className="font-sans text-white/55 text-xs mt-1">Lorem ipsum sit amet</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 reveal">
          <Link to="/contact" className="btn-primary text-[15px] px-8 py-3.5">
            Partner with Us
          </Link>
        </div>
      </section>
    </>
  );
}
