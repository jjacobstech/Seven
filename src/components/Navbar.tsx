"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
    { name: "Plans", href: "#plans" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled
          ? "bg-[#000117]/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Desktop Links — centered pill */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-2.5 rounded-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Seven 1 1.png"
              alt="Seven Innovative"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {/* Action Button */}
          <div className="hidden md:block">
            <Link
              href="/book-a-call"
              className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded-lg font-bold text-sm transition-all"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#040B18]/98 backdrop-blur-xl z-40 md:hidden flex flex-col p-8 gap-6 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book-a-call"
            className="flex items-center justify-center gap-2 bg-yellow-400 text-black p-4 rounded-xl font-bold text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
