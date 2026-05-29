export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  social: {
    instagram: string;
    linkedin: string;
    twitter: string;
    youtube: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export interface HowItWorksStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export interface TaskCategory {
  icon: string;
  label: string;
  earningRange: string;
  color: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  age: number;
  city: string;
  earned: string;
  quote: string;
  avatarSeed: string;
  rating: number;
}

export interface ValuePropItem {
  icon: string;
  stat: string;
  title: string;
  description: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface CostComparisonRow {
  metric: string;
  funngro: string;
  agency: string;
  highlighted?: boolean;
}

export interface SocialLinkItem {
  platform: string;
  href: string;
  ariaLabel: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Funngro",
  url: "https://funngro.com",
  description: "India's #1 teen earning platform. Work with real brands, earn real ₹, and build your portfolio. Featured on Shark Tank India Season 2.",
  email: "hello@funngro.com",
  phone: "+91 9988776655",
  whatsapp: "https://wa.me/919988776655",
  social: {
    instagram: "https://instagram.com/funngro",
    linkedin: "https://linkedin.com/company/funngro",
    twitter: "https://twitter.com/funngro",
    youtube: "https://youtube.com/funngro"
  }
};

export const NAV_LINKS: NavLink[] = [
  { label: "For Teens", href: "/" },
  { label: "For Companies", href: "/companies" },
  { label: "Login", href: "/login", isExternal: true },
];

export const TEEN_STATS: StatItem[] = [
  { value: 500000, suffix: "+", label: "Registered Teens" },
  { value: 7000000, prefix: "₹", suffix: "+", label: "Earnings Distributed" },
  { value: 100, suffix: "+", label: "Active Brands" }
];

export const COMPANY_STATS: StatItem[] = [
  { value: 500000, suffix: "+", label: "Verified Gen-Z Creators" },
  { value: 100, suffix: "+", label: "Partner Brands" },
  { value: 10000, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "-Day", label: "Average Delivery Time" }
];

export const TEEN_HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: "01",
    icon: "Smartphone",
    title: "Download the App",
    description: "Install the Funngro app from Google Play or Apple App Store and complete your 2-minute registration."
  },
  {
    step: "02",
    icon: "User",
    title: "Select Your Skills",
    description: "Choose your favorite task categories—from graphic design and video editing to writing and social media."
  },
  {
    step: "03",
    icon: "BadgeCheck",
    title: "Work & Get Paid",
    description: "Apply for real-world projects, complete easy tasks for top Indian brands, and receive secure payouts instantly."
  }
];

export const COMPANY_HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: "01",
    icon: "FileText",
    title: "Post a Brief",
    description: "Submit your project requirements, budget, and desired turnaround in under 2 minutes."
  },
  {
    step: "02",
    icon: "Users",
    title: "Get Matched",
    description: "Our smart marketplace pairs you with vetted, skilled Gen-Z creators matching your exact criteria."
  },
  {
    step: "03",
    icon: "CheckSquare",
    title: "Review Submissions",
    description: "Inspect high-quality, creative drafts directly on the portal and request adjustments easily."
  },
  {
    step: "04",
    icon: "CreditCard",
    title: "Approve & Deploy",
    description: "Release payments securely via Escrow and claim full IP transfer once you're 100% satisfied."
  }
];

export const TASK_CATEGORIES: TaskCategory[] = [
  { icon: "Share2", label: "Social Media", earningRange: "₹500–₹2,000", color: "#10B981" },
  { icon: "Palette", label: "Design", earningRange: "₹800–₹3,000", color: "#3B82F6" },
  { icon: "PenTool", label: "Writing", earningRange: "₹300–₹1,500", color: "#F59E0B" },
  { icon: "Search", label: "Research", earningRange: "₹400–₹1,200", color: "#8B5CF6" },
  { icon: "Video", label: "Video Editing", earningRange: "₹1,000–₹4,000", color: "#EC4899" },
  { icon: "Database", label: "Data Entry", earningRange: "₹200–₹800", color: "#6B7280" }
];

