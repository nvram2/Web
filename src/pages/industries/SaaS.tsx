import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, Building, ShieldCheck, Mail, LineChart, Code2, Link as LinkIcon, Laptop, Rocket, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function SaaS() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>SaaS Development Services | Madlabs Digital</title>
        <meta name="description" content="Helping SaaS companies build better products and scale faster. Expert SaaS product development, AI automation, and growth strategy." />
        <meta name="keywords" content="SaaS Development Services, SaaS Development Company, SaaS Product Development, SaaS Consulting, SaaS Product Strategy, AI for SaaS, Subscription Software Development, Product-Led Growth, SaaS UX, SaaS Automation" />
        <link rel="canonical" href="https://madlabs.digital/industries/saas" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SaaS Development Services | Madlabs Digital" />
        <meta property="og:description" content="Helping SaaS companies build better products and scale faster. Expert SaaS product development, AI automation, and growth strategy." />
        <meta property="og:url" content="https://madlabs.digital/industries/saas" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS Development Services | Madlabs Digital" />
        <meta name="twitter:description" content="Helping SaaS companies build better products and scale faster. Expert SaaS product development, AI automation, and growth strategy." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "SaaS Development Services",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for SaaS companies, offering SaaS product development, AI automation, and scalable software solutions.",
              "areaServed": "Global"
            }
          `}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://madlabs.digital"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Industries",
                "item": "https://madlabs.digital/industries"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": "SaaS"
              }]
            }
          `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does SaaS development take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SaaS development timelines vary depending on the scope and complexity of the platform. An initial MVP can take 8 to 16 weeks, while comprehensive enterprise SaaS platforms may require several months of iterative development."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does SaaS development cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost depends entirely on the features, infrastructure requirements, and integrations. We provide tailored estimates based on a lean development approach to ensure you get the best ROI."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[20%] w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-lime mr-2"></span>
              SaaS Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
            Build Better Saas and <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Scale Faster.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Building a successful SaaS business requires more than shipping features. From product strategy and scalable architecture to AI automation, onboarding optimization, customer retention, CRM integration, and growth systems, Madlabs Digital helps SaaS companies increase recurring revenue while creating better customer experiences.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Scale Your SaaS <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Product Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">700k+</div>
                <div className="text-sm font-medium text-white/60">Users Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2x</div>
                <div className="text-sm font-medium text-white/60">Revenue Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm font-medium text-white/60">Platform Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-sm font-medium text-white/60">Years Building Digital Products</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUSTED BY */}
      <section className="py-10 border-y border-brand-grey bg-white overflow-hidden">
         <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-text/50 mb-6">
              Empowering ambitious organizations globally
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
              <span className="text-xl font-bold tracking-widest">OLGE</span>
              <span className="text-xl font-serif italic">Han Sepa</span>
              <span className="text-xl font-mono">Better Homes</span>
              <span className="text-xl font-extrabold uppercase">Aura</span>
            </div>
         </div>
      </section>

      {/* SECTION 3: THE CHALLENGE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The SaaS Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Acquiring customers is only the first step. Scaling a SaaS business means relentlessly reducing churn, improving onboarding, and scaling infrastructure. As your platform grows, so does feature prioritization conflict, technical debt, and support costs.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Many SaaS companies hit a growth ceiling because they struggle with customer retention, complex subscription management, and lack of product analytics. They build features blindly instead of focusing on pricing optimization and user activation.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Sustainable SaaS growth comes from continuous improvement rather than just feature releases. It requires a seamless integration of marketing, product-led growth, data analytics, and rock-solid software engineering. We help you connect those dots.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY SAAS COMPANIES PLATEAU */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Many SaaS Companies Plateau</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Building a product-led growth engine requires continuous optimization. Without it, growth stalls and churn spikes.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Weak Onboarding & Poor Activation</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Feature overload and ignoring customer feedback during the initial user journey leads to immediate churn. If users don't see value in the first session, they rarely come back.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> No Analytics & Poor Scalability</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    No experimentation, slow performance, and weak documentation create friction. When you don't track how users interact with your software, you can't optimize for retention or expansion revenue.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> Disconnected Customer Data & No AI</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Siloed systems prevent a unified view of the customer. Failing to leverage AI for automation, personalization, and support means you're operating with higher costs and lower efficiency than your competitors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">Unlocking Product-Led Growth</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Continuous Optimization</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Growth requires rigorous testing of onboarding flows, pricing tiers, and feature adoption strategies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Focus on Activation</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Guide users to their "Aha!" moment as quickly as possible to lock in long-term retention.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unified Data Strategy</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Connect your product usage data with your CRM and marketing tools to identify expansion opportunities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: THE FRAMEWORK */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs SaaS Growth Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic approach to building, optimizing, and scaling SaaS platforms for maximum recurring revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Discovery", desc: "Understanding the core business metrics, identifying bottlenecks in activation, and mapping the ideal customer journey." },
              { num: "02", title: "Research", desc: "Analyzing user behavior, competitive positioning, and conducting deep qualitative interviews to uncover real friction points." },
              { num: "03", title: "Product Strategy", desc: "Aligning product roadmaps with business goals, prioritizing high-impact features over nice-to-haves." },
              { num: "04", title: "UX Optimization", desc: "Refining onboarding flows, simplifying complex interfaces, and designing for immediate time-to-value." },
              { num: "05", title: "Development", desc: "Building robust, scalable architecture and deploying clean, maintainable code for core platform features." },
              { num: "06", title: "Analytics", desc: "Implementing advanced product tracking to measure feature adoption, drop-off rates, and cohort retention." },
              { num: "07", title: "AI Automation", desc: "Integrating intelligent agents to automate support, personalize experiences, and optimize internal operations." },
              { num: "08", title: "Growth Experiments", desc: "Running A/B tests on pricing models, up-sell prompts, and acquisition channels to find scalable growth levers." },
              { num: "09", title: "Optimization", desc: "Iterating based on experiment data to systematically improve MRR, LTV, and reduce churn." },
              { num: "10", title: "Scale", desc: "Expanding infrastructure, entering new markets, and preparing the business for enterprise-level demands." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-lime text-black font-bold flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLUTIONS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for SaaS Companies</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Comprehensive technical and strategic solutions to drive your product-led growth engine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Laptop,
                title: "Product Strategy & UX",
                desc: "We define product roadmaps, optimize user onboarding, and design intuitive UX/UI that drives activation.",
                features: ["Product Strategy", "UX/UI Design", "Customer Onboarding"]
              },
              {
                icon: Code2,
                title: "Platform Development",
                desc: "End-to-end SaaS product development, scalable feature rollouts, and robust API architecture.",
                features: ["SaaS Product Development", "Feature Development", "API Development"]
              },
              {
                icon: BrainCircuit,
                title: "AI & Automation",
                desc: "Integrate foundational models to automate workflows and add intelligent capabilities to your platform.",
                features: ["AI Integration", "Workflow Automation", "CRM Integration"]
              },
              {
                icon: LayoutDashboard,
                title: "Dashboards & Portals",
                desc: "Custom admin dashboards, comprehensive customer portals, and seamless knowledge bases.",
                features: ["Admin Dashboards", "Customer Portals", "Knowledge Bases"]
              },
              {
                icon: LineChart,
                title: "Analytics & Growth",
                desc: "Deep customer analytics, reporting dashboards, and rigorous growth experiments to reduce churn.",
                features: ["Customer Analytics", "Product Analytics", "Reporting Dashboards", "Growth Experiments"]
              },
              {
                icon: ShieldCheck,
                title: "Ops & Infrastructure",
                desc: "Optimize performance, scale cloud infrastructure securely, and manage robust subscription platforms.",
                features: ["Infrastructure Scaling", "Performance Optimization", "Security", "Subscription Platforms"]
              }
            ].map((solution, i) => (
              <div key={i} className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 transition-colors flex flex-col h-full">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-grey flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-6">{solution.desc}</p>
                <div className="mt-auto pt-6 border-t border-brand-grey">
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs font-semibold text-brand-text/80">
                        <CheckCircle2 className="w-3 h-3 text-brand-lime mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RECOMMENDED SERVICES */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for SaaS</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A guided roadmap of premium solutions designed to take your SaaS company from MVP to scalable enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Scale your SaaS with high-performance engineering. We help SaaS companies build robust platforms, ship faster, and optimize features for user retention.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                SaaS marketing sites need to convert. We build lightning-fast, high-converting marketing websites that clearly communicate your value proposition.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Enhance your SaaS with AI capabilities. Automate customer support, generate personalized insights, and build predictive features to boost retention.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. Lead Generation Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Fill your pipeline with qualified demos. We implement programmatic SEO, targeted landing pages, and lead capture systems to scale your MRR.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Lead Generation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Connect your product usage data directly to HubSpot or Salesforce to trigger automated onboarding campaigns and identify expansion opportunities.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

             <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic technology decisions to resolve technical debt, plan complex feature roadmaps, and optimize pricing strategies for maximum growth.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The Modern SaaS Stack</h2>
            <p className="text-brand-text/70 text-lg">We choose technologies that prioritize scalability, rapid deployment speed, and deep analytical insight.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frontend & Web</h4>
              <p className="text-sm text-brand-text/60">Next.js, React, TypeScript</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & AI</h4>
              <p className="text-sm text-brand-text/60">Node.js, Python, OpenAI</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Data & Cloud</h4>
              <p className="text-sm text-brand-text/60">Supabase, Firebase, PostgreSQL, Docker, AWS, Vercel</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Ops & Analytics</h4>
              <p className="text-sm text-brand-text/60">Stripe, HubSpot, Mixpanel, Amplitude, PostHog, Google Analytics, GitHub, Figma</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: BUILDING FOR PRODUCT LED GROWTH */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Building for Product-Led Growth</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                Your product should be your best salesperson. We design SaaS platforms that drive user activation, simplify onboarding, and naturally encourage feature adoption.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Streamlined Trial Conversion & Onboarding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Contextual In-App Messaging & Customer Education</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Deep Usage Analytics to Drive Customer Success</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Strategic Pathways for Retention & Expansion Revenue</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The PLG Flywheel</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Acquisition → Activation → Retention → Revenue → Referral</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Step 1: Activation</p>
                  <p className="text-xs text-brand-text/70">Users experience the core value proposition instantly without friction.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Step 2: Habit Formation</p>
                  <p className="text-xs text-brand-text/70">Targeted education and excellent UX turn occasional use into daily reliance.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Step 3: Expansion</p>
                  <p className="text-xs text-brand-text/70">Satisfied users naturally upgrade tiers and invite team members to collaborate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUSINESS BENEFITS */}
      <section className="py-24 lg:py-32 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center max-w-3xl mx-auto">Tangible Business Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher MRR & Lower Churn</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By improving UX, resolving technical debt, and optimizing onboarding, we systematically reduce churn and increase your Monthly Recurring Revenue and overall retention.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Faster Development & Scalability</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Leverage scalable infrastructure and agile methodologies to ship features faster. Lower operational costs while ensuring your platform can handle enterprise scale.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BrainCircuit className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Better Product Decisions</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Implement AI-powered support, generate more qualified leads, and use deep product analytics to make data-backed decisions instead of guessing what users want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CASE STUDIES */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Proven Execution</h2>
              <p className="text-lg text-brand-text/70">Real results driving SaaS scalability, AI adoption, and product leadership.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/enterprise-saas" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">Enterprise SaaS Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Platform Modernization</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Re-architected core infrastructure and implemented AI automation, resolving technical debt and preparing for enterprise growth.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Platform Speed</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+400%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Churn Reduction</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">22%</span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/web3-gaming" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Web3 Gaming Platform</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Scalable Architecture</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Engineered a robust SaaS backbone to handle massive concurrent user spikes and complex real-time tokenomics.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Concurrent Users</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">50k+</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Uptime</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">99.99%</span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link to="/case-studies/global-clothing" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">Global Clothing Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Business Results Driven</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Integrated modern SaaS tools and headless architecture to dramatically improve conversion rates and operational efficiency.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Conversion Rate</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+85%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Revenue Lift</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+50%</span>
                  </div>
                </div>
                <span className="text-brand-blue font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: SAAS BUSINESS MODELS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">SaaS Business Models Supported</h2>
            <p className="text-brand-text/70 text-lg">We architect platforms to support complex billing, multi-tenancy, and varied monetization strategies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Freemium</h3>
               <p className="text-sm text-brand-text/70 mb-4">Benefits: High user acquisition, massive top-of-funnel.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech: Strict feature gating, high-volume scalable databases.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Free Trial</h3>
               <p className="text-sm text-brand-text/70 mb-4">Benefits: Demonstrates immediate product value, urgency.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech: Time-based access controls, automated drip campaigns.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Subscription</h3>
               <p className="text-sm text-brand-text/70 mb-4">Benefits: Predictable MRR, simplified financial modeling.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech: Stripe integration, complex dunning and tier management.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Usage Based</h3>
               <p className="text-sm text-brand-text/70 mb-4">Benefits: Revenue scales directly with customer success.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech: High-frequency event tracking, metered billing APIs.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Enterprise Licensing</h3>
               <p className="text-sm text-brand-text/70 mb-4">Benefits: High ACV, long-term contracts, low churn.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech: SSO/SAML, robust role-based access control, compliance.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Marketplace</h3>
               <p className="text-sm text-brand-text/70 mb-4">Benefits: Network effects, defensibility, diverse revenue.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech: Split payments, multi-party authentication, escrow systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Data on SaaS Growth</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Data from industry leaders confirms that SaaS success relies on customer retention, seamless onboarding, and the strategic adoption of AI.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We build product-led growth systems designed to improve these metrics, turning your software into an automated growth engine.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">40-60%</p>
                <p className="text-white/80">Of free trial users will use your product once and never come back if onboarding is poor.</p>
                <p className="text-xs text-white/40 mt-2">Source: OpenView & Paddle</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">70%</p>
                <p className="text-white/80">Of software companies are actively prioritizing AI integration to remain competitive.</p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">5x</p>
                <p className="text-white/80">It costs up to 5x more to acquire a new customer than to retain an existing one.</p>
                <p className="text-xs text-white/40 mt-2">Source: ChartMogul & HubSpot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common SaaS Mistakes</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We help you avoid the expensive traps that stall SaaS growth and drain capital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring Retention</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Focusing solely on acquisition while ignoring churn is like pouring water into a leaky bucket. We fix the leaks through UX improvements and product analytics.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Shipping Unwanted Features</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Building without customer feedback wastes engineering time. We implement continuous discovery processes to ensure you only build what users actually need.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Weak Infrastructure & No AI</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Failing to prepare for scale causes catastrophic outages, and ignoring AI leaves you vulnerable to more agile competitors. We future-proof your tech stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQS */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-text/70">Expert answers to common questions about SaaS product development and scaling.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How long does SaaS development take?", a: "SaaS development timelines vary depending on the scope and complexity of the platform. An initial MVP can take 8 to 16 weeks, while comprehensive enterprise SaaS platforms may require several months of iterative development." },
              { q: "How much does SaaS development cost?", a: "The cost depends entirely on the features, infrastructure requirements, and integrations. We provide tailored estimates based on a lean development approach to ensure you get the best ROI." },
              { q: "Can you build multi-tenant SaaS?", a: "Yes, we specialize in multi-tenant architectures ensuring strict data isolation, scalable resource management, and secure access for all your client organizations." },
              { q: "Can you build AI into our platform?", a: "Absolutely. We can integrate leading LLMs and build custom RAG architectures to add predictive features, automate workflows, and enhance the overall user experience." },
              { q: "Can you redesign our SaaS?", a: "Yes, we perform comprehensive UX/UI audits and can completely redesign your platform to modernize the interface, reduce friction, and improve user retention." },
              { q: "Can you improve onboarding?", a: "Improving onboarding is one of the highest leverage activities in SaaS. We analyze user journeys to design frictionless activation flows that guide users straight to value." },
              { q: "Can you reduce churn?", a: "By combining UX improvements, deeper product analytics to identify drop-off points, and automated re-engagement campaigns, we systematically attack the root causes of churn." },
              { q: "Can you integrate Stripe?", a: "Yes, we have extensive experience integrating complex Stripe billing models including tiered subscriptions, usage-based metered billing, and customized invoice management." },
              { q: "Can you migrate legacy platforms?", a: "We safely manage the migration of legacy monoliths to modern, scalable cloud architectures (like Next.js and Node.js) with zero data loss and minimal downtime." },
              { q: "Can you improve performance?", a: "Yes, we audit existing codebases to optimize database queries, implement advanced caching strategies, and scale infrastructure to dramatically improve load times." },
              { q: "Can you build APIs?", a: "We architect and develop robust, secure, and well-documented REST and GraphQL APIs to allow your SaaS to integrate seamlessly with third-party tools and partner ecosystems." },
              { q: "Do you provide DevOps?", a: "Yes, we implement complete CI/CD pipelines, containerization (Docker), and automated testing to ensure reliable deployments and high platform availability." },
              { q: "Can you build admin dashboards?", a: "We build powerful administrative and reporting dashboards that give you complete visibility into platform health, user behavior, and financial metrics." },
              { q: "Can you improve UX?", a: "Yes, our product design team specializes in simplifying complex data dense interfaces, ensuring your SaaS is intuitive and accessible to all user levels." },
              { q: "Can you help product teams?", a: "We augment existing product teams, providing extra engineering muscle, strategic product consulting, and specialized skills (like AI integration) that you may lack internally." },
              { q: "Can you provide Fractional Product Leadership?", a: "Yes, our senior strategists can act as Fractional CPOs or CTOs, guiding your product roadmap, tech stack decisions, and overall execution strategy." },
              { q: "Can you scale infrastructure?", a: "As your user base grows, we ensure your AWS or cloud infrastructure scales efficiently, maintaining high performance without exploding your operational costs." },
              { q: "Who owns the code?", a: "You do. Upon payment, all intellectual property, source code, and design assets are fully transferred to you." },
              { q: "Do you provide maintenance?", a: "Yes, we offer ongoing SLAs, technical support, platform maintenance, and continuous feature development after the initial launch." },
              { q: "How do we get started?", a: "It begins with a Product Strategy Call. We discuss your SaaS goals, evaluate your current platform (or MVP idea), and map out a strategic execution plan." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-brand-grey rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-bold flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  {faq.q}
                  <span className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 pt-2 text-brand-text/70 leading-relaxed text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED RESOURCES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Related Insights & Resources</h2>
              <p className="text-brand-text/70 text-lg">Deep dives into SaaS growth, AI, and technical strategy.</p>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-purple/10 text-brand-purple group-hover:bg-white/20 group-hover:text-white transition-all">
                Guide
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">The Ultimate SEO Playbook for Early Stage SaaS</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">How to build programmatic SEO architecture that drives early organic traction for your software business.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Blog</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>
            
            <Link to="/blog" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-blue/10 text-brand-blue group-hover:bg-white/20 group-hover:text-white transition-all">
                Automation
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">How to Scale Business Operations with AI Automation</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Eliminate bottlenecks by integrating intelligent automation workflows into your core SaaS product.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                 <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Blog</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>

            <Link to="/blog" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-lime/10 text-brand-lime group-hover:bg-white/20 group-hover:text-white transition-all">
                Content
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Scaling Content Velocity with AI</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Leverage AI to produce high-quality thought leadership and content assets to establish authority.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                 <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Blog</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden text-center border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-purple/10" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">Build a SaaS Platform That Scales With Your Business</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're launching a new SaaS product, modernizing an existing platform, improving customer onboarding, integrating AI, or scaling to thousands of users, Madlabs Digital helps software companies build products that customers love and businesses can grow around.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto">
                Scale Your SaaS
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto">
                Book Product Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
