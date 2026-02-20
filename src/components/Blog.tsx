import { ArrowUpRight } from 'lucide-react';
import blog1Img from '../assets/blog1.png';
import blog2Img from '../assets/blog2.png';
import blog3Img from '../assets/blog3.png';

const posts = [
  {
    title: 'Empowering Farmers Across Nigeria',
    category: 'Sustainable palm oil processing and farmer empowerment',
    image: blog1Img,
  },
  {
    title: 'Expanding Healthcare Access',
    category: 'Sustainable palm oil processing and farmer empowerment',
    image: blog2Img,
  },
  {
    title: 'Building Brighter Futures',
    category: 'Sustainable palm oil processing and farmer empowerment',
    image: blog3Img,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-16 lg:py-[150px] px-6 lg:px-[100px]">
      <div className="max-w-[1244px] mx-auto flex flex-col items-center gap-8 lg:gap-[32px]">
        <h2 className="font-bold text-[#242E16] text-3xl lg:text-[36px] text-center">
          Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white border border-[#8AAF00] border-opacity-40 rounded-[12px] overflow-hidden flex flex-col p-2.5 gap-5 hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Image */}
              <div className="relative border border-[#808D97] rounded-[12px] overflow-hidden aspect-[380/368]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                {/* Arrow button */}
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
                  <ArrowUpRight size={18} className="text-gray-700" />
                </button>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 px-1">
                <p className="font-semibold text-[#242E16] text-[18px]">{post.title}</p>
                <p className="text-[#8AAF00] text-[12px]">{post.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
