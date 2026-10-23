import React, { useState } from "react";
import { ArrowRight, Info, Check, Sparkles } from "lucide-react";
import { servicesData, ServiceItem } from "../data/servicesData";
import { IconRenderer } from "./IconRenderer";
import { ServiceModal } from "./ServiceModal";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleEnquire = (serviceId: string) => {
    onSelectService(serviceId);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-brand-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-royal/10 border border-brand-royal/20 text-brand-royal text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-goldDark" />
            <span>Our Service Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Comprehensive Corporate Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Seven dedicated business verticals engineered for quality, reliability,
            and complete transparency for individual clients, commercial enterprises, and network associates.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold via-brand-royal to-brand-navy mx-auto mt-4 rounded-full" />
        </div>

        {/* 7 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0 || index === 2; // Solar & Education highlighted slightly
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured
                    ? "border-brand-gold/50 shadow-md hover:shadow-xl hover:-translate-y-1"
                    : "border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Top colored accent line */}
                <div
                  className={`h-1.5 w-full ${
                    isFeatured
                      ? "bg-gradient-to-r from-brand-gold to-yellow-500"
                      : "bg-gradient-to-r from-brand-navy to-brand-royal"
                  }`}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Icon & Badge Row */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-13 h-13 p-3 rounded-xl bg-brand-navy text-brand-gold border border-brand-gold/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <IconRenderer name={service.icon} className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-slate-100 text-brand-navy border border-slate-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-royal transition-colors font-heading mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 mb-3 line-clamp-1">
                    {service.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 mb-6 mt-auto">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Associate referral badge */}
                  <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/50 text-[11px] text-amber-900 leading-snug mb-5">
                    <span className="font-bold text-amber-950">Referral Benefit: </span>
                    <span className="line-clamp-2">{service.referralNote}</span>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-brand-navy transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => handleEnquire(service.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-brand-navy hover:bg-brand-royal text-white text-xs font-bold transition-all shadow-sm group-hover:shadow"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Bottom Banner in Services */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-navy to-brand-navyDark text-white border border-brand-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Need a Customized Service Combination?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              From corporate campus recruitment to multi-site rooftop solar or enterprise software portals, our desk provides bespoke coordination.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919430195414?text=Hello%20Zplusonlineservice%2C%20I%20have%20a%20custom%20service%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-navyDark font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              Contact Specialist Desk
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onEnquire={handleEnquire}
        />
      )}
    </section>
  );
};
