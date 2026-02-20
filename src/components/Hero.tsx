import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[600px] lg:min-h-[636px] flex flex-col items-center">
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 lg:pt-[141px] px-6">
        <h1 className="font-bold text-[#242E16] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[1] max-w-[525px] mb-6">
          Building Africa's Future with Purpose
        </h1>
        <p className="text-[#696054] text-[16px] font-medium max-w-[525px] mb-10 leading-relaxed">
          From agriculture to health care and energy, the Ifedichie Group is transforming industries and enriching lives.
        </p>
        <a
          href="#contact"
          className="bg-[#FF3D23] text-white font-bold text-[16px] px-8 py-3 rounded-[8px] hover:bg-red-600 transition-colors inline-flex items-center justify-center mb-12 lg:mb-0"
        >
          Contact us
        </a>
      </div>

      {/* Hero background image */}
      <div className="relative w-full mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 h-[200px] sm:h-[260px] lg:h-[273px]">
        <img
          src={heroBg}
          alt="Ifedichie Group"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
}
