import React from "react";
import {
  Award,
  CheckCircle,
  PhoneCall,
  Sparkles,
  Building,
  GraduationCap,
  Sun,
  Code,
  CreditCard,
  Briefcase,
  AlertTriangle
} from "lucide-react";

export const AssociatePro: React.FC = () => {
  const whatsappJoinUrl = `https://wa.me/919430195414?text=${encodeURIComponent(
    "Hello Zplusonlineservice, I am interested in joining the Associate Pro membership program (₹300/month). Please share the details, eligibility terms, and onboarding procedure."
  )}`;

  const referralSectors = [
    {
      title: "Real Estate & Buyer Leads",
      icon: Building,
      badge: "High Reward",
      desc: "Refer property buyers, sellers, or investors. Eligible active associates in key regions may also receive verified company buyer leads for local coordination.",
    },
    {
      title: "Solar Rooftop Projects",
      icon: Sun,
      badge: "Clean Energy",
      desc: "Connect residential premises, factories, or commercial establishments looking for solar EPC installations and earn commissions upon plant commissioning.",
    },
    {
      title: "College & University Admissions",
      icon: GraduationCap,
      badge: "60+ Campuses",
      desc: "Guide aspiring students and working professionals to accredited regular and distance learning degree programs across our nationwide university network.",
    },
    {
      title: "Software & Web Projects",
      icon: Code,
      badge: "Digital Tech",
      desc: "Introduce businesses or entrepreneurs needing corporate websites, custom CRM portals, e-commerce stores, or mobile applications.",
    },
    {
      title: "Loans & Financial Services",
      icon: CreditCard,
      badge: "BFSI",
      desc: "Facilitate personal loans, business working capital lines, home loans, or credit card applications with leading financial institutions.",
    },
    {
      title: "Corporate Recruitment",
      icon: Briefcase,
      badge: "Staffing",
      desc: "Recommend job seekers or companies seeking staffing solutions to earn placement rewards upon successful candidate onboarding.",
    },
  ];

  return (
    <section id="associate-pro" className="py-20 md:py-28 bg-navy-gradient text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-royal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-brand-gold/40 text-brand-gold text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Associate Membership Program</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Associate Pro Membership
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto">
            Participate in India's structured multi-service referral ecosystem.
            Monetize your professional network while connecting clients to verified corporate services.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-gold via-amber-400 to-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Pricing Card & Program Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Membership Pricing Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-brand-gold via-amber-500 to-brand-navy shadow-2xl">
              <div className="rounded-[22px] bg-brand-navyDark p-7 sm:p-8 text-center relative overflow-hidden">
                {/* Popular Badge */}
                <div className="absolute -right-12 top-6 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-navyDark font-extrabold text-[10px] uppercase py-1 px-12 rotate-45 shadow-md">
                  Official Plan
                </div>

                <div className="inline-flex items-center gap-1.5 text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Proposed Membership</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading mb-1">
                  Associate Pro
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Affordable micro-entrepreneurship gateway
                </p>

                {/* Price Display */}
                <div className="py-4 my-2 rounded-2xl bg-slate-900/80 border border-brand-gold/30">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-medium text-brand-gold">₹</span>
                    <span className="text-5xl font-extrabold text-white font-heading">300</span>
                    <span className="text-slate-400 text-sm font-medium">/ month</span>
                  </div>
                  <p className="text-xs font-semibold text-amber-300 mt-1">
                    Equivalent to approximately ₹10 a day!
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="py-6 space-y-3 text-left text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Eligibility to refer across all 7 corporate service verticals</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Potential allocation of eligible company real estate leads</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Transparent commission schedule based on completed transactions</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>Direct coordination desk with dedicated relationship manager</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>No inventory stocking, zero capital overhead required</span>
                  </div>
                </div>

                {/* Prominent WhatsApp CTA */}
                <a
                  href={whatsappJoinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 hover:from-yellow-400 hover:to-brand-gold text-brand-navyDark font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-brand-gold/25 hover:shadow-brand-gold/40 hover:scale-[1.02] transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 text-brand-navyDark" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <p className="text-[11px] text-slate-400 mt-3">
                  Direct onboarding consultation • Instant WhatsApp handoff
                </p>
              </div>
            </div>
          </div>

          {/* Right: Referral Ecosystem Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-brand-navy/60 rounded-2xl p-6 border border-slate-700/60 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                How Associates Earn Referral Commission
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As an Associate Pro member, you do not need to execute the services yourself.
                Your role is to identify genuine requirements within your sphere of influence—family,
                friends, local businesses, or social circle—and submit them to our verified desk.
                Our certified execution partners handle fulfillment, documentation, and customer support.
              </p>
            </div>

            {/* Real Estate Lead Distribution Highlight */}
            <div className="bg-gradient-to-r from-brand-royal/40 to-brand-navy/80 rounded-2xl p-6 border border-brand-royalLight/40 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-brand-royal text-brand-gold shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Real Estate Lead Distribution Model
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    In addition to personal client referrals, Zplusonlineservice receives verified buyer inquiries
                    from developers, digital campaigns, and institutional partners across India.
                    Eligible, active Associate Pro members in matching geographical locations may be assigned
                    these qualified leads to facilitate local site visits and client communication,
                    sharing transaction brokerage upon successful deed registry.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 Referral Sectors Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {referralSectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-brand-gold/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-brand-gold" />
                        <span className="text-xs font-bold text-white">{sector.title}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-amber-300 px-1.5 py-0.5 rounded bg-amber-500/10">
                        {sector.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {sector.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mandatory Transparency & Legal Disclaimer Box */}
        <div className="rounded-2xl p-6 bg-slate-900/90 border border-amber-500/40 text-left shadow-lg">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide">
                Important Program Disclosure & Earnings Disclaimer
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zplusonlineservice operates as an ethical service aggregation and referral platform.
                We <strong className="text-white">do not promise or guarantee fixed monthly income, return on investment, or automated earnings</strong>.
                Referral commissions, eligibility thresholds, lead allocations, and disbursement timelines are strictly governed by the written terms and conditions of each specific service category and require successfully completed, qualifying transactions.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Notice: This website is strictly an informational corporate portfolio. No payment processing, subscription debits, or automatic membership activations occur on this website. All membership discussions and agreements are conducted directly with our verified business team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
