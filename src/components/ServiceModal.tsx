import React from "react";
import { X, CheckCircle, ArrowRight, PhoneCall } from "lucide-react";
import { ServiceItem } from "../data/servicesData";
import { IconRenderer } from "./IconRenderer";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onEnquire: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onEnquire,
}) => {
  if (!service) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Zplusonlineservice, I am interested in your service: "${service.title}". Please share detailed information and procedure.`
    );
    window.open(`https://wa.me/919430195414?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200">
        {/* Header Bar */}
        <div className="bg-brand-navy p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
              <IconRenderer name={service.icon} className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-navyDark mb-1">
                {service.badge || "Verified Service"}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                {service.title}
              </h3>
              <p className="text-xs text-amber-200 font-medium">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 text-slate-700">
          <div>
            <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-600">
              {service.fullDesc}
            </p>
          </div>

          {/* Highlights & Scope */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <h5 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2.5">
                Key Features
              </h5>
              <ul className="space-y-2 text-xs text-slate-600">
                {service.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <h5 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2.5">
                Service Scope
              </h5>
              <ul className="space-y-2 text-xs text-slate-600">
                {service.scope.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-royal shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deliverables */}
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
            <h5 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
              Standard Deliverables & SLA
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {service.deliverables.map((d, i) => (
                <div key={i} className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-blue-200/60 font-medium">
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Referral Note */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/70">
            <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
              Associate Referral Scope
            </h5>
            <p className="text-xs text-amber-900 leading-relaxed">
              {service.referralNote}
            </p>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-colors cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Direct WhatsApp Enquiry</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-semibold w-1/2 sm:w-auto text-center cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(service.id);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-royal hover:bg-brand-navy text-white text-xs font-bold shadow transition-colors cursor-pointer"
            >
              <span>Prefill Web Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
