import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, Building, ShieldCheck, Mail, LineChart, Code2, Link as LinkIcon, Laptop, Rocket, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Startups() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Startup Software Development & AI Solutions | Madlabs Digital</title>
        <meta name="description" content="Helping startups build, launch, and scale faster. Enterprise-grade product development, AI automation, and growth strategies for founders." />
        <meta name="keywords" content="Startup Software Development, Startup Development Agency, MVP Development, Startup Product Development, AI for Startups, Startup Technology Partner, Startup Web Development, Startup Product Strategy, Startup Consulting, Startup CRM, Startup Automation" />
        <link rel="canonical" href="https://madlabs.digital/industries/startups" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Startup Software Development & AI Solutions | Madlabs Digital" />
        <meta property="og:description" content="Helping startups build, launch, and scale faster. Enterprise-grade product development, AI automation, and growth strategies for founders." />
        <meta property="og:url" content="https://madlabs.digital/industries/startups" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Startup Software Development & AI Solutions | Madlabs Digital" />
        <meta name="twitter:description" content="Helping startups build, launch, and scale faster. Enterprise-grade product development, AI automation, and growth strategies for founders." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Startup Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for startups, offering MVP development, product strategy, AI integration, and scalable software solutions.",
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
                "name": "Startups"
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
                  "name": "How much does an MVP cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of a Minimum Viable Product varies widely depending on feature complexity, platform choices, and integrations required. We focus on lean development, prioritizing core features that validate your business model to keep initial costs manageable while providing a solid foundation for growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should an MVP take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard MVP timeline typically spans 8 to 12 weeks. This includes product strategy, UX/UI design, development, and initial testing. Our goal is always to get a functional, high-quality product into the hands of your users as quickly as possible so you can start gathering feedback."
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
              Startup Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Helping Startups Build, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Launch, and Scale Faster.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Building a successful startup requires more than writing code. From product strategy and MVP development to AI automation, scalable software, lead generation, and growth systems, Madlabs Digital helps founders launch faster, reduce risk, and build products customers actually want.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Start Your Startup Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Founder Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm font-medium text-white/60">Startup Features Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">700k+</div>
                <div className="text-sm font-medium text-white/60">Users Supported Across Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-sm font-medium text-white/60">Years Building Digital Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2x</div>
                <div className="text-sm font-medium text-white/60">Average Revenue Growth</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Startup Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Founders face immense pressure. With limited budgets and constrained engineering resources, you're expected to build the right features, find product-market fit rapidly, and satisfy investor expectations—all while avoiding the fatal trap of scaling infrastructure before you're ready.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Too many startups fail because they hire too early, build in a vacuum, lack technical leadership, or struggle with poor customer acquisition and weak onboarding experiences. They let assumptions drive development instead of real customer data.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Startups must validate quickly, build lean, and make decisions based on customer feedback instead of assumptions. Balancing speed to market with the quality required to retain users is the ultimate tightrope walk. We help you navigate it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SOLUTIONS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Most Startups Fail</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Building a product is easy. Building a profitable business is incredibly difficult. Here are the core reasons early-stage companies fail to reach scale.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Building Before Validating</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Spending months building features based on assumptions rather than talking to users. This leads to feature bloat, ignoring customer feedback, and ultimately launching a product nobody wants to pay for.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Weak Positioning & UX</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Even a great idea dies if the user experience is poor and the market positioning is weak. If users don't understand the value instantly, and if they aren't guided by a strong onboarding flow and analytics, they will churn.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> Premature Scaling</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Hiring too early, spending heavily on marketing without a go-to-market strategy, or accumulating massive technical debt before achieving true product-market fit. This burns cash and destroys agility.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">How to Avoid These Mistakes</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Prioritize Analytics Early</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Implement PostHog or Mixpanel from day one. You cannot improve what you are not measuring.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Ship Often, Learn Faster</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Don't wait for perfection. Launch a lean MVP, gather user feedback, and iterate aggressively.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Strong Technical Foundation</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Keep technical debt manageable. Choose a scalable, proven tech stack so you don't have to rebuild when you hit Series A.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Startup Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A proven, visual roadmap designed to reduce risk, increase learning, and systematically guide your startup from concept to scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { num: "01", title: "Idea Validation", desc: "Testing core hypotheses and ensuring there is a real market need before investing." },
              { num: "02", title: "Market Research", desc: "Analyzing competitors, audience demographics, and strategic market positioning." },
              { num: "03", title: "Product Strategy", desc: "Defining the core value proposition and outlining a lean product roadmap." },
              { num: "04", title: "MVP Planning", desc: "Selecting only the essential features required to validate assumptions with real users." },
              { num: "05", title: "UX Design", desc: "Creating intuitive user flows, detailed wireframes, and rapid prototypes." },
              { num: "06", title: "Development", desc: "Building scalable, high-performance architecture and engineering the product." },
              { num: "07", title: "Testing", desc: "Rigorous quality assurance, security audits, and performance optimization." },
              { num: "08", title: "Launch", desc: "Strategic rollout to early adopters, beta testing, and onboarding optimization." },
              { num: "09", title: "Customer Feedback", desc: "Gathering qualitative insights, analytics tracking, and identifying friction points." },
              { num: "10", title: "Growth", desc: "Iterating based on feedback, optimizing conversion rates, and scaling acquisition." },
              { num: "11", title: "Scale", desc: "Expanding platform architecture, introducing AI automation, and preparing for enterprise growth." }
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
          <div className="mt-12 text-center text-white/60 text-sm max-w-xl mx-auto">
            By following this sequential roadmap, we ensure every stage is focused on reducing business risk while maximizing validated learning. We don't skip steps.
          </div>
        </div>
      </section>

      {/* SECTION 5: THE MADLABS FRAMEWORK */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Startups</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We provide the specialized expertise and execution capability early-stage companies need to survive and thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Product Strategy & MVP", desc: "Define the core feature set, build a fast Minimum Viable Product, and validate assumptions with real users before investing heavily." },
              { icon: BrainCircuit, title: "AI Integration", desc: "Leverage foundational LLMs to create AI-powered features, automate internal processes, and gain a massive competitive edge." },
              { icon: LayoutDashboard, title: "Web & SaaS Development", desc: "Scalable, high-performance web applications and SaaS platforms built with modern stacks (React, Next.js, Node.js)." },
              { icon: LineChart, title: "Fractional Product Leadership", desc: "Expert guidance on product roadmaps, technical consulting, and choosing scalable cloud infrastructure without a full-time CTO salary." },
              { icon: Users, title: "Lead Generation & SEO", desc: "Build predictable customer acquisition engines through technical SEO, Generative Engine Optimization, and strategic landing pages." },
              { icon: Database, title: "CRM & Analytics", desc: "Set up HubSpot, Mixpanel, and automated business systems to measure growth experiments, retain users, and prove traction to investors." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Startups</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A guided roadmap of premium solutions designed to take your company from early validation to scalable enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Usually the first investment after validating an idea. We help founders define product strategy, build an MVP, validate assumptions, and prepare for growth.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Startups need fast, scalable, SEO-ready websites that attract investors, customers, and talent while supporting future growth.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Automate repetitive work, customer support, reporting, onboarding, and internal operations without increasing headcount.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. Lead Generation Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build predictable customer acquisition through SEO, GEO, landing pages, CRM integration, and AI-powered lead qualification.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Lead Generation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Implement CRM systems early to create better customer relationships, clear sales visibility, and scalable operations.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

             <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic technology decisions that reduce development risk, improve product planning, and create stronger long-term business foundations.
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
            <h2 className="text-3xl font-bold mb-4">Scalable Startup Stack</h2>
            <p className="text-brand-text/70 text-lg">We choose technologies that prioritize scalability, rapid deployment speed, and keep operating costs extremely low for founders.</p>
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
              <p className="text-sm text-brand-text/60">Supabase, Firebase, AWS, Vercel, Docker</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Ops & Analytics</h4>
              <p className="text-sm text-brand-text/60">GitHub, Figma, Mixpanel, PostHog, Stripe</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FUNDING READINESS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center max-w-3xl mx-auto">Funding Readiness & Business Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Due Diligence</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Build investor confidence. We provide scalable architecture, proper technology documentation, and robust infrastructure that effortlessly passes VC technical audits.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Metrics & Traction</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Improve product-market fit and customer retention by deploying granular product analytics. Validate before scaling and show investors real growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Launch & Scale</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Launch faster, reduce development costs, and automate operations early. We build long-term technology foundations so you can scale with absolute confidence.
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
              <p className="text-lg text-brand-text/70">Real numbers from real startups and digital products.</p>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Web3 Gaming Platform</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Rapid MVP for Seed Funding</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Engineered a robust Web3 gaming MVP with integrated tokenomics to help founders successfully secure their seed round.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Time to MVP</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">10 Weeks</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Active Beta Users</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">15k+</span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/enterprise-saas" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">Enterprise SaaS Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Scaling post Series A</h3>
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

            {/* Case Study 3 */}
            <Link to="/case-studies/global-clothing" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">Global Clothing Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Headless Ecommerce Launch</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Built a lightning-fast headless ecommerce platform utilizing Next.js to significantly boost international conversion rates.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Checkout Conversion</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+85%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Organic Traffic</span>
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

      {/* SECTION 10: STARTUP STAGES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Supporting You At Every Stage</h2>
            <p className="text-brand-text/70 text-lg">We adapt our technical support based on your funding and growth maturity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Pre-Seed</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Idea validation, finding technical co-founders.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Product Strategy, Lean MVP</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Seed</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Iterating fast, gaining initial traction.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Core Development, Analytics</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Series A</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Scaling architecture, handling new user load.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Cloud Infrastructure, Team Extension</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Series B</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Entering new markets, feature expansion.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: High Availability, Security</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Growth</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Operational efficiency, reducing churn.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: AI Automation, Business Systems</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Enterprise</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Legacy modernization, data silos.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Digital Transformation, RAG Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Startup Reality</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Data shows that most startups fail not because they couldn't build a product, but because they built the wrong product, failed to achieve product-market fit, or drowned in technical debt.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We focus intensely on early validation, scalable architectures, and rapid AI adoption to ensure you fall on the right side of these statistics.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">35%</p>
                <p className="text-white/80">Of startups fail specifically because there is no market need for their product.</p>
                <p className="text-xs text-white/40 mt-2">Source: CB Insights</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">70%</p>
                <p className="text-white/80">Of companies cite AI adoption as critical to maintaining their competitive advantage.</p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">80%</p>
                <p className="text-white/80">Of digital transformations fail due to poor planning and execution.</p>
                <p className="text-xs text-white/40 mt-2">Source: Microsoft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Critical Mistakes to Avoid</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We've seen hundreds of founders make the same fatal errors. Let's make sure you don't.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Building Too Much</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Founders often want every feature included in v1. This delays launch and burns budget. We force you to cut scope and focus purely on the core value proposition.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trendy Tech Over Stability</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Choosing a framework just because it's new, rather than because it's proven. We rely on battle-tested stacks like Next.js and Node.js that guarantee long-term maintainability.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring Onboarding</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Acquiring users means nothing if they drop off on day one. We obsess over the first 5 minutes of your user journey to ensure they reach their 'Aha!' moment instantly.
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
            <p className="text-brand-text/70">Expert answers to common questions about startup product development.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "How much does an MVP cost?",
                a: "The cost of a Minimum Viable Product varies widely depending on feature complexity, platform choices, and integrations required. We focus on lean development, prioritizing core features that validate your business model to keep initial costs manageable while providing a solid foundation for growth."
              },
              {
                q: "How long should an MVP take?",
                a: "A standard MVP timeline typically spans 8 to 12 weeks. This includes product strategy, UX/UI design, development, and initial testing. Our goal is always to get a functional, high-quality product into the hands of your users as quickly as possible so you can start gathering feedback."
              },
              {
                q: "Should I build mobile or web first?",
                a: "In most cases, we recommend building a responsive web application first. It's faster to build, easier to iterate on without app store approval delays, and accessible to a wider audience. Native mobile apps should usually follow once you've proven the core concept."
              },
              {
                q: "Can AI reduce development costs?",
                a: "Yes. By leveraging AI-assisted coding tools and integrating existing foundational models rather than building complex proprietary systems from scratch, we can accelerate development timelines and reduce overall engineering costs for specific features."
              },
              {
                q: "Should startups use React?",
                a: "Yes, React is an excellent choice for startups. It boasts a massive developer community, incredible flexibility, and a huge ecosystem of libraries. It ensures you won't struggle to find developers as you scale your in-house team."
              },
              {
                q: "Should startups use Next.js?",
                a: "Absolutely. Next.js (built on React) is our preferred framework for startups. It provides excellent performance, out-of-the-box SEO benefits (via Server-Side Rendering), and an architecture that scales effortlessly from MVP to enterprise."
              },
              {
                q: "Can you help non-technical founders?",
                a: "Yes, a significant portion of our clients are non-technical founders with deep domain expertise. We act as your technical partner, translating your business vision into a concrete product roadmap and executing the development seamlessly."
              },
              {
                q: "Do I need a CTO?",
                a: "In the early stages (Pre-Seed to Seed), a full-time CTO is often an unnecessary expense. We provide Fractional Product Leadership and technical consulting, giving you the strategic guidance of a CTO without the permanent overhead."
              },
              {
                q: "Can you act as a Fractional Product Lead?",
                a: "Yes. We frequently embed our senior product strategists into startup teams to manage roadmaps, prioritize features based on user data, and align technical execution with business goals."
              },
              {
                q: "Can you help with fundraising?",
                a: "While we do not raise capital for you, we make you highly fundable. We provide the technical documentation, scalable architecture, product metrics, and polished UX that venture capitalists look for during technical due diligence."
              },
              {
                q: "How do you validate ideas?",
                a: "We validate through rigorous market research, user interviews, prototyping, and deploying lean MVPs or 'painted door' tests to measure actual user intent and willingness to pay before writing extensive code."
              },
              {
                q: "Can you redesign an existing product?",
                a: "Yes. If you have an existing product suffering from high churn or technical debt, we conduct comprehensive UX/UI audits and code reviews to strategically redesign and re-architect the platform for growth."
              },
              {
                q: "Can you build SaaS?",
                a: "Yes. We specialize in building scalable Software-as-a-Service platforms, including handling complex multi-tenant architectures, secure user authentication, and integrating recurring billing systems like Stripe."
              },
              {
                q: "Can you build AI products?",
                a: "Yes. We integrate leading foundational models (OpenAI, Anthropic, Gemini) to build AI-native features, generative tools, and custom RAG architectures that give your startup a competitive edge."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes. A successful launch is just the beginning. We offer comprehensive Service Level Agreements (SLAs), continuous optimization, bug fixes, and feature expansion as your user base grows."
              },
              {
                q: "How do you measure success?",
                a: "Success is measured by adoption, retention, and revenue. We integrate robust product analytics (Mixpanel, PostHog) from day one to track core KPIs, identify drop-off points, and guide our iteration cycles based on hard data."
              },
              {
                q: "Who owns the code?",
                a: "You do. Once the project is paid for, all intellectual property, source code, and design assets are fully transferred to your company. You have complete ownership and control."
              },
              {
                q: "Can you scale after launch?",
                a: "Our tech stacks (Next.js, Node.js, scalable cloud providers) are chosen specifically to support massive growth. We ensure the architecture built for your MVP will confidently handle the user load as you scale."
              },
              {
                q: "What happens after MVP?",
                a: "Post-MVP, we shift to a data-driven growth phase. We analyze user behavior, refine onboarding, launch high-value requested features, and assist in setting up SEO and CRM systems to drive customer acquisition."
              },
              {
                q: "How do we get started?",
                a: "We begin with a free Founder Strategy Call. We'll discuss your vision, current challenges, and business goals. If we're a good fit, we'll outline a high-level product strategy and execution plan."
              }
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
              <p className="text-brand-text/70 text-lg">Deep dives into growth, AI, and technical strategy.</p>
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
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">How to build programmatic SEO architecture that drives early organic traction for your startup.</p>
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
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Eliminate bottlenecks by integrating intelligent automation workflows early in your growth journey.</p>
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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">Build a Startup Ready for Sustainable Growth</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're validating your first idea, preparing an MVP, launching an AI product, or scaling a SaaS platform, Madlabs Digital helps startups build faster, smarter, and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto">
                Book A Strategy Call
              </Button>
            </Link>
          
          </div>
        </div>
      </section>
    </>
  );
}
