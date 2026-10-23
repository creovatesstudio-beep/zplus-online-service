import React, { useState, useMemo } from "react";
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData, faqCategories } from "../data/faqData";

export const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-3"]); // first & third open by default

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-navy text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-royal" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Clear Answers to Common Queries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Everything you need to know about our multi-service catalog, Associate Pro membership,
            referral policies, and vendor collaboration standards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-royal mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Category Filter */}
        <div className="mb-10 space-y-4">
          {/* Live Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. fee, commission, solar, lead distribution)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:border-brand-royal focus:ring-2 focus:ring-brand-royal/20 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-brand-royal/40 bg-slate-50/70 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-brand-navy font-heading leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                        isOpen
                          ? "bg-brand-royal text-white rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <p className="text-sm text-slate-500">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-3 text-xs font-semibold text-brand-royal hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Support Banner below FAQs */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-brand-navy">
              Have an unanswered question or specific enquiry?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Connect directly with our corporate coordinators via WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/919430195414?text=Hello%20Zplusonlineservice%2C%20I%20have%20a%20question%20not%20covered%20in%20the%20FAQ."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-royal text-white text-xs font-bold shadow transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-brand-gold" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
