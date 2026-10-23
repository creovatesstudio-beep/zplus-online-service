import React from "react";
import {
  Phone,
  Mail,
  Award,
  ArrowUp,
  ExternalLink,
  ChevronRight,
  Building
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import { LegalDocType } from "./LegalModal";

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenLegal: (type: LegalDocType) => void;
  onOpenBrochure?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenLegal,
  onOpenBrochure,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Zplus", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Associate Pro (₹300/mo)", href: "#associate-pro" },
    { label: "Partners & Vendors", href: "#partners" },
    { label: "FAQ & Help", href: "#faq" },
    { label: "Contact & Enquiry", href: "#contact" },
  ];

  return (
    <footer className="bg-brand-navyDark text-slate-300 relative border-t border-slate-800">
      {/* Decorative gradient top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-gold via-brand-royalLight to-yellow-500" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Corporate Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Zplusonlineservice Emblem"
                className="w-12 h-12 rounded-full object-contain border border-brand-gold/40 bg-brand-navy"
              />
              <div>
                <h3 className="text-xl font-extrabold text-white font-heading leading-tight">
                  Zplusonlineservice
                </h3>
                <p className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider">
                  A unit of KD India
                </p>
              </div>
            </div>

            <p className="text-xs text-amber-300/90 font-medium tracking-wide">
              Empowering Services, Enabling Earnings.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              India's premier multi-service platform connecting consumers and
              enterprises to clean energy, higher education, prime real estate,
              travel, custom software, and finance, backed by a transparent
              referral ecosystem.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="inline-flex items-center gap-2 text-brand-gold">
                <Award className="w-4 h-4 shrink-0" />
                <span className="font-semibold">MSME Registered Enterprise</span>
              </div>
              <div className="inline-flex items-center gap-2 text-slate-400">
                <Building className="w-4 h-4 shrink-0 text-slate-500" />
                <span>Operating as a proud unit of KD India</span>
              </div>
            </div>

            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline font-medium pt-1 cursor-pointer"
              >
                <span>View Official Brochure Leaflet</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-brand-gold transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Our 7 Verticals
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.id)}
                    className="text-slate-400 hover:text-brand-gold transition-colors text-left inline-flex items-center gap-1 group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-brand-gold transition-colors" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contacts & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Official Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                  WhatsApp Support Desk
                </span>
                <a
                  href="https://wa.me/919430195414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-mono font-bold hover:underline flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 9430195414</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                  Marketing & Enquiries
                </span>
                <a
                  href="mailto:zplusonlinemarketing@gmail.com"
                  className="text-slate-300 font-mono hover:text-brand-gold break-all flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>zplusonlinemarketing@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                  B2B Proposals & Vendors
                </span>
                <a
                  href="mailto:zplusonlineservice@gmail.com?subject=%5BPROPOSAL%5D%20Service%20Offer"
                  className="text-slate-300 font-mono hover:text-brand-gold break-all flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>zplusonlineservice@gmail.com</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                Mon - Sat: 9:30 AM to 7:00 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 Zplusonlineservice. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              A unit of KD India • Empowering Services, Enabling Earnings.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <button
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal("terms")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal("disclaimer")}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Earnings Disclaimer
            </button>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-royal text-slate-300 hover:text-white transition-all shadow cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
