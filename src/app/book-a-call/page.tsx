"use client";

import { sendBookingEmail } from "@/app/actions/sendEmail";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

/* ── types ─────────────────────────────────────────────────────────── */
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  message: string;
  date: string;
  time: string;
}

/* ── Calendar helper ────────────────────────────────────────────────── */
const DAYS = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function BookACall() {
  const today = new Date();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    message: "",
    date: "",
    time: "",
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const toggleService = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));

  const handleConfirm = async () => {
    setSubmitting(true);
    setSubmitError(null);
    const result = await sendBookingEmail(form);
    setSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error ?? "Something went wrong.");
    }
  };

  /* calendar */
  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear((y) => y - 1); }
    else setCalMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear((y) => y + 1); }
    else setCalMonth((m) => m + 1);
  };

  /* ── field helpers ── */
  const field =
    "w-full bg-transparent border-b border-white/10 focus:border-yellow-400 py-3 text-white text-sm outline-none transition-colors placeholder-white/20";

  /* ── Success screen ─────────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#040B18] items-center justify-center px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-8">
          <span className="text-4xl">🎉</span>
        </div>
        <h1 className="text-4xl font-black text-white mb-4">
          You&apos;re booked!
        </h1>
        <p className="text-white/50 max-w-sm mb-10 leading-relaxed">
          We&apos;ve received your details and will reach out within 24 hours to
          confirm your free strategy call.
        </p>
        <Link
          href="/"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-black transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#040B18] pt-24 pb-20">
      {/* ── Main two-panel layout ── */}
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col lg:flex-row gap-8">

        {/* ════════════════════════════════════════════
            LEFT PANEL — info
        ════════════════════════════════════════════ */}
        <div className="lg:w-[38%] bg-[#0A1628] rounded-[2rem] p-8 flex flex-col gap-7 h-fit lg:sticky lg:top-28">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold w-fit">
            <Image
              src="/assets/Vector(2).svg"
              alt="phone"
              width={14}
              height={14}
              className="w-3.5 h-3.5 invert opacity-70"
            />
            Free Strategy Call
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Let&apos;s Talk About
            <br />
            Your <span className="text-yellow-400 font-serif italic">Brand</span>
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-sm leading-relaxed">
            No Pitch, no pressure. Just an honest conversation about your goals
            and how we can help you{" "}
            <span className="text-white font-bold">stand out</span>.
          </p>

          {/* Feature badges */}
          <div className="flex flex-col gap-3">
            {[
              { title: "Confirmed Within 24Hrs", desc: "We respond to every booking the same business day." },
              { title: "Matched to the Right Expert", desc: "We pair you with the specialist best suited to your project." },
              { title: "Zero Obligation", desc: "The call is free. You decide what happens next." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start p-4 rounded-xl bg-[#06101E] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-yellow-400/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                    <path d="M13 0l2.5 8H24l-6.9 5 2.6 8L13 16l-6.7 5 2.6-8L2 8h8.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-xs">{item.title}</p>
                  <p className="text-white/40 text-[11px] mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#06101E] border border-white/5">
            <div className="flex -space-x-2">
              {["/assets/Rectangle 6346.png", "/assets/Rectangle 6348.png"].map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A1628] overflow-hidden bg-zinc-800">
                  <Image src={src} alt="Client" width={32} height={32} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-[#0A1628] bg-yellow-400/20 flex items-center justify-center">
                <span className="text-[8px] font-black text-yellow-400">+</span>
              </div>
            </div>
            <p className="text-xs text-white/60">
              <span className="text-white font-bold">100+ Brands</span> started exactly this way
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            RIGHT PANEL — step form
        ════════════════════════════════════════════ */}
        <div className="flex-1 bg-[#0A1628] rounded-[2rem] p-8 md:p-10">
          {/* Progress */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-500 rounded-full"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
            <span className="text-white/50 font-black text-sm font-serif shrink-0">
              {step}/{totalSteps}
            </span>
          </div>

          {/* ── Step 1: Your Details ── */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-400">
              <h2 className="text-3xl font-black text-white mb-1">Your Details</h2>
              <p className="text-white/30 text-sm mb-8">
                Let&apos;s start with the basics so we can personalize your call
              </p>
              <hr className="border-white/5 mb-8" />

              <div className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label className="text-xs font-bold text-white/50 block mb-1">First Name</label>
                    <input
                      type="text"
                      className={field}
                      placeholder=""
                      value={form.firstName}
                      onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/50 block mb-1">Last Name</label>
                    <input
                      type="text"
                      className={field}
                      placeholder=""
                      value={form.lastName}
                      onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-white/50 block mb-1">Email Address</label>
                  <input
                    type="email"
                    className={field}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label className="text-xs font-bold text-white/50 block mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      className={field}
                      placeholder=""
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/50 block mb-1">Company/Brand</label>
                    <input
                      type="text"
                      className={field}
                      placeholder=""
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Your Project ── */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-400">
              <h2 className="text-3xl font-black text-white mb-1">Your Project</h2>
              <p className="text-white/30 text-sm mb-8">
                What are you looking to achieve? This helps us prepare for your call
              </p>
              <hr className="border-white/5 mb-8" />

              <div className="space-y-8">
                <div>
                  <label className="text-xs font-bold text-white/50 block mb-4">
                    Services Needed - Pick all that apply
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Brand Management", "Public Relations", "Media Strategy", "Print"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`p-4 rounded-xl border text-xs font-bold text-left transition-all ${
                          form.services.includes(s)
                            ? "border-yellow-400 bg-yellow-400/10 text-yellow-400"
                            : "border-white/10 bg-white/5 text-white/50 hover:border-white/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-white/50 block mb-2">
                    Tell us more (Optional)
                  </label>
                  <textarea
                    className="w-full bg-transparent border border-white/10 rounded-xl p-4 text-white text-sm focus:border-yellow-400 transition-colors outline-none min-h-[130px] placeholder-white/20 resize-none"
                    placeholder="What challenge are you solving? What does success look like?"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 3: Date & Time ── */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-400">
              <h2 className="text-3xl font-black text-white mb-1">Pick a Date &amp; Time</h2>
              <p className="text-white/30 text-sm mb-8">
                Select a date, then tap a time slot to confirm
              </p>
              <hr className="border-white/5 mb-8" />

              <div className="flex flex-col md:flex-row gap-6">
                {/* Calendar */}
                <div className="flex-1 p-5 rounded-2xl bg-[#06101E] border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-white">
                      {MONTHS[calMonth]} {calYear}
                    </span>
                    <div className="flex gap-1">
                      <button type="button" onClick={prevMonth} className="p-1 text-white/40 hover:text-yellow-400 transition-colors">
                        ‹
                      </button>
                      <button type="button" onClick={nextMonth} className="p-1 text-white/40 hover:text-yellow-400 transition-colors">
                        ›
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS.map((d) => (
                      <div key={d} className="text-center text-[9px] font-bold text-white/20">
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells */}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {/* Day cells */}
                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const day = i + 1;
                      const dateStr = `${MONTHS[calMonth]} ${day}, ${calYear}`;
                      const isSelected = form.date === dateStr;
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, date: dateStr }))}
                          className={`aspect-square rounded-lg flex items-center justify-center text-[11px] font-bold transition-all ${
                            isSelected
                              ? "bg-yellow-400 text-black shadow-[0_0_12px_rgba(250,204,21,0.4)]"
                              : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-white/30 mb-4 px-1">
                    <span>{form.date || "Select a date"}</span>
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1 text-blue-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /> 30min
                      </span>
                      <span className="flex items-center gap-1 text-yellow-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" /> 60min
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {["10:00AM", "11:00AM", "11:30AM", "12:00PM", "3:00PM", "4:00PM"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, time: t }))}
                        className={`w-full py-4 rounded-xl border text-xs font-black transition-all outline-none ${
                          form.time === t
                            ? "border-yellow-400 bg-yellow-400/10 text-yellow-400"
                            : "border-white/10 bg-white/5 text-white/50 hover:border-yellow-400/40 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error */}
          {submitError && (
            <p className="mt-4 text-red-400 text-sm">{submitError}</p>
          )}

          {/* Actions */}
          <div className="mt-10 flex gap-3">
            {step > 1 && (
              <button
                onClick={prevStep}
                type="button"
                className="flex-1 py-4 rounded-2xl bg-white/5 text-white font-black text-sm border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            )}
            {step < totalSteps ? (
              <button
                onClick={nextStep}
                type="button"
                className="flex-[2] py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm transition-all flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleConfirm}
                disabled={submitting}
                type="button"
                className="flex-[2] py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-black font-black text-sm transition-all flex items-center justify-center gap-2"
              >
                {submitting ? "Sending…" : "Confirm"}
                {!submitting && <ArrowRight className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          CLIENT STORIES
      ════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto w-full mt-28 px-6">
        <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
          What our clients says
        </span>
        <h2 className="text-5xl font-black text-white tracking-tight mb-14">Client Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {[
            { img: "/assets/Rectangle 6346.png", name: "Clarissa Balogun", role: "College Student" },
            { img: "/assets/Rectangle 6348.png", name: "Clarissa Balogun", role: "College Student" },
          ].map((t, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-white text-black relative overflow-hidden">
              {/* Quote badge */}
              <div className="absolute top-5 right-8 w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-black leading-none font-serif text-white opacity-40">"</span>
              </div>
              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-8 text-zinc-500">
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus umodo
                efficitur neque.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-zinc-100">
                  <Image src={t.img} alt={t.name} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-sm">{t.name}</h4>
                  <p className="text-[11px] uppercase font-bold text-zinc-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
