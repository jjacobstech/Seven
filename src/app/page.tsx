import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#000117]">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5 text-yellow-400 text-xs font-bold mb-8">
            <Image
              src="/assets/bulb-icon.svg"
              alt=""
              width={12}
              height={12}
              className="w-3 h-3"
            />
            Your Creation Partner
          </div>

          {/* Subheading */}
          <p className="text-white/60 text-base md:text-lg font-normal mb-3 max-w-2xl font-serif italic">
            In a world filled with countless businesses like yours,
            <br />
            our job is simple; To make yours....
          </p>

          {/* Main Headline */}
          <h1
            className="text-[clamp(5rem,15vw,10rem)] font-black text-white mb-10 tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stand Out
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/book-a-call"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-black text-base transition-all shadow-[0_0_30px_rgba(250,204,21,0.2)]"
            >
              Book a Call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-base transition-all"
            >
              Our Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-2xl">
            {/* Floating card */}
            <div className="absolute top-8 left-0 p-5 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 max-w-[260px] text-left hidden md:block z-20">
              <p className="text-xs text-white/70 leading-relaxed italic font-serif">
                Book a{" "}
                <span className="text-yellow-400 font-bold not-italic">
                  FREE
                </span>{" "}
                30-minute consultation call and unlock everything you need to
                make your brand{" "}
                <span className="text-yellow-400 font-bold">shine</span>.
              </p>
            </div>
            <Image
              src="/assets/lightbulbs-hero.png"
              alt="Glowing lightbulb — Seven Innovative creative agency"
              width={1000}
              height={800}
              className="object-contain drop-shadow-[0_0_60px_rgba(250,204,21,0.25)] w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO ARE WE
      ═══════════════════════════════════════════════════ */}
      <section id="about" className="py-28 px-6 bg-[#000117]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: Text */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Who Are <span className="text-yellow-400">We?</span>
            </h2>
            <div className="space-y-5 text-white/50 text-base leading-relaxed max-w-lg">
              <p>
                Our team consists of design experts, developers, marketers,
                photographers, filmmakers, and copywriters.
              </p>
              <p>
                What we do is help you tell your brand story in a way that is
                not just unique but compelling.
              </p>
              <p>
                If you&apos;re looking to tell your brand story in a way that
                makes people stop and listen,{" "}
                <span className="text-white font-bold italic">
                  we&apos;re your guys!
                </span>
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="#team"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-sm transition-all"
              >
                Meet the Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Decorative watermark text */}
            <div className="mt-16 select-none pointer-events-none opacity-[0.04]">
              <span className="text-7xl font-black uppercase block leading-none">
                Your
              </span>
              <span className="text-7xl font-black uppercase block leading-none">
                Creative
              </span>
              <span className="text-7xl font-black uppercase block leading-none">
                Partner
              </span>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Creative */}
            <div className="group p-7 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-yellow-400/20 transition-all flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-all">
                <Image
                  src="/assets/solar_layers-bold.svg"
                  alt="Creative"
                  width={22}
                  height={22}
                  className="w-5 h-5 invert group-hover:invert-0 opacity-80"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Creative<span className="text-yellow-400">.</span>
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  We are a creative setup that sets out to solve the problem of
                  information and communication with innovative ideas and
                  well-structured creative strategies.
                </p>
              </div>
            </div>
            {/* Strategic */}
            <div className="group p-7 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-yellow-400/20 transition-all flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-all">
                <Image
                  src="/assets/Vector(1).svg"
                  alt="Strategic"
                  width={22}
                  height={22}
                  className="w-5 h-5 invert group-hover:invert-0 opacity-80"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Strategic<span className="text-yellow-400">.</span>
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  We offer outside the box solutions to every creative problem
                  your business is struggling with. No cliche or ordinary around
                  here.
                </p>
              </div>
            </div>
            {/* Fast */}
            <div className="group p-7 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-yellow-400/20 transition-all flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-all">
                <Image
                  src="/assets/Vector(2).svg"
                  alt="Fast"
                  width={22}
                  height={22}
                  className="w-5 h-5 invert group-hover:invert-0 opacity-80"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Fast<span className="text-yellow-400">.</span>
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  We understand that there is getting a job done and there is
                  getting a job done on time, we are dedicated to delivering
                  excellence with speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="py-28 px-6 relative overflow-hidden">
        {/* "Experience Perfection" watermark matching the design */}
        <div className="absolute right-0 bottom-16 select-none pointer-events-none opacity-[0.06] text-right leading-none">
          <p className="text-[clamp(3rem,8vw,7rem)] font-black uppercase italic font-serif">
            Experience
          </p>
          <p className="text-[clamp(3rem,8vw,7rem)] font-black uppercase italic font-serif flex items-center justify-end gap-4">
            <span className="text-yellow-400">✓</span>Perfection
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              What we do
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Brand Management */}
            <div className="group p-7 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-yellow-400/20 transition-all flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-5 group-hover:bg-yellow-400 transition-all">
                <Image
                  src="/assets/Vector.svg"
                  alt="Brand Management"
                  width={22}
                  height={22}
                  className="w-5 h-5 invert group-hover:invert-0 opacity-80"
                />
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                Brand Management<span className="text-yellow-400">.</span>
              </h3>
              <p className="text-white/40 text-xs mb-5 leading-relaxed">
                Turn your vision into something tangible.
              </p>
              <ul className="space-y-2 flex-1">
                {[
                  "Logo & Branding",
                  "Graphics Designs",
                  "UI/UX Design",
                  "Product Branding",
                  "Web Design",
                  "Brand Strategy",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-[11px] text-white/40 group-hover:text-white/60 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Public Relations */}
            <div className="group p-7 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-yellow-400/20 transition-all flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-5 group-hover:bg-yellow-400 transition-all">
                <Image
                  src="/assets/mdi_loudspeaker.svg"
                  alt="Public Relations"
                  width={22}
                  height={22}
                  className="w-5 h-5 invert group-hover:invert-0 opacity-80"
                />
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                Public Relations<span className="text-yellow-400">.</span>
              </h3>
              <p className="text-white/40 text-xs mb-5 leading-relaxed">
                Let us help your business thrive.
              </p>
              <ul className="space-y-2 flex-1">
                {[
                  "Social Media Marketing",
                  "Campaign Management",
                  "Content Creation and Marketing",
                  "Email Marketing",
                  "Digital Ads",
                  "Content Writing",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-[11px] text-white/40 group-hover:text-white/60 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Media */}
            <div className="group p-7 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-yellow-400/20 transition-all flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-5 group-hover:bg-yellow-400 transition-all">
                <Image
                  src="/assets/Vector(3).svg"
                  alt="Media"
                  width={22}
                  height={22}
                  className="w-5 h-5 invert group-hover:invert-0 opacity-80"
                />
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                Media<span className="text-yellow-400">.</span>
              </h3>
              <p className="text-white/40 text-xs mb-5 leading-relaxed">
                Allow us to present your brand in a way that hooks.
              </p>
              <ul className="space-y-2 flex-1">
                {[
                  "Cinematography",
                  "Photography",
                  "Stage Light Production",
                  "Video Editing",
                  "Events",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-[11px] text-white/40 group-hover:text-white/60 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Print */}
            <div className="group p-7 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-yellow-400/20 transition-all flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-5 group-hover:bg-yellow-400 transition-all">
                <Image
                  src="/assets/mdi_printer.svg"
                  alt="Print"
                  width={22}
                  height={22}
                  className="w-5 h-5 invert group-hover:invert-0 opacity-80"
                />
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                Print<span className="text-yellow-400">.</span>
              </h3>
              <p className="text-white/40 text-xs mb-5 leading-relaxed">
                Book a free 30 minute consultation.
              </p>
              <ul className="space-y-2 flex-1">
                {[
                  "Book Publishing",
                  "Magazines",
                  "Brochures",
                  "Packaging",
                  "Cloth Branding",
                  "Banners and Stickers",
                  "Signage",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-[11px] text-white/40 group-hover:text-white/60 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom CTA row in services */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm max-w-lg leading-relaxed">
              Turn your vision into something tangible and help you discover
              amazing things to bring your{" "}
              <span className="text-white font-bold italic">
                brand to its ideal audience.
              </span>{" "}
              Find out how we can make you{" "}
              <span className="text-yellow-400 font-bold">stand out</span>.
            </p>
            <Link
              href="/book-a-call"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-7 py-4 rounded-xl font-black text-sm transition-all whitespace-nowrap"
            >
              Book a Call ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#000117]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16 tracking-tight">
            Why <span className="text-yellow-400">Choose</span> Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Draw in Customers",
                desc: "Increase website traffic and employ tried-and-true techniques to turn visitors into qualified leads and happy customers.",
              },
              {
                num: "02",
                title: "Engage Potential Clients",
                desc: "Use webinars, email marketing campaigns, and interactive, high-performance content to engage your contacts and visitors.",
              },
              {
                num: "03",
                title: "Convert Clients",
                desc: "Use advanced marketing predictive analytics to score and convert the appropriate prospects at the right moment.",
              },
              {
                num: "04",
                title: "Contain Clients",
                desc: "To keep your customers satisfied, you must use more than your product. Engage your customers through various other channels.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group p-10 bg-[#0A1628] border border-white/5 rounded-3xl hover:border-yellow-400/20 transition-all"
              >
                <span className="text-5xl font-black text-yellow-400 block mb-5 font-serif">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OUR PROCESS
      ═══════════════════════════════════════════════════ */}
      <section id="process" className="py-28 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            How we do it
          </span>
          <h2 className="text-5xl font-black text-white tracking-tight mb-6">
            Our Process
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            In Seven Innovative, we do not just focus on getting a perfect
            result, we are also very invested in the{" "}
            <span className="text-white font-bold">process and experience</span>{" "}
            while getting your work done.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            {
              num: "01",
              title: "Detail-Driven Briefing System",
              desc: "We understand that client's briefs are the most important factors to getting an excellent job done, so we designed a system that helps clients express their desires and expectations to the best, before the work commences and during the work process.",
            },
            {
              num: "02",
              title: "Workflow Report System",
              desc: "We designed a simple and effective communication and followup system through a design board to keep everything in one place and help you track our progress and mitigate errors. No need for meetings about meetings.",
            },
            {
              num: "03",
              title: "Third-Party review System",
              desc: "They say 'two heads are better than one'... well, we like to make it three. We designed a review system were we involve you alongside an experienced professional to scrutinize sample of the job before final delivery.",
            },
          ].map((item, idx) => (
            <div key={item.num} className="flex gap-8 items-start">
              <span className="text-5xl font-black text-yellow-400/25 font-serif leading-none shrink-0 mt-1">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div
                className={`flex-1 pb-10 ${idx < 2 ? "border-b border-white/5" : ""}`}
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="pt-6 flex justify-center">
            <Link
              href="/book-a-call"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-xl font-black flex items-center gap-2 transition-all"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PORTFOLIO
      ═══════════════════════════════════════════════════ */}
      <section id="portfolio" className="py-28 px-6 bg-[#000117]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-14">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              A glimpse of perfection
            </h2>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-3 bg-yellow-400 text-black rounded-full transition-all hover:bg-yellow-500"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden bg-[#0A1628] border border-white/5">
              <Image
                src="/assets/Frame 33366.png"
                alt="Portfolio project"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-[#0A1628] border border-white/5">
              <Image
                src="/assets/Frame 33366(1).png"
                alt="Portfolio project"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-[#0A1628] border border-white/5">
              <Image
                src="/assets/Frame 33368.png"
                alt="Portfolio project"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CLIENT STORIES / TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section id="testimonials" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            What our clients says
          </span>
          <h2 className="text-5xl font-black text-white tracking-tight mb-14">
            Client Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                img: "/assets/Rectangle 6346.png",
                name: "Clarissa Balogun",
                role: "College Student",
              },
              {
                img: "/assets/Rectangle 6348.png",
                name: "Clarissa Balogun",
                role: "College Student",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-10 rounded-[2.5rem] bg-white text-black relative overflow-hidden"
              >
                {/* Quote badge */}
                <div className="absolute top-5 right-8 w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl font-black leading-none font-serif text-white opacity-40">
                    "
                  </span>
                </div>
                {/* Stars */}
                <div className="flex gap-1 mb-7">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-8 text-zinc-500">
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus umodo
                  efficitur neque.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-zinc-100">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-sm">{t.name}</h4>
                    <p className="text-[11px] uppercase font-bold text-zinc-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRICING PLANS
      ═══════════════════════════════════════════════════ */}
      <section id="plans" className="py-28 px-6 bg-[#000117]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              Our Services Plan
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight uppercase font-serif">
              Choose Your Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Basic",
                desc: "Essential Branding & Design",
                featured: false,
                efficient: false,
              },
              {
                title: "Standard",
                desc: "Comprehensive Branding & Strategy",
                featured: true,
                efficient: false,
              },
              {
                title: "Premium",
                desc: "Brand + Website + Social",
                featured: false,
                efficient: false,
              },
              {
                title: "Executive",
                desc: "High-End & Scalable",
                featured: false,
                efficient: true,
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`relative p-8 rounded-3xl bg-[#0A1628] border flex flex-col ${
                  plan.featured ? "border-yellow-400" : "border-white/5"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                {plan.efficient && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase whitespace-nowrap">
                    Most Efficient
                  </span>
                )}

                <h3 className="text-2xl font-black mb-1.5 text-white">
                  {plan.title}
                </h3>
                <p className="text-white/30 text-xs mb-8">{plan.desc}</p>

                <ul className="flex-1 space-y-3 mb-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-white/40 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                      <span>
                        Everything in the {plan.title} Package plus advanced
                        benefits.
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book-a-call"
                  className={`w-full py-3.5 rounded-xl text-center text-sm font-bold transition-all ${
                    plan.featured
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto bg-[#0A1628] border border-yellow-400/10 p-20 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-yellow-400/5 blur-[80px] rounded-full pointer-events-none" />

          <span className="relative z-10 text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs mb-5 block">
            Ready to Begin?
          </span>
          <h2 className="relative z-10 text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Let&apos;s Make You <br />
            <span className="text-yellow-400">Stand Out</span>
          </h2>
          <p className="relative z-10 text-white/50 mb-12 text-base max-w-md mx-auto leading-relaxed">
            Book a free strategy call and discover exactly how we&apos;ll help
            your brand grow, connect, and convert.
          </p>
          <Link
            href="/book-a-call"
            className="relative z-10 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_0_40px_rgba(250,204,21,0.2)]"
          >
            Book a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
