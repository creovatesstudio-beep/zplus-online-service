import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
  Building
} from "lucide-react";
import { servicesData } from "../data/servicesData";

interface ContactSectionProps {
  selectedServiceId?: string;
  onServiceSelect?: (serviceId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServiceId,
  onServiceSelect,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceId: selectedServiceId || "solar-energy",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedPreview, setSubmittedPreview] = useState<string | null>(null);

  // Sync when selectedServiceId changes from parent
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = "Name must be at least 3 characters.";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your 10-digit WhatsApp number.";
    } else if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).";
    }

    if (!formData.serviceId) {
      errs.serviceId = "Please select a service vertical.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a brief description of your requirement.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Requirement message must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getSelectedServiceName = () => {
    const found = servicesData.find((s) => s.id === formData.serviceId);
    return found ? found.title : "General Corporate Enquiry";
  };

  const generateWhatsAppMessage = () => {
    const sName = getSelectedServiceName();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    return (
      `*New Service Enquiry - Zplusonlineservice*\n` +
      `--------------------------------\n` +
      `*Full Name:* ${formData.fullName.trim()}\n` +
      `*WhatsApp:* +91 ${cleanPhone}\n` +
      `*Service Required:* ${sName}\n` +
      `*Requirement Details:*\n${formData.message.trim()}\n` +
      `--------------------------------\n` +
      `_Sent via Zplusonlineservice Official Website_`
    );
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/919430195414?text=${encoded}`;
    
    // Set preview state for UI transparency
    setSubmittedPreview(targetUrl);
    window.open(targetUrl, "_blank");
  };

  const handleOpenEmailClient = () => {
    if (!validate()) return;

    const sName = getSelectedServiceName();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    const subject = `Service Enquiry: ${sName} - ${formData.fullName.trim()}`;
    const body =
      `Hello Zplusonlineservice Marketing Team,\n\n` +
      `I would like to enquire about your services with the following details:\n\n` +
      `Name: ${formData.fullName.trim()}\n` +
      `Phone: +91 ${cleanPhone}\n` +
      `Service: ${sName}\n\n` +
      `Requirement:\n${formData.message.trim()}\n\n` +
      `Please get in touch with me at your earliest convenience.\n\n` +
      `Regards,\n${formData.fullName.trim()}`;

    const mailto = `mailto:zplusonlinemarketing@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-royal/10 border border-brand-royal/20 text-brand-royal text-xs font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-brand-goldDark" />
            <span>Direct Communication Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Contact & Service Enquiry
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Connect directly with our service specialists or membership team.
            Submit your requirements for instant WhatsApp handoff or email routing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold via-brand-royal to-brand-navy mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                  Official Communication
                </span>
                <h3 className="text-xl font-bold text-brand-navy font-heading mt-0.5">
                  Reach Our Team
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Zplusonlineservice operates dedicated support desks for customer inquiries,
                  associateship onboarding, and corporate collaborations.
                </p>
              </div>

              {/* Contact Points */}
              <div className="space-y-4 pt-2">
                {/* WhatsApp Support Desk */}
                <a
                  href="https://wa.me/919430195414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-600 text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <span>Official WhatsApp Support</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-800 font-bold">Active</span>
                    </div>
                    <div className="text-sm font-extrabold text-emerald-700 font-mono mt-0.5">
                      +91 9430195414
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Direct chat for service quotes & Associate Pro inquiries
                    </div>
                  </div>
                </a>

                {/* Marketing & Enquiries Email */}
                <a
                  href="mailto:zplusonlinemarketing@gmail.com"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-royal text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Marketing & Customer Enquiries
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-brand-royal break-all mt-0.5 font-mono">
                      zplusonlinemarketing@gmail.com
                    </div>
                    <div className="text-[11px] text-slate-500">
                      General inquiries, admissions guidance & holiday quotes
                    </div>
                  </div>
                </a>

                {/* Corporate & Proposals Email */}
                <a
                  href="mailto:zplusonlineservice@gmail.com?subject=%5BPROPOSAL%5D%20Service%20Offer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-navy text-brand-gold shrink-0 group-hover:scale-105 transition-transform">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Partnerships & Vendor Proposals
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-brand-navy break-all mt-0.5 font-mono">
                      zplusonlineservice@gmail.com
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Service vendor tie-ups & institutional collaborations
                    </div>
                  </div>
                </a>
              </div>

              {/* Working Hours */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-brand-royal shrink-0" />
                <span>
                  <strong>Desk Hours:</strong> Mon - Sat: 9:30 AM – 7:00 PM IST
                </span>
              </div>
            </div>

            {/* Architecture Scope Notice */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Frontend Direct Handoff Notice:</strong>
                This corporate portfolio operates as a client-side portal. When you submit your enquiry,
                it directly drafts a structured message to our verified official WhatsApp desk (+919430195414)
                or launches your email client. We do not store personal financial data on this site.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
              <h3 className="text-xl font-bold text-brand-navy font-heading mb-1">
                Send a Service Requirement
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the form below. Your requirement will be prefilled into a structured WhatsApp message ready for instant review by our specialists.
              </p>

              <form onSubmit={handleSubmitWhatsApp} noValidate className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? "border-rose-300 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-300 focus:border-brand-royal focus:ring-brand-royal/20"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative flex rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-brand-royal/20 focus-within:border-brand-royal">
                    <span className="inline-flex items-center px-3.5 bg-slate-100 text-slate-600 text-xs font-bold border-r border-slate-300">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setFormData({ ...formData, phone: val });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="9876543210 (10 digits)"
                      className="w-full px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-400 mt-1">
                      We will connect directly on this WhatsApp number.
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="serviceSelection" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Vertical <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="serviceSelection"
                    value={formData.serviceId}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData({ ...formData, serviceId: val });
                      if (onServiceSelect) onServiceSelect(val);
                      if (errors.serviceId) setErrors({ ...errors, serviceId: "" });
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:outline-none focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20 transition-all"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="associate-pro-enquiry">
                      Associate Pro Membership Inquiry (₹300/mo)
                    </option>
                    <option value="partnership-enquiry">
                      Partner / Vendor Collaboration
                    </option>
                    <option value="other">Other Service Requirement</option>
                  </select>
                </div>

                {/* Requirement Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Requirement Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Describe your requirement (e.g., location, capacity, property type, preferred university course, holiday dates, or software scope)..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? "border-rose-300 focus:ring-rose-200 bg-rose-50/20"
                        : "border-slate-300 focus:border-brand-royal focus:ring-brand-royal/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp (+91 9430195414)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenEmailClient}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs tracking-wider transition-colors"
                  >
                    <Mail className="w-4 h-4 text-brand-royal" />
                    <span>Email Desk</span>
                  </button>
                </div>

                {/* Real-time Status feedback if triggered */}
                {submittedPreview && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2.5 mt-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>WhatsApp window triggered!</strong> If your browser blocked popups,{" "}
                      <a
                        href={submittedPreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold"
                      >
                        click here to open WhatsApp directly
                      </a>
                      .
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
