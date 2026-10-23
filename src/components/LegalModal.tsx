import React from "react";
import { X, ShieldCheck, FileText, AlertTriangle } from "lucide-react";

export type LegalDocType = "privacy" | "terms" | "disclaimer";

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-brand-navy p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-gold/20 text-brand-gold">
              {type === "privacy" && <ShieldCheck className="w-5 h-5" />}
              {type === "terms" && <FileText className="w-5 h-5" />}
              {type === "disclaimer" && <AlertTriangle className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading">
                {type === "privacy" && "Privacy Policy"}
                {type === "terms" && "Terms & Conditions"}
                {type === "disclaimer" && "Earnings & Associate Disclaimer"}
              </h3>
              <p className="text-xs text-brand-gold">
                Zplusonlineservice • A unit of KD India
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === "privacy" && (
            <>
              <h4 className="font-bold text-slate-800 text-base">Data Privacy & Information Security</h4>
              <p>
                At <strong>Zplusonlineservice (A unit of KD India)</strong>, we value the trust you place in us. This website functions as a corporate information portal and inquiry handoff desk. We do not store financial credentials, credit cards, or passwords on this web server.
              </p>
              <h5 className="font-bold text-slate-800">1. Information Collected</h5>
              <p>
                When you submit an enquiry through our contact form, information such as your full name, WhatsApp telephone number, selected service vertical, and message details are processed client-side and routed to our verified official communication channels (WhatsApp / Email).
              </p>
              <h5 className="font-bold text-slate-800">2. Usage of Information</h5>
              <p>
                Your contact details are used exclusively by our verified service coordinators to respond to your specific inquiries, schedule consultations, and facilitate requested services. We strictly do not sell, rent, or trade your contact details to third-party telemarketers.
              </p>
              <h5 className="font-bold text-slate-800">3. Contact for Privacy Matters</h5>
              <p>
                For any data inquiries, contact us at <code>zplusonlineservice@gmail.com</code>.
              </p>
            </>
          )}

          {type === "terms" && (
            <>
              <h4 className="font-bold text-slate-800 text-base">Corporate Terms of Service</h4>
              <p>
                By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
              <h5 className="font-bold text-slate-800">1. Scope of Service</h5>
              <p>
                Zplusonlineservice acts as a corporate facilitator and aggregator connecting customers with qualified execution partners across solar installations, real estate, admissions counseling, tours, software development, and financial solutions. Final quotations, service agreements, and operational deliverables are formalized through individual written service orders.
              </p>
              <h5 className="font-bold text-slate-800">2. No Online Payment or Automated CRM</h5>
              <p>
                This website is strictly a corporate portfolio and inquiry channel. All financial transactions, membership onboarding, or agreement sign-offs are conducted through authorized offline / direct banking channels under KD India oversight.
              </p>
              <h5 className="font-bold text-slate-800">3. Intellectual Property</h5>
              <p>
                All trademarks, logos, brand emblems, and content displayed on this website are the proprietary assets of Zplusonlineservice / KD India.
              </p>
            </>
          )}

          {type === "disclaimer" && (
            <>
              <h4 className="font-bold text-slate-800 text-base">Associate Pro Program Earnings Disclaimer</h4>
              <p>
                <strong>No Guaranteed Income:</strong> Zplusonlineservice makes no representations, warranties, or guarantees regarding specific monetary returns, fixed monthly earnings, or employment status for Associate Pro participants.
              </p>
              <h5 className="font-bold text-slate-800">1. Referral Commissions</h5>
              <p>
                Commissions are strictly contingent upon completed, qualifying business transactions where the referred customer successfully contracts and clears applicable service fees with the company or accredited partner. No commissions are paid for merely introducing non-transacting leads or simply recruiting members.
              </p>
              <h5 className="font-bold text-slate-800">2. Membership Fee</h5>
              <p>
                The proposed ₹300 per month membership fee covers program administrative access, onboarding materials, and coordination support. It does not constitute an investment, deposit, or financial security under Indian laws.
              </p>
              <h5 className="font-bold text-slate-800">3. Lead Distribution Discretion</h5>
              <p>
                Allocation of eligible company real estate leads is discretionary, subject to geographic availability, associate track record, and specific commercial requirements.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-navy hover:bg-brand-royal text-white text-xs font-bold transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
