export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "all" | "general" | "services" | "associate" | "partners";
}

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "services", label: "Our Services" },
  { id: "associate", label: "Associate Pro Program" },
  { id: "partners", label: "Partners & Vendors" },
  { id: "general", label: "General & Support" },
] as const;

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Zplusonlineservice and what does the company do?",
    answer: "Zplusonlineservice (A unit of KD India) is an Indian multi-service corporate platform. We connect customers with certified service providers across seven primary verticals: Solar Energy Installation, Real Estate, University Admissions, Tours & Travels, Custom Software Development, Financial Services, and Job Consultancy. In parallel, we offer an Associate Pro program that allows individuals to participate in referral-based business.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How do I enquire about or avail any of your 7 services?",
    answer: "Availing a service is straightforward: browse our Services section, choose the required service, and click 'Enquire Now'. You can either fill out our digital enquiry form or click the WhatsApp handoff button to chat directly with our team at +919430195414 with your requirements prefilled. A sector specialist will connect with you to guide you through the process.",
    category: "services"
  },
  {
    id: "faq-3",
    question: "What is the Associate Pro membership program?",
    answer: "Associate Pro is a referral-based program designed for professionals, entrepreneurs, and motivated individuals. As an associate, you can introduce clients or network contacts who require our corporate services. When an eligible transaction is successfully completed, you earn a commission according to the written terms of that service category.",
    category: "associate"
  },
  {
    id: "faq-4",
    question: "What is the membership fee for Associate Pro?",
    answer: "The proposed membership fee for Associate Pro is ₹300 per month (equivalent to approximately ₹10 per day). This nominal fee covers program onboarding, access to marketing guidance, direct support from our coordinators, and eligibility to participate in referral commissions and lead distributions.",
    category: "associate"
  },
  {
    id: "faq-5",
    question: "Does Zplusonlineservice guarantee a fixed monthly income for associates?",
    answer: "No. Zplusonlineservice does not promise or guarantee fixed monthly earnings. Referral earnings depend directly on genuine, completed qualifying transactions, customer eligibility, and the specific commission rates agreed under the applicable service category terms. All associates must abide by ethical business practices.",
    category: "associate"
  },
  {
    id: "faq-6",
    question: "How does real estate lead distribution work for associates?",
    answer: "The company periodically receives verified inquiries from property buyers and investors across various regions. For active, high-performing Associate Pro members in eligible territories, the company may distribute these verified leads for follow-up and site coordination, allowing associates to participate in property transaction brokerage sharing.",
    category: "associate"
  },
  {
    id: "faq-7",
    question: "How can vendors, colleges, or service providers partner with Zplusonlineservice?",
    answer: "We welcome partnerships with verified vendors, universities, solar EPC contractors, developers, travel agencies, and financial agents. Interested organizations can submit collaboration proposals by emailing zplusonlineservice@gmail.com with the subject line '[PROPOSAL] Service Offer'. Our business development team will review your credentials and discuss written partnership terms.",
    category: "partners"
  },
  {
    id: "faq-8",
    question: "Which universities are available for admissions counseling?",
    answer: "We provide counseling and direct facilitation for over 60 premier universities and educational institutions across India. These institutions are recognized by UGC, AICTE, DEB, and NAAC, offering undergraduate, postgraduate, executive diploma, and distance learning courses across engineering, management, IT, and commerce.",
    category: "services"
  },
  {
    id: "faq-9",
    question: "Is Zplusonlineservice a registered enterprise?",
    answer: "Yes, Zplusonlineservice is an MSME-registered enterprise operating as a unit of KD India, adhering to standard Indian commercial regulations and ethical business frameworks.",
    category: "general"
  },
  {
    id: "faq-10",
    question: "Can I pay for Associate Pro membership directly on this website?",
    answer: "No, this website serves strictly as the official corporate portfolio and information portal. We deliberately do not process online payments, user logins, or automated activations on this public website. All membership discussions, onboarding, and written agreements are coordinated directly through our verified business team via WhatsApp (+919430195414) and official documentation.",
    category: "associate"
  }
];
