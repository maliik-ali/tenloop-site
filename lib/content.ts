// Page content lives here so it can later be swapped for a CMS (e.g. Payload) without touching layout code.

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio", hasMenu: true },
];

export const clientLogos = [
  { src: "/assets/client-1.svg", alt: "Bringly", width: 128, height: 30 },
  { src: "/assets/client-2.svg", alt: "Tendobi", width: 110, height: 30 },
  { src: "/assets/client-3.svg", alt: "Cube10", width: 118, height: 30 },
  { src: "/assets/client-4.svg", alt: "Doctorly", width: 136, height: 30 },
  { src: "/assets/client-5.svg", alt: "Techlify", width: 110, height: 30 },
  { src: "/assets/client-6.svg", alt: "Veterinary", width: 134, height: 23 },
  { src: "/assets/client-7.svg", alt: "Financely", width: 107, height: 22 },
  { src: "/assets/client-8.svg", alt: "CrowdFi", width: 113, height: 27 },
];

export const services = [
  {
    icon: { src: "/assets/svc-rocket.svg", width: 30, height: 30 },
    title: "SaaS Product Design",
    text: "End-to-end product design for SaaS platforms. From user research to high-fidelity prototypes that convert.",
    items: ["User Research & Personas", "UI/UX Design System", "Interactive Prototypes"],
  },
  {
    icon: { src: "/assets/svc-bolt.svg", width: 26.25, height: 30 },
    title: "MVP Design Sprint",
    text: "Launch faster with our 2-week MVP design sprint. Perfect for validating ideas and securing funding.",
    items: ["Rapid Wireframing", "Core Feature Design", "Investor-Ready Mockups"],
  },
  {
    icon: { src: "/assets/svc-audit.svg", width: 30, height: 30 },
    title: "UX Audit & Strategy",
    text: "Identify conversion bottlenecks and optimize your product's user experience for maximum growth.",
    items: ["Heuristic Evaluation", "User Flow Analysis", "Actionable Recommendations"],
  },
];

export const featuredService = {
  icon: { src: "/assets/svc-mobile.svg", width: 22.5, height: 30 },
  title: "Mobile App Design",
  text: "Native iOS and Android app designs that feel intuitive and look stunning on every device.",
  cta: "Learn More",
  image: "/assets/mobile-app.png",
};

export const designSystemService = {
  icon: { src: "/assets/svc-layers.svg", width: 33.75, height: 30 },
  title: "Design System",
  text: "Scalable design systems that ensure consistency and speed up your product development.",
  items: ["Component Library", "Style Guide"],
};

export const testimonials = [
  { quote: "TeamUXD transformed our product vision into a stunning reality. The design quality exceeded our expectations and helped us secure Series A funding.", name: "David Park", role: "CEO, DataFlow", photo: "/assets/founder-1.png" },
  { quote: "The 2-week MVP sprint was a game-changer. We launched faster than competitors and the design quality helped us stand out in a crowded market.", name: "Jessica Wong", role: "Founder, Stackify", photo: "/assets/founder-2.png" },
  { quote: "Their UX audit identified critical issues we were blind to. After implementing their recommendations, our conversion rate increased by 180%.", name: "Michael Torres", role: "CTO, CloudNest", photo: "/assets/founder-3.png" },
  { quote: "Professional, creative, and incredibly responsive. They truly understand what startups need and deliver exceptional value.", name: "Lisa Anderson", role: "CEO, WellnessTrack", photo: "/assets/founder-4.png" },
  { quote: "The design system they created scaled perfectly as we grew. It's been instrumental in maintaining consistency across our product.", name: "Ryan Mitchell", role: "Product Lead, Velociti", photo: "/assets/founder-5.png" },
  { quote: "Best design investment we've made. The attention to detail and user-centric approach resulted in a product our users absolutely love.", name: "Nina Patel", role: "Founder, GrowthLab", photo: "/assets/founder-6.png" },
];

export const plans = [
  {
    name: "Starter",
    tagline: "Perfect for validating your idea",
    icon: { src: "/assets/plan-sprout.svg", width: 24, height: 24 },
    price: "$4,999",
    unit: "/project",
    note: "One-time payment",
    features: ["5-7 Key Screens", "Basic Design System", "Interactive Prototype", "2 Revision Rounds", "2 Week Delivery"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "For scaling SaaS products",
    icon: { src: "/assets/plan-rocket.svg", width: 25.2, height: 25.2 },
    price: "$9,999",
    unit: "/project",
    note: "One-time payment",
    features: ["15-20 Screens", "Complete Design System", "Advanced Prototyping", "User Testing Session", "Unlimited Revisions", "4 Week Delivery", "Priority Support"],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Custom solutions at scale",
    icon: { src: "/assets/plan-crown.svg", width: 27, height: 24 },
    price: "Custom",
    unit: "",
    note: "Tailored to your needs",
    features: ["Unlimited Screens", "Enterprise Design System", "Dedicated Design Team", "Ongoing Support", "Custom Timeline"],
    cta: "Contact Sales",
    featured: false,
  },
];

export const planIncludes = [
  { label: "Source Files", icon: { src: "/assets/inc-files.svg", width: 22.5, height: 30 } },
  { label: "Developer Handoff", icon: { src: "/assets/inc-handoff.svg", width: 37.5, height: 30 } },
  { label: "Slack Support", icon: { src: "/assets/inc-slack.svg", width: 37.5, height: 30 } },
  { label: "NDA Protection", icon: { src: "/assets/inc-nda.svg", width: 30, height: 30 } },
];

// ---------- Contact page ----------

export const contactServices = ["SaaS Product Design", "MVP Design Sprint", "UX Audit & Strategy", "Design System", "Mobile App Design"];
export const contactBudgets = ["Under $5k", "$5k – $10k", "$10k – $25k", "$25k+"];

export const contactCards = [
  {
    icon: "/assets/icon-mail.svg",
    title: "Email us",
    body: "Drop us a line and we’ll get back to you within one business day.",
    link: { label: "hello@tenloop.design", href: "mailto:hello@tenloop.design" },
  },
  {
    icon: "/assets/icon-calendar.svg",
    title: "Book a call",
    body: "Prefer to talk it through? Pick a 30-minute slot that suits you.",
    link: { label: "Schedule a discovery call →", href: "#" },
  },
  {
    icon: "/assets/icon-location.svg",
    title: "Visit us",
    body: "Based in Berlin, Germany — working with SaaS teams worldwide.",
    link: { label: "Get directions →", href: "https://maps.google.com/?q=Berlin" },
  },
];

const devAnswer = "We deliver developer-ready files and handoff specs, and can recommend trusted development partners for build.";
export const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take 2–6 weeks depending on scope. MVP design sprints are delivered in 2 weeks; full product redesigns usually take 4–6 weeks." },
  { q: "Do you work with early-stage startups?", a: "Yes — from pre-seed founders validating an idea to scaling SaaS teams. Our Starter plan is built for early stages." },
  { q: "What do I need to prepare before we start?", a: "A short brief, access to your current product (if any) and 30 minutes for a kickoff call. We handle the rest." },
  { q: "Do you also handle development?", a: devAnswer },
  // The next three items are duplicated in the Figma design — replace with real questions.
  { q: "Do you also handle development?", a: devAnswer },
  { q: "Do you also handle development?", a: devAnswer },
  { q: "Do you also handle development?", a: devAnswer },
];
