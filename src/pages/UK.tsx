import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bot, BarChart, Rocket, Globe, Cog, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function UK() {
  return (
    <>
      <Helmet>
        <title>Madlabs Digital | AI Automation & Growth Consulting in UK</title>
        <meta name="description" content="Madlabs Digital helps UK businesses scale with AI automation, SEO lead generation, CRM implementation, and custom software development across the UK." />
        <meta name="keywords" content="AI Automation UK, Lead Generation UK, Growth Consulting UK, Web Development UK, SEO Agency UK, Custom Software UK, Madlabs Digital UK" />
        <meta property="og:title" content="Madlabs Digital | AI Automation & Growth Consulting in UK" />
        <meta property="og:description" content="Scale your UK business operations and revenue with our AI automation and lead generation systems." />
        <link rel="canonical" href="https://madlabs.digital/uk" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative rounded-[3rem] border border-brand-grey bg-white/50 backdrop-blur-sm overflow-hidden px-6 py-20 sm:px-16 sm:py-28 lg:px-24">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 to-transparent -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center relative z-10"
            >
              <div className="mb-8 inline-flex items-center rounded-full border border-brand-purple/20 bg-brand-purple/5 px-4 py-1.5 text-sm font-medium text-brand-purple">
                Empowering British Enterprises
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-brand-dark">
                Intelligent Systems for <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-[#111]">UK Market Leaders</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-brand-text/70">
                From London fintechs to nationwide retail, we deploy custom AI solutions and bespoke software designed to modernise operations, elevate efficiency, and drive sustainable revenue growth.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-purple/20 bg-brand-purple hover:bg-brand-purple/90 text-white">
                    Consult Our Experts <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* Abstract shapes inside card */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Services for UK Businesses */}
      <section className="py-24 sm:py-32 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Services for UK Businesses.</h2>
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

      {/* Why UK Businesses Choose Madlabs */}
      <section className="py-24 bg-brand-bg relative border-t border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Engineered for the British Economy</h2>
              <p className="text-lg text-brand-text/70 mb-10 leading-relaxed">
                We bring global engineering excellence to the UK, helping traditional industries digitise and modern tech companies scale without accumulating technical debt.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "GDPR Compliant By Default", desc: "Security and data sovereignty integrated from day one." },
                  { title: "Legacy System Modernisation", desc: "Bridging the gap between old infrastructure and new AI capabilities." },
                  { title: "Bespoke Automation", desc: "Custom workflows tailored to unique organisational structures." }
                ].map((highlight, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">{highlight.title}</h4>
                      <p className="text-brand-text/70 text-sm mt-1">{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="relative bg-white rounded-3xl p-10 overflow-hidden shadow-lg border border-brand-grey/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full -z-10" />
                <div className="text-3xl font-bold text-[#111] mb-6 leading-tight">"They didn't just write code, they transformed how we operate."</div>
                <p className="text-brand-text/70 mb-8 text-lg">
                  Our UK partners value our ability to translate complex business challenges into elegant, scalable digital solutions that deliver measurable ROI from day one.
                </p>
                <Link to="/case-studies">
                  <Button variant="default" className="bg-[#111] text-white hover:bg-[#222]">
                    See Our Impact
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
    price: "£2,000"
  },
  {
    slug: "crm-systems",
    title: "CRM & Business Systems",
    desc: "Organize and scale operations with custom pipelines, customer journey automation, and team onboarding.",
    icon: Cog,
    deliverables: ["CRM Architecture Setup", "Pipeline Automation", "Data Migration"],
    price: "£1,500"
  },
  {
    slug: "lead-generation",
    title: "Lead Generation Systems",
    desc: "Generate qualified leads consistently through SEO, GEO optimization, and high-converting landing pages.",
    icon: Rocket,
    deliverables: ["Landing Page Build", "Conversion Funnel", "Lead Magnet"],
    price: "£1,300"
  },
  {
    slug: "product-consulting",
    title: "Product Consulting",
    desc: "Executive-level product leadership, growth strategy, and digital transformation consulting for your leadership team.",
    icon: BarChart,
    deliverables: ["Weekly Strategy Calls", "Roadmap Planning", "Architecture Review"],
    price: "£1000/mo"
  },
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Create fast, scalable, SEO-ready corporate websites, landing pages, and web applications tailored for the UK market.",
    icon: Globe,
    deliverables: ["Custom UI/UX Design", "Responsive Frontend", "CMS Integration"],
    price: "£1,100"
  },
  {
    slug: "seo-geo-optimization",
    title: "SEO & GEO Optimization",
    desc: "Dominate search results locally in the UK and regionally, capturing high-intent organic traffic.",
    icon: ArrowUpRight,
    deliverables: ["Keyword Strategy", "On-Page SEO", "Technical Audits"],
    price: "£850/mo"
  }
];
