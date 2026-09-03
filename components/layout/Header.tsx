"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { company } from "@/src/data/company";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "WASH", href: "/wash" },
  { label: "Projects", href: "/projects" },
  { label: "Capacity", href: "/capacity" },
  { label: "Equipment", href: "/equipment" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-neutral text-neutral-content text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              {company.email}
            </a>
          </div>
          <div className="text-xs opacity-70">{company.address}</div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-base-100 shadow-md border-b border-base-300"
            : "bg-base-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="navbar min-h-16 lg:min-h-20 px-0">
            {/* Logo */}
            <div className="navbar-start">
              <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileOpen(false)}>
                <div className="h-10 lg:h-12 px-2 rounded-lg bg-primary flex items-center justify-center text-primary-content font-extrabold text-[10px] lg:text-xs tracking-tight transition-transform duration-300 group-hover:scale-105">
                  {company.acronym}
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-base lg:text-lg text-base-content leading-tight">{company.shortName}</div>
                  <div className="text-[10px] lg:text-xs text-base-content/60 leading-tight hidden md:block">Engineering & Logistic Solutions</div>
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-0.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA + Theme Toggle + Mobile toggle */}
            <div className="navbar-end gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn btn-primary btn-sm"
              >
                Contact GTELS
              </Link>
              <button
                className="lg:hidden btn btn-ghost btn-circle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-base-100 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-base-300">
              <span className="font-bold text-lg">{company.shortName}</span>
              <button
                className="btn btn-ghost btn-circle btn-sm"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="menu p-4 gap-1 flex-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-medium py-3 px-4 rounded-lg hover:bg-primary/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-4 border-t border-base-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-base-content/70">Theme</span>
                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                className="btn btn-primary btn-block"
                onClick={() => setMobileOpen(false)}
              >
                Contact GTELS
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="btn btn-outline btn-block btn-sm"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
