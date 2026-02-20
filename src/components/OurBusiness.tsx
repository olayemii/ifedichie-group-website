import agricultureImg from '../assets/agriculture.png';
import healthImg from '../assets/health.png';
import energyImg from '../assets/energy.png';

const businesses = [
  {
    title: 'Agriculture',
    subtitle: 'Sustainable palm oil processing and farmer empowerment',
    image: agricultureImg,
  },
  {
    title: 'Health',
    subtitle: 'Expanding access to diagnostics, immunisation, and outreach',
    image: healthImg,
  },
  {
    title: 'Energy',
    subtitle: 'Responsible oil & gas and sustainable energy',
    image: energyImg,
  },
];

export default function OurBusiness() {
  return (
    <section id="business" className="bg-white py-16 lg:py-[150px] px-6 lg:px-[100px]">
      <div className="max-w-[1244px] mx-auto flex flex-col items-center gap-8 lg:gap-[32px]">
        <h2 className="font-bold text-[#242E16] text-3xl lg:text-[40px] text-center">
          Our Business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {businesses.map((biz) => (
            <div
              key={biz.title}
              className="bg-[#2A251F] border border-[#808D97] rounded-[12px] overflow-hidden flex flex-col p-3 gap-5"
            >
              {/* Title & Subtitle */}
              <div className="flex flex-col gap-1">
                <p className="text-white text-[18px] font-normal">{biz.title}</p>
                <p className="text-[#F2F4F5] text-[12px] font-normal">{biz.subtitle}</p>
              </div>

              {/* Image */}
              <div className="border border-[#808D97] rounded-[12px] overflow-hidden aspect-[380/238]">
                <img
                  src={biz.image}
                  alt={biz.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
