import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['090-FindCura', '08028232323'],
    href: 'tel:08028232323',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['support@ifedichie.com', 'partnerships@ifedichie.com'],
    href: 'mailto:support@ifedichie.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    lines: ['Plot 12, Business District', 'Abuja, FCT, Nigeria'],
    href: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday – Friday', '8:00am – 5:00pm WAT'],
    href: '#',
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative bg-primary min-h-[320px] flex flex-col items-center justify-center text-center px-5 overflow-hidden py-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10">
          <span className="inline-block bg-accent/20 text-accent font-sans font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 reveal">
            Get in Touch
          </span>
          <h1 className="reveal font-sans font-extrabold text-white text-4xl lg:text-[52px] leading-tight max-w-2xl mx-auto mb-4">
            Contact Us
          </h1>
          <p className="reveal text-white/75 font-sans text-[17px] max-w-xl mx-auto leading-relaxed">
            Have a question, partnership proposal, or want to support our work? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ═══ CONTACT INFO CARDS ═════════════════════════════════ */}
      <section className="bg-[#F9FAF5] py-14 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {contactInfo.map(({ icon: Icon, title, lines, href }) => (
            <a
              key={title}
              href={href}
              className="reveal card-lift bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 group"
            >
              <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center">
                <Icon size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-sans font-bold text-primary text-sm mb-1">{title}</p>
                {lines.map((line) => (
                  <p key={line} className="font-sans text-neutral-3 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ═══ FORM + MAP ═════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28 px-5 lg:px-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Form */}
          <div className="reveal-left">
            <span className="text-accent font-sans font-semibold text-sm uppercase tracking-wider">Send a Message</span>
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[38px] mt-2 mb-8 leading-tight">
              We'll Get Back to You
            </h2>

            {sent ? (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowUpRight size={24} className="text-white rotate-45" />
                </div>
                <h3 className="font-sans font-extrabold text-primary text-xl mb-2">Message Sent!</h3>
                <p className="font-sans text-neutral-3 text-base">
                  Thank you for reaching out. Our team will respond within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-sans font-semibold text-primary text-sm">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-sans font-semibold text-primary text-sm">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-sans font-semibold text-primary text-sm">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 000 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="font-sans font-semibold text-primary text-sm">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option>Business Partnership</option>
                      <option>Investment Enquiry</option>
                      <option>Foundation / Sponsorship</option>
                      <option>Media & Press</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-sans font-semibold text-primary text-sm">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your enquiry..."
                    value={form.message}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-press self-start inline-flex items-center gap-2 bg-secondary text-white font-sans font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-red-600 transition-colors disabled:opacity-60"
                >
                  {loading ? 'Sending…' : <>Send Message <ArrowUpRight size={16} /></>}
                </button>
              </form>
            )}
          </div>

          {/* Map / Visual */}
          <div className="reveal-right flex flex-col gap-6">
            <div className="bg-[#F9FAF5] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-gray-100">
              <div className="text-center px-8">
                <MapPin size={40} className="text-accent mx-auto mb-3" />
                <p className="font-sans font-bold text-primary text-lg mb-1">Ifedichie Group HQ</p>
                <p className="font-sans text-neutral-3 text-sm">Plot 12, Business District<br />Abuja, FCT, Nigeria</p>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-7">
              <h3 className="font-sans font-extrabold text-white text-xl mb-3">Partnership Enquiries</h3>
              <p className="font-sans text-white/75 text-sm leading-relaxed mb-5">
                We actively seek strategic investors, development partners, and institutional collaborators. Reach out to discuss opportunities across Agriculture, Health, and Energy.
              </p>
              <a
                href="mailto:partnerships@ifedichie.com"
                className="inline-flex items-center gap-2 bg-accent text-white font-sans font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors"
              >
                partnerships@ifedichie.com <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
