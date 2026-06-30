import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Stethoscope, GraduationCap, ShoppingCart, Truck, Users, Globe2, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

const industries = [
  {
    name: "Startups",
    icon: Rocket,
    desc: "Launch faster with MVP development, product strategy, and scalable technology built for early traction and investor readiness.",
    slug: "startups",
    color: "from-brand-purple/20 to-transparent",
  },
  {
    name: "SaaS",
    icon: Globe2,
    desc: "Improve customer onboarding, strengthen retention, and build reliable SaaS platforms that support long-term business expansion.",
    slug: "saas",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    name: "Real Estate",
    icon: Building2,
    desc: "Capture better property enquiries, automate lead qualification, and connect every opportunity through integrated CRM systems.",
    slug: "real-estate",
    color: "from-brand-lime/20 to-transparent",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    desc: "Develop secure healthcare platforms, patient portals, and automated scheduling systems that improve operational efficiency.",
    slug: "healthcare",
    color: "from-brand-purple/20 to-transparent",
  },
  {
    name: "Education",
    icon: GraduationCap,
    desc: "Create engaging education platforms, simplify admissions, and manage student relationships through connected digital systems.",
    slug: "education",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    desc: "Increase online sales with faster ecommerce platforms, conversion optimization, and automated customer engagement.",
    slug: "e-commerce",
    color: "from-brand-lime/20 to-transparent",
  },
  {
    name: "Logistics",
    icon: Truck,
    desc: "Improve logistics operations with real time tracking, workflow automation, and intelligent document processing.",
    slug: "logistics",
    color: "from-brand-purple/20 to-transparent",
  },
  {
    name: "Recruitment",
    icon: Users,
    desc: "Simplify hiring with AI assisted screening, applicant tracking, and recruitment platforms that improve hiring efficiency.",
    slug: "recruitment",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    name: "Enterprise",
    icon: Briefcase,
    desc: "Modernize legacy systems, improve business operations, and develop secure enterprise software for complex organizations.",
    slug: "enterprise",
    color: "from-brand-lime/20 to-transparent",
  }
];

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | Industry Focused Digital Consulting | Madlabs Digital</title>
        <meta name="description" content="Madlabs Digital delivers industry focused software development, AI consulting, SEO, and automation services for startups, SaaS, healthcare, ecommerce, logistics, real estate, and enterprise businesses." />
        <meta name="keywords" content="Digital Consulting, AI Consulting, Software Development, Industry Solutions, Business Automation, SEO,SaaS Automation, Real Estate Lead Generation, Healthcare IT Consulting, E-commerce Optimization," />
        <meta property="og:title" content="Industries We Serve | Madlabs Digital" />
        <meta property="og:description" content="Industry-specific growth engines tailored to your market mechanics." />
        <link rel="canonical" href="https://madlabs.digital/industries" />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-bg border-b border-brand-grey text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Digital expertise for every industry.</h1>
            <p className="text-lg text-brand-text/70 leading-relaxed mx-auto">
              Every industry faces unique operational challenges. We design software, AI solutions, and digital systems tailored to your business goals and customer needs.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div key={ind.slug} className="bg-white group flex flex-col p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-lime transition-all">
                  <ind.icon className="w-6 h-6 text-brand-text group-hover:text-brand-dark transition-colors" />
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
          <h2 className="text-3xl font-bold mb-6">Need a solution for another industry?</h2>
          <p className="text-brand-text/70 mb-10 text-lg">
            Every business has different challenges. We create tailored software, automation, AI, and digital solutions designed around your specific requirements.
          </p>
          <Link to="/contact?type=audit">
            <Button size="lg">Book a Consultation</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
