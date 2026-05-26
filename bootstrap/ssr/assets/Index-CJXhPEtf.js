import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { L as Link_default, H as Head_default, r as router3 } from "../ssr.js";
import { useState } from "react";
import { N as Navbar, F as Footer } from "./Navbar-Do0SfK1j.js";
import "@inertiajs/core";
import "react-dom";
import "lodash-es";
import "laravel-precognition";
import "@inertiajs/core/server";
import "react-dom/server";
const DAYS = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}
function BookACall() {
  const today = /* @__PURE__ */ new Date();
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    message: "",
    date: "",
    time: ""
  });
  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const toggleService = (s) => setForm((f) => ({
    ...f,
    services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s]
  }));
  const handleConfirm = () => {
    setSubmitting(true);
    setSubmitError(null);
    router3.post("/book-a-call", form, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        setSubmitting(false);
        setSubmitted(true);
      },
      onError: (errors) => {
        setSubmitting(false);
        setSubmitError("Please fill all required fields correctly.");
      }
    });
  };
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
  const field = "w-full bg-transparent border-b border-white/10 focus:border-yellow-400 py-3 text-white text-sm outline-none transition-colors placeholder-white/20";
  if (submitted) {
    return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-[#040B18] px-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10", children: /* @__PURE__ */ jsx("span", { className: "text-4xl", children: "🎉" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-black text-white", children: "You're booked!" }),
      /* @__PURE__ */ jsx("p", { className: "mb-10 max-w-sm leading-relaxed text-white/50", children: "We've received your details and will reach out within 24 hours to confirm your free strategy call." }),
      /* @__PURE__ */ jsx(
        Link_default,
        {
          href: "/",
          className: "rounded-xl bg-yellow-400 px-8 py-4 font-black text-black transition-all hover:bg-yellow-500",
          children: "Back to Home"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head_default, { title: "Book a Call" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-[#040B18] pb-20 pt-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-fit flex-col gap-7 rounded-[2rem] bg-[#0A1628] p-8 lg:sticky lg:top-28 lg:w-[38%]", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/Vector(2).svg",
                alt: "phone",
                width: 14,
                height: 14,
                className: "h-3.5 w-3.5 opacity-70 invert"
              }
            ),
            "Free Strategy Call"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-black leading-tight text-white md:text-4xl", children: [
            "Let's Talk About",
            /* @__PURE__ */ jsx("br", {}),
            "Your",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-serif italic text-yellow-400", children: "Brand" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-white/50", children: [
            "No Pitch, no pressure. Just an honest conversation about your goals and how we can help you",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "stand out" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: [
            {
              title: "Confirmed Within 24Hrs",
              desc: "We respond to every booking the same business day."
            },
            {
              title: "Matched to the Right Expert",
              desc: "We pair you with the specialist best suited to your project."
            },
            {
              title: "Zero Obligation",
              desc: "The call is free. You decide what happens next."
            }
          ].map((item) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-start gap-3 rounded-xl border border-white/5 bg-[#06101E] p-4",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: "text-yellow-400",
                    children: /* @__PURE__ */ jsx("path", { d: "M13 0l2.5 8H24l-6.9 5 2.6 8L13 16l-6.7 5 2.6-8L2 8h8.5z" })
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-white", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-[11px] leading-snug text-white/40", children: item.desc })
                ] })
              ]
            },
            item.title
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 rounded-xl border border-white/5 bg-[#06101E] p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex -space-x-2", children: [
              [
                "/assets/Rectangle 6346.png",
                "/assets/Rectangle 6348.png"
              ].map((src, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "h-8 w-8 overflow-hidden rounded-full border-2 border-[#0A1628] bg-zinc-800",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src,
                      alt: "Client",
                      width: 32,
                      height: 32,
                      className: "h-full w-full object-cover"
                    }
                  )
                },
                i
              )),
              /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0A1628] bg-yellow-400/20", children: /* @__PURE__ */ jsx("span", { className: "text-[8px] font-black text-yellow-400", children: "+" }) })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-white/60", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "100+ Brands" }),
              " ",
              "started exactly this way"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 rounded-[2rem] bg-[#0A1628] p-8 md:p-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-10 flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "h-1 flex-1 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-full rounded-full bg-yellow-400 transition-all duration-500",
                style: {
                  width: `${step / totalSteps * 100}%`
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("span", { className: "shrink-0 font-serif text-sm font-black text-white/50", children: [
              step,
              "/",
              totalSteps
            ] })
          ] }),
          step === 1 && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in slide-in-from-right-4 duration-400", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-1 text-3xl font-black text-white", children: "Your Details" }),
            /* @__PURE__ */ jsx("p", { className: "mb-8 text-sm text-white/30", children: "Let's start with the basics so we can personalize your call" }),
            /* @__PURE__ */ jsx("hr", { className: "mb-8 border-white/5" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-7 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-1 block text-xs font-bold text-white/50", children: "First Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: field,
                      placeholder: "",
                      value: form.firstName,
                      onChange: (e) => setForm((f) => ({
                        ...f,
                        firstName: e.target.value
                      }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-1 block text-xs font-bold text-white/50", children: "Last Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: field,
                      placeholder: "",
                      value: form.lastName,
                      onChange: (e) => setForm((f) => ({
                        ...f,
                        lastName: e.target.value
                      }))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-1 block text-xs font-bold text-white/50", children: "Email Address" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    className: field,
                    placeholder: "your@email.com",
                    value: form.email,
                    onChange: (e) => setForm((f) => ({
                      ...f,
                      email: e.target.value
                    }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-7 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-1 block text-xs font-bold text-white/50", children: "Phone (Optional)" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      className: field,
                      placeholder: "",
                      value: form.phone,
                      onChange: (e) => setForm((f) => ({
                        ...f,
                        phone: e.target.value
                      }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-1 block text-xs font-bold text-white/50", children: "Company/Brand" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: field,
                      placeholder: "",
                      value: form.company,
                      onChange: (e) => setForm((f) => ({
                        ...f,
                        company: e.target.value
                      }))
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          step === 2 && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in slide-in-from-right-4 duration-400", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-1 text-3xl font-black text-white", children: "Your Project" }),
            /* @__PURE__ */ jsx("p", { className: "mb-8 text-sm text-white/30", children: "What are you looking to achieve? This helps us prepare for your call" }),
            /* @__PURE__ */ jsx("hr", { className: "mb-8 border-white/5" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-4 block text-xs font-bold text-white/50", children: "Services Needed - Pick all that apply" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                  "Brand Management",
                  "Public Relations",
                  "Media Strategy",
                  "Print"
                ].map((s) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleService(s),
                    className: `rounded-xl border p-4 text-left text-xs font-bold transition-all ${form.services.includes(
                      s
                    ) ? "border-yellow-400 bg-yellow-400/10 text-yellow-400" : "border-white/10 bg-white/5 text-white/50 hover:border-white/30"}`,
                    children: s
                  },
                  s
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold text-white/50", children: "Tell us more (Optional)" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    className: "min-h-[130px] w-full resize-none rounded-xl border border-white/10 bg-transparent p-4 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-yellow-400",
                    placeholder: "What challenge are you solving? What does success look like?",
                    value: form.message,
                    onChange: (e) => setForm((f) => ({
                      ...f,
                      message: e.target.value
                    }))
                  }
                )
              ] })
            ] })
          ] }),
          step === 3 && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in slide-in-from-right-4 duration-400", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-1 text-3xl font-black text-white", children: "Pick a Date & Time" }),
            /* @__PURE__ */ jsx("p", { className: "mb-8 text-sm text-white/30", children: "Select a date, then tap a time slot to confirm" }),
            /* @__PURE__ */ jsx("hr", { className: "mb-8 border-white/5" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 md:flex-row", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 rounded-2xl border border-white/5 bg-[#06101E] p-5", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-white", children: [
                    MONTHS[calMonth],
                    " ",
                    calYear
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: prevMonth,
                        className: "p-1 text-white/40 transition-colors hover:text-yellow-400",
                        children: "‹"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: nextMonth,
                        className: "p-1 text-white/40 transition-colors hover:text-yellow-400",
                        children: "›"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mb-2 grid grid-cols-7 gap-1", children: DAYS.map((d) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "text-center text-[9px] font-bold text-white/20",
                    children: d
                  },
                  d
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-1", children: [
                  Array.from({
                    length: firstDay
                  }).map((_, i) => /* @__PURE__ */ jsx("div", {}, `empty-${i}`)),
                  Array.from(
                    { length: daysInMonth },
                    (_, i) => {
                      const day = i + 1;
                      const dateStr = `${MONTHS[calMonth]} ${day}, ${calYear}`;
                      const isSelected = form.date === dateStr;
                      return /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setForm(
                            (f) => ({
                              ...f,
                              date: dateStr
                            })
                          ),
                          className: `flex aspect-square items-center justify-center rounded-lg text-[11px] font-bold transition-all ${isSelected ? "bg-yellow-400 text-black shadow-[0_0_12px_rgba(250,204,21,0.4)]" : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"}`,
                          children: day
                        },
                        day
                      );
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between px-1 text-[11px] font-bold text-white/30", children: [
                  /* @__PURE__ */ jsx("span", { children: form.date || "Select a date" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-blue-400", children: [
                      /* @__PURE__ */ jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-blue-400" }),
                      " ",
                      "30min"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-yellow-400", children: [
                      /* @__PURE__ */ jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" }),
                      " ",
                      "60min"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: [
                  "10:00AM",
                  "11:00AM",
                  "11:30AM",
                  "12:00PM",
                  "3:00PM",
                  "4:00PM"
                ].map((t) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setForm((f) => ({
                      ...f,
                      time: t
                    })),
                    className: `w-full rounded-xl border py-4 text-xs font-black outline-none transition-all ${form.time === t ? "border-yellow-400 bg-yellow-400/10 text-yellow-400" : "border-white/10 bg-white/5 text-white/50 hover:border-yellow-400/40 hover:text-white"}`,
                    children: t
                  },
                  t
                )) })
              ] })
            ] })
          ] }),
          submitError && /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-red-400", children: submitError }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex gap-3", children: [
            step > 1 && /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: prevStep,
                type: "button",
                className: "flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-black text-white transition-all hover:bg-white/10",
                children: [
                  /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                  " Back"
                ]
              }
            ),
            step < totalSteps ? /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: nextStep,
                type: "button",
                className: "flex flex-[2] items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 text-sm font-black text-black transition-all hover:bg-yellow-500",
                children: [
                  "Continue ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleConfirm,
                disabled: submitting,
                type: "button",
                className: "flex flex-[2] items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 text-sm font-black text-black transition-all hover:bg-yellow-500 disabled:opacity-60",
                children: [
                  submitting ? "Sending…" : "Confirm",
                  !submitting && /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-28 w-full max-w-7xl px-6", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400", children: "What our clients says" }),
        /* @__PURE__ */ jsx("h2", { className: "mb-14 text-5xl font-black tracking-tight text-white", children: "Client Stories" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-7 md:grid-cols-2", children: [
          {
            img: "/assets/Rectangle 6346.png",
            name: "Clarissa Balogun",
            role: "College Student"
          },
          {
            img: "/assets/Rectangle 6348.png",
            name: "Clarissa Balogun",
            role: "College Student"
          }
        ].map((t, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative overflow-hidden rounded-[2.5rem] bg-white p-10 text-black",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute right-8 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700", children: /* @__PURE__ */ jsx("span", { className: "font-serif text-5xl font-black leading-none text-white opacity-40", children: '"' }) }),
              /* @__PURE__ */ jsx("div", { className: "mb-7 flex gap-1", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-xl text-yellow-400",
                  children: "★"
                },
                s
              )) }),
              /* @__PURE__ */ jsx("p", { className: "mb-8 text-sm leading-relaxed text-zinc-500", children: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus umodo efficitur neque." }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-zinc-100", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: t.img,
                    alt: t.name,
                    width: 56,
                    height: 56,
                    className: "h-full w-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-black", children: t.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase text-zinc-400", children: t.role })
                ] })
              ] })
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BookACall as default
};
