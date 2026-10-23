export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  highlights: string[];
  scope: string[];
  deliverables: string[];
  referralNote: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "solar-energy",
    title: "Solar Energy Installation",
    tagline: "Clean, sustainable power for residential and commercial premises",
    shortDesc: "Complete rooftop and ground-mount solar solutions, high-efficiency panels, and engineering commissioning designed to drastically reduce energy overheads.",
    fullDesc: "Zplusonlineservice connects property owners, industrial facilities, and agricultural units with vetted clean energy engineering partners. From initial site feasibility and structural assessment to grid-tie synchronization, subsidy documentation, and installation, our partners deliver long-lasting solar infrastructure.",
    icon: "SunMedium",
    highlights: [
      "On-grid, off-grid & hybrid solar setups",
      "Net-metering & state DISCOM subsidy support",
      "Tier-1 mono-perc panels & heavy-duty inverters",
      "Long-term structural warranties & performance monitoring"
    ],
    scope: [
      "Residential rooftop systems (3kW – 15kW)",
      "Commercial & industrial captive plants",
      "Agricultural solar water pumping setups",
      "Wind turbine & hybrid renewable consultations"
    ],
    deliverables: [
      "Site feasibility report & shadow analysis",
      "Government subsidy processing guidance",
      "End-to-end EPC installation & safety certification"
    ],
    referralNote: "Associates can refer homeowners or commercial enterprises needing solar power and earn commissions upon project commissioning.",
    badge: "Green Energy"
  },
  {
    id: "real-estate",
    title: "Real Estate Services",
    tagline: "Verified property advisory, plots, residential & commercial deals",
    shortDesc: "Trustworthy buying, selling, and property advisory across high-growth corridors in India with clear documentation and dedicated site-visit facilitation.",
    fullDesc: "Navigating real estate requires transparency and verified legitimacy. We facilitate strategic property transactions including residential plots, builder floors, commercial shops, and warehouse lands. Our platform also receives eligible real estate buyer leads that can be distributed among active associates in relevant territories.",
    icon: "Building2",
    highlights: [
      "Verified title deeds & legal clearance checks",
      "Prime residential plots & commercial hubs",
      "Assistance with site inspection & registry documentation",
      "Territory-based buyer lead distribution for associates"
    ],
    scope: [
      "Residential land & plotted developments",
      "Commercial shop spaces, showrooms & office spaces",
      "Agricultural & industrial land facilitation",
      "Resale and new developer project marketing"
    ],
    deliverables: [
      "Curated property portfolio with clear title verification",
      "Transparent negotiation assistance",
      "End-to-end documentation & registration advisory"
    ],
    referralNote: "Lucrative referral opportunity for real estate leads. Active associates may also qualify for distributed company leads.",
    badge: "High Growth"
  },
  {
    id: "education-admission",
    title: "Online College & University Admission",
    tagline: "Direct admissions guidance for 60+ UGC & AICTE recognized universities",
    shortDesc: "Comprehensive admission counseling for undergraduate, postgraduate, diploma, and distance learning programs across prestigious universities nationwide.",
    fullDesc: "Education unlocks future careers. Zplusonlineservice provides students and working professionals with impartial, transparent admission counseling. We represent partnerships and direct facilitation channels with over 60 premier universities across India, supporting both conventional regular campus degrees and flexible online/distance learning programs.",
    icon: "GraduationCap",
    highlights: [
      "Direct guidance for 60+ accredited universities",
      "UGC, AICTE, DEB, and NAAC recognized programs",
      "Regular, online & executive distance degrees",
      "Transparent fee structure with zero hidden charges"
    ],
    scope: [
      "Management (MBA, BBA, Executive PGDM)",
      "Information Technology (BCA, MCA, B.Sc IT)",
      "Engineering & Technical Diplomas (Polytechnic, B.Tech)",
      "Traditional & Humanities streams (BA, B.Com, MA, M.Com)"
    ],
    deliverables: [
      "Personalized eligibility & career path counseling",
      "Official university application & document submission",
      "Enrollment verification & student lifecycle support"
    ],
    referralNote: "Earn structured referral rewards by connecting aspiring students and working professionals looking to upgrade their academic credentials.",
    badge: "60+ Universities"
  },
  {
    id: "tours-travels",
    title: "ZplusHoliday Tours & Travels",
    tagline: "Curated domestic vacations, international escapes & pilgrimage tours",
    shortDesc: "Bespoke holiday itineraries, family vacation packages, religious yatra planning, flight bookings, and premier hotel accommodations.",
    fullDesc: "Travel should be effortless and unforgettable. Under our dedicated travel division, ZplusHoliday crafts comprehensive travel experiences tailored to your budget and interests. Whether you are planning a spiritual pilgrimage across holy shrines, a relaxing hill station retreat, or an exotic overseas vacation, our travel desk handles all details.",
    icon: "Compass",
    highlights: [
      "Customized family, corporate & group holiday packages",
      "Specialized spiritual & pilgrimage tour circuits",
      "End-to-end transport, hotel booking & sightseeing passes",
      "24/7 dedicated travel concierge during your journey"
    ],
    scope: [
      "Spiritual & Dhams Yatras across India",
      "Hill stations, coastal retreats & heritage tours",
      "International holidays (Dubai, Thailand, Singapore, Bali)",
      "Corporate offsite retreats & MICE travel coordination"
    ],
    deliverables: [
      "Day-wise verified itinerary & transparent cost estimates",
      "Confirmed hotel stays & sanitized vehicle transfers",
      "Pre-departure visa guidance & travel insurance support"
    ],
    referralNote: "Recommend our holiday packages to friends, families, or corporate groups and earn commission upon package confirmation.",
    badge: "ZplusHoliday"
  },
  {
    id: "software-development",
    title: "Digital & Custom Software Development",
    tagline: "Scalable web, mobile, enterprise CRM and cloud solutions",
    shortDesc: "End-to-end digital engineering: modern responsive websites, bespoke business software, mobile applications, and digital marketing ecosystems.",
    fullDesc: "In the digital age, businesses need robust technical foundations. Our technical division designs and builds scalable, secure, and modern digital applications for MSMEs, startups, and established enterprises. From high-converting portfolio websites and custom web portals to e-commerce engines and digital marketing campaigns, we build software that drives real revenue.",
    icon: "Code2",
    highlights: [
      "Custom corporate web portals & e-commerce stores",
      "Tailored CRM & business workflow management tools",
      "Modern React, TypeScript, Next.js & Node.js stacks",
      "Search Engine Optimization (SEO) & digital branding"
    ],
    scope: [
      "Corporate websites & landing pages",
      "Custom inventory, billing & operational portals",
      "Mobile-friendly web apps & progressive web apps",
      "API integrations & legacy modernization"
    ],
    deliverables: [
      "Clean, modern UI/UX design matching corporate identity",
      "Fully responsive, high-speed, secure source code",
      "Deployment, domain hosting & ongoing maintenance support"
    ],
    referralNote: "Refer business owners or entrepreneurs in your circle who need websites or bespoke software to earn substantial project-based commission.",
    badge: "Tech Solutions"
  },
  {
    id: "financial-services",
    title: "Financial Services",
    tagline: "Hassle-free loan facilitation, credit cards & banking solutions",
    shortDesc: "Expert assistance with business loans, personal loans, home loans, credit card applications, and institutional banking setups with top Indian lenders.",
    fullDesc: "Securing credit and financial products can often be complicated and slow. Zplusonlineservice collaborates with direct selling agents and accredited financial institutions to assist clients with quick eligibility checks, minimal documentation, and streamlined processing for personal, mortgage, and enterprise credit lines.",
    icon: "CreditCard",
    highlights: [
      "Access to multiple leading private & public sector banks",
      "Business loans for working capital & MSME expansion",
      "Quick processing for personal loans & balance transfers",
      "Pre-approved credit cards & institutional current accounts"
    ],
    scope: [
      "Secured & unsecured business loans for traders & firms",
      "Home loans & Loan Against Property (LAP)",
      "Instant personal loans for salaried & self-employed",
      "Commercial credit cards & merchant POS setups"
    ],
    deliverables: [
      "Objective lender comparison for lowest interest rates",
      "Doorstep or digital document pickup and verification",
      "Active follow-up with banking channels until disbursal"
    ],
    referralNote: "Introduce clients seeking capital, loans, or credit cards and receive payout upon successful loan disbursement or card issuance.",
    badge: "Banking & Credit"
  },
  {
    id: "job-consultancy",
    title: "Job Consultancy",
    tagline: "Bridging ambitious talent with verified corporate employment",
    shortDesc: "Strategic recruitment, corporate staffing solutions, and career counseling connecting job seekers with hiring companies across diverse sectors.",
    fullDesc: "Finding the right career path or recruiting qualified professionals requires dependable matchmaking. Our Job Consultancy vertical works closely with corporate HR departments, MSMEs, and educational alumni networks to place candidates into suitable roles in IT, BFSI, sales, customer operations, and administrative functions.",
    icon: "Briefcase",
    highlights: [
      "Verified corporate job openings across diverse industries",
      "Candidate profile matching & resume optimization",
      "Direct interview scheduling with hiring managers",
      "Corporate talent acquisition & bulk staffing solutions"
    ],
    scope: [
      "Entry-level & mid-management corporate placements",
      "Sales, marketing, operations & customer support staff",
      "Technical, IT & software engineering talent search",
      "Campus recruitment drives & corporate tie-ups"
    ],
    deliverables: [
      "Prescreened candidate resumes matching job descriptions",
      "Interview coordination & candidate briefing",
      "Transparent placement tracking for both candidates and employers"
    ],
    referralNote: "Connect job seekers or companies looking to hire staff to earn placement referral incentives upon completed candidate onboarding.",
    badge: "Career Match"
  }
];