export const BENEFITS: BenefitItem[] = [
  {
    icon: "Briefcase",
    title: "Real-World Experience",
    description: "Work on legitimate projects for active commercial companies. Put real business success on your CV."
  },
  {
    icon: "Sparkles",
    title: "Interactive Portfolio",
    description: "Build an impressive digital showcase of verified work, making you stand out to top universities and jobs."
  },
  {
    icon: "Calendar",
    title: "Work From Anywhere",
    description: "Zero strict working hours. Manage your school commitments while freelancing during your spare time."
  },
  {
    icon: "TrendingUp",
    title: "Guaranteed Learning",
    description: "Upskill rapidly with direct feedback from operational industry mentors and structured learning guides."
  },
  {
    icon: "ShieldAlert",
    title: "No Investment Ever",
    description: "Funngro is 100% free to use. We never request deposits, training fees, or kit purchases."
  },
  {
    icon: "ShieldCheck",
    title: "Safe & Verified",
    description: "Every brand is vetted and monitored. Built-in security with clear guidelines protecting young minds."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Priya Sharma",
    age: 17,
    city: "Mumbai",
    earned: "₹14,500",
    quote: "Working with Indian brands through Funngro has completely boosted my confidence! I designed 8 social media banners and got paid on time via UPI. Highly recommended for students!",
    avatarSeed: "Priya",
    rating: 5
  },
  {
    name: "Arjun Mehta",
    age: 16,
    city: "Delhi",
    earned: "₹9,800",
    quote: "I wanted to start video editing but didn't know where to look. Funngro matched me with a startup Campaign. The platform is secure, easy to navigate, and my parents are proud!",
    avatarSeed: "Arjun",
    rating: 5
  },
  {
    name: "Sneha Iyer",
    age: 18,
    city: "Bangalore",
    earned: "₹18,200",
    quote: "The content writing projects on Funngro helped me fund my own college textbooks. Love the flexible layout—I can submit articles late at night after my exams are done.",
    avatarSeed: "Sneha",
    rating: 5
  }
];

export const TRUSTED_BRANDS: string[] = [
  "Tata Play",
  "Swiggy",
  "Boat Smart",
  "Myntra Youth",
  "Paytm Insiders",
  "Mamaearth",
  "Wow! Momo",
  "Ather Grid"
];

export const TEEN_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "Is Funngro free to join?",
    answer: "Yes! Funngro is 100% free. There are no registration charges, platform deposits, or training costs. We will never ask you for money."
  },
  {
    question: "Can school students use Funngro?",
    answer: "Absolutely! Funngro is designed specifically for teenagers aged 13-19 to earn pocket money, gain experience, and build real-world skills."
  },
  {
    question: "How and when do my payments happen?",
    answer: "All payouts are disbursed securely via standard digital methods like UPI or Direct Bank Transfer within 7 working days of project completion."
  },
  {
    question: "Is it safe for teenagers to work here?",
    answer: "Yes, visual safety is our absolute priority. We require parental consent, monitor workspace dialogues, and pre-verify all brands before letting them post projects."
  },
  {
    question: "Do I need prior freelancing experience?",
    answer: "No prior commercial experience is required. We have simple, introductory micro-tasks designed to help beginners land their very first gig!"
  },
  {
    question: "How much money can I earn per month?",
    answer: "Active freelancers earn anywhere between ₹500 to ₹18,000+ per month depending on their skill level, task types, and volume of projects completed."
  }
];

export const COMPANY_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "Why hire teenagers for business tasks?",
    answer: "Gen-Z users are digital natives. They understand social trends, memes, reels, and digital tools intuitively, delivering unmatched creativity and speed for youth marketing."
  },
  {
    question: "Is hiring through Funngro safe and legally compliant?",
    answer: "Yes, our setup utilizes parental sign-offs and is entirely compliant. We manage micro-payouts and contract terms seamlessly so you can focus purely on results."
  },
  {
    question: "How quickly can my project begin after posting?",
    answer: "Very fast! Vetted applications start rolling in within 2 to 4 hours of posting, and the average complete campaign turnaround is just 3 days."
  },
  {
    question: "What types of business tasks can teens handle?",
    answer: "Our creators excel in content writing, graphic design, social media reels/shorts, market survey responses, video edits, and localization tasks."
  },
  {
    question: "How does payment and intellectual copyright work?",
    answer: "We support secure digital milestones. Payments go to a secure holding state and are only released when you approve the asset. IP rights transfer instantly upon final release."
  },
  {
    question: "Can we post confidential or NDA-required projects?",
    answer: "Yes, we support commercial enterprise workflows, NDAs, and confidentiality markers to protect sensitive project specifications."
  }
];

