import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Stethoscope, GraduationCap, ShoppingCart, Truck, Users, Globe2, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

const industries = [
  {
    name: "Startups",
    icon: Rocket,
    desc: "Scale fast with lean, automated operations and robust product MVPs designed to attract investment and early users.",
    slug: "startups",
    color: "from-brand-purple/20 to-transparent",
  },
  {
    name: "SaaS",
    icon: Globe2,
    desc: "Improve user retention, automate onboarding flows, and scale infrastructure to handle exponential user growth.",
    slug: "saas",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    name: "Real Estate",
    icon: Building2,
    desc: "Automate lead capture from property listings, qualify buyers with AI scheduling, and streamline CRM pipelines.",
    slug: "real-estate",
    color: "from-brand-lime/20 to-transparent",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    desc: "Secure patient data systems, build HIPAA-compliant portals, and automate appointment scheduling and reminders.",
    slug: "healthcare",
    color: "from-brand-purple/20 to-transparent",
  },
  {
    name: "Education",
    icon: GraduationCap,
    desc: "Build scalable EdTech platforms, automate student enrollment funnels, and manage alumni relations through smart CRMs.",
    slug: "education",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    desc: "Optimize conversion rates, integrate advanced PIMs, automate abandoned cart flows, and scale headless stores.",
    slug: "e-commerce",
    color: "from-brand-lime/20 to-transparent",
  },
  {
    name: "Logistics",
    icon: Truck,
    desc: "Build tracking dashboards, automate dispatch communications, and implement AI document processing for invoices.",
    slug: "logistics",
    color: "from-brand-purple/20 to-transparent",
  },
  {
    name: "Recruitment",
    icon: Users,
    desc: "Automate candidate screening with AI, speed up client matching, and integrate custom talent ATS portals.",
    slug: "recruitment",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    name: "Enterprise",
    icon: Briefcase,
    desc: "Digital transformation consulting, legacy system modernization, and secure, large-scale custom business applications.",
    slug: "enterprise",
    color: "from-brand-lime/20 to-transparent",
  }
];

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | Real Estate, SaaS, E-commerce | Madlabs Digital</title>
        <meta name="description" content="We provide tailored technology, AI automation, and lead generation solutions for Real Estate, SaaS, Healthcare, E-commerce, Logistics, and Enterprise businesses." />
        <meta name="keywords" content="SaaS Automation, Real Estate Lead Generation, Healthcare IT Consulting, E-commerce Optimization, Enterprise Digital Transformation" />
        <meta property="og:title" content="Industries We Serve | Madlabs Digital" />
        <meta property="og:description" content="Industry-specific growth engines tailored to your market mechanics." />
        <link rel="canonical" href="https://madlabs.digital/industries" />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-bg border-b border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Industry-specific growth engines.</h1>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Every industry has unique bottlenecks. We build custom applications, automations, and growth systems tailored to your specific market mechanics.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div key={ind.slug} className={`flex flex-col bg-gradient-to-br ${ind.color} p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 transition-all`}>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <ind.icon className="w-6 h-6 text-brand-text" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{ind.name}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-8 flex-grow">
                  {ind.desc}
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full bg-white">
                    Discuss solutions <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-brand-bg border-t border-brand-grey">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-brand-text/70 mb-10 text-lg">
            Technology problems are universal. If you have manual operations or need to scale your lead generation, we can architect a solution.
          </p>
          <Link to="/contact?type=audit">
            <Button size="lg">Get a Custom Assessment</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
