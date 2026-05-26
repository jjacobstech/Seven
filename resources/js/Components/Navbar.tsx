import { Link } from '@inertiajs/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Plans', href: '#plans' },
    ];

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-300 ${
                isScrolled
                    ? 'border-b border-white/10 bg-[#000117]/80 py-3 backdrop-blur-md'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between md:justify-center">
                {/* Mobile Logo */}
                <Link href="/" className="flex items-center md:hidden">
                    <img
                        src="/assets/Seven 1 1.png"
                        alt="Seven Innovative"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links — centered pill */}
                <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-2.5 backdrop-blur-sm md:flex">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/assets/Seven 1 1.png"
                            alt="Seven Innovative"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                    {/* Action Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/book-a-call"
                            className="group flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-500"
                        >
                            Get Started
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    className="text-white md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="bg-[#040B18]/98 animate-in fade-in slide-in-from-top-4 fixed inset-0 top-[70px] z-40 flex flex-col gap-6 border-t border-white/10 p-8 backdrop-blur-xl md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-bold text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        href="/book-a-call"
                        className="flex items-center justify-center gap-2 rounded-xl bg-yellow-400 p-4 text-lg font-bold text-black"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get Started
                        <ArrowUpRight className="h-5 w-5" />
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
