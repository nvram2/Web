import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, Building, ShieldCheck, Mail, LineChart, Code2, Link as LinkIcon, Laptop, Rocket, Globe, Package, Truck, Map, Compass, BarChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Logistics() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Logistics Software Development & AI Solutions | Madlabs Digital</title>
        <meta name="description" content="Digital solutions that keep modern logistics moving. Expert logistics software development, supply chain automation, fleet management, and AI optimization." />
        <meta name="keywords" content="Logistics Software Development, Supply Chain Software Development, AI for Logistics, Logistics Automation, Fleet Management Software, Warehouse Management Systems, Transportation Management Software, Logistics CRM, Logistics Technology Consulting, Digital Supply Chain, Logistics AI Solutions" />
        <link rel="canonical" href="https://madlabs.digital/industries/logistics" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Logistics Software Development & AI Solutions | Madlabs Digital" />
        <meta property="og:description" content="Digital solutions that keep modern logistics moving. Expert logistics software development, supply chain automation, fleet management, and AI optimization." />
        <meta property="og:url" content="https://madlabs.digital/industries/logistics" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Logistics Software Development & AI Solutions | Madlabs Digital" />
        <meta name="twitter:description" content="Digital solutions that keep modern logistics moving. Expert logistics software development, supply chain automation, fleet management, and AI optimization." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Logistics Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for logistics companies, offering fleet management, warehouse management systems, AI routing, and supply chain automation.",
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
                "name": "Logistics"
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
                  "name": "Can AI optimize delivery routes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI can dynamically optimize delivery routes by analyzing traffic patterns, weather conditions, delivery windows, and vehicle capacity in real-time, significantly reducing fuel consumption and improving delivery times."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you build warehouse management systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We develop custom Warehouse Management Systems (WMS) tailored to your specific workflows, integrating barcode scanning, real-time inventory tracking, and automated fulfillment processes."
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
              Logistics Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Digital Solutions That Keep <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Modern Logistics Moving.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Modern logistics depends on visibility, speed, and automation. Madlabs Digital helps logistics companies streamline operations, automate workflows, improve fleet and warehouse management, integrate AI, and build digital platforms that reduce costs while improving customer satisfaction.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Transform Your Logistics Operations <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Logistics Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-sm font-medium text-white/60">Reduction in Manual Processes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">30%</div>
                <div className="text-sm font-medium text-white/60">Faster Operational Workflows</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm font-medium text-white/60">Platform Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm font-medium text-white/60">Operational Visibility</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Logistics Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Logistics companies operate in a highly complex, time-sensitive environment. Manual operations, disconnected systems, and a lack of real-time shipment visibility create bottlenecks that delay deliveries and frustrate customers.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Inefficient warehouse workflows, fleet tracking challenges, and inventory inaccuracies lead to skyrocketing operational costs. When supply chains become complex, the absence of robust reporting makes it impossible to identify inefficiencies.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Logistics companies require connected digital systems that provide end-to-end real-time visibility across operations to remain competitive and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SYSTEMS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Logistics Systems Fall Short</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Logistics businesses require connected platforms instead of isolated systems. Here is why legacy workflows fail to scale.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Manual Workflows & Spreadsheets</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Paper-based workflows and relying on spreadsheets lead to data entry errors, manual dispatch delays, and a severe lack of operational scalability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Disconnected Software</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    When your WMS, TMS, and CRM don't communicate, you lose visibility. Disconnected systems create operational silos and severely limit tracking capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> No Automation or AI</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Without AI and automation, routine tasks consume thousands of hours. Legacy infrastructure prevents predictive analytics and real-time customer communication.
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
                    <h4 className="font-bold">Unified Data Ecosystem</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Connect your entire supply chain into a single, cohesive technology stack.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <BrainCircuit className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI-Powered Optimization</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Leverage machine learning for intelligent route planning and demand forecasting.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Real-Time Visibility</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Implement IoT and GPS integrations for end-to-end transparency across operations.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Logistics Transformation Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic roadmap designed to digitize supply chains, integrate advanced technologies, and automate operational workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Operations Assessment", desc: "Analyzing current performance, operational bottlenecks, and supply chain inefficiencies." },
              { num: "02", title: "Workflow Analysis", desc: "Mapping manual processes, dispatch procedures, and warehouse operations." },
              { num: "03", title: "Tech Strategy", desc: "Defining the technology stack, platform architecture, and integration requirements." },
              { num: "04", title: "Platform Design", desc: "Designing intuitive dashboards, mobile applications, and customer portals." },
              { num: "05", title: "System Integration", desc: "Connecting TMS, WMS, and CRM systems into a unified digital ecosystem." },
              { num: "06", title: "Automation", desc: "Deploying automated workflows for dispatch, invoicing, and documentation." },
              { num: "07", title: "AI Optimization", desc: "Implementing predictive analytics, route optimization, and demand forecasting." },
              { num: "08", title: "Analytics", desc: "Setting up real-time business dashboards for operational tracking." },
              { num: "09", title: "Deployment", desc: "Rolling out solutions securely with minimal disruption to ongoing operations." },
              { num: "10", title: "Continuous Improvement", desc: "Ongoing refinement based on data insights and evolving logistics demands." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Logistics Companies</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              End-to-end operational software engineered to deliver total visibility and robust back-office efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Transportation & Fleet", desc: "Optimize your on-road operations with robust tracking and intelligent dispatch routing systems.", features: ["Transportation Management Systems", "Fleet Management Systems", "Route Optimization", "Driver Applications"] },
              { icon: Package, title: "Warehouse & Inventory", desc: "Streamline facility operations with software that tracks inventory accurately in real-time.", features: ["Warehouse Management Systems", "Inventory Management", "Order Management"] },
              { icon: Map, title: "Visibility & Tracking", desc: "Provide total transparency to your clients through secure tracking and visibility platforms.", features: ["Shipment Tracking Portals", "Customer Portals", "Supply Chain Visibility Platforms"] },
              { icon: Zap, title: "Automation & AI", desc: "Eliminate manual data entry with intelligent document processing and AI dispatch assistants.", features: ["AI Dispatch Assistants", "Document Automation", "Invoice Automation", "Workflow Automation"] },
              { icon: Users, title: "CRM & Integration", desc: "Unify customer communications and business data across your entire supply chain network.", features: ["Logistics Platforms", "CRM Integration", "API Integrations"] },
              { icon: BarChart, title: "Analytics & Customization", desc: "Make proactive decisions with real-time business intelligence and bespoke logistics platforms.", features: ["Business Dashboards", "Analytics Platforms", "Predictive Analytics", "Custom Logistics Software"] }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Logistics</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Strategic capabilities required to modernize your operations and build a resilient supply chain network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Automate document processing, optimize dispatch routing, and deploy AI support agents to handle shipment inquiries 24/7.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Centralize client communications, automate quoting processes, and integrate your CRM with core TMS platforms.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build secure, high-performance tracking portals and corporate websites that instill trust in your logistics brand.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Develop bespoke WMS platforms, custom driver applications, and complex enterprise supply chain software.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic guidance on digital transformation, system integrations, and modernizing legacy logistics infrastructure.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Lead Generation & SEO</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Drive high-intent B2B traffic to your logistics services through robust technical SEO and content strategies.
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
            <h2 className="text-3xl font-bold mb-4">The Logistics Technology Stack</h2>
            <p className="text-brand-text/70 text-lg">We leverage industry-leading platforms and frameworks to build resilient, high-performance logistics experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frontend & Portals</h4>
              <p className="text-sm text-brand-text/60">Next.js, React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & AI</h4>
              <p className="text-sm text-brand-text/60">Node.js, Python, OpenAI, REST APIs</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Data & Tracking</h4>
              <p className="text-sm text-brand-text/60">Supabase, Firebase, Google Maps API</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Infrastructure & Ops</h4>
              <p className="text-sm text-brand-text/60">AWS, Cloudflare, Vercel, Docker, Twilio</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.5: THE MODERN LOGISTICS JOURNEY */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Logistics Journey</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                We optimize every operational touchpoint to guide shipments efficiently from order creation to final delivery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Order Processing & Automated Quoting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Warehouse Management & Dispatch</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Real-Time Fleet Tracking & Delivery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Proof of Delivery & Performance Analytics</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Operational Pipeline</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Request → Processing → Dispatch → Delivery → Analytics</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Phase 1: Ingestion</p>
                  <p className="text-xs text-brand-text/70">Customer Requests, automated Quotations, and streamlined Order Processing capture demand instantly.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Phase 2: Execution</p>
                  <p className="text-xs text-brand-text/70">Optimized Warehouse sorting, intelligent Dispatch, and real-time Fleet Tracking ensure efficient movement.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Phase 3: Fulfillment</p>
                  <p className="text-xs text-brand-text/70">Final Delivery, digital Proof of Delivery, Customer Feedback, and comprehensive Reporting close the loop.</p>
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
                <Map className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Visibility</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Gain absolute control over your supply chain with end-to-end tracking, ensuring accurate reporting and faster deliveries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reduced Operational Costs</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Automated workflows and better fleet utilization significantly decrease manual overhead and improve overall warehouse efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Operations</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Build a resilient digital infrastructure that supports data-driven decision making and continuously improves the customer experience.
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
              <p className="text-lg text-brand-text/70">Real results driving workflow automation, system integration, and platform modernization.</p>
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
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Implemented robust system integrations and automated dispatch workflows, eliminating manual data entry.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Manual Processes</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">-45%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Operational Efficiency</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+35%</span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/global-clothing" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Distribution Network</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Platform Modernization</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Rebuilt a legacy inventory system into a scalable, real-time tracking platform with advanced analytics.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Tracking Speed</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">Real-time</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Inventory Accuracy</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">Freight Forwarder</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">System Integration</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Integrated disparate supply chain systems and deployed custom CRM workflows for unified client communication.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Data Silos</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">Eliminated</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Client Satisfaction</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+28%</span>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions by Logistics Business Type</h2>
            <p className="text-brand-text/70 text-lg">We architect tailored digital experiences that solve the unique operational challenges of different logistics sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Freight Forwarders</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Complex document management, cross-border visibility.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Automated Documentation, Unified CRM</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Warehousing Companies</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Inventory accuracy, slow order fulfillment processes.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Custom WMS, IoT Integration</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Courier Services</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Last-mile efficiency, real-time driver tracking.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Route Optimization, Driver Mobile Apps</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Fleet Operators</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Vehicle maintenance tracking, fuel consumption analysis.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Fleet Management Software, Predictive Analytics</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Cold Chain Logistics</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Temperature monitoring, compliance tracking.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Real-time Sensor Integration, Alert Systems</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Supply Chain Companies</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Multi-vendor coordination, demand forecasting.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Visibility Platforms, AI Forecasting</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Distribution Networks</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Inventory balancing across nodes, order batching.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Centralized ERP integrations, Smart Dispatch</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">3PL Providers</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Multi-client reporting, billing complexity.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Client Portals, Automated Invoicing</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10.5: AI IN LOGISTICS */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI in Logistics</h2>
            <p className="text-brand-text/70 text-lg">Practical applications of artificial intelligence that directly improve operational efficiency and decision-making.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Map className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Route Optimization</h3>
                <p className="text-brand-text/70 text-sm">Dynamically calculate the most efficient delivery paths considering real-time traffic, weather, and delivery windows.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <LineChart className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Demand Forecasting</h3>
                <p className="text-brand-text/70 text-sm">Predict future shipment volumes and inventory requirements using historical data and market trends.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <FileText className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Document Processing</h3>
                <p className="text-brand-text/70 text-sm">Automatically extract data from bills of lading, customs documents, and invoices using Optical Character Recognition (OCR).</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Truck className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Predictive Maintenance</h3>
                <p className="text-brand-text/70 text-sm">Analyze vehicle telemetry data to forecast mechanical failures before they occur, reducing fleet downtime.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Package className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Warehouse Automation</h3>
                <p className="text-brand-text/70 text-sm">Optimize sorting, slotting, and picking paths dynamically to maximize warehouse labor efficiency.</p>
             </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Bot className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Customer Support</h3>
                <p className="text-brand-text/70 text-sm">Deploy intelligent conversational agents to handle routine tracking inquiries and status updates 24/7.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Data-Driven Supply Chains</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                The logistics industry is undergoing massive digital transformation. Companies investing in automation, AI, and connected platforms are significantly outperforming their analog competitors.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-lime" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Supply Chain Digitization</h4>
                    <p className="text-white/60 text-sm">Top firms are investing heavily in real-time visibility platforms.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-lime" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">AI Adoption</h4>
                    <p className="text-white/60 text-sm">AI optimization leads to massive reductions in transportation costs.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-lime" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Warehouse Efficiency</h4>
                    <p className="text-white/60 text-sm">Automated WMS deployments drastically lower error rates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-brand-lime mb-2">McKinsey</div>
                <p className="text-white/70 text-sm">Reports that AI-driven logistics can reduce forecasting errors by up to 50%.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-brand-blue mb-2">Gartner</div>
                <p className="text-white/70 text-sm">Predicts 50% of supply chain organizations will invest in AI capabilities.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-brand-purple mb-2">Deloitte</div>
                <p className="text-white/70 text-sm">Highlights that digital transformation increases supply chain resilience.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-brand-lime mb-2">IBM</div>
                <p className="text-white/70 text-sm">Shows that intelligent automation drastically improves order fulfillment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common Logistics Mistakes</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Avoid these operational pitfalls that hinder growth and increase supply chain costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Manual scheduling and dispatch",
              "Disconnected legacy systems",
              "Weak operational reporting",
              "Lack of workflow automation",
              "Ignoring AI routing capabilities",
              "Poor fleet visibility",
              "Inefficient warehouse processes",
              "Operating without a CRM",
              "Poor customer communication",
              "Limited data analytics"
            ].map((mistake, i) => (
              <div key={i} className="flex items-start p-4 bg-[#fafafa] rounded-xl border border-brand-grey">
                <div className="bg-red-50 p-1 rounded mr-3 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                <span className="font-medium text-sm">{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-brand-text/70">Expert insights on logistics technology, automation, and supply chain software development.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Can AI optimize delivery routes?", a: "Yes, AI can dynamically optimize delivery routes by analyzing traffic patterns, weather conditions, delivery windows, and vehicle capacity in real-time, significantly reducing fuel consumption and improving delivery times." },
              { q: "Can you build logistics software?", a: "Yes, we specialize in building custom logistics platforms, including Transportation Management Systems (TMS), Warehouse Management Systems (WMS), and bespoke tracking portals." },
              { q: "Can you integrate GPS tracking?", a: "Absolutely. We integrate GPS and IoT telematics APIs into your fleet management dashboards to provide real-time location, speed, and status updates." },
              { q: "Can you automate dispatch?", a: "Yes. By analyzing driver proximity, vehicle capacity, and delivery priority, we can automate the dispatching process to eliminate manual scheduling errors." },
              { q: "Can you build warehouse management systems?", a: "Yes, we develop custom WMS solutions tailored to your specific workflows, integrating barcode scanning, real-time inventory tracking, and automated fulfillment processes." },
              { q: "Can you integrate ERP software?", a: "Yes, we build robust API integrations connecting your operational systems with major ERPs like SAP, Oracle, or Microsoft Dynamics for seamless data flow." },
              { q: "Can you automate documentation?", a: "Using AI and OCR (Optical Character Recognition), we can automate data extraction from invoices, bills of lading, and customs documents to speed up processing." },
              { q: "Can you build customer portals?", a: "Yes, we create secure, branded customer portals where your clients can book shipments, track orders in real-time, and download invoices autonomously." },
              { q: "Can you improve operational reporting?", a: "We design custom analytics dashboards that aggregate data from across your supply chain, providing real-time visibility into KPIs like cost per mile and warehouse efficiency." },
              { q: "Can you integrate IoT devices?", a: "Yes, we can connect temperature sensors for cold chain tracking, RFID tags for inventory, and telematics devices for fleet health monitoring directly into your platforms." },
              { q: "Can you modernize legacy logistics software?", a: "We excel at digital transformation. We can gradually replace monolithic legacy systems with modern, cloud-native microservices to minimize operational disruption." },
              { q: "Can you integrate WhatsApp?", a: "Yes, we integrate the WhatsApp Business API to send automated tracking updates, delivery notifications, and exception alerts directly to your customers' phones." },
              { q: "Can logistics businesses benefit from CRM?", a: "Absolutely. A CRM centralizes sales data, automates follow-ups for quotes, manages client contracts, and ensures customer support is deeply integrated with operational data." },
              { q: "Can you improve fleet utilization?", a: "Through predictive analytics and route optimization, we ensure vehicles carry optimal loads and follow the most efficient paths, maximizing ROI on your assets." },
              { q: "Do you provide maintenance?", a: "Yes, we offer ongoing SLA-backed support, ensuring your mission-critical logistics software remains secure, updated, and highly available 24/7." },
              { q: "Can you build driver mobile apps?", a: "Yes, we develop cross-platform mobile apps for drivers to receive routes, collect digital Proof of Delivery (ePOD), and communicate directly with dispatchers." },
              { q: "Can you automate invoicing?", a: "Yes, by integrating your TMS with accounting software, we can automatically generate and send invoices the moment a Proof of Delivery is captured." },
              { q: "How secure is logistics data?", a: "Security is paramount. We implement enterprise-grade encryption, secure API gateways, and role-based access controls to protect sensitive supply chain and client data." },
              { q: "How long does development take?", a: "Timelines depend on the scope of the project. A custom tracking portal may take 2-3 months, while a comprehensive enterprise TMS could take 6+ months." },
              { q: "How do we get started?", a: "Click the 'Transform Your Logistics Operations' button to schedule a discovery call. We'll analyze your workflows and propose a tailored technical roadmap." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-brand-grey rounded-2xl overflow-hidden hover:border-brand-purple/30 transition-colors">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#fafafa] flex items-center justify-center shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <ArrowUpRight className={`w-4 h-4 transition-colors ${activeFaq === i ? 'text-brand-purple' : 'text-brand-text'}`} />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-brand-text/70 leading-relaxed border-t border-brand-grey pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED RESOURCES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Related Insights</h2>
            <p className="text-brand-text/70 text-lg">Further reading on automation and digital infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/blog/how-to-scale-business-operations-with-ai-automation" className="group p-6 bg-[#fafafa] rounded-2xl border border-brand-grey hover:border-brand-purple/50 transition-colors flex flex-col h-full">
              <h3 className="font-bold mb-3 group-hover:text-brand-purple transition-colors">How to Scale Business Operations with AI Automation</h3>
              <p className="text-sm text-brand-text/70 mt-auto">Learn how automated workflows can eliminate manual processing delays in logistics.</p>
            </Link>
            <Link to="/blog/when-to-upgrade-your-crm-architecture" className="group p-6 bg-[#fafafa] rounded-2xl border border-brand-grey hover:border-brand-blue/50 transition-colors flex flex-col h-full">
              <h3 className="font-bold mb-3 group-hover:text-brand-blue transition-colors">When to Upgrade Your CRM Architecture</h3>
              <p className="text-sm text-brand-text/70 mt-auto">Understand when it's time to connect your CRM directly to your operational TMS data.</p>
            </Link>
            <Link to="/blog/technical-seo-audit-checklist" className="group p-6 bg-[#fafafa] rounded-2xl border border-brand-grey hover:border-brand-lime/50 transition-colors flex flex-col h-full">
              <h3 className="font-bold mb-3 group-hover:text-brand-lime transition-colors">Technical SEO Audit Checklist</h3>
              <p className="text-sm text-brand-text/70 mt-auto">Ensure your logistics company's website is easily discoverable by enterprise clients.</p>
            </Link>
             <Link to="/blog/building-seo-lead-generation-systems" className="group p-6 bg-[#fafafa] rounded-2xl border border-brand-grey hover:border-brand-purple/50 transition-colors flex flex-col h-full">
              <h3 className="font-bold mb-3 group-hover:text-brand-purple transition-colors">Building SEO Lead Generation Systems</h3>
              <p className="text-sm text-brand-text/70 mt-auto">Strategies for B2B logistics providers to attract high-value contracts organically.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[20%] w-[800px] h-[800px] bg-brand-lime/20 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-8 leading-tight">
            Build Smarter Logistics Operations with Modern Technology
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Whether you're modernizing warehouse operations, automating fleet management, improving supply chain visibility, implementing AI, or building custom logistics software, Madlabs Digital helps logistics companies operate more efficiently, reduce costs, and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 shadow-lg shadow-brand-lime/20">
                Transform Your Logistics Operations <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                Book Logistics Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
