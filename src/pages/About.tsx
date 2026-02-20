import aboutHero    from '../assets/about-hero.png';
import ellipse1     from '../assets/about-ellipse1.png';
import ellipse2     from '../assets/about-ellipse2.png';
import founderImg   from '../assets/about-founder.png';

export default function About() {
  return (
    <>
      {/* ═══ HERO — full-bleed image + overlay title ═════════════ */}
      <section className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden">
        <img
          src={aboutHero}
          alt="About Ifedichie Group"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-[60px] tracking-tight reveal">
            About Us
          </h1>
        </div>
      </section>

      {/* ═══ WHO WE ARE ══════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[40px] mb-6">
            Who we are
          </h2>
          <p className="reveal font-sans text-accent text-[16px] lg:text-[18px] italic leading-relaxed">
            At Ifedichie Group, we are more than just a company, we are a movement with
            purpose. Founded on the principles of integrity, innovation, and service,
            our mission is to create sustainable solutions that empower people and
            transform communities.
          </p>
        </div>
      </section>

      {/* ═══ MISSION & VISION ════════════════════════════════════ */}
      <section className="bg-white py-10 lg:py-16 px-5 lg:px-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Left heading */}
            <div className="reveal-left lg:w-[220px] shrink-0 lg:pt-8">
              <h2 className="font-sans font-extrabold text-primary text-2xl lg:text-[32px] leading-tight">
                Our Mission<br />& Vision
              </h2>
            </div>

            {/* Right — two pill cards */}
            <div className="flex-1 flex flex-col gap-5">

              {/* Mission pill — light bg */}
              <div className="reveal flex flex-col sm:flex-row items-center gap-6 bg-[#F5F5EE] rounded-[50px] px-8 py-6 overflow-hidden">
                <div className="flex-1 text-left sm:pr-4">
                  <p className="font-sans font-bold text-accent text-sm mb-2">Mission</p>
                  <p className="font-sans text-primary text-[15px] leading-relaxed">
                    To empower communities and drive sustainable growth through innovative
                    solutions in agriculture, health, education, and energy.
                  </p>
                </div>
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src={ellipse1} alt="Mission" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Vision pill — dark bg */}
              <div className="reveal flex flex-col sm:flex-row items-center gap-6 bg-[#1C2B1A] rounded-[50px] px-8 py-6 overflow-hidden">
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-md">
                  <img src={ellipse2} alt="Vision" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-left sm:pl-4">
                  <p className="font-sans font-bold text-accent text-sm mb-2">Vision</p>
                  <p className="font-sans text-white/85 text-[15px] leading-relaxed">
                    To be a leading conglomerate known for transforming industries and
                    enriching lives through people centred, sustainable solutions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ DEI / QUOTE ═════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="reveal font-sans font-extrabold text-primary text-3xl lg:text-[38px] mb-6">
            Diversity, Equity &amp; Inclusion
          </h2>
          <p className="reveal font-sans text-accent text-[16px] lg:text-[18px] italic leading-relaxed">
            "At Ifedichie, diversity, equity, and inclusion are not just policies—they are
            action. We ensure equal access to education, healthcare, and opportunity,
            so no dream is out of reach."
          </p>
        </div>
      </section>

      {/* ═══ FOUNDER ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[480px] lg:min-h-[540px] overflow-hidden">
        {/* Dark bg with founder image */}
        <img
          src={founderImg}
          alt="Founder"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-primary/75" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 lg:px-16 py-16 flex flex-col lg:flex-row gap-10 items-start">

          {/* Portrait card */}
          <div className="reveal shrink-0 bg-white rounded-2xl overflow-hidden w-[180px] sm:w-[200px]">
            <div className="aspect-[3/4]">
              <img src={founderImg} alt="Onyechere Chisom" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-4">
              <p className="font-sans font-bold text-primary text-sm leading-snug">Onyechere Chisom</p>
              <p className="font-sans text-neutral-3 text-xs mt-0.5 leading-snug">
                Founder &amp; President of Ifedichie Group
              </p>
            </div>
          </div>

          {/* Bio text */}
          <div className="reveal-right flex-1 pt-2">
            <p className="font-sans text-white/90 text-[15px] lg:text-[16px] leading-relaxed mb-6">
              Onyechere Chisom, founder and president of Ifedichie Group, is a multifaceted
              educationist, businessman, and philanthropist. With academic roots in Naval
              Electromechanical Engineering (Romania) and advanced degrees in Mechanical
              Engineering and Pharmaceutical Technology (Ireland), his expertise spans
              continents. As a philanthropist, he has sponsored 200+ students back to school
              through the Ifedichie Foundation, and remains a beacon of hope for communities
              across Africa.
            </p>
            <blockquote className="border-l-4 border-accent pl-5">
              <p className="font-sans text-white font-semibold italic text-[16px] leading-relaxed">
                "True success is measured not by profit, but by the impact we create."
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
