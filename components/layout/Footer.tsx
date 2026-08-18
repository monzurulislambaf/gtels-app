import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "@/src/data/company";

const quickLinks = [
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

const serviceLinks = [
  { label: "Construction & Civil Engineering", href: "/services#construction" },
  { label: "WASH & Water Infrastructure", href: "/wash" },
  { label: "Engineering & Project Management", href: "/services#engineering" },
  { label: "Procurement & Supply Chain", href: "/services#procurement" },
  { label: "Logistics", href: "/logistics" },
  { label: "Sustainable Energy", href: "/services#energy" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* CTA Section */}
      <div className="bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Need a Reliable WASH & Engineering Partner?
              </h2>
              <p className="text-primary-content/80 text-lg">
                Talk to GTELS about your next infrastructure, water, logistics or community-development requirement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90 border-none">
                Contact GTELS
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="btn btn-outline border-white/40 text-white hover:bg-white/10">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-content font-bold text-lg">
                G
              </div>
              <div>
                <div className="font-bold text-lg">{company.acronym}</div>
                <div className="text-xs text-neutral-content/60 leading-tight">Engineering & Logistic Solutions</div>
              </div>
            </div>
            <p className="text-sm text-neutral-content/70 leading-relaxed">
              {company.description}
            </p>
            <p className="text-xs text-neutral-content/50 pt-2 border-t border-neutral-content/10">
              Engineering • WASH • Logistics • Infrastructure
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-content/90">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-content/60 hover:text-primary-content transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-content/90">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-content/60 hover:text-primary-content transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-content/90">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-content/50 shrink-0" />
                <span className="text-sm text-neutral-content/70">{company.address}</span>
              </div>
              <a href={`tel:${company.phone}`} className="flex items-center gap-3 text-sm text-neutral-content/70 hover:text-primary-content transition-colors">
                <Phone className="w-4 h-4 text-neutral-content/50 shrink-0" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-sm text-neutral-content/70 hover:text-primary-content transition-colors">
                <Mail className="w-4 h-4 text-neutral-content/50 shrink-0" />
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-content/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-content/50">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Engineering • WASH • Infrastructure • Logistics</span>
        </div>
      </div>
    </footer>
  );
}
