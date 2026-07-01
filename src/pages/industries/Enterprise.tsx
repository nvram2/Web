import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, ShieldCheck, Mail, LineChart, Laptop, Rocket, Globe, Building2, Workflow, Code2, Network, Lock, BarChart, HardDrive, Target, TrendingUp, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Enterprise() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Enterprise Software Development & Digital Transformation | Madlabs Digital</title>
        <meta name="description" content="Enterprise technology solutions built for scale, security, and long-term growth. Expert enterprise software development, digital transformation, and AI solutions." />
        <meta name="keywords" content="Enterprise Software Development, Enterprise Digital Transformation, Enterprise AI Solutions, Enterprise Automation, Enterprise Software Consulting, Legacy System Modernization, Enterprise Technology Consulting, Enterprise CRM, Enterprise Web Development, Enterprise Product Development" />
        <link rel="canonical" href="https://madlabs.digital/industries/enterprise" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Enterprise Software Development & Digital Transformation | Madlabs Digital" />
        <meta property="og:description" content="Enterprise technology solutions built for scale, security, and long-term growth. Expert enterprise software development, digital transformation, and AI solutions." />
        <meta property="og:url" content="https://madlabs.digital/industries/enterprise" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Software Development & Digital Transformation | Madlabs Digital" />
        <meta name="twitter:description" content="Enterprise technology solutions built for scale, security, and long-term growth. Expert enterprise software development, digital transformation, and AI solutions." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Enterprise Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for enterprise organizations, offering legacy system modernization, AI automation, and secure enterprise platform development.",
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
                "name": "Enterprise"
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
                  "name": "Can you modernize legacy systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in legacy system modernization. We systematically audit your existing infrastructure, design a modernized architecture, and execute a phased migration to ensure zero disruption to your ongoing operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AI automate enterprise workflows?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. AI can automate complex, multi-step enterprise workflows—such as document processing, intelligent data extraction, predictive analytics, and customer support triage—significantly reducing manual operational overhead."
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
              Enterprise Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Enterprise Technology Built for <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Scale, Security & Growth.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Enterprise organizations require technology that scales across departments, integrates with existing systems, improves operational efficiency, and supports long-term business objectives. Madlabs Digital helps enterprises modernize legacy platforms, implement AI, automate workflows, and build secure digital solutions that create measurable business value.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Transform Your Enterprise <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Enterprise Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">300+</div>
                <div className="text-sm font-medium text-white/60">Enterprise Workflows Optimized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm font-medium text-white/60">Platform Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-sm font-medium text-white/60">Reduction in Manual Operations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm font-medium text-white/60">Industries Served</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Enterprise Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Enterprise organizations are often paralyzed by legacy software, disconnected business systems, and entrenched manual processes. As departments operate in silos, complex integrations fail, leading to data inconsistency and severely stunting innovation.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Operational inefficiencies multiply at scale. Without a unified digital infrastructure, enterprises face growing cybersecurity risks, limited visibility into business performance, and immense challenges when attempting to scale operations globally.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              To remain competitive, enterprise organizations require connected technology ecosystems designed for agility and security, rather than merely patching together isolated software point solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SYSTEMS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Enterprise Technology Falls Short</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Enterprises need business-led technology transformation rather than simply replacing software. Here is why legacy infrastructure stalls growth.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Isolated Point Solutions</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Deploying disconnected software for specific tasks creates massive technical debt. Without deep integration, data remains trapped in departmental silos, preventing accurate enterprise-wide reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Manual Approvals & Weak Automation</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Relying on manual approvals and weak automation bottlenecks operations. It slows down development cycles, frustrates employees, and guarantees poor user adoption of new tools.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> No Cohesive AI Strategy</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Enterprises without a clear AI strategy rely entirely on human effort for routine data processing. This prevents predictive analytics and limits the organization's ability to operate efficiently at scale.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">How to Build for the Future</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Workflow className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unified Data Architecture</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Connect your ERP, CRM, and internal systems into a single source of truth.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <BrainCircuit className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Strategic AI Integration</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Deploy secure, enterprise-grade AI to automate document processing and reporting.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Zero-Trust Security</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Implement rigorous identity management and data encryption from day one.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Enterprise Transformation Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic, phased methodology designed to modernize legacy systems, mitigate risk, and ensure seamless digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { num: "01", title: "Business Discovery & Assessment", desc: "Evaluating current state, identifying operational bottlenecks, and auditing existing legacy technology." },
              { num: "02", title: "Digital Strategy & Architecture", desc: "Defining the modernization roadmap, selecting the technology stack, and planning secure cloud infrastructure." },
              { num: "03", title: "Development & Integration", desc: "Building secure enterprise applications and integrating them directly with existing ERP and CRM systems." },
              { num: "04", title: "AI Enablement & Automation", desc: "Deploying intelligent workflows, automated document processing, and predictive analytics dashboards." },
              { num: "05", title: "Testing & Security Validation", desc: "Rigorous quality assurance, penetration testing, and compliance validation before deployment." },
              { num: "06", title: "Deployment & Optimization", desc: "Phased rollout to ensure zero operational disruption, followed by extensive user training." },
              { num: "07", title: "Continuous Innovation", desc: "Ongoing monitoring, feature enhancements, and strategic alignment with evolving business goals." },
              { num: "08", title: "Scale", desc: "Expanding the technology footprint securely across global departments and subsidiaries." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Enterprise Organizations</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Secure, scalable platforms engineered to eliminate data silos, automate complex workflows, and drive organization-wide productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Modernization & Transformation", desc: "Systematically retire technical debt. We rebuild legacy applications into fast, secure, cloud-native platforms.", features: ["Legacy System Modernization", "Digital Transformation", "Cloud Migration", "Enterprise Web Applications"] },
              { icon: Network, title: "Systems & Integration", desc: "Connect your entire tech stack. We ensure seamless data flow between distinct enterprise tools.", features: ["Enterprise CRM", "Enterprise Integrations", "ERP Integration", "API Development"] },
              { icon: BrainCircuit, title: "AI & Automation", desc: "Deploy intelligent systems that automate repetitive administrative work and accelerate decision-making.", features: ["AI Business Automation", "Workflow Automation", "Document Automation", "Knowledge Management"] },
              { icon: Users, title: "Portals & Workspaces", desc: "Build secure, centralized digital environments for your workforce and your enterprise clients.", features: ["Employee Portals", "Customer Portals", "Internal Business Platforms", "Mobile Enterprise Applications"] },
              { icon: BarChart, title: "Data & Intelligence", desc: "Transform fragmented data into actionable insights through robust executive reporting.", features: ["Business Intelligence", "Analytics Platforms", "Executive Dashboards", "Predictive Analytics"] },
              { icon: ShieldCheck, title: "Security & Governance", desc: "Architect solutions from the ground up with rigorous security, compliance, and access controls.", features: ["Identity & Access Management", "Custom Enterprise Software", "Compliance Architecture"] }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Enterprise</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Strategic capabilities required to modernize your operations and build a secure, future-ready organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic guidance on enterprise architecture, cloud migration, legacy modernization, and digital transformation roadmaps.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Deploy secure AI models to automate data entry, streamline compliance document processing, and power internal knowledge bases.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Implement and customize enterprise-grade CRM solutions like Salesforce or HubSpot, integrated deeply with your ERP.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build bespoke, highly secure internal software applications, employee portals, and custom operational dashboards.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Develop scalable, multi-region corporate websites and complex customer service portals with robust security architectures.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Lead Generation & SEO</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Execute enterprise-scale SEO strategies and account-based marketing (ABM) campaigns to capture high-value market share.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
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
            <h2 className="text-3xl font-bold mb-4">The Enterprise Technology Stack</h2>
            <p className="text-brand-text/70 text-lg">We leverage industry-leading platforms and frameworks to build resilient, highly secure enterprise applications.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frontend & APIs</h4>
              <p className="text-sm text-brand-text/60">Next.js, React, TypeScript, GraphQL, REST APIs</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & AI</h4>
              <p className="text-sm text-brand-text/60">Node.js, Python, OpenAI, Supabase, PostgreSQL</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Cloud & Infra</h4>
              <p className="text-sm text-brand-text/60">AWS, Google Cloud, Azure, Docker, Kubernetes</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Enterprise SaaS</h4>
              <p className="text-sm text-brand-text/60">Salesforce, HubSpot, Power BI, Looker Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.5: THE MODERN ENTERPRISE WORKFLOW */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Enterprise Workflow</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                We design connected technology ecosystems that ensure data flows seamlessly across every departmental function.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Customer Request & Sales CRM</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Operations & Automated Approvals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Service Delivery & Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Executive Reporting & BI Analytics</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Operational Pipeline</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Sales → Operations → Delivery → Analytics → Optimization</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Phase 1: Ingestion</p>
                  <p className="text-xs text-brand-text/70">Customer Requests and Sales activity are immediately synchronized with the enterprise CRM.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Phase 2: Execution</p>
                  <p className="text-xs text-brand-text/70">Operations take over via workflow Automation, ensuring rapid Approvals and frictionless Delivery.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Phase 3: Intelligence</p>
                  <p className="text-xs text-brand-text/70">Comprehensive Reporting and Analytics provide executive visibility, driving Continuous Improvement.</p>
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
                <TrendingUp className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lower Operating Costs</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Retiring expensive legacy systems and automating manual workflows significantly reduces technical debt and improves overall employee efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Connected Systems</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Break down departmental silos with unified data visibility, enabling faster decision-making and a vastly improved customer experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise-Grade Security</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Establish a highly secure, scalable infrastructure that supports long-term technology strategy while adhering to rigorous compliance standards.
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
              <p className="text-lg text-brand-text/70">Real results driving digital transformation, legacy modernization, and operational efficiency.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/uae-insurance" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">UAE Insurance</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Digital Transformation</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Modernized a legacy claims processing system, integrating AI document extraction to drastically reduce manual processing times.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Processing Time</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">-60%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Operational Efficiency</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+45%</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Enterprise SaaS Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Platform Modernization</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Migrated a massive monolithic application to a scalable microservices architecture, resolving critical technical debt and downtime.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Platform Reliability</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">99.99%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Development Speed</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">2x Faster</span>
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
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Enterprise SEO & Automation</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Deployed enterprise-scale technical SEO strategies and automated inventory syncing across international distribution centers.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Organic Traffic</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+85%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Data Silos</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">Eliminated</span>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions by Enterprise Industry</h2>
            <p className="text-brand-text/70 text-lg">We architect highly secure, compliant digital platforms tailored to the complex operational realities of specialized industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Financial Services</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Strict regulatory compliance, legacy banking mainframes.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: API Security, Legacy Modernization</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Insurance</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: High-volume claims processing, manual document handling.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: AI Document Extraction, Customer Portals</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Healthcare</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: HIPAA compliance, disconnected patient records.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Secure Data Architecture, Interoperability</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Manufacturing</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Supply chain visibility, predictive maintenance.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: IoT Integration, ERP Connectivity</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Retail</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Omnichannel inconsistency, inventory synchronization.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Headless Commerce, Unified CRM</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Government</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Rigid procurement, extreme security requirements.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Cloud Migration, Citizen Portals</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Logistics</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Real-time tracking, complex route optimization.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Supply Chain Visibility, AI Routing</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Technology</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Rapid scaling, technical debt accumulation.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Microservices Architecture, API Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10.5: AI IN ENTERPRISE */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI for Enterprise</h2>
            <p className="text-brand-text/70 text-lg">AI is a strategic business capability that enhances employees, improves decision-making, and automates repetitive work at scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <BrainCircuit className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Knowledge Assistants</h3>
                <p className="text-brand-text/70 text-sm">Deploy secure, internal AI models that instantly retrieve answers from vast enterprise knowledge bases and intranet portals.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <FileText className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Document Processing</h3>
                <p className="text-brand-text/70 text-sm">Automatically extract structured data from unstructured invoices, contracts, and compliance forms using advanced computer vision.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Workflow className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Workflow Automation</h3>
                <p className="text-brand-text/70 text-sm">Implement intelligent routing logic that automatically categorizes requests and assigns them to the correct departmental queue.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <LineChart className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Predictive Analytics</h3>
                <p className="text-brand-text/70 text-sm">Analyze vast datasets to forecast supply chain disruptions, model financial scenarios, and empower executive decision support.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Bot className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Customer Service Automation</h3>
                <p className="text-brand-text/70 text-sm">Resolve tier-1 support tickets instantly using AI chatbots integrated directly with your CRM and backend systems.</p>
             </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Search className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Search</h3>
                <p className="text-brand-text/70 text-sm">Implement semantic search across your entire enterprise architecture, allowing employees to find documents via natural language.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: SECURITY & GOVERNANCE */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Security & Governance</h2>
               <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                 Enterprise platforms must be secure by design. We embed rigorous compliance and security architecture into every solution from day one.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                    <span className="font-medium">Role-Based Access Control (RBAC) & Single Sign-On</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                    <span className="font-medium">Comprehensive Audit Logs & API Security</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                    <span className="font-medium">Data Encryption (At Rest and In Transit)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                    <span className="font-medium">Disaster Recovery & Business Continuity</span>
                  </li>
               </ul>
             </div>
             <div className="bg-[#fafafa] p-10 rounded-[2rem] border border-brand-grey relative overflow-hidden">
                <ShieldCheck className="w-24 h-24 text-brand-purple/10 absolute top-[-10%] right-[-10%] z-0" />
                <h3 className="text-xl font-bold mb-4 relative z-10">Governance Frameworks</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-6 relative z-10">
                  Adopting AI and modernizing cloud infrastructure introduces new risk vectors. We implement strict governance protocols to ensure technology adoption aligns with internal compliance requirements and external regulatory standards.
                </p>
                 <div className="grid grid-cols-2 gap-4 relative z-10">
                   <div className="bg-white p-4 rounded-xl border border-brand-grey flex flex-col items-center justify-center text-center">
                      <Lock className="w-6 h-6 text-brand-blue mb-2" />
                      <span className="text-xs font-semibold">Cloud Security</span>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-brand-grey flex flex-col items-center justify-center text-center">
                      <HardDrive className="w-6 h-6 text-brand-lime mb-2" />
                      <span className="text-xs font-semibold">Data Sovereignty</span>
                   </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Cost of Legacy Systems</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Leading research firms agree: failing to execute enterprise digital transformation actively damages market competitiveness and inflates operating costs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-brand-lime text-black hover:bg-brand-lime/90">
                  Discuss Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <div className="text-4xl font-bold text-brand-lime mb-2">70%</div>
                <p className="text-sm text-white/70">Of digital transformations fail due to poor change management and lack of executive sponsorship (McKinsey).</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <div className="text-4xl font-bold text-brand-purple mb-2">90%</div>
                <p className="text-sm text-white/70">Of enterprise IT budgets are consumed simply maintaining legacy infrastructure (Gartner).</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <div className="text-4xl font-bold text-brand-blue mb-2">40%</div>
                <p className="text-sm text-white/70">Productivity increase when enterprises successfully deploy comprehensive workflow automation (Deloitte).</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <div className="text-4xl font-bold text-brand-lime mb-2">3x</div>
                <p className="text-sm text-white/70">Higher profit growth for organizations that actively integrate AI into their business strategy (IBM).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: COMMON MISTAKES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Enterprise Transformation Pitfalls</h2>
            <p className="text-brand-text/70 text-lg">Avoid these critical mistakes that derail enterprise technology initiatives and waste millions in IT budget.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
              <h3 className="font-bold text-lg mb-2 text-red-900">Modernizing Without Strategy</h3>
              <p className="text-sm text-red-800/80 leading-relaxed">Choosing technology before defining clear business goals guarantees the new system won't solve the underlying operational problems.</p>
            </div>
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
              <h3 className="font-bold text-lg mb-2 text-red-900">Ignoring User Adoption</h3>
              <p className="text-sm text-red-800/80 leading-relaxed">Failing to invest in change management and employee training ensures that expensive new software will be actively resisted.</p>
            </div>
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
              <h3 className="font-bold text-lg mb-2 text-red-900">Lack of Executive Sponsorship</h3>
              <p className="text-sm text-red-800/80 leading-relaxed">Without strong leadership championing the transformation, cross-departmental alignment becomes impossible to achieve.</p>
            </div>
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
              <h3 className="font-bold text-lg mb-2 text-red-900">Poor Integrations</h3>
              <p className="text-sm text-red-800/80 leading-relaxed">Implementing software that cannot communicate with existing ERPs or CRMs simply creates a new, expensive data silo.</p>
            </div>
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
              <h3 className="font-bold text-lg mb-2 text-red-900">No Governance Framework</h3>
              <p className="text-sm text-red-800/80 leading-relaxed">Deploying cloud technology or AI without strict security and data governance exposes the enterprise to massive compliance risks.</p>
            </div>
            <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
              <h3 className="font-bold text-lg mb-2 text-red-900">Ignoring AI Capabilities</h3>
              <p className="text-sm text-red-800/80 leading-relaxed">Treating AI as a gimmick rather than a core strategic lever guarantees you will be outpaced by more efficient competitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQs */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-text/70 text-lg">Common questions about enterprise digital transformation and custom software development.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Can you modernize legacy systems?", a: "Yes, we specialize in legacy system modernization. We systematically audit your existing infrastructure, design a modernized architecture, and execute a phased migration to ensure zero disruption to your ongoing operations." },
              { q: "Can you integrate with ERP software?", a: "Yes, we build robust API connections to seamlessly integrate custom applications and portals with major ERP systems like SAP, Oracle, and Microsoft Dynamics." },
              { q: "Can AI automate enterprise workflows?", a: "Absolutely. AI can automate complex, multi-step workflows—such as document processing, intelligent data extraction, and customer support triage—significantly reducing manual operational overhead." },
              { q: "Can you build enterprise portals?", a: "Yes, we develop highly secure, scalable portals tailored for employees, partners, or customers, complete with role-based access control and Single Sign-On (SSO)." },
              { q: "Can you integrate Salesforce?", a: "Yes, we have deep expertise in integrating Salesforce with custom applications, web portals, and proprietary internal systems to ensure unified data flow." },
              { q: "Can you connect SAP?", a: "Yes, we build secure middleware and APIs to connect legacy SAP environments with modern frontend applications and external partner platforms." },
              { q: "Can you migrate to the cloud?", a: "Yes, we plan and execute secure migrations to AWS, Azure, or Google Cloud, refactoring applications to utilize cloud-native architectures for better scalability." },
              { q: "Can you improve reporting?", a: "Yes, we break down data silos by connecting disparate systems into centralized data warehouses, surfacing real-time insights through custom executive dashboards." },
              { q: "Can you automate approvals?", a: "Yes, we build custom workflow automation tools that route requests, trigger notifications, and manage complex multi-tiered approval processes digitally." },
              { q: "Can you build internal employee platforms?", a: "Yes, we develop custom intranets, knowledge bases, and HR portals that centralize corporate resources and improve internal communication." },
              { q: "Can you integrate multiple systems?", a: "Yes, system integration is a core capability. We specialize in connecting completely disparate software platforms into a cohesive, synchronized technology ecosystem." },
              { q: "How secure are enterprise applications?", a: "Security is foundational. We employ zero-trust architectures, end-to-end encryption, strict RBAC, and conduct rigorous penetration testing to meet enterprise security standards." },
              { q: "Can you build executive dashboards?", a: "Yes, we design custom BI dashboards that aggregate data from multiple enterprise sources to provide executives with real-time, actionable business intelligence." },
              { q: "Do you provide long-term support?", a: "Yes, we offer comprehensive Service Level Agreements (SLAs) covering continuous maintenance, security patching, performance monitoring, and ongoing feature enhancement." },
              { q: "Can you modernize existing software?", a: "Yes, we frequently take over legacy codebases, resolving technical debt, improving performance, and upgrading the software to modern frameworks." },
              { q: "How long do enterprise projects take?", a: "Enterprise timelines vary based on complexity and integration requirements. Typical modernization phases or custom platform builds span 4 to 9 months, executed in agile sprints." },
              { q: "Can you work with internal IT teams?", a: "Absolutely. We frequently act as an extension of internal enterprise IT teams, providing specialized expertise in AI, cloud architecture, or modern frontend development." },
              { q: "Can you provide digital transformation consulting?", a: "Yes, we offer strategic consulting to assess your current technology stack, identify operational bottlenecks, and design a comprehensive roadmap for digital modernization." },
              { q: "Can you build enterprise mobile applications?", a: "Yes, we build secure, cross-platform mobile applications for internal workforce enablement, field operations, or direct customer engagement." },
              { q: "How do we get started?", a: "It begins with an Enterprise Strategy Call. We'll discuss your current infrastructure, business objectives, and integration challenges to outline an initial modernization roadmap." }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-brand-grey rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-bold focus:outline-none"
                >
                  {faq.q}
                  <span className={`transform transition-transform ${activeFaq === i ? 'rotate-180 text-brand-purple' : 'text-brand-text/50'}`}>
                    ▼
                  </span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4 text-brand-text/70 text-sm leading-relaxed border-t border-brand-grey pt-4 bg-[#fafafa]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-[20%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
            Transform Enterprise Operations with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-blue">Intelligent Technology</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Whether you're modernizing legacy systems, implementing AI, integrating enterprise software, improving operational efficiency, or building scalable digital platforms, Madlabs Digital helps enterprise organizations accelerate transformation through secure, intelligent, and future-ready technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 h-14">
                Transform Your Enterprise <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white text-lg px-8 h-14">
                Book Enterprise Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
