import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bot, BarChart, Rocket, Globe, Cog, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function UAE() {
  return (
    <>
      <Helmet>
        <title>Madlabs Digital | AI Automation & Growth Consulting in UAE</title>
        <meta name="description" content="Madlabs Digital helps UAE businesses scale with AI automation, SEO lead generation, CRM implementation, and custom software development across the UAE." />
        <meta name="keywords" content="AI Automation UAE, Lead Generation UAE, Growth Consulting UAE, Web Development UAE, SEO Agency UAE, Custom Software UAE, Madlabs Digital UAE" />
        <meta property="og:title" content="Madlabs Digital | AI Automation & Growth Consulting in UAE" />
        <meta property="og:description" content="Scale your UAE business operations and revenue with our AI automation and lead generation systems." />
        <link rel="canonical" href="https://madlabs.digital/uae" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-8 inline-flex items-center rounded-full border border-brand-grey bg-white/50 px-4 py-1.5 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-brand-lime mr-2"></span>
              Accelerating Digital Innovation in the GCC
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1]">
              Transforming UAE <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Enterprises with AI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-text/70 max-w-2xl mx-auto">
              From Dubai to Abu Dhabi, we empower organizations with custom AI integrations, scalable digital infrastructure, and robust automation ecosystems designed specifically for the region's fast-paced economy.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20">
                  Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact?type=audit">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white border-brand-grey">
                  Get Free Assessment
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute right-0 top-0 translate-x-[30%] -translate-y-[20%] w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl opacity-50" />
        </div>
      </section>

      {/* Services for UAE Businesses */}
      <section className="py-24 sm:py-32 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Services for UAE Businesses.</h2>
            <p className="text-lg text-brand-text/70">
              We design custom-tailored solutions based on a thorough audit of your current bottlenecks. Transparent pricing and structured deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-lime transition-all">
                  <service.icon className="w-6 h-6 text-brand-text group-hover:text-brand-dark transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text/50 mb-2">Deliverables</h4>
                  <ul className="space-y-1">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm font-medium flex items-center text-brand-text/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/50 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-brand-grey mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-text/50">Starting From</p>
                    <p className="text-lg font-bold text-brand-purple">{service.price}</p>
                  </div>
                  <Link to={`/contact?type=strategy`} className="inline-flex items-center text-sm font-semibold text-[#111] hover:text-brand-purple transition-colors bg-brand-lime/20 px-3 py-1.5 rounded-lg">
                    Book <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UAE Businesses Choose Madlabs */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Pioneering UAE Digital Growth</h2>
              <p className="text-lg text-brand-text/70 mb-10 leading-relaxed">
                By blending high-velocity execution with an acute awareness of the Emirates' diverse commercial landscape, we engineer solutions that streamline complexities and scale effortlessly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "GCC compliance ready",
                  "Performance-focused architecture",
                  "Cross-cultural digital strategy",
                  "Scalable multi-lingual tools",
                  "Predictable lead generation",
                  "Advanced GenAI integration",
                  "Enterprise-grade security"
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-lime/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-dark" />
                    </div>
                    <span className="font-semibold text-brand-text">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 blur-3xl opacity-50 rounded-[3rem]"></div>
              <div className="relative bg-[#111] rounded-[2rem] p-10 overflow-hidden shadow-2xl border border-brand-grey text-white">
                <div className="text-4xl font-bold text-brand-lime mb-4">"Catalysts for regional expansion."</div>
                <p className="text-white/70 mb-8 text-lg">
                  Navigating the competitive hubs of the UAE requires more than standard digital agencies. We position ourselves as growth mechanics, refining your systems from the inside out to ensure lasting dominance.
                </p>
                <Link to="/case-studies">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#111]">
                    View Our Results
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="bg-[#111] rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-blue/20 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your operations?</h2>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                Get a free AI readiness assessment or a comprehensive website audit to identify growth bottlenecks and automation opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-base">Book a Strategy Call</Button>
                </Link>
                <Link to="/contact?type=audit">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base text-white border-white/20 hover:bg-white hover:text-[#111]">
                    Get Free Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    desc: "Reduce manual work and improve efficiency with AI Chatbots, internal assistants, and workflow automation.",
    icon: Bot,
    deliverables: ["Process Audit", "Custom AI Chatbot", "Workflow Automations"],
    price: "AED 8,000"
  },
  {
    slug: "crm-systems",
    title: "CRM & Business Systems",
    desc: "Organize and scale operations with custom pipelines, customer journey automation, and team onboarding.",
    icon: Cog,
    deliverables: ["CRM Architecture Setup", "Pipeline Automation", "Data Migration"],
    price: "AED 5,000"
  },
  {
    slug: "lead-generation",
    title: "Lead Generation Systems",
    desc: "Generate qualified leads consistently through SEO, GEO optimization, and high-converting landing pages.",
    icon: Rocket,
    deliverables: ["Landing Page Build", "Conversion Funnel", "Lead Magnet"],
    price: "AED 6,000"
  },
  {
    slug: "product-consulting",
    title: "Product Consulting",
    desc: "Executive-level product leadership, growth strategy, and digital transformation consulting for your leadership team.",
    icon: BarChart,
    deliverables: ["Weekly Strategy Calls", "Roadmap Planning", "Architecture Review"],
    price: "AED 4,000/mo"
  },
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Create fast, scalable, SEO-ready corporate websites, landing pages, and web applications tailored for the GCC market.",
    icon: Globe,
    deliverables: ["Custom UI/UX Design", "Responsive Frontend", "CMS Integration"],
    price: "AED 5,000"
  },
  {
    slug: "seo-geo-optimization",
    title: "SEO & GEO Optimization",
    desc: "Dominate search results locally in the UAE and regionally, capturing high-intent organic traffic.",
    icon: ArrowUpRight,
    deliverables: ["Keyword Strategy", "On-Page SEO", "Technical Audits"],
    price: "AED 2,500/mo"
  }
];
