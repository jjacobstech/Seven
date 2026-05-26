import { Link } from '@inertiajs/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Explore: [
            { name: 'About Us', href: '#about' },
            { name: 'Meet the Team', href: '#team' },
            { name: 'Why Us', href: '#why-us' },
            { name: 'Our Process', href: '#process' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'Portfolio', href: '#portfolio' },
        ],
        Services: [
            { name: 'Brand Management', href: '#brand' },
            { name: 'Public Relations', href: '#pr' },
            { name: 'Media', href: '#media' },
            { name: 'Print', href: '#print' },
        ],
    };

    const socialLinks = [
        {
            href: 'https://instagram.com',
            icon: '/assets/line-md_instagram.svg',
            label: 'Instagram',
        },
        {
            href: 'https://x.com',
            icon: '/assets/ri_twitter-x-fill.svg',
            label: 'X (Twitter)',
        },
        {
            href: 'https://linkedin.com',
            icon: '/assets/la_linkedin.svg',
            label: 'LinkedIn',
        },
        {
            href: 'https://behance.net',
            icon: '/assets/iconoir_behance-tag.svg',
            label: 'Behance',
        },
        {
            href: 'https://youtube.com',
            icon: '/assets/mingcute_youtube-line.svg',
            label: 'YouTube',
        },
        {
            href: 'https://tiktok.com',
            icon: '/assets/streamline-flex_tiktok.svg',
            label: 'TikTok',
        },
    ];

    return (
        <footer className="border-t border-white/5 bg-[#040B18] px-6 py-16 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 text-sm md:grid-cols-2 lg:grid-cols-4">
                {/* Brand Section */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/assets/Seven 1 1.png"
                            alt="Seven Innovative"
                            width={130}
                            height={44}
                            className="h-11 w-auto object-contain"
                        />
                    </Link>
                    <p className="max-w-xs text-sm leading-relaxed text-white/50">
                        A full service creative and communications agency
                        helping businesses cut through the noise and make a
                        lasting mark.
                    </p>
                    {/* Social Icons */}
                    <div className="flex flex-wrap items-center gap-3">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-yellow-400/20"
                            >
                                <img
                                    src={s.icon}
                                    alt={s.label}
                                    width={16}
                                    height={16}
                                    className="h-4 w-4 opacity-70 invert hover:opacity-100"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Sections */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title} className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold text-white">
                            {title}
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/50 transition-colors hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Get in Touch */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-sm font-bold text-white">
                        Get in Touch
                    </h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3 text-sm text-white/50">
                            <img
                                src="/assets/Vector(1).svg"
                                alt="Email"
                                width={16}
                                height={16}
                                className="h-4 w-4 shrink-0 opacity-60 invert"
                            />
                            <a
                                href="mailto:Createwithseven@gmail.com"
                                className="transition-colors hover:text-white"
                            >
                                Createwithseven@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white/50">
                            <img
                                src="/assets/Vector(2).svg"
                                alt="Phone"
                                width={16}
                                height={16}
                                className="h-4 w-4 shrink-0 opacity-60 invert"
                            />
                            <a
                                href="tel:09009090909"
                                className="transition-colors hover:text-white"
                            >
                                09009090909
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white/50">
                            <img
                                src="/assets/Vector(3).svg"
                                alt="Location"
                                width={16}
                                height={16}
                                className="h-4 w-4 shrink-0 opacity-60 invert"
                            />
                            <span>Lagos, Nigeria</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-center gap-2 border-t border-white/5 pt-8 text-xs text-white/30 md:flex-row">
                <div className="flex items-center gap-1.5">
                    <img
                        src="/assets/mynaui_copyright.svg"
                        alt="Copyright"
                        width={12}
                        height={12}
                        className="h-3 w-3 opacity-40 invert"
                    />
                    <span>
                        {currentYear} Seven Innovative. All right reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
