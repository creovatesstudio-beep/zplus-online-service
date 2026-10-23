import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Zap
} from "lucide-react";

interface HeroProps {
  onSelectService?: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy-gradient flex items-center"
    >
      {/* Background visual flourishes */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-royal/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-[1px] h-[800px] bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent rotate-45 transform" />
        <div className="absolute top-20 right-1/3 w-[1px] h-[600px] bg-gradient-to-b from-transparent via-brand-royalLight/30 to-transparent rotate-45 transform" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-brand-gold/30 text-brand-gold text-xs font-semibold mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>A unit of KD India</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">MSME Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-heading">
              All Your Essential Services.{" "}
              <span className="block text-gold-gradient mt-1">
                One Trusted Platform.
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg font-medium text-amber-300/90 mb-4 tracking-wide">
              Empowering Services, Enabling Earnings.
            </p>

            {/* Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
              From solar installation and real estate to education, travel,
              technology and financial services, Zplusonlineservice connects
              customers with service opportunities while helping aspiring
              associates participate in referral-based business.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollTo("services")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 text-brand-navyDark font-bold text-sm tracking-wide shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("associate-pro")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-navyDark/80 hover:bg-brand-navy text-white font-semibold text-sm border border-brand-gold/40 hover:border-brand-gold shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <span>Become an Associate Pro</span>
                <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-brand-gold text-brand-navyDark">
                  ₹300/mo
                </span>
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Verified Services</div>
                  <div className="text-[11px] text-slate-400">Strict Quality Standards</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">MSME Registered</div>
                  <div className="text-[11px] text-slate-400">Govt of India Recognized</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Associate Network</div>
                  <div className="text-[11px] text-slate-400">Referral-based Growth</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Direct Desk</div>
                  <div className="text-[11px] text-slate-400">WhatsApp +919430195414</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Corporate Card Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glowing aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold via-brand-royalLight to-amber-500 rounded-3xl blur-lg opacity-30 animate-pulse" />

              {/* Glass Card Container */}
              <div className="relative bg-gradient-to-b from-brand-navyDark/90 to-brand-navy/95 border border-brand-gold/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                {/* Emblem Display */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-slate-700/60">
                  <div className="relative mb-4 group cursor-pointer">
                    <div className="absolute -inset-3 bg-brand-gold/20 rounded-full blur-md group-hover:bg-brand-gold/30 transition-all" />
                    <img
                      src="/logo.png"
                      alt="Zplusonlineservice Official Insignia"
                      className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full object-contain drop-shadow-2xl border-2 border-brand-gold/60 p-1 bg-brand-navyDark"
                    />
                    <div className="absolute -bottom-2 bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-navyDark text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-md tracking-wider">
                      Verified Identity
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight font-heading">
                    Zplusonlineservice
                  </h3>
                  <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mt-0.5">
                    A unit of KD India
                  </p>
                  <p className="text-xs text-slate-300 mt-2 max-w-xs">
                    Multi-service corporate network providing solutions across clean energy, education, properties, software, and finance.
                  </p>
                </div>

                {/* Highlights breakdown */}
                <div className="py-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-brand-navy/60 border border-slate-700/40">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-brand-gold" />
                      Core Verticals
                    </span>
                    <span className="font-semibold text-white">7 Strategic Sectors</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-brand-navy/60 border border-slate-700/40">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      University Network
                    </span>
                    <span className="font-semibold text-brand-gold">60+ Recognized Campuses</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-brand-navy/60 border border-slate-700/40">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-gold" />
                      Associate Pro Plan
                    </span>
                    <span className="font-semibold text-white">₹300 / Month</span>
                  </div>
                </div>

                {/* Quick WhatsApp Action inside Hero Card */}
                <div className="pt-4 border-t border-slate-700/60">
                  <a
                    href="https://wa.me/919430195414?text=Hello%20Zplusonlineservice%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20associateship."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md"
                  >
                    <span>Connect on WhatsApp Desk</span>
                    <span className="text-[11px] font-normal text-emerald-100">+91 9430195414</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
