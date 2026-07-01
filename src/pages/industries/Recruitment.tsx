import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, ShieldCheck, Mail, LineChart, Laptop, Rocket, Globe, Briefcase, Search, Network, ClipboardList, Target, TrendingUp, BarChart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Recruitment() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Recruitment Software Development & AI Solutions | Madlabs Digital</title>
        <meta name="description" content="Digital solutions that help recruitment teams hire faster and smarter. Expert recruitment software development, AI automation, and ATS integrations." />
        <meta name="keywords" content="Recruitment Software Development, Recruitment CRM, Applicant Tracking System Development, Recruitment Automation, AI Recruitment Solutions, Recruitment Website Development, HR Technology, Staffing Software, Recruitment Digital Transformation, Recruitment Technology Consulting" />
        <link rel="canonical" href="https://madlabs.digital/industries/recruitment" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Recruitment Software Development & AI Solutions | Madlabs Digital" />
        <meta property="og:description" content="Digital solutions that help recruitment teams hire faster and smarter. Expert recruitment software development, AI automation, and ATS integrations." />
        <meta property="og:url" content="https://madlabs.digital/industries/recruitment" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recruitment Software Development & AI Solutions | Madlabs Digital" />
        <meta name="twitter:description" content="Digital solutions that help recruitment teams hire faster and smarter. Expert recruitment software development, AI automation, and ATS integrations." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Recruitment Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for recruitment agencies, offering custom ATS, CRM integration, AI candidate screening, and automation.",
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
                "name": "Recruitment"
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
                  "name": "Can AI screen resumes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI can instantly parse and screen thousands of resumes, matching candidate skills and experience against job requirements to highlight the most qualified individuals without replacing human judgment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you build recruitment software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in building bespoke recruitment software, including custom Applicant Tracking Systems (ATS), candidate portals, and specialized recruitment CRM solutions tailored to your workflows."
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
              Recruitment Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              We Help Recruitment Teams <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Hire Faster and Smarter.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Modern recruitment is about speed, relationships, and candidate experience. Madlabs Digital helps recruitment businesses automate hiring workflows, improve candidate engagement, integrate AI, streamline recruiter operations, and build digital platforms that help teams place better candidates faster.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Transform Your Recruitment Business <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Recruitment Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-sm font-medium text-white/60">Reduction in Administrative Tasks</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-sm font-medium text-white/60">Faster Candidate Processing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm font-medium text-white/60">AI Candidate Engagement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-sm font-medium text-white/60">Recruiter Productivity Improvements</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Recruitment Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Recruiters are bogged down by manual candidate screening, high administrative workloads, and disconnected systems. Slow communication leads to high candidate drop-off rates and damages employer branding.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Fragmented hiring workflows, limited automation, and poor reporting mean agencies struggle to scale operations. Without clear visibility into team performance, it is difficult to identify bottlenecks in the talent acquisition pipeline.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Successful recruitment businesses rely on technology to eliminate repetitive administrative work, allowing recruiters to focus on what matters most: building strong human relationships and making strategic hiring decisions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SYSTEMS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Recruitment Processes Fall Short</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Recruitment technology should help recruiters focus on relationships instead of repetitive administrative work. Here is why legacy systems fail.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Manual Screening & Spreadsheets</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Manually screening CVs and tracking candidates in spreadsheets is incredibly slow and prone to human error, resulting in top talent slipping through the cracks.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Disconnected ATS and CRM</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    When your Applicant Tracking System doesn't talk to your CRM, candidate communication becomes disjointed. Slow follow-ups directly cause candidate drop-off.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> No Automation or AI</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Without AI or automated workflows, agencies lack visibility into recruiter performance, suffer from poor analytics, and fail to provide a modern candidate experience through updated websites.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">How to Build for Efficiency</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Rocket className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unified Talent Ecosystem</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Connect your ATS, CRM, and communication tools into a single, cohesive platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <BrainCircuit className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI-Powered Efficiency</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Leverage machine learning for instant resume parsing, matching, and automated candidate engagement.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Real-Time Visibility</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Implement comprehensive analytics dashboards to monitor pipeline health and recruiter productivity.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Recruitment Growth Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic roadmap designed to digitize hiring workflows, integrate advanced technologies, and automate operational tasks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Business Assessment", desc: "Analyzing current performance, operational bottlenecks, and hiring objectives." },
              { num: "02", title: "Workflow Analysis", desc: "Mapping manual processes, candidate touchpoints, and screening procedures." },
              { num: "03", title: "Tech Strategy", desc: "Defining the technology stack, platform architecture, and integration requirements." },
              { num: "04", title: "Platform Design", desc: "Designing intuitive job boards, candidate portals, and recruiter dashboards." },
              { num: "05", title: "CRM & ATS Integration", desc: "Connecting distinct software systems into a unified recruitment ecosystem." },
              { num: "06", title: "AI Automation", desc: "Deploying intelligent resume parsing, matching, and automated scheduling." },
              { num: "07", title: "Analytics", desc: "Setting up real-time reporting for pipeline tracking and productivity insights." },
              { num: "08", title: "Optimization", desc: "Refining workflows based on data insights and candidate feedback." },
              { num: "09", title: "Growth", desc: "Scaling operations securely to handle higher requisition volumes efficiently." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Recruitment Companies</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              End-to-end recruitment software engineered to deliver superior candidate experiences and robust operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Websites & Portals", desc: "Build high-performance employer brands with modern job boards and secure candidate hubs.", features: ["Recruitment Websites", "Job Boards", "Candidate Portals", "Employer Portals"] },
              { icon: Briefcase, title: "Core Recruitment Systems", desc: "Centralize your operations with bespoke tracking and relationship management tools.", features: ["Applicant Tracking Systems", "Recruitment CRM", "Executive Search Platforms", "Custom Recruitment Platforms"] },
              { icon: BrainCircuit, title: "AI & Automation", desc: "Eliminate manual tasks with intelligent screening and automated workflow triggers.", features: ["AI Candidate Screening", "Resume Parsing", "Interview Scheduling", "Workflow Automation"] },
              { icon: Mail, title: "Communication", desc: "Engage candidates seamlessly across their preferred channels with automated follow-ups.", features: ["Candidate Communication", "Email Automation", "WhatsApp Integration"] },
              { icon: BarChart, title: "Analytics & Insights", desc: "Make proactive decisions with real-time business intelligence and performance reporting.", features: ["Recruiter Dashboards", "Analytics Dashboards", "Performance Reporting"] },
              { icon: Network, title: "Ecosystem Integration", desc: "Ensure your tools work together seamlessly through robust API connections and mobile access.", features: ["API Integrations", "CRM Integrations", "Knowledge Bases", "Recruitment Mobile Apps"] }
            ].map((solution, i) => (
              <div key={i} className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 transition-colors flex flex-col h-full">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-grey flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">{solution.desc}</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Recruitment</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Strategic capabilities required to modernize your agency and build a scalable talent acquisition machine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Automate resume parsing, optimize interview scheduling, and deploy AI assistants to handle candidate FAQs 24/7.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Centralize candidate communications, automate follow-up sequences, and integrate your CRM with core ATS platforms.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build ultra-fast, mobile-optimized recruitment websites and job boards that attract top talent and reflect your employer brand.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Develop bespoke applicant tracking systems, custom recruiter applications, and complex enterprise HR software.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic guidance on HR technology adoption, system integrations, and modernizing legacy recruitment infrastructure.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Lead Generation & SEO</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Drive high-intent B2B client traffic and attract passive candidates through robust technical SEO and content strategies.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Lead Generation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The Recruitment Technology Stack</h2>
            <p className="text-brand-text/70 text-lg">We leverage industry-leading platforms and frameworks to build resilient, high-performance recruitment experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frontend & Portals</h4>
              <p className="text-sm text-brand-text/60">Next.js, React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & AI</h4>
              <p className="text-sm text-brand-text/60">Node.js, Python, OpenAI, Supabase</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Core HR Tech</h4>
              <p className="text-sm text-brand-text/60">Bullhorn, Greenhouse, Lever, HubSpot</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Comms & Ops</h4>
              <p className="text-sm text-brand-text/60">Twilio, WhatsApp API, LinkedIn, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.5: THE MODERN RECRUITMENT JOURNEY */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Recruitment Journey</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                We optimize every touchpoint to guide candidates efficiently from initial attraction to successful placement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Job Posting & Candidate Attraction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">AI Screening & Recruiter Review</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Interview Scheduling & Offers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Placement & Candidate Follow-up</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Talent Pipeline</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Attraction → Screening → Interview → Placement → Retention</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Phase 1: Attraction</p>
                  <p className="text-xs text-brand-text/70">Job Requirements are mapped to dynamic Job Postings, driving targeted Applications through optimized portals.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Phase 2: Selection</p>
                  <p className="text-xs text-brand-text/70">AI Screening instantly surfaces top matches for Recruiter Review, leading to automated Interview Scheduling.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Phase 3: Placement</p>
                  <p className="text-xs text-brand-text/70">Seamless Offer management, successful Placement, and structured Candidate Follow-up ensure long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUSINESS BENEFITS */}
      <section className="py-24 lg:py-32 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center max-w-3xl mx-auto">Tangible Outcomes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Faster Hiring</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Accelerate time-to-hire with automated workflows, instant AI screening, and frictionless interview scheduling, resulting in higher placement rates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Improved Recruiter Productivity</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Reduce administrative workloads drastically, allowing recruiters to focus on building stronger client relationships and engaging top talent.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Better Candidate Experience</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Provide seamless communication and transparent processes through candidate portals and automated updates, significantly reducing drop-off rates.
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
              <p className="text-lg text-brand-text/70">Real results driving workflow automation, AI integration, and operational efficiency.</p>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">Enterprise Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Workflow Automation</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Implemented robust system integrations and automated candidate follow-ups, eliminating manual data entry.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Time-to-Hire</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">-40%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Recruiter Capacity</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+35%</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Tech Staffing Agency</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Platform Development</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Rebuilt a legacy ATS into a scalable, modern tracking platform with advanced analytics and seamless LinkedIn integration.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">System Speed</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">3x Faster</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Data Accuracy</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">99.9%</span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link to="/case-studies/top-uae-real-estate" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">Executive Search Firm</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">AI Integration</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Integrated AI-powered resume matching and deployed custom CRM workflows for unified candidate communication.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Screening Time</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">-70%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Placement Rate</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+25%</span>
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

      {/* SECTION 10: SOLUTIONS BY TYPE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions by Recruitment Business Type</h2>
            <p className="text-brand-text/70 text-lg">We architect tailored digital experiences that solve the unique operational challenges of different recruitment sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Executive Search</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: High-touch communication, secure document handling.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Secure Portals, Custom CRM</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Temporary Staffing</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Rapid deployment, complex shift scheduling.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Mobile Apps, Automated Scheduling</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Permanent Recruitment</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Candidate matching, long hiring cycles.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: ATS Integration, AI Matching</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Healthcare Recruitment</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Credential verification, compliance tracking.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Automated Document Processing</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Technology Recruitment</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Technical skill assessment, fierce competition.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Tech Assessments, Employer Branding</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Finance Recruitment</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Confidentiality, highly specific skillsets.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Semantic Search, Secure Data Rooms</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Education Recruitment</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Background checks, seasonal hiring spikes.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Workflow Automation, Scalable Systems</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Enterprise Talent Acquisition</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Volume hiring, multi-department coordination.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Enterprise ATS, Advanced Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10.5: AI IN RECRUITMENT */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI in Recruitment</h2>
            <p className="text-brand-text/70 text-lg">AI supports recruiters by automating repetitive tasks while keeping hiring decisions fundamentally human.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <FileText className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Resume Screening</h3>
                <p className="text-brand-text/70 text-sm">Instantly parse and evaluate thousands of resumes against specific job requirements to surface the most relevant candidates.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Search className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Candidate Matching</h3>
                <p className="text-brand-text/70 text-sm">Utilize semantic search to map candidate skills, experience, and potential to open requisitions automatically.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Bot className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Chatbots & FAQs</h3>
                <p className="text-brand-text/70 text-sm">Deploy intelligent agents to answer common candidate questions and provide application updates 24/7.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <ClipboardList className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Interview Scheduling</h3>
                <p className="text-brand-text/70 text-sm">Automate the back-and-forth of interview coordination by syncing recruiter calendars directly with candidate availability.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <BrainCircuit className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Recruiter Assistants</h3>
                <p className="text-brand-text/70 text-sm">Provide recruiters with AI co-pilots that draft job descriptions, compose outreach emails, and summarize interview notes.</p>
             </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <BarChart className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Recruitment Analytics</h3>
                <p className="text-brand-text/70 text-sm">Predict time-to-fill, identify bottlenecks in the hiring pipeline, and automatically generate comprehensive performance reports.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">The Future of Talent Acquisition</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Industry research confirms that digital transformation is no longer optional for recruitment agencies. Automation and AI are fundamental to meeting modern candidate expectations and accelerating hiring speed.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-lime mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Recruitment Automation</h4>
                    <p className="text-white/60 text-sm mt-1">LinkedIn reports that recruiters using automation tools fill roles significantly faster than those relying on manual processes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-lime mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">AI Adoption</h4>
                    <p className="text-white/60 text-sm mt-1">Gartner research indicates that leading HR teams are rapidly adopting AI to support, rather than replace, human hiring decisions.</p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-lime mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Candidate Expectations</h4>
                    <p className="text-white/60 text-sm mt-1">SHRM studies show that seamless digital experiences and fast communication are critical to preventing candidate drop-off.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
               <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-xl">Top Talent Lost Due to Slow Processes</span>
                      <span className="text-brand-purple font-bold text-2xl">60%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-brand-purple h-2 rounded-full w-[60%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-xl">Recruiters Adopting AI Tools</span>
                      <span className="text-brand-blue font-bold text-2xl">75%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-brand-blue h-2 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-xl">Efficiency Gain from Automation</span>
                      <span className="text-brand-lime font-bold text-2xl">40%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-brand-lime h-2 rounded-full w-[40%]"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Common Mistakes in Recruitment</h2>
            <p className="text-brand-text/70 text-lg">Avoid these frequent pitfalls that constrain agency growth and damage the candidate experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
             <div className="flex items-start">
               <div className="bg-red-50 p-2 rounded-lg mr-4 shrink-0">
                 <Target className="w-5 h-5 text-red-500" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Manual Screening</h4>
                 <p className="text-brand-text/70 text-sm">Relying on manual CV review leads to immense bottlenecks and burnout. Adopt AI parsing to surface qualified candidates instantly.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="bg-red-50 p-2 rounded-lg mr-4 shrink-0">
                 <Target className="w-5 h-5 text-red-500" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Ignoring Candidate Experience</h4>
                 <p className="text-brand-text/70 text-sm">A clunky application process deters top talent. Build modern, mobile-optimized portals with one-click apply capabilities.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="bg-red-50 p-2 rounded-lg mr-4 shrink-0">
                 <Target className="w-5 h-5 text-red-500" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Disconnected Systems</h4>
                 <p className="text-brand-text/70 text-sm">Using separate, siloed tools for ATS, CRM, and email creates data chaos. Integrate your systems for a unified source of truth.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="bg-red-50 p-2 rounded-lg mr-4 shrink-0">
                 <Target className="w-5 h-5 text-red-500" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Slow Response Times</h4>
                 <p className="text-brand-text/70 text-sm">Delayed communication causes candidates to accept other offers. Implement automated follow-up sequences and interview scheduling.</p>
               </div>
             </div>
             <div className="flex items-start">
               <div className="bg-red-50 p-2 rounded-lg mr-4 shrink-0">
                 <Target className="w-5 h-5 text-red-500" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Poor Employer Branding</h4>
                 <p className="text-brand-text/70 text-sm">Outdated websites fail to convey your agency's value. Invest in professional web development to establish immediate credibility.</p>
               </div>
             </div>
              <div className="flex items-start">
               <div className="bg-red-50 p-2 rounded-lg mr-4 shrink-0">
                 <Target className="w-5 h-5 text-red-500" />
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Weak Reporting</h4>
                 <p className="text-brand-text/70 text-sm">Operating without analytics means you cannot optimize your pipeline. Implement custom dashboards to track recruiter performance.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-text/70 text-lg">Everything you need to know about our recruitment technology solutions.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Can AI screen resumes?", a: "Yes, AI can instantly parse and screen thousands of resumes, matching candidate skills and experience against job requirements to highlight the most qualified individuals without replacing human judgment." },
              { q: "Can you build recruitment software?", a: "Yes, we specialize in building bespoke recruitment software, including custom Applicant Tracking Systems (ATS), candidate portals, and specialized recruitment CRM solutions tailored to your workflows." },
              { q: "Can you integrate Bullhorn?", a: "Absolutely. We have extensive experience integrating Bullhorn via API to connect it with your website, custom applications, and other business systems." },
              { q: "Can you integrate Greenhouse?", a: "Yes, we integrate Greenhouse and other leading ATS platforms to ensure seamless data flow across your entire recruitment technology stack." },
              { q: "Can AI schedule interviews?", a: "Yes, AI and automation tools can eliminate the back-and-forth of interview scheduling by allowing candidates to book times directly based on real-time recruiter availability." },
              { q: "Can you automate candidate communication?", a: "We build automated communication workflows that trigger emails or WhatsApp messages based on candidate status changes, ensuring they are always kept in the loop." },
              { q: "Can you build applicant tracking systems?", a: "Yes. While many clients use off-the-shelf ATS platforms, we build fully custom Applicant Tracking Systems for agencies that require unique, specialized workflows." },
              { q: "Can you build recruitment websites?", a: "Yes, we design and develop high-performance recruitment websites and job boards optimized for speed, mobile responsiveness, and technical SEO." },
              { q: "Can you integrate LinkedIn?", a: "Yes, we can integrate LinkedIn APIs to streamline candidate sourcing, allow for 'Apply with LinkedIn' functionality, and enrich candidate profiles." },
              { q: "Can you automate recruiter workflows?", a: "We automate repetitive tasks like data entry, pipeline movement notifications, and document generation so recruiters can focus on relationships." },
              { q: "Can you modernize legacy recruitment software?", a: "Yes, we help agencies transition from outdated legacy systems to modern, cloud-based architectures without losing historical candidate data." },
              { q: "Can recruitment agencies benefit from CRM?", a: "Immensely. A CRM tailored for recruitment helps manage client relationships, track business development efforts, and forecast revenue separate from the ATS." },
              { q: "Can you improve recruiter productivity?", a: "By eliminating manual screening, automating scheduling, and centralizing data, our technology solutions directly increase the number of candidates a recruiter can process." },
              { q: "Can you build mobile apps?", a: "Yes, we develop custom iOS and Android applications for both candidates (for job searching and updates) and recruiters (for on-the-go pipeline management)." },
              { q: "Can you automate onboarding?", a: "Yes, we build digital onboarding portals that automate document signing, credential collection, and compliance checks." },
              { q: "Do you provide maintenance?", a: "Yes, we provide ongoing technical support, security updates, and continuous optimization to ensure your recruitment platform remains reliable." },
              { q: "How secure is candidate data?", a: "We adhere strictly to data protection regulations (like GDPR) and implement robust encryption and secure cloud architectures to protect sensitive candidate information." },
              { q: "How long does development take?", a: "Timelines vary based on complexity. A recruitment website might take 6-8 weeks, while a custom ATS or complex integration project could take 3-6 months." },
              { q: "Who owns the code?", a: "Upon project completion and final payment, you retain full ownership of the intellectual property and source code for custom-built software." },
              { q: "How do we get started?", a: "Begin by booking a Recruitment Strategy Call. We will discuss your current bottlenecks, evaluate your technology stack, and propose a tailored digital transformation plan." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-brand-grey rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-[#fafafa]"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <div className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <ArrowUpRight className="w-5 h-5 text-brand-purple" />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-brand-text/70 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED SERVICES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Related Services</h2>
            <p className="text-brand-text/70 text-lg">Comprehensive capabilities to support your recruitment agency's growth.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <Link to="/services/ai-automation" className="p-6 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors group">
              <Bot className="w-8 h-8 text-brand-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">AI Business Automation</h3>
              <p className="text-xs text-brand-text/60">Automate screening and scheduling.</p>
            </Link>
            <Link to="/services/crm-systems" className="p-6 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-blue/50 transition-colors group">
              <Users className="w-8 h-8 text-brand-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">CRM & Business Systems</h3>
              <p className="text-xs text-brand-text/60">Centralize client relationships.</p>
            </Link>
            <Link to="/services/web-development" className="p-6 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-lime/50 transition-colors group">
              <Globe className="w-8 h-8 text-brand-lime mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">Web Development</h3>
              <p className="text-xs text-brand-text/60">Build robust job boards.</p>
            </Link>
             <Link to="/services/lead-generation" className="p-6 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors group">
              <LineChart className="w-8 h-8 text-brand-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">Lead Generation Systems</h3>
              <p className="text-xs text-brand-text/60">Attract clients and candidates.</p>
            </Link>
            <Link to="/services/product-development" className="p-6 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-blue/50 transition-colors group">
              <Laptop className="w-8 h-8 text-brand-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">Product Development</h3>
              <p className="text-xs text-brand-text/60">Custom ATS development.</p>
            </Link>
            <Link to="/services/digital-consulting" className="p-6 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-lime/50 transition-colors group">
              <BrainCircuit className="w-8 h-8 text-brand-lime mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">Digital Consulting</h3>
              <p className="text-xs text-brand-text/60">HR technology strategy.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15: RELATED BLOGS */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Latest Insights</h2>
              <p className="text-brand-text/70 text-lg">Expert perspectives on recruitment technology and automation.</p>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/blog/how-to-scale-business-operations-with-ai-automation" className="bg-white border border-brand-grey rounded-2xl p-6 hover:shadow-lg transition-all group">
               <div className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-5 h-5 text-brand-purple" />
               </div>
               <h3 className="font-bold mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">How to Scale Business Operations with AI Automation</h3>
               <span className="text-brand-purple text-sm font-semibold inline-flex items-center mt-4">
                  Read article <ArrowRight className="ml-1 w-3 h-3" />
               </span>
            </Link>
            <Link to="/blog/when-to-upgrade-your-crm-architecture" className="bg-white border border-brand-grey rounded-2xl p-6 hover:shadow-lg transition-all group">
               <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5 text-brand-blue" />
               </div>
               <h3 className="font-bold mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">When to Upgrade Your CRM Architecture</h3>
               <span className="text-brand-blue text-sm font-semibold inline-flex items-center mt-4">
                  Read article <ArrowRight className="ml-1 w-3 h-3" />
               </span>
            </Link>
            <Link to="/blog/building-seo-lead-generation-systems" className="bg-white border border-brand-grey rounded-2xl p-6 hover:shadow-lg transition-all group">
               <div className="w-10 h-10 bg-brand-lime/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <LineChart className="w-5 h-5 text-brand-lime" />
               </div>
               <h3 className="font-bold mb-2 group-hover:text-brand-lime transition-colors line-clamp-2">Building SEO Lead Generation Systems That Actually Convert</h3>
               <span className="text-brand-lime text-sm font-semibold inline-flex items-center mt-4">
                  Read article <ArrowRight className="ml-1 w-3 h-3" />
               </span>
            </Link>
            <Link to="/blog/content-velocity-with-ai" className="bg-white border border-brand-grey rounded-2xl p-6 hover:shadow-lg transition-all group">
               <div className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5 text-brand-purple" />
               </div>
               <h3 className="font-bold mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">Content Velocity with AI</h3>
               <span className="text-brand-purple text-sm font-semibold inline-flex items-center mt-4">
                  Read article <ArrowRight className="ml-1 w-3 h-3" />
               </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-brand-dark to-brand-blue/20 opacity-50"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-brand-purple/30 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-brand-lime/20 rounded-full blur-[100px] opacity-50"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">Build a Recruitment Business That Scales with Technology</h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're modernizing your recruitment agency, building a custom applicant tracking system, integrating AI into hiring workflows, improving recruiter productivity, or creating better candidate experiences, Madlabs Digital helps recruitment businesses grow through intelligent, scalable technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 font-bold px-8">
                Transform Your Recruitment Business <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-bold px-8">
                Book Recruitment Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
