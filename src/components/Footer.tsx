import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Explore: [
      { name: "About Us", href: "#about" },
      { name: "Meet the Team", href: "#team" },
      { name: "Why Us", href: "#why-us" },
      { name: "Our Process", href: "#process" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Portfolio", href: "#portfolio" },
    ],
    Services: [
      { name: "Brand Management", href: "#brand" },
      { name: "Public Relations", href: "#pr" },
      { name: "Media", href: "#media" },
      { name: "Print", href: "#print" },
    ],
  };

  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: "/assets/line-md_instagram.svg",
      label: "Instagram",
    },
    {
      href: "https://x.com",
      icon: "/assets/ri_twitter-x-fill.svg",
      label: "X (Twitter)",
    },
    {
      href: "https://linkedin.com",
      icon: "/assets/la_linkedin.svg",
      label: "LinkedIn",
    },
    {
      href: "https://behance.net",
      icon: "/assets/iconoir_behance-tag.svg",
      label: "Behance",
    },
    {
      href: "https://youtube.com",
      icon: "/assets/mingcute_youtube-line.svg",
      label: "YouTube",
    },
    {
      href: "https://tiktok.com",
      icon: "/assets/streamline-flex_tiktok.svg",
      label: "TikTok",
    },
  ];

  return (
    <footer className="bg-[#040B18] text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Seven 1 1.png"
              alt="Seven Innovative"
              width={130}
              height={44}
              className="h-11 w-auto object-contain"
            />
          </Link>
          <p className="text-white/50 leading-relaxed max-w-xs text-sm">
            A full service creative and communications agency helping businesses
            cut through the noise and make a lasting mark.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 flex-wrap">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-yellow-400/20 transition-all"
              >
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={16}
                  height={16}
                  className="w-4 h-4 invert opacity-70 hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="flex flex-col gap-6">
            <h4 className="text-sm font-bold text-white">{title}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Get in Touch */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold text-white">Get in Touch</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <Image
                src="/assets/Vector(1).svg"
                alt="Email"
                width={16}
                height={16}
                className="w-4 h-4 invert opacity-60 shrink-0"
              />
              <a
                href="mailto:Createwithseven@gmail.com"
                className="hover:text-white transition-colors"
              >
                Createwithseven@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <Image
                src="/assets/Vector(2).svg"
                alt="Phone"
                width={16}
                height={16}
                className="w-4 h-4 invert opacity-60 shrink-0"
              />
              <a
                href="tel:09009090909"
                className="hover:text-white transition-colors"
              >
                09009090909
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <Image
                src="/assets/Vector(3).svg"
                alt="Location"
                width={16}
                height={16}
                className="w-4 h-4 invert opacity-60 shrink-0"
              />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-2 text-white/30 text-xs">
        <div className="flex items-center gap-1.5">
          <Image
            src="/assets/mynaui_copyright.svg"
            alt="Copyright"
            width={12}
            height={12}
            className="w-3 h-3 invert opacity-40"
          />
          <span>{currentYear} Seven Innovative. All right reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
