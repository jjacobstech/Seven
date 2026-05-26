import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

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
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        message: '',
        date: '',
        time: '',
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

    const handleConfirm = () => {
        setSubmitting(true);
        setSubmitError(null);
        router.post('/book-a-call', form as any, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setSubmitting(false);
                setSubmitted(true);
            },
            onError: (errors) => {
                setSubmitting(false);
                setSubmitError('Please fill all required fields correctly.');
            },
        });
    };

    /* calendar */
    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfMonth(calYear, calMonth);

    const prevMonth = () => {
        if (calMonth === 0) {
            setCalMonth(11);
            setCalYear((y) => y - 1);
        } else setCalMonth((m) => m - 1);
    };
    const nextMonth = () => {
        if (calMonth === 11) {
            setCalMonth(0);
            setCalYear((y) => y + 1);
        } else setCalMonth((m) => m + 1);
    };

    /* ── field helpers ── */
    const field =
        'w-full bg-transparent border-b border-white/10 focus:border-yellow-400 py-3 text-white text-sm outline-none transition-colors placeholder-white/20';

    /* ── Success screen ─────────────────────────────────────────────── */
    if (submitted) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#040B18] px-6 text-center">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10">
                    <span className="text-4xl">🎉</span>
                </div>
                <h1 className="mb-4 text-4xl font-black text-white">
                    You&apos;re booked!
                </h1>
                <p className="mb-10 max-w-sm leading-relaxed text-white/50">
                    We&apos;ve received your details and will reach out within
                    24 hours to confirm your free strategy call.
                </p>
                <Link
                    href="/"
                    className="rounded-xl bg-yellow-400 px-8 py-4 font-black text-black transition-all hover:bg-yellow-500"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <>
            <Head title="Book a Call" />
            <Navbar />
            <div className="flex min-h-screen flex-col bg-[#040B18] pb-20 pt-24">
                {/* ── Main two-panel layout ── */}
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row">
                    {/* ════════════════════════════════════════════
            LEFT PANEL — info
        ════════════════════════════════════════════ */}
                    <div className="flex h-fit flex-col gap-7 rounded-[2rem] bg-[#0A1628] p-8 lg:sticky lg:top-28 lg:w-[38%]">
                        {/* Badge */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white">
                            <img
                                src="/assets/Vector(2).svg"
                                alt="phone"
                                width={14}
                                height={14}
                                className="h-3.5 w-3.5 opacity-70 invert"
                            />
                            Free Strategy Call
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">
                            Let&apos;s Talk About
                            <br />
                            Your{' '}
                            <span className="font-serif italic text-yellow-400">
                                Brand
                            </span>
                        </h1>

                        {/* Sub */}
                        <p className="text-sm leading-relaxed text-white/50">
                            No Pitch, no pressure. Just an honest conversation
                            about your goals and how we can help you{' '}
                            <span className="font-bold text-white">
                                stand out
                            </span>
                            .
                        </p>

                        {/* Feature badges */}
                        <div className="flex flex-col gap-3">
                            {[
                                {
                                    title: 'Confirmed Within 24Hrs',
                                    desc: 'We respond to every booking the same business day.',
                                },
                                {
                                    title: 'Matched to the Right Expert',
                                    desc: 'We pair you with the specialist best suited to your project.',
                                },
                                {
                                    title: 'Zero Obligation',
                                    desc: 'The call is free. You decide what happens next.',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#06101E] p-4"
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-yellow-400"
                                        >
                                            <path d="M13 0l2.5 8H24l-6.9 5 2.6 8L13 16l-6.7 5 2.6-8L2 8h8.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">
                                            {item.title}
                                        </p>
                                        <p className="mt-0.5 text-[11px] leading-snug text-white/40">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#06101E] p-4">
                            <div className="flex -space-x-2">
                                {[
                                    '/assets/Rectangle 6346.png',
                                    '/assets/Rectangle 6348.png',
                                ].map((src, i) => (
                                    <div
                                        key={i}
                                        className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#0A1628] bg-zinc-800"
                                    >
                                        <img
                                            src={src}
                                            alt="Client"
                                            width={32}
                                            height={32}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0A1628] bg-yellow-400/20">
                                    <span className="text-[8px] font-black text-yellow-400">
                                        +
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs text-white/60">
                                <span className="font-bold text-white">
                                    100+ Brands
                                </span>{' '}
                                started exactly this way
                            </p>
                        </div>
                    </div>

                    {/* ════════════════════════════════════════════
            RIGHT PANEL — step form
        ════════════════════════════════════════════ */}
                    <div className="flex-1 rounded-[2rem] bg-[#0A1628] p-8 md:p-10">
                        {/* Progress */}
                        <div className="mb-10 flex items-center gap-4">
                            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/5">
                                <div
                                    className="h-full rounded-full bg-yellow-400 transition-all duration-500"
                                    style={{
                                        width: `${(step / totalSteps) * 100}%`,
                                    }}
                                />
                            </div>
                            <span className="shrink-0 font-serif text-sm font-black text-white/50">
                                {step}/{totalSteps}
                            </span>
                        </div>

                        {/* ── Step 1: Your Details ── */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-400">
                                <h2 className="mb-1 text-3xl font-black text-white">
                                    Your Details
                                </h2>
                                <p className="mb-8 text-sm text-white/30">
                                    Let&apos;s start with the basics so we can
                                    personalize your call
                                </p>
                                <hr className="mb-8 border-white/5" />

                                <div className="space-y-7">
                                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                                        <div>
                                            <label className="mb-1 block text-xs font-bold text-white/50">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className={field}
                                                placeholder=""
                                                value={form.firstName}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        firstName:
                                                            e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs font-bold text-white/50">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className={field}
                                                placeholder=""
                                                value={form.lastName}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        lastName:
                                                            e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-xs font-bold text-white/50">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className={field}
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm((f) => ({
                                                    ...f,
                                                    email: e.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                                        <div>
                                            <label className="mb-1 block text-xs font-bold text-white/50">
                                                Phone (Optional)
                                            </label>
                                            <input
                                                type="tel"
                                                className={field}
                                                placeholder=""
                                                value={form.phone}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        phone: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs font-bold text-white/50">
                                                Company/Brand
                                            </label>
                                            <input
                                                type="text"
                                                className={field}
                                                placeholder=""
                                                value={form.company}
                                                onChange={(e) =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        company: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Step 2: Your Project ── */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-400">
                                <h2 className="mb-1 text-3xl font-black text-white">
                                    Your Project
                                </h2>
                                <p className="mb-8 text-sm text-white/30">
                                    What are you looking to achieve? This helps
                                    us prepare for your call
                                </p>
                                <hr className="mb-8 border-white/5" />

                                <div className="space-y-8">
                                    <div>
                                        <label className="mb-4 block text-xs font-bold text-white/50">
                                            Services Needed - Pick all that
                                            apply
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                'Brand Management',
                                                'Public Relations',
                                                'Media Strategy',
                                                'Print',
                                            ].map((s) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() =>
                                                        toggleService(s)
                                                    }
                                                    className={`rounded-xl border p-4 text-left text-xs font-bold transition-all ${
                                                        form.services.includes(
                                                            s,
                                                        )
                                                            ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                                                            : 'border-white/10 bg-white/5 text-white/50 hover:border-white/30'
                                                    }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-bold text-white/50">
                                            Tell us more (Optional)
                                        </label>
                                        <textarea
                                            className="min-h-[130px] w-full resize-none rounded-xl border border-white/10 bg-transparent p-4 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-yellow-400"
                                            placeholder="What challenge are you solving? What does success look like?"
                                            value={form.message}
                                            onChange={(e) =>
                                                setForm((f) => ({
                                                    ...f,
                                                    message: e.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Step 3: Date & Time ── */}
                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-400">
                                <h2 className="mb-1 text-3xl font-black text-white">
                                    Pick a Date &amp; Time
                                </h2>
                                <p className="mb-8 text-sm text-white/30">
                                    Select a date, then tap a time slot to
                                    confirm
                                </p>
                                <hr className="mb-8 border-white/5" />

                                <div className="flex flex-col gap-6 md:flex-row">
                                    {/* Calendar */}
                                    <div className="flex-1 rounded-2xl border border-white/5 bg-[#06101E] p-5">
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="text-sm font-bold text-white">
                                                {MONTHS[calMonth]} {calYear}
                                            </span>
                                            <div className="flex gap-1">
                                                <button
                                                    type="button"
                                                    onClick={prevMonth}
                                                    className="p-1 text-white/40 transition-colors hover:text-yellow-400"
                                                >
                                                    ‹
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={nextMonth}
                                                    className="p-1 text-white/40 transition-colors hover:text-yellow-400"
                                                >
                                                    ›
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mb-2 grid grid-cols-7 gap-1">
                                            {DAYS.map((d) => (
                                                <div
                                                    key={d}
                                                    className="text-center text-[9px] font-bold text-white/20"
                                                >
                                                    {d}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">
                                            {/* Empty cells */}
                                            {Array.from({
                                                length: firstDay,
                                            }).map((_, i) => (
                                                <div key={`empty-${i}`} />
                                            ))}
                                            {/* Day cells */}
                                            {Array.from(
                                                { length: daysInMonth },
                                                (_, i) => {
                                                    const day = i + 1;
                                                    const dateStr = `${MONTHS[calMonth]} ${day}, ${calYear}`;
                                                    const isSelected =
                                                        form.date === dateStr;
                                                    return (
                                                        <button
                                                            key={day}
                                                            type="button"
                                                            onClick={() =>
                                                                setForm(
                                                                    (f) => ({
                                                                        ...f,
                                                                        date: dateStr,
                                                                    }),
                                                                )
                                                            }
                                                            className={`flex aspect-square items-center justify-center rounded-lg text-[11px] font-bold transition-all ${
                                                                isSelected
                                                                    ? 'bg-yellow-400 text-black shadow-[0_0_12px_rgba(250,204,21,0.4)]'
                                                                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                                                            }`}
                                                        >
                                                            {day}
                                                        </button>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>

                                    {/* Time Slots */}
                                    <div className="flex-1">
                                        <div className="mb-4 flex items-center justify-between px-1 text-[11px] font-bold text-white/30">
                                            <span>
                                                {form.date || 'Select a date'}
                                            </span>
                                            <div className="flex gap-3">
                                                <span className="flex items-center gap-1 text-blue-400">
                                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />{' '}
                                                    30min
                                                </span>
                                                <span className="flex items-center gap-1 text-yellow-400">
                                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />{' '}
                                                    60min
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            {[
                                                '10:00AM',
                                                '11:00AM',
                                                '11:30AM',
                                                '12:00PM',
                                                '3:00PM',
                                                '4:00PM',
                                            ].map((t) => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() =>
                                                        setForm((f) => ({
                                                            ...f,
                                                            time: t,
                                                        }))
                                                    }
                                                    className={`w-full rounded-xl border py-4 text-xs font-black outline-none transition-all ${
                                                        form.time === t
                                                            ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                                                            : 'border-white/10 bg-white/5 text-white/50 hover:border-yellow-400/40 hover:text-white'
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
                            <p className="mt-4 text-sm text-red-400">
                                {submitError}
                            </p>
                        )}

                        {/* Actions */}
                        <div className="mt-10 flex gap-3">
                            {step > 1 && (
                                <button
                                    onClick={prevStep}
                                    type="button"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-black text-white transition-all hover:bg-white/10"
                                >
                                    <ArrowLeft className="h-4 w-4" /> Back
                                </button>
                            )}
                            {step < totalSteps ? (
                                <button
                                    onClick={nextStep}
                                    type="button"
                                    className="flex flex-[2] items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 text-sm font-black text-black transition-all hover:bg-yellow-500"
                                >
                                    Continue <ArrowRight className="h-4 w-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleConfirm}
                                    disabled={submitting}
                                    type="button"
                                    className="flex flex-[2] items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 text-sm font-black text-black transition-all hover:bg-yellow-500 disabled:opacity-60"
                                >
                                    {submitting ? 'Sending…' : 'Confirm'}
                                    {!submitting && (
                                        <ArrowRight className="h-4 w-4" />
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* ════════════════════════════════════════════
          CLIENT STORIES
      ════════════════════════════════════════════ */}
                <div className="mx-auto mt-28 w-full max-w-7xl px-6">
                    <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                        What our clients says
                    </span>
                    <h2 className="mb-14 text-5xl font-black tracking-tight text-white">
                        Client Stories
                    </h2>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                        {[
                            {
                                img: '/assets/Rectangle 6346.png',
                                name: 'Clarissa Balogun',
                                role: 'College Student',
                            },
                            {
                                img: '/assets/Rectangle 6348.png',
                                name: 'Clarissa Balogun',
                                role: 'College Student',
                            },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="relative overflow-hidden rounded-[2.5rem] bg-white p-10 text-black"
                            >
                                {/* Quote badge */}
                                <div className="absolute right-8 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700">
                                    <span className="font-serif text-5xl font-black leading-none text-white opacity-40">
                                        "
                                    </span>
                                </div>
                                {/* Stars */}
                                <div className="mb-7 flex gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <span
                                            key={s}
                                            className="text-xl text-yellow-400"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="mb-8 text-sm leading-relaxed text-zinc-500">
                                    Worem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc vulputate libero et
                                    velit interdum, ac aliquet odio mattis.
                                    Class aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per inceptos
                                    himenaeos. Curabitur tempus umodo efficitur
                                    neque.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-zinc-100">
                                        <img
                                            src={t.img}
                                            alt={t.name}
                                            width={56}
                                            height={56}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black">
                                            {t.name}
                                        </h4>
                                        <p className="text-[11px] font-bold uppercase text-zinc-400">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
