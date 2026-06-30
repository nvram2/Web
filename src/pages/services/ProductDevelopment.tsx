import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Search, LayoutTemplate, MousePointerClick, MessageSquare, Briefcase, Mail, LineChart, Code2, Database, ShieldCheck, CheckCircle2, Zap, LayoutDashboard, BrainCircuit, Users, FileText, Settings, RefreshCw, BarChart, Lightbulb, Target, Smartphone, Globe, Layers, Cpu, Server, Activity, Wrench, AlertTriangle, Crosshair, Compass, FlaskConical, Rocket, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function ProductDevelopment() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Product Development Services | Madlabs Digital</title>
        <meta name="description" content="Build digital products people actually want to use. We combine product strategy, design, and engineering to build scalable digital products." />
        <meta name="keywords" content="Product Development Services, Digital Product Development, Product Strategy, Product Consulting, Product Discovery, Product Management, MVP Development, SaaS Development, AI Product Development, Web Application Development, Software Product Development, Startup Product Development, Product Roadmap" />
        <link rel="canonical" href="https://madlabs.digital/services/product-development" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Product Development Services | Madlabs Digital" />
        <meta property="og:description" content="Build digital products people actually want to use. We combine product strategy, design, and engineering to build scalable digital products." />
        <meta property="og:url" content="https://madlabs.digital/services/product-development" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Development Services | Madlabs Digital" />
        <meta name="twitter:description" content="Build digital products people actually want to use. We combine product strategy, design, and engineering to build scalable digital products." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Product Development Services",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Product strategy, user research, UX design, AI integration, and modern software development to transform ideas into scalable digital products.",
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
                "name": "Services",
                "item": "https://madlabs.digital/services"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": "Product Development"
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
                  "name": "What is product discovery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Product discovery is the initial phase where we validate the business idea, research the target market, define user personas, and map out the core value proposition before writing any code."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does product development take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An MVP (Minimum Viable Product) typically takes 3 to 4 months to design, develop, and launch. Full-scale enterprise platforms can take 6 to 12 months depending on complexity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is an MVP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Minimum Viable Product is the earliest version of a product that has just enough features to satisfy early customers and provide crucial feedback for future development."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I build an MVP first?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Building an MVP minimizes financial risk and allows you to validate your assumptions with real users quickly, preventing you from over-engineering features nobody wants."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does product development cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs vary based on scope, complexity, and technology stack. An MVP might range from $30k to $80k, whereas enterprise-grade platforms scale significantly higher. We provide accurate estimates after the discovery phase."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you validate my idea?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer product validation services where we conduct market research, run user interviews, and create high-fidelity prototypes to test demand before full development."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you improve an existing product?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We conduct product audits to identify UX friction, performance bottlenecks, and architectural issues, then implement a roadmap to modernize and scale the platform."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AI be integrated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in building AI-native products or integrating LLMs and machine learning models into existing platforms to add features like predictive analytics, intelligent search, and workflow automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you build SaaS platforms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we design and develop multi-tenant SaaS architectures, complete with subscription billing, user management, and scalable cloud infrastructure."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you develop mobile apps?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we build native and cross-platform mobile applications for iOS and Android, ensuring seamless user experiences across all devices."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who owns the source code?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You do. Upon project completion and final payment, all intellectual property and source code are fully transferred to your organization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies do you recommend?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We typically use modern, scalable stacks like React, Next.js, Node.js, and TypeScript, backed by PostgreSQL or Supabase, hosted on AWS or Vercel."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you work with our development team?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We often provide fractional product leadership, UX design, and technical architecture while collaborating with in-house engineering teams to accelerate delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer product management?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer fractional product management to oversee the product lifecycle, prioritize features, manage the backlog, and ensure alignment with business goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you redesign our UX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We conduct UX audits and redesign interfaces to improve usability, accessibility, and conversion rates, ensuring the product aligns with modern design standards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you prioritise features?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use frameworks like RICE (Reach, Impact, Confidence, Effort) and user feedback to prioritize features that deliver the highest value to users with the least engineering effort."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you build Web3 products?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have deep experience building Web3 platforms, including tokenomics integration, smart contract interactions, and decentralized application (dApp) interfaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you scale existing platforms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We help transition monolithic architectures to microservices, optimize database performance, and implement scalable cloud infrastructure to support high user growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you measure success?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Success is measured through product metrics like activation rate, monthly active users (MAU), customer retention, and ultimately, revenue and profitability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens after launch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Post-launch, we shift focus to product analytics, user feedback collection, and continuous iteration, working as your long-term growth and development partner."
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
              Product Development
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Build Digital Products People <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Actually Want to Use.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Successful products are built through research, validation, user experience, and continuous iteration, not assumptions. Madlabs Digital helps businesses transform ideas into scalable digital products through product strategy, user research, UX design, AI integration, and modern software development.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Book A Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact?type=audit">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Free Product Audit
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">700k+</div>
                <div className="text-sm font-medium text-white/60">Users Scaled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2x</div>
                <div className="text-sm font-medium text-white/60">Revenue Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-sm font-medium text-white/60">Years Product Leadership</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">21M+</div>
                <div className="text-sm font-medium text-white/60">Digital Assets Managed</div>
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

      {/* SECTION 3: THE PROBLEM */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Business Problem: Building Without Validating</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Many digital products fail because they are built based on assumptions. Companies invest heavily in development without validating their ideas, leading to poor product-market fit.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Founders often rush into adding too many features, ignoring customer feedback and user research. This results in weak onboarding, poor UX, and a lack of product analytics. Teams focus on building technology instead of solving actual problems.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Software alone does not create successful businesses. Great products solve real customer problems and provide undeniable value.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY MOST DIGITAL PRODUCTS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Most Digital Products Fail</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Building a product without a strategy is a recipe for disaster. Product thinking is essential to reduce risk.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Building Based on Opinions</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Skipping user testing and relying on internal assumptions leads to a product nobody wants to use or pay for.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> No MVP or Roadmap</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Overengineering a product before launch and failing to prioritize features correctly delays time-to-market and burns capital.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> Ignoring Analytics and Iteration</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Launching a product is just the beginning. Without analytics, teams cannot measure success, gather feedback, or iterate effectively.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">The Symptoms of Poor Product Strategy</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Target className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Low Activation & Retention</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Users sign up but quickly abandon the platform because the onboarding is confusing and value isn't delivered quickly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Layers className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Feature Bloat</h4>
                    <p className="text-brand-text/70 text-sm mt-1">The interface becomes cluttered with tools only a fraction of the user base ever touches, complicating the core experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <AlertTriangle className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">High Churn Rate</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Customers cancel their subscriptions because the product fails to integrate into their daily workflows.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Product Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We apply rigorous product thinking to every stage, focusing purely on business outcomes and user value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/20 z-0"></div>
            {[
              { num: "01", title: "Discovery", desc: "Market research, user interviews, and product strategy to define the core value proposition." },
              { num: "02", title: "Design", desc: "UX/UI design, wireframing, and rapid prototyping to visualize the product and test assumptions." },
              { num: "03", title: "Development", desc: "MVP development, architecture planning, and agile software engineering." },
              { num: "04", title: "Launch", desc: "Strategic rollout, beta testing, and user onboarding optimization." },
              { num: "05", title: "Scale", desc: "Measuring analytics, continuous iteration, and platform scaling for growth." }
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

      {/* SECTION 5: FROM IDEA TO PRODUCT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">From Idea to Scalable Product</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We guide you through the entire product lifecycle, ensuring every decision is backed by data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Business Idea", desc: "We start with your vision and business goals." },
              { icon: Search, title: "Research & Validation", desc: "We conduct market research and user interviews to validate the problem." },
              { icon: LayoutTemplate, title: "Prototype & Testing", desc: "We build interactive prototypes to test usability and gather early feedback." },
              { icon: Code2, title: "MVP Development", desc: "We build the core product features required to deliver value." },
              { icon: Rocket, title: "Launch", desc: "We execute a strategic launch to acquire early adopters." },
              { icon: LineChart, title: "Analytics", desc: "We implement robust tracking to monitor user behavior." },
              { icon: RefreshCw, title: "Continuous Improvement", desc: "We iterate based on data to improve retention and drive growth." }
            ].map((step, i) => (
              <div key={i} className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-grey flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES INCLUDED */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Services Included</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              End-to-end product development, from strategic discovery to technical execution and scaling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Compass className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Product Strategy & Discovery</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We align your product vision with market demands, defining clear roadmaps and prioritizing features that drive ROI.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Market validation and user research.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Product roadmapping and feature prioritization.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Fractional product leadership.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <LayoutTemplate className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">UX/UI Design & Prototyping</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We design intuitive, engaging user experiences that reduce friction, improve onboarding, and maximize retention.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Wireframing and user journey mapping.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> High-fidelity UI design and design systems.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Rapid prototyping and usability testing.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Code2 className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Software Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We build robust, scalable applications using modern stacks, from lean MVPs to complex enterprise SaaS platforms.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> MVP and SaaS product development.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Web application and mobile app development.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Technical architecture and API design.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <TrendingUp className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Analytics & Optimization</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We implement data infrastructure to track user behavior, enabling continuous product optimization and growth experiments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Product analytics implementation (Mixpanel, Amplitude).</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Growth experiments and A/B testing.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Platform scaling and performance audits.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Technology Ecosystem</h2>
            <p className="text-brand-text/70 text-lg">We utilize modern, scalable technologies to build secure and high-performing digital products.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frontend & App</h4>
              <p className="text-sm text-brand-text/60">React, Next.js, TypeScript, React Native</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & Data</h4>
              <p className="text-sm text-brand-text/60">Node.js, Python, PostgreSQL, Supabase</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Infrastructure</h4>
              <p className="text-sm text-brand-text/60">AWS, Vercel, Docker, GitHub</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Design & Analytics</h4>
              <p className="text-sm text-brand-text/60">Figma, Mixpanel, Amplitude, Google Analytics</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 7.5: AI IN PRODUCT DEVELOPMENT */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">AI in Product Development</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                We integrate Large Language Models and machine learning to build AI-native products or enhance existing platforms with intelligent features.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BrainCircuit className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">AI Agents & Workflows</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Deploy autonomous agents that handle complex, multi-step tasks within your SaaS product, automating tedious user workflows.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Search className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">AI Search & Recommendation Engines</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Implement semantic search and predictive recommendations that guide users to exactly what they need, improving engagement and conversion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Database className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Intelligent Knowledge Bases</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Transform static documentation into interactive, conversational interfaces that provide instant, accurate answers to users.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey text-center">
               <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-purple/10 mb-8">
                 <Zap className="w-10 h-10 text-brand-purple" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Practical Application</h3>
               <p className="text-brand-text/70 leading-relaxed mb-6">
                 We leverage OpenAI, Claude, and Gemini to power voice interfaces, deep personalization, and predictive analytics, ensuring your product remains at the cutting edge of technological capability.
               </p>
               <div className="text-sm font-semibold text-brand-purple">
                 Innovation • Intelligence • Scale
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUSINESS BENEFITS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center max-w-3xl mx-auto">Measurable Business Outcomes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reduced Development Risk</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By validating ideas through research and prototyping before writing code, we drastically lower development costs and ensure product-market fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Faster Time to Market</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Our agile MVP approach prioritizes core features, allowing you to launch quickly, gather user feedback, and iterate rapidly ahead of competitors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Customer Retention</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By focusing on exceptional UX design and data-driven improvements, we build products that users love, driving long-term retention and higher customer lifetime value.
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
              <p className="text-lg text-brand-text/70">Building and scaling products across industries.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/web3-gaming" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">Web3 Gaming Platform</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Scaling product strategy for global adoption</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Provided fractional product leadership to redesign tokenomics, overhaul the marketplace UX, and scale the infrastructure.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Active Users</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">700k+</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Revenue Growth</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">2x</span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/enterprise-saas" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple group-hover:text-white">Enterprise SaaS Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Developing AI features for internal platforms</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Engineered intelligent internal tools and automated workflows, embedding AI into the core product offering.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Efficiency Gain</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">45%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Time Saved</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">20 hrs/wk</span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link to="/case-studies/global-clothing-brand" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue group-hover:text-white">Global Clothing Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Platform modernization and scalability</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Audited and modernized a legacy platform, improving system architecture to handle high-traffic global sales events.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Performance</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+85%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Uptime</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">99.99%</span>
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

      {/* SECTION 10: INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Product Strategies for Every Sector</h2>
            <p className="text-brand-text/70 text-lg">We understand the unique regulatory, technical, and user requirements across different industries.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {["SaaS", "AI", "Fintech", "Healthcare", "Education", "Gaming", "Web3", "Real Estate", "Insurance", "Retail", "Manufacturing", "Enterprise Software"].map((industry, i) => (
              <div key={i} className="p-4 border border-brand-grey rounded-2xl bg-[#fafafa] hover:border-brand-purple/30 transition-colors">
                <span className="font-semibold text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10.5: PRODUCT METRICS THAT MATTER */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Product Metrics That Matter</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We focus on actionable data, ignoring vanity metrics that mislead product teams and misalign business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-grey shadow-sm">
              <h3 className="text-xl font-bold mb-4">Activation & Engagement</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="block text-brand-purple">Activation Rate</strong>
                  <span className="text-sm text-brand-text/70">The percentage of users who reach the product's "aha" moment.</span>
                </li>
                <li>
                  <strong className="block text-brand-purple">MAU / DAU</strong>
                  <span className="text-sm text-brand-text/70">Monthly and Daily Active Users actively engaging with core features.</span>
                </li>
                <li>
                  <strong className="block text-brand-purple">Feature Adoption</strong>
                  <span className="text-sm text-brand-text/70">How quickly and consistently new features are utilized by the base.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-brand-grey shadow-sm">
              <h3 className="text-xl font-bold mb-4">Retention & Loyalty</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="block text-brand-blue">Retention Rate</strong>
                  <span className="text-sm text-brand-text/70">The percentage of users who return to the product over time.</span>
                </li>
                <li>
                  <strong className="block text-brand-blue">Churn Rate</strong>
                  <span className="text-sm text-brand-text/70">The rate at which customers stop using the product or cancel subscriptions.</span>
                </li>
                <li>
                  <strong className="block text-brand-blue">Net Promoter Score</strong>
                  <span className="text-sm text-brand-text/70">A measure of customer loyalty and satisfaction (NPS).</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-brand-grey shadow-sm">
              <h3 className="text-xl font-bold mb-4">Revenue & Business</h3>
              <ul className="space-y-4">
                <li>
                  <strong className="block text-brand-lime">Conversion Rate</strong>
                  <span className="text-sm text-brand-text/70">The percentage of free or trial users who upgrade to paid tiers.</span>
                </li>
                <li>
                  <strong className="block text-brand-lime">Customer Lifetime Value</strong>
                  <span className="text-sm text-brand-text/70">The total revenue expected from a single customer account (LTV).</span>
                </li>
                <li>
                  <strong className="block text-brand-lime">MRR / ARR</strong>
                  <span className="text-sm text-brand-text/70">Monthly and Annual Recurring Revenue generated by the product.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Data Speaks for Itself</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                According to studies by Harvard Business Review, McKinsey, and Gartner, investing in product strategy and research is critical for long-term viability.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Organizations that prioritize UX design and rapid iteration consistently outperform competitors in customer retention and revenue growth.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">70%</p>
                <p className="text-white/80">Up to 70% of digital transformation projects fail due to poor planning, lack of user research, and misaligned product strategy.</p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">400%</p>
                <p className="text-white/80">Every dollar invested in UX brings a return of $100, an ROI of an astonishing 9,900%.</p>
                <p className="text-xs text-white/40 mt-2">Source: Forrester Research</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">80%</p>
                <p className="text-white/80">80% of features in typical enterprise software products are rarely or never used.</p>
                <p className="text-xs text-white/40 mt-2">Source: Standish Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common Mistakes</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Why product initiatives stall, and how we help you avoid these pitfalls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey">
              <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Building Before Validating</h3>
              <p className="text-brand-text/70 text-sm">Writing code before confirming the market needs the product guarantees wasted time and capital.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey">
              <AlertTriangle className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Feature Bloat</h3>
              <p className="text-brand-text/70 text-sm">Adding every requested feature destroys usability. We strictly prioritize based on core value and impact.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey">
              <AlertTriangle className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">No Analytics</h3>
              <p className="text-brand-text/70 text-sm">Without data tracking, iteration is just guessing. Analytics must be built into the MVP from day one.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey">
              <AlertTriangle className="w-8 h-8 text-brand-purple mb-4" />
              <h3 className="text-xl font-bold mb-3">Scaling Too Early</h3>
              <p className="text-brand-text/70 text-sm">Investing in massive infrastructure before achieving product-market fit burns runway unnecessarily.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey">
              <AlertTriangle className="w-8 h-8 text-brand-lime mb-4" />
              <h3 className="text-xl font-bold mb-3">No Product Owner</h3>
              <p className="text-brand-text/70 text-sm">Development without strong product leadership results in a disjointed product. We provide fractional leadership.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey">
              <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Weak Onboarding</h3>
              <p className="text-brand-text/70 text-sm">If users can't find value in the first 5 minutes, they churn. We obsess over the first-time user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQS */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-brand-text/70">Everything you need to know about our product development process.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What is product discovery?", a: "Product discovery is the initial phase where we validate the business idea, research the target market, define user personas, and map out the core value proposition before writing any code." },
              { q: "How long does product development take?", a: "An MVP (Minimum Viable Product) typically takes 3 to 4 months to design, develop, and launch. Full-scale enterprise platforms can take 6 to 12 months depending on complexity." },
              { q: "What is an MVP?", a: "A Minimum Viable Product is the earliest version of a product that has just enough features to satisfy early customers and provide crucial feedback for future development." },
              { q: "Should I build an MVP first?", a: "Yes. Building an MVP minimizes financial risk and allows you to validate your assumptions with real users quickly, preventing you from over-engineering features nobody wants." },
              { q: "How much does product development cost?", a: "Costs vary based on scope, complexity, and technology stack. An MVP might range from $30k to $80k, whereas enterprise-grade platforms scale significantly higher. We provide accurate estimates after the discovery phase." },
              { q: "Can you validate my idea?", a: "Yes, we offer product validation services where we conduct market research, run user interviews, and create high-fidelity prototypes to test demand before full development." },
              { q: "Can you improve an existing product?", a: "Absolutely. We conduct product audits to identify UX friction, performance bottlenecks, and architectural issues, then implement a roadmap to modernize and scale the platform." },
              { q: "Can AI be integrated?", a: "Yes, we specialize in building AI-native products or integrating LLMs and machine learning models into existing platforms to add features like predictive analytics, intelligent search, and workflow automation." },
              { q: "Can you build SaaS platforms?", a: "Yes, we design and develop multi-tenant SaaS architectures, complete with subscription billing, user management, and scalable cloud infrastructure." },
              { q: "Do you develop mobile apps?", a: "Yes, we build native and cross-platform mobile applications for iOS and Android, ensuring seamless user experiences across all devices." },
              { q: "Who owns the source code?", a: "You do. Upon project completion and final payment, all intellectual property and source code are fully transferred to your organization." },
              { q: "What technologies do you recommend?", a: "We typically use modern, scalable stacks like React, Next.js, Node.js, and TypeScript, backed by PostgreSQL or Supabase, hosted on AWS or Vercel." },
              { q: "Can you work with our development team?", a: "Yes. We often provide fractional product leadership, UX design, and technical architecture while collaborating with in-house engineering teams to accelerate delivery." },
              { q: "Do you offer product management?", a: "Yes, we offer fractional product management to oversee the product lifecycle, prioritize features, manage the backlog, and ensure alignment with business goals." },
              { q: "Can you redesign our UX?", a: "Yes. We conduct UX audits and redesign interfaces to improve usability, accessibility, and conversion rates, ensuring the product aligns with modern design standards." },
              { q: "How do you prioritise features?", a: "We use frameworks like RICE (Reach, Impact, Confidence, Effort) and user feedback to prioritize features that deliver the highest value to users with the least engineering effort." },
              { q: "Can you build Web3 products?", a: "Yes, we have deep experience building Web3 platforms, including tokenomics integration, smart contract interactions, and decentralized application (dApp) interfaces." },
              { q: "Can you scale existing platforms?", a: "Yes. We help transition monolithic architectures to microservices, optimize database performance, and implement scalable cloud infrastructure to support high user growth." },
              { q: "How do you measure success?", a: "Success is measured through product metrics like activation rate, monthly active users (MAU), customer retention, and ultimately, revenue and profitability." },
              { q: "What happens after launch?", a: "Post-launch, we shift focus to product analytics, user feedback collection, and continuous iteration, working as your long-term growth and development partner." }
            ].map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white border ${activeFaq === i ? 'border-brand-purple shadow-md' : 'border-brand-grey'} rounded-2xl cursor-pointer transition-all duration-300`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="font-bold text-brand-text">{faq.q}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#fafafa] shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 bg-brand-purple/10 text-brand-purple' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-brand-text/70 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED RESOURCES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Related Insights & Resources</h2>
              <p className="text-brand-text/70 text-lg">Deep dives into product strategy, scalable architecture, and engineering.</p>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/scale-business-operations-ai-automation" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-purple/10 text-brand-purple group-hover:bg-white/20 group-hover:text-white transition-all">
                Automation
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">How to Scale Business Operations with AI Automation</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Discover how AI automation connects Large Language Models to your private enterprise data for secure, factual outputs.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>May 22, 2026</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>
            
            <Link to="/case-studies/web3-gaming" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-blue/10 text-brand-blue group-hover:bg-white/20 group-hover:text-white transition-all">
                Case Study
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Web3 Gaming Case Study</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">See how we provided product leadership to scale a web3 gaming platform to over 700k users and doubled revenue.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>View Project</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>

            <Link to="/case-studies/enterprise-saas" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-lime/10 text-brand-lime group-hover:bg-white/20 group-hover:text-white transition-all">
                Case Study
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Enterprise SaaS Case Study</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Learn how we engineered intelligent internal tools and embedded AI into the core product offering of a global SaaS provider.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>View Project</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-8 text-white">
          Turn Your Product Idea Into a <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-blue">Scalable Business.</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Whether you're launching a startup, modernising enterprise software, building an AI platform, or scaling an existing product, Madlabs Digital combines product strategy, design, and engineering to build digital products that solve real business problems and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                Start Your Product <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                Book Product Discovery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
