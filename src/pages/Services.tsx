import { Helmet } from "react-helmet-async";
import { Bot, Rocket, Cog, Globe, ArrowUpRight, BarChart, Database } from "lucide-react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const allServices = [
  {
    slug: "ai-automation",
    title: "AI Business Automation",
    desc: "Streamline business operations with AI assistants, intelligent workflows, customer support automation, and connected business systems.",
    items: ["AI Chatbots", "AI Customer Support", "Internal AI Assistants", "Workflow Automation", "CRM Automation"],
    icon: Bot,
  },
  {
    slug: "lead-generation",
    title: "Lead Generation Systems",
    desc: "Increase qualified enquiries through SEO, GEO optimization, content strategy, and conversion-focused landing pages.",
    items: ["SEO & GEO Optimization", "Landing Pages", "Lead Funnels", "Conversion Optimization", "Email Automation"],
    icon: Rocket,
  },
  {
    slug: "crm-systems",
    title: "CRM & Business Systems",
    desc: "Connect your sales, marketing, and customer data with CRM implementation, workflow automation, and integrated business systems.",
    items: ["HubSpot Setup", "Zoho CRM", "Pipedrive", "GoHighLevel", "Sales Pipeline Setup"],
    icon: Cog,
  },
  {
    slug: "product-development",
    title: "Product Development",
    desc: "Design and develop SaaS platforms, mobile apps, MVPs, and digital products built for long-term success.",
    items: ["Product Strategy", "MVP Development", "SaaS Platforms", "Mobile Apps", "Web Applications"],
    icon: Globe,
  },
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Develop fast, secure, SEO-ready websites, eCommerce stores, and custom web applications with Analytics that convert visitors into customers.",
    items: ["Next.js & React", "Headless CMS", "E-commerce", "Corporate Websites", "Performance Optimization"],
    icon: ArrowUpRight,
  },
  {
    slug: "digital-consulting",
    title: "Digital Consulting",
    desc: "Strategic guidance across product development, digital transformation, SEO, automation, and technology planning.",
    items: ["Fractional Product Leadership", "Growth Strategy", "Digital Transformation", "Process Optimization"],
    icon: BarChart,
  },
  {
    slug: "blockchain",
    title: "Blockchain & Web3",
    desc: "Specialist solutions for decentralized ecosystems.",
    items: ["Smart Contracts", "Tokenomics Design", "Marketplace Development", "Wallet Integration"],
    icon: Database,
  }
];

export default function Services() {
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const el = document.getElementById(slug);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>AI Automation & Web Development Services | Madlabs Digital</title>
        <meta name="description" content="Explore our tailored growth services including AI business automation, SEO lead generation systems, CRM setups, and custom web development." />
        <meta name="keywords" content="AI Automation Services, Lead Generation Services, CRM Setup, Web Development, Product Strategy, Growth Consulting" />
        <meta property="og:title" content="Our Services | Madlabs Digital" />
        <meta property="og:description" content="Reduce costs and generate more revenue with our outcome-focused digital services." />
        <link rel="canonical" href="https://madlabs.digital/services" />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-bg border-b border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Capabilities designed for scalable growth.</h1>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We focus on business outcomes, not just technical deliverables. Reduce costs, generate more revenue, and automate your operations.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {allServices.map((service, idx) => (
              <div id={service.slug} key={idx} className="group flex flex-col bg-white border border-brand-grey rounded-3xl p-8 lg:p-10 hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all scroll-mt-32">
                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-lime transition-all">
                  <service.icon className="w-7 h-7 text-brand-text group-hover:text-brand-dark transition-colors" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-brand-text/70 mb-8 max-w-md">{service.desc}</p>
                <div className="mt-auto">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text/50 mb-4">Core Offerings</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-brand-bg">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-brand-text/70 mb-10 text-lg">
            Let's discuss how we can build a technology strategy tailored to your business goals.
          </p>
          <Link to="/contact">
            <Button size="lg">Book Strategy Call</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