export const VALUE_PROPS: ValuePropItem[] = [
  {
    icon: "Percent",
    stat: "70% Savings",
    title: "Highly Cost-Effective",
    description: "Get pristine quality assets for a fraction of traditional marketing agency retainer budgets."
  },
  {
    icon: "Clock",
    stat: "3-Day Delivery",
    title: "Guaranteed Velocity",
    description: "Fast-moving Gen-Z creators ship projects inside custom sprint schedules that outpace standard agencies."
  },
  {
    icon: "TrendingUp",
    stat: "TikTok/Reels Native",
    title: "High-Cultural Relevance",
    description: "Access creators who live and breathe digital media trends. Content that resonates instantly with youth demographic."
  },
  {
    icon: "Zap",
    stat: "Vetted Skillsets",
    title: "Pre-Screened Creators",
    description: "Only work with students who have cleared skill trials, ensuring highly organized deliveries."
  }
];

export const TRUST_ITEMS_TEEN: TrustItem[] = [
  {
    icon: "ShieldCheck",
    title: "Parental Consent Integrated",
    description: "Safe environment requiring clear visual parental sign-offs for registrations and payouts."
  },
  {
    icon: "Lock",
    title: "Secured Digital Payouts",
    description: "Secure escrow holding ensures you always get paid immediately upon project approval."
  },
  {
    icon: "UserCheck",
    title: "Pre-Verified Companies Only",
    description: "Only legitimate and trusted Indian registered businesses are allowed to hire on Funngro."
  },
  {
    icon: "HelpCircle",
    title: "No Upfront Fee Request Ever",
    description: "We are an ethical platform. No security deposits or course purchase prompts are demanded."
  }
];

export const TRUST_ITEMS_COMPANY: TrustItem[] = [
  {
    icon: "ShieldAlert",
    title: "Vetted Creator Rosters",
    description: "We verify backgrounds and test operational skills before profiles go live for projects."
  },
  {
    icon: "Scale",
    title: "Commercial IP Assured",
    description: "Clear modern legal agreements transferring intellectual resource rights automatically upon milestone approval."
  },
  {
    icon: "ShieldCheck",
    title: "Zero Liability Compliance",
    description: "Structured legal structures protecting enterprise compliance while streamlining young-worker tasks."
  },
  {
    icon: "Zap",
    title: "Seamless Escrow Milestones",
    description: "Release funds only when you review and confirm the asset standards match your specifications."
  }
];

export const COST_COMPARISON: CostComparisonRow[] = [
  { metric: "Typical Budget", funngro: "₹500 - ₹5,000", agency: "₹25,000 - ₹90,000+", highlighted: true },
  { metric: "Delivery Lead", funngro: "2 - 5 Days", agency: "3 - 5 Weeks" },
  { metric: "Social-Focus Alignment", funngro: "100% Generation-Z Native", agency: "Traditional / Outdated" },
  { metric: "Revision Milestones", funngro: "Flexible / Transparent", agency: "Strictly limited or billed" },
  { metric: "Onboarding Duration", funngro: "24 Hours Match", agency: "1 - 2 Weeks setup" }
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { platform: "Instagram", href: SITE_CONFIG.social.instagram, ariaLabel: "Funngro on Instagram" },
  { platform: "LinkedIn", href: SITE_CONFIG.social.linkedin, ariaLabel: "Funngro on LinkedIn" },
  { platform: "Twitter", href: SITE_CONFIG.social.twitter, ariaLabel: "Funngro on Twitter/X" },
  { platform: "YouTube", href: SITE_CONFIG.social.youtube, ariaLabel: "Funngro on YouTube" }
];
