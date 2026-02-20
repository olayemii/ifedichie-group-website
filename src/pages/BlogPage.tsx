import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import blog1   from '../assets/blog1.png';
import blog2   from '../assets/blog2.png';
import blog3   from '../assets/blog3.png';
import found1  from '../assets/foundation1.png';
import found2  from '../assets/foundation2.png';
import agriImg from '../assets/agriculture.png';

const categories = ['All', 'Agriculture', 'Health', 'Energy', 'Community', 'Foundation'];

const posts = [
  {
    title:    'Empowering Farmers Across Nigeria',
    cat:      'Agriculture',
    date:     'Jan 15, 2025',
    readTime: '5 min read',
    img:      blog1,
    excerpt:  'How our cooperative network is helping over 2,000 smallholder farmers improve yields and access international markets.',
    featured: true,
  },
  {
    title:    'Expanding Healthcare Access to Rural Communities',
    cat:      'Health',
    date:     'Jan 8, 2025',
    readTime: '4 min read',
    img:      blog2,
    excerpt:  'Our mobile health units have reached 50+ communities this quarter, delivering vaccines and diagnostics to the underserved.',
    featured: true,
  },
  {
    title:    'Building Brighter Futures Through Education',
    cat:      'Foundation',
    date:     'Dec 20, 2024',
    readTime: '6 min read',
    img:      blog3,
    excerpt:  'The Ifedichie Foundation awarded 500 scholarships in 2024, opening doors for young Africans across 12 states.',
  },
  {
    title:    'Our Solar Mini-Grid Milestone: 30,000 Homes Powered',
    cat:      'Energy',
    date:     'Dec 10, 2024',
    readTime: '3 min read',
    img:      agriImg,
    excerpt:  'We crossed a major milestone in clean energy access — 30,000 homes now powered by our solar mini-grid network.',
  },
  {
    title:    'Community Water Project: Clean Water for 5,000 Families',
    cat:      'Community',
    date:     'Nov 28, 2024',
    readTime: '4 min read',
    img:      found1,
    excerpt:  'Our latest borehole and water treatment project in Benue State is transforming daily life for thousands of families.',
  },
  {
    title:    'Sustainable Palm Oil: Our Certification Journey',
    cat:      'Agriculture',
    date:     'Nov 15, 2024',
    readTime: '7 min read',
    img:      found2,
    excerpt:  'Achieving international sustainability certification required years of work with our farming partners. Here\'s what we learned.',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.cat === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const rest     = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="bg-[#2A251F] py-20 lg:py-28 px-5 text-center">
        <div className="relative z-10">
          <p className="reveal font-sans font-semibold text-accent text-xs uppercase tracking-widest mb-3">
            Stories & Insights
          </p>
          <h1 className="reveal font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-[56px] leading-tight">
            The Ifedichie Blog
          </h1>
          <p className="reveal font-sans text-white/70 text-[16px] max-w-[480px] mx-auto leading-relaxed mt-4">
            Updates, insights, and stories from across the Ifedichie Group and Foundation.
          </p>
        </div>
      </section>

      {/* ═══ CATEGORY FILTER ═════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 sticky top-[76px] z-30">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-16 flex gap-2 overflow-x-auto py-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full font-sans font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20 px-5 lg:px-16">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-14">

          {/* Featured posts */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 stagger">
              {featured.map((post) => (
                <Link
                  key={post.title}
                  to="/blog"
                  className="reveal card-lift group bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="img-zoom relative">
                    <img src={post.img} alt={post.title} className="w-full aspect-[16/9] object-cover" />
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-secondary transition-colors">
                      <ArrowUpRight size={14} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="absolute top-3 left-3 bg-accent text-white font-sans font-bold text-xs px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-sans font-semibold text-accent text-xs">{post.cat}</span>
                      <span className="text-gray-300">·</span>
                      <span className="font-sans text-gray-400 text-xs">{post.readTime}</span>
                      <span className="font-sans text-gray-400 text-xs ml-auto">{post.date}</span>
                    </div>
                    <h3 className="font-sans font-extrabold text-primary text-xl mb-2 leading-snug group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-sans text-neutral-3 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Regular grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
              {rest.map((post) => (
                <Link
                  key={post.title}
                  to="/blog"
                  className="reveal card-lift group bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="img-zoom relative">
                    <img src={post.img} alt={post.title} className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-secondary transition-colors">
                      <ArrowUpRight size={14} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="font-sans font-semibold text-accent text-xs mb-2">{post.cat}</span>
                    <h3 className="font-sans font-bold text-primary text-[16px] leading-snug group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-sans text-neutral-3 text-xs leading-relaxed mt-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center font-sans text-neutral-3 py-16">No posts in this category yet.</p>
          )}
        </div>
      </section>

      {/* ═══ NEWSLETTER ══════════════════════════════════════════ */}
      <section className="bg-primary py-16 px-5 text-center">
        <div className="max-w-[480px] mx-auto reveal">
          <h2 className="font-sans font-extrabold text-white text-2xl lg:text-[32px] mb-3">Stay in the Loop</h2>
          <p className="font-sans text-white/70 text-[15px] mb-7">Subscribe for the latest stories and updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex overflow-hidden rounded-xl bg-white max-w-[400px] mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 text-sm font-sans text-gray-800 outline-none min-w-0"
            />
            <button
              type="submit"
              className="bg-secondary text-white font-sans font-bold text-sm px-5 py-3 hover:bg-red-600 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
