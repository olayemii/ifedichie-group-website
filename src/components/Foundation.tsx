import foundationImg1 from '../assets/foundation1.png';
import foundationImg2 from '../assets/foundation2.png';

export default function Foundation() {
  return (
    <section id="foundation" className="bg-white py-16 lg:py-[60px] px-6 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#242E16] text-[16px] leading-relaxed max-w-[398px]">
            Through the Ifedichie Group Foundation, we restore hope, break barriers, and transform lives.{' '}
            Join us in{' '}
            <span className="font-bold">EDUCATION, HEALTHCARE, COMMUNITY</span>
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#FF3D23] text-white font-bold text-[16px] px-6 py-3 rounded-[8px] hover:bg-red-600 transition-colors text-center"
          >
            Sponsor this foundation
          </a>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-[#808D97] rounded-[12px] overflow-hidden aspect-[610/400]">
            <img
              src={foundationImg1}
              alt="Foundation - Education"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border border-[#808D97] rounded-[12px] overflow-hidden aspect-[610/400]">
            <img
              src={foundationImg2}
              alt="Foundation - Healthcare"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
