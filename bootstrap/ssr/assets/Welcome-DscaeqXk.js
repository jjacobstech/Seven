import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Head_default, L as Link_default } from "../ssr.js";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { N as Navbar, F as Footer } from "./Navbar-Do0SfK1j.js";
import "@inertiajs/core";
import "react";
import "react-dom";
import "lodash-es";
import "laravel-precognition";
import "@inertiajs/core/server";
import "react-dom/server";
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head_default, { title: "Home" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col bg-[#000117]", children: [
      "return (",
      /* @__PURE__ */ jsxs("section", { className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-700/15 blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[120px]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex w-full max-w-5xl flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-4 py-1.5 text-xs font-bold text-yellow-400", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/bulb-icon.svg",
                alt: "",
                width: 12,
                height: 12,
                className: "h-3 w-3"
              }
            ),
            "Your Creation Partner"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mb-3 max-w-2xl font-serif text-base font-normal italic text-white/60 md:text-lg", children: [
            "In a world filled with countless businesses like yours,",
            /* @__PURE__ */ jsx("br", {}),
            "our job is simple; To make yours...."
          ] }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "mb-10 text-[clamp(5rem,15vw,10rem)] font-black leading-none tracking-tighter text-white",
              style: { fontFamily: "var(--font-display)" },
              children: "Stand Out"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mb-16 flex flex-col gap-4 sm:flex-row", children: [
            /* @__PURE__ */ jsxs(
              Link_default,
              {
                href: "/book-a-call",
                className: "flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-base font-black text-black shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all hover:bg-yellow-500",
                children: [
                  "Book a Call ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link_default,
              {
                href: "#services",
                className: "flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10",
                children: [
                  "Our Services ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-2xl", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-8 z-20 hidden max-w-[260px] rounded-2xl border border-white/10 bg-black/50 p-5 text-left backdrop-blur-md md:block", children: /* @__PURE__ */ jsxs("p", { className: "font-serif text-xs italic leading-relaxed text-white/70", children: [
              "Book a",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold not-italic text-yellow-400", children: "FREE" }),
              " ",
              "30-minute consultation call and unlock everything you need to make your brand",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-yellow-400", children: "shine" }),
              "."
            ] }) }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/lightbulbs-hero.png",
                alt: "Glowing lightbulb — Seven Innovative creative agency",
                width: 1e3,
                height: 800,
                className: "w-full object-contain drop-shadow-[0_0_60px_rgba(250,204,21,0.25)]"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "about", className: "bg-[#000117] px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-start gap-20 lg:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("h2", { className: "mb-8 text-5xl font-black tracking-tight text-white md:text-6xl", children: [
            "Who Are",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "We?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-lg space-y-5 text-base leading-relaxed text-white/50", children: [
            /* @__PURE__ */ jsx("p", { children: "Our team consists of design experts, developers, marketers, photographers, filmmakers, and copywriters." }),
            /* @__PURE__ */ jsx("p", { children: "What we do is help you tell your brand story in a way that is not just unique but compelling." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "If you're looking to tell your brand story in a way that makes people stop and listen,",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold italic text-white", children: "we're your guys!" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxs(
            Link_default,
            {
              href: "#team",
              className: "inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-500",
              children: [
                "Meet the Team",
                " ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "pointer-events-none mt-16 select-none opacity-[0.04]", children: [
            /* @__PURE__ */ jsx("span", { className: "block text-7xl font-black uppercase leading-none", children: "Your" }),
            /* @__PURE__ */ jsx("span", { className: "block text-7xl font-black uppercase leading-none", children: "Creative" }),
            /* @__PURE__ */ jsx("span", { className: "block text-7xl font-black uppercase leading-none", children: "Partner" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "group flex items-start gap-5 rounded-2xl border border-white/5 bg-[#0A1628] p-7 transition-all hover:border-yellow-400/20", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 transition-all group-hover:bg-yellow-400", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/solar_layers-bold.svg",
                alt: "Creative",
                width: 22,
                height: 22,
                className: "h-5 w-5 opacity-80 invert group-hover:invert-0"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "mb-2 text-lg font-bold text-white", children: [
                "Creative",
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "." })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-white/40", children: "We are a creative setup that sets out to solve the problem of information and communication with innovative ideas and well-structured creative strategies." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group flex items-start gap-5 rounded-2xl border border-white/5 bg-[#0A1628] p-7 transition-all hover:border-yellow-400/20", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 transition-all group-hover:bg-yellow-400", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/Vector(1).svg",
                alt: "Strategic",
                width: 22,
                height: 22,
                className: "h-5 w-5 opacity-80 invert group-hover:invert-0"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "mb-2 text-lg font-bold text-white", children: [
                "Strategic",
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "." })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-white/40", children: "We offer outside the box solutions to every creative problem your business is struggling with. No cliche or ordinary around here." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group flex items-start gap-5 rounded-2xl border border-white/5 bg-[#0A1628] p-7 transition-all hover:border-yellow-400/20", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 transition-all group-hover:bg-yellow-400", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/Vector(2).svg",
                alt: "Fast",
                width: 22,
                height: 22,
                className: "h-5 w-5 opacity-80 invert group-hover:invert-0"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "mb-2 text-lg font-bold text-white", children: [
                "Fast",
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "." })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-white/40", children: "We understand that there is getting a job done and there is getting a job done on time, we are dedicated to delivering excellence with speed." })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          id: "services",
          className: "relative overflow-hidden px-6 py-28",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute bottom-16 right-0 select-none text-right leading-none opacity-[0.06]", children: [
              /* @__PURE__ */ jsx("p", { className: "font-serif text-[clamp(3rem,8vw,7rem)] font-black uppercase italic", children: "Experience" }),
              /* @__PURE__ */ jsxs("p", { className: "flex items-center justify-end gap-4 font-serif text-[clamp(3rem,8vw,7rem)] font-black uppercase italic", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "✓" }),
                "Perfection"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
                /* @__PURE__ */ jsx("span", { className: "mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400", children: "What we do" }),
                /* @__PURE__ */ jsx("h2", { className: "text-5xl font-black tracking-tight text-white md:text-6xl", children: "Our Services" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "group flex flex-col rounded-2xl border border-white/5 bg-[#0A1628] p-7 transition-all hover:border-yellow-400/20", children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 transition-all group-hover:bg-yellow-400", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/assets/Vector.svg",
                      alt: "Brand Management",
                      width: 22,
                      height: 22,
                      className: "h-5 w-5 opacity-80 invert group-hover:invert-0"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("h3", { className: "mb-2 text-base font-bold text-white", children: [
                    "Brand Management",
                    /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "." })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mb-5 text-xs leading-relaxed text-white/40", children: "Turn your vision into something tangible." }),
                  /* @__PURE__ */ jsx("ul", { className: "flex-1 space-y-2", children: [
                    "Logo & Branding",
                    "Graphics Designs",
                    "UI/UX Design",
                    "Product Branding",
                    "Web Design",
                    "Brand Strategy"
                  ].map((p) => /* @__PURE__ */ jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-[11px] text-white/40 transition-colors group-hover:text-white/60",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "h-1 w-1 shrink-0 rounded-full bg-yellow-400" }),
                        p
                      ]
                    },
                    p
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "group flex flex-col rounded-2xl border border-white/5 bg-[#0A1628] p-7 transition-all hover:border-yellow-400/20", children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 transition-all group-hover:bg-yellow-400", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/assets/mdi_loudspeaker.svg",
                      alt: "Public Relations",
                      width: 22,
                      height: 22,
                      className: "h-5 w-5 opacity-80 invert group-hover:invert-0"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("h3", { className: "mb-2 text-base font-bold text-white", children: [
                    "Public Relations",
                    /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "." })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mb-5 text-xs leading-relaxed text-white/40", children: "Let us help your business thrive." }),
                  /* @__PURE__ */ jsx("ul", { className: "flex-1 space-y-2", children: [
                    "Social Media Marketing",
                    "Campaign Management",
                    "Content Creation and Marketing",
                    "Email Marketing",
                    "Digital Ads",
                    "Content Writing"
                  ].map((p) => /* @__PURE__ */ jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-[11px] text-white/40 transition-colors group-hover:text-white/60",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "h-1 w-1 shrink-0 rounded-full bg-yellow-400" }),
                        p
                      ]
                    },
                    p
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "group flex flex-col rounded-2xl border border-white/5 bg-[#0A1628] p-7 transition-all hover:border-yellow-400/20", children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 transition-all group-hover:bg-yellow-400", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/assets/Vector(3).svg",
                      alt: "Media",
                      width: 22,
                      height: 22,
                      className: "h-5 w-5 opacity-80 invert group-hover:invert-0"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("h3", { className: "mb-2 text-base font-bold text-white", children: [
                    "Media",
                    /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "." })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mb-5 text-xs leading-relaxed text-white/40", children: "Allow us to present your brand in a way that hooks." }),
                  /* @__PURE__ */ jsx("ul", { className: "flex-1 space-y-2", children: [
                    "Cinematography",
                    "Photography",
                    "Stage Light Production",
                    "Video Editing",
                    "Events"
                  ].map((p) => /* @__PURE__ */ jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-[11px] text-white/40 transition-colors group-hover:text-white/60",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "h-1 w-1 shrink-0 rounded-full bg-yellow-400" }),
                        p
                      ]
                    },
                    p
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "group flex flex-col rounded-2xl border border-white/5 bg-[#0A1628] p-7 transition-all hover:border-yellow-400/20", children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 transition-all group-hover:bg-yellow-400", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/assets/mdi_printer.svg",
                      alt: "Print",
                      width: 22,
                      height: 22,
                      className: "h-5 w-5 opacity-80 invert group-hover:invert-0"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("h3", { className: "mb-2 text-base font-bold text-white", children: [
                    "Print",
                    /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "." })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mb-5 text-xs leading-relaxed text-white/40", children: "Book a free 30 minute consultation." }),
                  /* @__PURE__ */ jsx("ul", { className: "flex-1 space-y-2", children: [
                    "Book Publishing",
                    "Magazines",
                    "Brochures",
                    "Packaging",
                    "Cloth Branding",
                    "Banners and Stickers",
                    "Signage"
                  ].map((p) => /* @__PURE__ */ jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-[11px] text-white/40 transition-colors group-hover:text-white/60",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "h-1 w-1 shrink-0 rounded-full bg-yellow-400" }),
                        p
                      ]
                    },
                    p
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center justify-between gap-6 md:flex-row", children: [
                /* @__PURE__ */ jsxs("p", { className: "max-w-lg text-sm leading-relaxed text-white/40", children: [
                  "Turn your vision into something tangible and help you discover amazing things to bring your",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-bold italic text-white", children: "brand to its ideal audience." }),
                  " ",
                  "Find out how we can make you",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-yellow-400", children: "stand out" }),
                  "."
                ] }),
                /* @__PURE__ */ jsx(
                  Link_default,
                  {
                    href: "/book-a-call",
                    className: "flex items-center gap-2 whitespace-nowrap rounded-xl bg-yellow-400 px-7 py-4 text-sm font-black text-black transition-all hover:bg-yellow-500",
                    children: "Book a Call ↗"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "bg-[#000117] px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "mb-16 text-5xl font-black tracking-tight text-white", children: [
          "Why ",
          /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "Choose" }),
          " ",
          "Us?"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          {
            num: "01",
            title: "Draw in Customers",
            desc: "Increase website traffic and employ tried-and-true techniques to turn visitors into qualified leads and happy customers."
          },
          {
            num: "02",
            title: "Engage Potential Clients",
            desc: "Use webinars, email marketing campaigns, and interactive, high-performance content to engage your contacts and visitors."
          },
          {
            num: "03",
            title: "Convert Clients",
            desc: "Use advanced marketing predictive analytics to score and convert the appropriate prospects at the right moment."
          },
          {
            num: "04",
            title: "Contain Clients",
            desc: "To keep your customers satisfied, you must use more than your product. Engage your customers through various other channels."
          }
        ].map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group rounded-3xl border border-white/5 bg-[#0A1628] p-10 transition-all hover:border-yellow-400/20",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mb-5 block font-serif text-5xl font-black text-yellow-400", children: item.num }),
              /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold text-white", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-white/40", children: item.desc })
            ]
          },
          item.num
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { id: "process", className: "px-6 py-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-16 max-w-7xl text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400", children: "How we do it" }),
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-5xl font-black tracking-tight text-white", children: "Our Process" }),
          /* @__PURE__ */ jsxs("p", { className: "mx-auto max-w-xl text-sm leading-relaxed text-white/40", children: [
            "In Seven Innovative, we do not just focus on getting a perfect result, we are also very invested in the",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "process and experience" }),
            " ",
            "while getting your work done."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl space-y-10", children: [
          [
            {
              num: "01",
              title: "Detail-Driven Briefing System",
              desc: "We understand that client's briefs are the most important factors to getting an excellent job done, so we designed a system that helps clients express their desires and expectations to the best, before the work commences and during the work process."
            },
            {
              num: "02",
              title: "Workflow Report System",
              desc: "We designed a simple and effective communication and followup system through a design board to keep everything in one place and help you track our progress and mitigate errors. No need for meetings about meetings."
            },
            {
              num: "03",
              title: "Third-Party review System",
              desc: "They say 'two heads are better than one'... well, we like to make it three. We designed a review system were we involve you alongside an experienced professional to scrutinize sample of the job before final delivery."
            }
          ].map((item, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-start gap-8",
              children: [
                /* @__PURE__ */ jsx("span", { className: "mt-1 shrink-0 font-serif text-5xl font-black leading-none text-yellow-400/25", children: String(idx + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `flex-1 pb-10 ${idx < 2 ? "border-b border-white/5" : ""}`,
                    children: [
                      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-lg font-bold text-white", children: item.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-white/40", children: item.desc })
                    ]
                  }
                )
              ]
            },
            item.num
          )),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-6", children: /* @__PURE__ */ jsxs(
            Link_default,
            {
              href: "/book-a-call",
              className: "flex items-center gap-2 rounded-xl bg-yellow-400 px-10 py-4 font-black text-black transition-all hover:bg-yellow-500",
              children: [
                "Get Started ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "portfolio", className: "bg-[#000117] px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14 flex items-end justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-5xl font-black tracking-tight text-white md:text-6xl", children: "A glimpse of perfection" }),
          /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-black",
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "rounded-full bg-yellow-400 p-3 text-black transition-all hover:bg-yellow-500",
                children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-white/5 bg-[#0A1628]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/Frame 33366.png",
              alt: "Portfolio project",
              width: 600,
              height: 450,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-white/5 bg-[#0A1628]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/Frame 33366(1).png",
              alt: "Portfolio project",
              width: 600,
              height: 450,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-white/5 bg-[#0A1628]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/Frame 33368.png",
              alt: "Portfolio project",
              width: 600,
              height: 450,
              className: "h-full w-full object-cover"
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "testimonials", className: "px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
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
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "plans", className: "bg-[#000117] px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-20 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400", children: "Our Services Plan" }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-5xl font-black uppercase tracking-tight text-white md:text-6xl", children: "Choose Your Plan" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4", children: [
          {
            title: "Basic",
            desc: "Essential Branding & Design",
            featured: false,
            efficient: false
          },
          {
            title: "Standard",
            desc: "Comprehensive Branding & Strategy",
            featured: true,
            efficient: false
          },
          {
            title: "Premium",
            desc: "Brand + Website + Social",
            featured: false,
            efficient: false
          },
          {
            title: "Executive",
            desc: "High-End & Scalable",
            featured: false,
            efficient: true
          }
        ].map((plan) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `relative flex flex-col rounded-3xl border bg-[#0A1628] p-8 ${plan.featured ? "border-yellow-400" : "border-white/5"}`,
            children: [
              plan.featured && /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-yellow-400 px-4 py-1 text-[10px] font-black uppercase text-black", children: "Most Popular" }),
              plan.efficient && /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1 text-[10px] font-black uppercase text-white", children: "Most Efficient" }),
              /* @__PURE__ */ jsx("h3", { className: "mb-1.5 text-2xl font-black text-white", children: plan.title }),
              /* @__PURE__ */ jsx("p", { className: "mb-8 text-xs text-white/30", children: plan.desc }),
              /* @__PURE__ */ jsx("ul", { className: "mb-10 flex-1 space-y-3", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-[11px] leading-snug text-white/40",
                  children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      "Everything in the",
                      " ",
                      plan.title,
                      " Package plus advanced benefits."
                    ] })
                  ]
                },
                i
              )) }),
              /* @__PURE__ */ jsx(
                Link_default,
                {
                  href: "/book-a-call",
                  className: `w-full rounded-xl py-3.5 text-center text-sm font-bold transition-all ${plan.featured ? "bg-yellow-400 text-black hover:bg-yellow-500" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
                  children: "Get Started →"
                }
              )
            ]
          },
          plan.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 py-28", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl overflow-hidden rounded-[4rem] border border-yellow-400/10 bg-[#0A1628] p-20 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[80px]" }),
        /* @__PURE__ */ jsx("span", { className: "relative z-10 mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400", children: "Ready to Begin?" }),
        /* @__PURE__ */ jsxs("h2", { className: "relative z-10 mb-6 text-5xl font-black tracking-tight text-white md:text-6xl", children: [
          "Let's Make You ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "Stand Out" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "relative z-10 mx-auto mb-12 max-w-md text-base leading-relaxed text-white/50", children: "Book a free strategy call and discover exactly how we'll help your brand grow, connect, and convert." }),
        /* @__PURE__ */ jsxs(
          Link_default,
          {
            href: "/book-a-call",
            className: "relative z-10 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-12 py-5 text-lg font-black text-black shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all hover:bg-yellow-500",
            children: [
              "Book a Call ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as default
};
