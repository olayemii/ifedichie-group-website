import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Phone,  label: 'Phone',  value: '090-00000, 080000000000', href: 'tel:08028232323' },
  { icon: Mail,   label: 'Email',  value: 'support@ifedichie.com',   href: 'mailto:support@ifedichie.com' },
  { icon: MapPin, label: 'Office', value: 'Abuja, FCT, Nigeria',      href: '#' },
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
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1000);
  };

  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="bg-primary py-20 lg:py-28 px-5 text-center">
        <p className="reveal font-sans font-semibold text-accent text-xs uppercase tracking-widest mb-3">
          Get in Touch
        </p>
        <h1 className="reveal font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-[56px] leading-tight">
          Contact Us
        </h1>
        <p className="reveal font-sans text-white/70 text-[16px] max-w-[480px] mx-auto mt-4 leading-relaxed">
          Have a question, partnership proposal, or want to support our work?
          We'd love to hear from you.
        </p>
      </section>

      {/* ═══ CONTACT INFO ════════════════════════════════════════ */}
      <section className="bg-[#F9FAF5] py-12 px-5 lg:px-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 stagger">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="reveal card-lift bg-white rounded-2xl p-6 flex gap-4 items-start border border-gray-100 group"
            >
              <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-sans font-bold text-primary text-sm mb-1">{label}</p>
                <p className="font-sans text-neutral-3 text-sm leading-relaxed">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ═══ FORM ════════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — intro */}
          <div className="reveal-left">
            <p className="font-sans font-semibold text-accent text-sm uppercase tracking-wider mb-3">Send a Message</p>
            <h2 className="font-sans font-extrabold text-primary text-3xl lg:text-[38px] leading-tight mb-5">
              We'll Get Back<br />to You
            </h2>
            <p className="font-sans text-neutral-3 text-[15px] leading-relaxed mb-8">
              Our team typically responds within 1–2 business days. For urgent matters,
              please call us directly.
            </p>
            <div className="bg-primary rounded-2xl p-7">
              <h3 className="font-sans font-extrabold text-white text-lg mb-2">Partnership Enquiries</h3>
              <p className="font-sans text-white/75 text-sm leading-relaxed mb-4">
                We actively seek strategic investors, development partners, and institutional
                collaborators across Agriculture, Health, and Energy.
              </p>
              <a
                href="mailto:partnerships@ifedichie.com"
                className="inline-flex items-center gap-2 bg-accent text-white font-sans font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors"
              >
                partnerships@ifedichie.com <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            {sent ? (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowUpRight size={24} className="text-white" />
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
                    <label className="font-sans font-semibold text-primary text-sm">Full Name *</label>
                    <input
                      name="name" type="text" required
                      placeholder="Your full name"
                      value={form.name} onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-semibold text-primary text-sm">Email Address *</label>
                    <input
                      name="email" type="email" required
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-semibold text-primary text-sm">Phone Number</label>
                    <input
                      name="phone" type="tel"
                      placeholder="+234 000 000 0000"
                      value={form.phone} onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-semibold text-primary text-sm">Subject *</label>
                    <select
                      name="subject" required
                      value={form.subject} onChange={handleChange}
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
                  <label className="font-sans font-semibold text-primary text-sm">Message *</label>
                  <textarea
                    name="message" required rows={5}
                    placeholder="Tell us about your enquiry..."
                    value={form.message} onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-800 outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit" disabled={loading}
                  className="btn-primary self-start disabled:opacity-60"
                >
                  {loading ? 'Sending…' : <>Send Message <ArrowUpRight size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
