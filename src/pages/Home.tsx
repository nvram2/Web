import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bot, BarChart, Rocket, Globe, Cog, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Madlabs Digital | AI Automation & Growth Consulting Agency</title>
        <meta name="description" content="Madlabs Digital is a premium technology consulting company helping businesses scale with AI automation, SEO lead generation, and custom software development." />
        <meta name="keywords" content="AI Automation, Lead Generation, Growth Consulting, Web Development, SEO Agency, Custom Software, Madlabs Digital" />
        <meta property="og:title" content="Madlabs Digital | AI Automation & Growth Consulting" />
        <meta property="og:description" content="Scale your business operations and revenue with our AI automation and lead generation systems." />
        <link rel="canonical" href="https://madlabs.digital/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Madlabs Digital offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer AI business automation, SEO lead generation, custom web development, product development, and CRM system integration to help scale operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much do your services cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our pricing scales with the scope and impact of the project. We design custom-tailored solutions based on a thorough audit of your current bottlenecks. Contact us for a free assessment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you work with international clients?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we work with ambitious teams and enterprise clients globally, with strong footprints in the UAE, GCC markets, and North America."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does a typical project take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A typical implementation can take anywhere from 2 to 12 weeks, depending on whether it's a focused AI chatbot deployment or a full-scale digital product build."
                  }
                }
              ]
            }
          `}
        </script>
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
              AI-Powered Technology & Growth Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1]">
              Build, Automate & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Scale Your Business</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-text/70 max-w-2xl mx-auto">
              Madlabs Digital helps businesses generate real leads, automate operations, and increase revenue through AI, automation, and technology solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20">
                  Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact?type=audit">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white">
                  Get Free Website Audit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[20%] w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl opacity-50" />
        </div>
      </section>

      {/* Trusted By & Results */}
      <section className="border-y border-brand-grey bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-text/50 mb-8">
            Delivering measurable growth since 2024
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-center text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$6.4M+</div>
              <div className="text-sm font-medium text-brand-text/70">Business Value Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-sm font-medium text-brand-text/70">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">900k+</div>
              <div className="text-sm font-medium text-brand-text/70">Users Scaled For Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <div className="text-sm font-medium text-brand-text/70">Organic Client Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Systems designed for outcomes.</h2>
            <p className="text-lg text-brand-text/70">
              We don't just write code. We build growth engines. From AI chatbots to fully automated sales pipelines.
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
                className="bg-white p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-lime transition-all">
                  <service.icon className="w-6 h-6 text-brand-text group-hover:text-brand-dark transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to={`/services/${service.slug}`} className="inline-flex items-center text-sm font-semibold text-brand-purple hover:text-brand-text transition-colors">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Proven Results.</h2>
              <p className="text-lg text-brand-text/70">Real numbers from real businesses we've helped scale.</p>
            </div>
            <Link to="/case-studies" className="inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all cases <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Link to="/case-studies/uae-insurance" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors">Insurance Conglomerate UAE</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Scaling organic traffic and lead generation</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">SEO strategy, content marketing, and technical optimization leading to massive growth across GCC markets.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-brand-text/10 group-hover:border-white/20 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-brand-purple group-hover:text-brand-lime mb-1">$1M+</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70">Organic Revenue</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-blue group-hover:text-white mb-1">100k+</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70">Organic Clicks</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center font-semibold text-brand-text group-hover:text-brand-lime transition-colors">
                    Read full case study <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/case-studies/web3-gaming" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors">Web 3 Gaming Platform</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Scaling a blockchain gaming ecosystem</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Product leadership, growth systems, tokenomics, and marketplace development.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-brand-text/10 group-hover:border-white/20 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-brand-purple group-hover:text-brand-lime mb-1">700k+</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70">Users Acquired</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-blue group-hover:text-white mb-1">2x</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70">Revenue Growth</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center font-semibold text-brand-text group-hover:text-brand-lime transition-colors">
                    Read full case study <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-brand-bg border-t border-brand-grey">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-brand-text/70">Clear answers to the most common questions about our services and process.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-grey">
              <h3 className="text-xl font-bold mb-3">What services does Madlabs Digital offer?</h3>
              <p className="text-brand-text/70 leading-relaxed">
                We offer AI business automation, SEO lead generation, custom web development, product development, and CRM system integration to help scale operations.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-grey">
              <h3 className="text-xl font-bold mb-3">How much do your services cost?</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Our pricing scales with the scope and impact of the project. We design custom-tailored solutions based on a thorough audit of your current bottlenecks. Contact us for a free assessment.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-grey">
              <h3 className="text-xl font-bold mb-3">Do you work with international clients?</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Yes, we work with business, startups and enterprise clients globally, with strong footprints in the UAE, EU, and North America.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-grey">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-brand-text/70 leading-relaxed">
                A typical implementation can take anywhere from 2 to 12 weeks, depending on whether it's a focused AI chatbot deployment or a full-scale digital product build. We also work on long term projects based on business objectives
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-grey">
              <h3 className="text-xl font-bold mb-3">What's different between Madlabs and a Marketing agency?</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Madlabs is not a marketing agency. We work on creating longterm product value and higher user satisfaction rather than short-term marketing led spikes.
              </p>
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
    title: "AI Business Automation",
    desc: "Reduce manual work and improve efficiency with AI Chatbots, internal assistants, and workflow automation.",
    icon: Bot,
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    desc: "Generate qualified leads consistently through SEO, GEO optimization, and high-converting landing pages.",
    icon: Rocket,
  },
  {
    slug: "crm-systems",
    title: "CRM & Systems",
    desc: "Organize and scale operations with HubSpot, GoHighLevel, sales pipelines, and customer journey automation.",
    icon: Cog,
  },
  {
    slug: "product-development",
    title: "Product Development",
    desc: "Build scalable digital products, MVP development, SaaS platforms, and mobile applications.",
    icon: Globe,
  },
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Create fast, scalable, SEO-ready corporate websites, landing pages, and e-commerce platforms.",
    icon: ArrowUpRight,
  },
  {
    slug: "growth-consulting",
    title: "Growth Consulting",
    desc: "Executive-level product leadership, growth strategy, and digital transformation consulting.",
    icon: BarChart,
  }
];
