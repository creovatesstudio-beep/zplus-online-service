import React from "react";
import { X, ExternalLink, Award } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-brand-navy p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-brand-gold" />
            <div>
              <h3 className="text-base font-bold font-heading">
                Official Company Leaflet & Brochure
              </h3>
              <p className="text-[11px] text-brand-gold">
                MSME Registered • Zplusonlineservice (A unit of KD India)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Brochure Image Preview */}
        <div className="p-4 bg-slate-100 max-h-[75vh] overflow-y-auto flex justify-center">
          <img
            src="/brochure.jpg"
            alt="Official Zplusonlineservice Brochure"
            className="rounded-lg shadow-md max-w-full h-auto object-contain"
          />
        </div>

        {/* Footer actions */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">
            Verified MSME Registration
          </span>
          <div className="flex items-center gap-2">
            <a
              href="/brochure.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 font-semibold"
            >
              <span>Full View</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-brand-navy text-white font-semibold hover:bg-brand-royal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
