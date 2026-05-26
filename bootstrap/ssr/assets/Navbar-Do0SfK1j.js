import { jsxs, jsx } from "react/jsx-runtime";
import { L as Link_default } from "../ssr.js";
import { ArrowUpRight, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    Explore: [
      { name: "About Us", href: "#about" },
      { name: "Meet the Team", href: "#team" },
      { name: "Why Us", href: "#why-us" },
      { name: "Our Process", href: "#process" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Portfolio", href: "#portfolio" }
    ],
    Services: [
      { name: "Brand Management", href: "#brand" },
      { name: "Public Relations", href: "#pr" },
      { name: "Media", href: "#media" },
      { name: "Print", href: "#print" }
    ]
  };
  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: "/assets/line-md_instagram.svg",
      label: "Instagram"
    },
    {
      href: "https://x.com",
      icon: "/assets/ri_twitter-x-fill.svg",
      label: "X (Twitter)"
    },
    {
      href: "https://linkedin.com",
      icon: "/assets/la_linkedin.svg",
      label: "LinkedIn"
    },
    {
      href: "https://behance.net",
      icon: "/assets/iconoir_behance-tag.svg",
      label: "Behance"
    },
    {
      href: "https://youtube.com",
      icon: "/assets/mingcute_youtube-line.svg",
      label: "YouTube"
    },
    {
      href: "https://tiktok.com",
      icon: "/assets/streamline-flex_tiktok.svg",
      label: "TikTok"
    }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-white/5 bg-[#040B18] px-6 py-16 text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 text-sm md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx(Link_default, { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/Seven 1 1.png",
            alt: "Seven Innovative",
            width: 130,
            height: 44,
            className: "h-11 w-auto object-contain"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "max-w-xs text-sm leading-relaxed text-white/50", children: "A full service creative and communications agency helping businesses cut through the noise and make a lasting mark." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-3", children: socialLinks.map((s) => /* @__PURE__ */ jsx(
          "a",
          {
            href: s.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": s.label,
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-yellow-400/20",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: s.icon,
                alt: s.label,
                width: 16,
                height: 16,
                className: "h-4 w-4 opacity-70 invert hover:opacity-100"
              }
            )
          },
          s.label
        )) })
      ] }),
      Object.entries(footerLinks).map(([title, links]) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-white", children: title }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-3", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: "text-sm text-white/50 transition-colors hover:text-white",
            children: link.name
          }
        ) }, link.name)) })
      ] }, title)),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-white", children: "Get in Touch" }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-white/50", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/Vector(1).svg",
                alt: "Email",
                width: 16,
                height: 16,
                className: "h-4 w-4 shrink-0 opacity-60 invert"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:Createwithseven@gmail.com",
                className: "transition-colors hover:text-white",
                children: "Createwithseven@gmail.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-white/50", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/Vector(2).svg",
                alt: "Phone",
                width: 16,
                height: 16,
                className: "h-4 w-4 shrink-0 opacity-60 invert"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:09009090909",
                className: "transition-colors hover:text-white",
                children: "09009090909"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-white/50", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/Vector(3).svg",
                alt: "Location",
                width: 16,
                height: 16,
                className: "h-4 w-4 shrink-0 opacity-60 invert"
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Lagos, Nigeria" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-16 flex max-w-7xl flex-col items-center justify-center gap-2 border-t border-white/5 pt-8 text-xs text-white/30 md:flex-row", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/mynaui_copyright.svg",
          alt: "Copyright",
          width: 12,
          height: 12,
          className: "h-3 w-3 opacity-40 invert"
        }
      ),
      /* @__PURE__ */ jsxs("span", { children: [
        currentYear,
        " Seven Innovative. All right reserved."
      ] })
    ] }) })
  ] });
};
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Plans", href: "#plans" }
  ];
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? "border-b border-white/10 bg-[#000117]/80 py-3 backdrop-blur-md" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between md:justify-center", children: [
          /* @__PURE__ */ jsx(Link_default, { href: "/", className: "flex items-center md:hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/Seven 1 1.png",
              alt: "Seven Innovative",
              width: 120,
              height: 40,
              className: "h-10 w-auto object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-2.5 backdrop-blur-sm md:flex", children: [
            /* @__PURE__ */ jsx(Link_default, { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/Seven 1 1.png",
                alt: "Seven Innovative",
                width: 120,
                height: 40,
                className: "h-10 w-auto object-contain"
              }
            ) }),
            navLinks.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: "text-sm font-medium text-white/80 transition-colors hover:text-white",
                children: link.name
              },
              link.name
            )),
            /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs(
              Link_default,
              {
                href: "/book-a-call",
                className: "group flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-500",
                children: [
                  "Get Started",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "text-white md:hidden",
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
            }
          )
        ] }),
        isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "bg-[#040B18]/98 animate-in fade-in slide-in-from-top-4 fixed inset-0 top-[70px] z-40 flex flex-col gap-6 border-t border-white/10 p-8 backdrop-blur-xl md:hidden", children: [
          navLinks.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              className: "text-2xl font-bold text-white",
              onClick: () => setIsMobileMenuOpen(false),
              children: link.name
            },
            link.name
          )),
          /* @__PURE__ */ jsxs(
            Link_default,
            {
              href: "/book-a-call",
              className: "flex items-center justify-center gap-2 rounded-xl bg-yellow-400 p-4 text-lg font-bold text-black",
              onClick: () => setIsMobileMenuOpen(false),
              children: [
                "Get Started",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5" })
              ]
            }
          )
        ] })
      ]
    }
  );
};
export {
  Footer as F,
  Navbar as N
};
