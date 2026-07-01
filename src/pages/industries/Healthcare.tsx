import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, Building, ShieldCheck, Mail, LineChart, Code2, Link as LinkIcon, Laptop, Rocket, Globe, Search, HeartPulse, Activity, Stethoscope, Lock, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Healthcare() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Healthcare Software Development & AI | Madlabs Digital</title>
        <meta name="description" content="Digital solutions that improve patient care and healthcare operations. Expert healthcare software development, AI, automation, and patient portals." />
        <meta name="keywords" content="Healthcare Software Development, Healthcare Digital Transformation, AI for Healthcare, Healthcare Automation, Medical Software Development, Healthcare CRM, Patient Portal Development, Hospital Management Software, Telemedicine Development, Healthcare Website Development, Healthcare Technology Consulting" />
        <link rel="canonical" href="https://madlabs.digital/industries/healthcare" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Healthcare Software Development & AI | Madlabs Digital" />
        <meta property="og:description" content="Digital solutions that improve patient care and healthcare operations. Expert healthcare software development, AI, automation, and patient portals." />
        <meta property="og:url" content="https://madlabs.digital/industries/healthcare" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Software Development & AI | Madlabs Digital" />
        <meta name="twitter:description" content="Digital solutions that improve patient care and healthcare operations. Expert healthcare software development, AI, automation, and patient portals." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Healthcare Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for healthcare organizations, offering patient portal development, medical software, CRM integration, and AI automation.",
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
                "name": "Healthcare"
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
                  "name": "Can AI improve patient support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. AI patient assistants can handle routine inquiries, appointment scheduling, and basic triaging 24/7, allowing healthcare staff to focus on critical patient care."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How secure are healthcare platforms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We build healthcare platforms with security from day one, employing role-based access, encryption, secure authentication, and audit logs to ensure compliance with HIPAA, GDPR, and other healthcare regulations."
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
              Healthcare Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Digital Solutions for <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Patient Care & Operations.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Healthcare organizations need secure, scalable, and patient-focused technology. Madlabs Digital helps healthcare providers improve patient experiences, automate administrative workflows, modernize digital platforms, and implement AI solutions that increase operational efficiency while supporting better healthcare outcomes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Transform Your Healthcare Operations <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Healthcare Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-sm font-medium text-white/60">Reduction in Admin Workflows</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm font-medium text-white/60">Patient Support Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm font-medium text-white/60">Platform Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-sm font-medium text-white/60">Years Delivering Digital Products</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Healthcare Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Modern healthcare organizations are facing an increasing administrative workload that takes valuable time away from patient care. Patient communication delays, appointment scheduling inefficiencies, and manual documentation are symptoms of disconnected healthcare systems and legacy software.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              With growing operational costs, staff shortages, and the challenge of healthcare data management, many providers struggle to deliver the seamless digital patient experiences that today’s patients expect.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Healthcare organizations must balance patient care with operational efficiency. Technology should simplify care delivery, not complicate it, enabling better patient engagement without overwhelming clinical staff.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SYSTEMS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Healthcare Systems Fall Short</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Healthcare technology should simplify care delivery while reducing administrative burden. Here's why legacy systems fail to meet modern standards.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Paper-Based & Disconnected Workflows</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Paper-based workflows and disconnected patient records create silos of information. When there is no integration between systems, staff spend hours on data entry rather than care delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Poor Digital Patient Experiences</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Manual appointment booking and poor communication lead to frustration. A lack of digital portals means patients cannot easily access their records, test results, or communicate with providers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> No Automation or AI Assistance</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Legacy software often features limited automation and weak reporting. Without AI assistance to handle routine queries and automate workflows, operational efficiency stagnates.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">How to Empower Your Healthcare Organization</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unified Patient Records</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Centralize healthcare data securely to ensure providers have immediate access to complete patient histories.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <HeartPulse className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Modern Patient Portals</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Deploy intuitive platforms for patients to book appointments, access telehealth, and manage their health journeys.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI-Driven Automation</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Automate routine administrative tasks, forms, and patient reminders to free up valuable clinical time.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Healthcare Transformation Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic roadmap focusing on patient outcomes and operational improvements for modern healthcare providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Healthcare Assessment", desc: "Evaluating current legacy systems, data silos, and identifying critical bottlenecks in patient care." },
              { num: "02", title: "Workflow Analysis", desc: "Mapping out clinical and administrative processes to pinpoint opportunities for automation." },
              { num: "03", title: "Digital Strategy", desc: "Aligning technology investments with patient outcomes and long-term operational efficiency goals." },
              { num: "04", title: "Patient Experience Design", desc: "Creating accessible, user-friendly interfaces for patient portals and booking systems." },
              { num: "05", title: "Technology Planning", desc: "Selecting secure, compliant, and scalable architecture such as FHIR and HL7 standard integrations." },
              { num: "06", title: "Development", desc: "Building robust healthcare software, custom mobile apps, and scalable web platforms." },
              { num: "07", title: "System Integration", desc: "Connecting new platforms with existing EHR/EMR systems to ensure data continuity." },
              { num: "08", title: "AI Automation", desc: "Deploying intelligent assistants for triage, appointment reminders, and document processing." },
              { num: "09", title: "Training", desc: "Equipping medical staff with the knowledge to utilize new digital tools efficiently." },
              { num: "10", title: "Optimization", desc: "Continuously refining digital touchpoints based on patient feedback and operational analytics." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Healthcare Organizations</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Secure, compliant, and patient-centric digital solutions designed to improve care delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Digital Patient Journey",
                desc: "We build intuitive healthcare websites, patient portals, and mobile apps to streamline access to care.",
                features: ["Healthcare Websites", "Patient Portals", "Healthcare Mobile Apps"]
              },
              {
                icon: Activity,
                title: "Telemedicine & Booking",
                desc: "Enable remote care with secure telemedicine platforms and efficient appointment scheduling systems.",
                features: ["Telemedicine Platforms", "Appointment Scheduling", "Digital Patient Journey"]
              },
              {
                icon: BrainCircuit,
                title: "AI & Automation",
                desc: "Deploy AI patient assistants, automate medical forms, and streamline internal workflow processes.",
                features: ["AI Patient Assistants", "Workflow Automation", "Medical Forms Automation"]
              },
              {
                icon: Database,
                title: "CRM & Management",
                desc: "Integrate healthcare CRMs, internal staff portals, and centralize patient communication platforms.",
                features: ["Healthcare CRM", "Internal Staff Portals", "Patient Communication"]
              },
              {
                icon: Mail,
                title: "Engagement & Outreach",
                desc: "Engage patients effectively with WhatsApp appointment reminders, email automation, and medical knowledge bases.",
                features: ["WhatsApp Reminders", "Email Automation", "Medical Knowledge Bases"]
              },
              {
                icon: Code2,
                title: "Integration & Analytics",
                desc: "Develop custom healthcare platforms, reporting systems, and robust API integrations for comprehensive oversight.",
                features: ["API Integrations", "Healthcare Dashboards", "Analytics Platforms"]
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Healthcare</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Core services designed to modernize your healthcare organization and drive measurable improvements in patient outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Deploy 24/7 AI agents to handle patient inquiries, automate document processing, and assist with appointment scheduling securely.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Unify patient communications. We implement healthcare CRMs to ensure follow-ups, reminders, and engagement are managed seamlessly.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build stunning, accessible healthcare websites and patient portals that provide clear information and easy access to care on any device.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic guidance on digital transformation, streamlining clinical workflows, and choosing the right technology stack for long-term efficiency.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                For HealthTech startups and large hospitals needing custom applications, internal dashboards, and complex HL7/FHIR API integrations.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

             <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Lead Generation Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Generate high-quality patient enquiries for specialized treatments through targeted SEO, localized landing pages, and optimized conversion funnels.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
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
            <h2 className="text-3xl font-bold mb-4">The Healthcare Technology Stack</h2>
            <p className="text-brand-text/70 text-lg">We utilize industry-leading technologies to create secure, compliant, and high-performance digital healthcare experiences.</p>
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
              <h4 className="font-bold mb-2">Data, Cloud & APIs</h4>
              <p className="text-sm text-brand-text/60">Supabase, Firebase, Google Cloud, AWS, FHIR APIs, HL7</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Ops & Comms</h4>
              <p className="text-sm text-brand-text/60">HubSpot, Twilio, WhatsApp Business API, Power BI, Cloudflare</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: THE MODERN PATIENT JOURNEY */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Patient Journey</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                We engineer digital touchpoints that smoothly guide patients from an initial online search all the way through to ongoing long-term care.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">SEO & Healthcare Website Navigation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Intuitive Appointment Booking & Patient Portals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Seamless Consultation & Digital Prescriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Automated Follow-up & Long-Term Engagement</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Digital Care Pipeline</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Search → Booking → Consultation → Follow-up → Engagement</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Phase 1: Discovery & Access</p>
                  <p className="text-xs text-brand-text/70">Online searches lead to a highly optimized healthcare website where patients easily book appointments.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Phase 2: Care Delivery</p>
                  <p className="text-xs text-brand-text/70">Through patient portals or telemedicine, patients receive consultations and digital prescriptions securely.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Phase 3: Ongoing Support</p>
                  <p className="text-xs text-brand-text/70">Automated follow-ups, patient feedback loops, and educational content foster long-term engagement.</p>
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
                <HeartPulse className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Improved Patient Experience</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Provide seamless digital interactions. Better patient communication and faster appointment management directly elevate satisfaction and care quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Operational Efficiency</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Dramatically reduce administrative work and improve staff productivity through automated workflows and scalable healthcare platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure & Scalable Infrastructure</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Build upon a secure digital foundation that supports better reporting, interoperability, and meets stringent healthcare compliance standards.
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
              <p className="text-lg text-brand-text/70">Real results driving workflow automation, platform modernization, and better patient experiences.</p>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">HealthTech Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Platform Modernization</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Re-architected core infrastructure and implemented workflow automation, resolving legacy technical debt and preparing for scalable growth.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Platform Speed</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+400%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Admin Reduction</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">45%</span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/uae-insurance" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Medical Network</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Automation & CRM</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Implemented rigorous CRM workflows and automation, reducing manual data entry and speeding up patient communication significantly.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Response Time</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">&lt; 5 mins</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Staff Efficiency</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">+60%</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">Specialist Clinic</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Customer Experience</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Applied digital transformation strategies to scale patient acquisition and improve digital accessibility through intuitive portal design.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Portal Adoption</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+85%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Appointment Growth</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+30%</span>
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

      {/* SECTION 10: HEALTHCARE BUSINESS TYPES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions by Healthcare Provider</h2>
            <p className="text-brand-text/70 text-lg">We architect tailored digital experiences that solve the unique operational challenges of different healthcare sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Hospitals</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Disconnected departments, legacy EMR/EHR, vast admin overhead.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Hospital management software, deep API integrations, custom reporting dashboards.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Clinics & Specialists</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Staff shortages, manual appointment booking, patient no-shows.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Appointment scheduling systems, WhatsApp reminders, streamlined CRM.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Diagnostic Centers</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Delayed result delivery, manual document processing, data silos.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Secure patient portals, automated reporting, strict HIPAA compliance.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Telemedicine Providers</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Digital accessibility, secure video conferencing, seamless UX.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Custom mobile apps, high-performance web platforms, integrated billing.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Mental Health Clinics</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Extreme privacy needs, patient engagement, consistent follow-ups.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: End-to-end encryption, automated communication platforms, secure telehealth.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Healthcare Startups</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Technical debt, scaling infrastructure, regulatory compliance complexities.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Full-stack product development, AI integration, advanced cloud architecture.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 10.5: AI IN HEALTHCARE */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI in Healthcare</h2>
            <p className="text-brand-text/70 text-lg">Practical, responsible applications of artificial intelligence designed to support medical professionals, not replace them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Bot className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Patient Assistants & Chatbots</h3>
                <p className="text-brand-text/70 text-sm">Provide 24/7 support for routine inquiries, basic triaging, and intelligently route complex questions to human staff.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <FileText className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Document Automation</h3>
                <p className="text-brand-text/70 text-sm">Automate the processing of medical forms, intake documents, and insurance claims to drastically reduce manual data entry.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <LineChart className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Predictive Analytics</h3>
                <p className="text-brand-text/70 text-sm">Analyze operational data to forecast patient volumes, optimize staffing schedules, and predict resource needs.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <BrainCircuit className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Internal AI Assistants</h3>
                <p className="text-brand-text/70 text-sm">Empower administrative staff with AI tools that can quickly retrieve protocols, internal guidelines, or operational data.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Activity className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Clinical Decision Support</h3>
                <p className="text-brand-text/70 text-sm">Integrate AI systems that assist physicians by surfacing relevant medical history, latest research, or flagging potential drug interactions.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Code2 className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Workflow Automation</h3>
                <p className="text-brand-text/70 text-sm">Intelligently trigger follow-ups, referral generation, and medical reporting processes based on clinical events or timeframes.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 10.75: SECURITY & COMPLIANCE */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Security & Compliance</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                We understand that healthcare data is highly sensitive. We build digital platforms with security and compliance embedded from day one.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium text-white/90">HIPAA & GDPR Compliance Architecture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium text-white/90">End-to-End Encryption & Secure Authentication</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium text-white/90">Role-Based Access Control & Granular Permissions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium text-white/90">Comprehensive Audit Logs & Disaster Recovery</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
               <div className="flex justify-center mb-8">
                 <Lock className="w-16 h-16 text-brand-lime opacity-80" />
               </div>
               <p className="text-center text-white/80 leading-relaxed italic mb-6">
                 "Protecting patient data protection is not an afterthought; it is the foundational requirement of every digital healthcare project we undertake."
               </p>
               <div className="text-center">
                 <p className="font-bold text-brand-lime">Madlabs Digital Engineering</p>
                 <p className="text-xs text-white/50">Ensuring Business Continuity</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Data on Healthcare Tech</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Data from industry leaders confirms that modernizing healthcare technology is essential for reducing burnout, meeting patient expectations, and remaining competitive.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We build scalable digital systems designed to tackle the administrative burden head-on, allowing providers to focus on what matters most: patient care.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">38%</p>
                <p className="text-white/80">Of telemedicine growth has been sustained long-term, shifting patient expectations towards digital-first accessibility.</p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">40%</p>
                <p className="text-white/80">Of healthcare tasks are highly automatable through AI and modern digital transformation.</p>
                <p className="text-xs text-white/40 mt-2">Source: World Health Organization & Deloitte</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">75%</p>
                <p className="text-white/80">Of health executives plan to invest heavily in AI adoption over the next three years to combat administrative burden.</p>
                <p className="text-xs text-white/40 mt-2">Source: HIMSS & Gartner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common Healthcare Tech Mistakes</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We help you avoid the expensive traps that stall operations and negatively impact the patient experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Relying on Legacy Systems</h3>
              <p className="text-brand-text/70 text-sm leading-relaxed">
                Clinging to outdated software creates disconnected systems, security vulnerabilities, and massive technical debt. Modern APIs and cloud architecture are essential for agility.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring Patient Experience</h3>
              <p className="text-brand-text/70 text-sm leading-relaxed">
                Treating digital platforms as purely administrative tools rather than patient-centric interfaces. Poor communication and limited digital accessibility drive patients away.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Manual Administration</h3>
              <p className="text-brand-text/70 text-sm leading-relaxed">
                Failing to leverage automation. Without automated workflows and AI, staff are bogged down by repetitive tasks, ignoring analytics that could improve operational scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-brand-text/70">Expert insights on healthcare technology and digital transformation.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Can AI improve patient support?", a: "Yes. AI patient assistants can handle routine inquiries, triage basic requests, and provide 24/7 support, freeing up staff for complex care." },
              { q: "Can you build patient portals?", a: "Absolutely. We design secure, intuitive patient portals that allow users to view records, book appointments, and communicate with providers." },
              { q: "Can you integrate appointment systems?", a: "Yes, we integrate modern appointment scheduling systems directly with your website and internal calendars for real-time availability." },
              { q: "Can healthcare systems integrate with existing software?", a: "Yes, we use standardized APIs (like FHIR and HL7) to securely connect new web platforms or mobile apps with your existing EHR/EMR systems." },
              { q: "Can AI schedule appointments?", a: "Yes, AI chatbots and intelligent workflows can guide patients through the booking process, check availability, and schedule appointments automatically." },
              { q: "Can you automate patient reminders?", a: "Yes, we implement automated multi-channel reminders (Email, SMS, WhatsApp) to significantly reduce appointment no-shows." },
              { q: "Can you build telemedicine platforms?", a: "Yes, we build scalable telemedicine platforms with secure video conferencing, integrated billing, and digital prescription capabilities." },
              { q: "Can healthcare websites be multilingual?", a: "Yes, we develop fully localized, multilingual healthcare websites to ensure accessibility for diverse patient populations." },
              { q: "How secure are healthcare platforms?", a: "We build with security-first principles, utilizing end-to-end encryption, role-based access, and comprehensive audit logs to meet HIPAA and GDPR standards." },
              { q: "Can you integrate electronic health records?", a: "Yes, we have experience navigating complex data integrations to ensure EHR data flows securely to patient portals or custom dashboards." },
              { q: "Do you provide ongoing support?", a: "Yes, we offer continuous maintenance, security updates, and performance optimization to ensure your healthcare platforms run flawlessly." },
              { q: "Can you modernize legacy systems?", a: "Yes, we specialize in digital transformation, carefully migrating data and workflows from outdated legacy software to modern cloud infrastructure." },
              { q: "Can you automate internal workflows?", a: "Absolutely. We implement automated workflows for medical form processing, internal approvals, and task routing to increase staff efficiency." },
              { q: "Can healthcare organizations use CRM?", a: "Yes, healthcare CRMs are vital for managing patient relationships, tracking interactions, and automating follow-up communication campaigns." },
              { q: "Can you build healthcare mobile apps?", a: "Yes, we develop custom native or cross-platform mobile apps tailored for either patient engagement or internal clinical use." },
              { q: "How long does development take?", a: "Timelines vary by complexity. A standard patient portal might take 3-4 months, while a complex, deeply integrated custom platform could take 6+ months." },
              { q: "Can you improve patient engagement?", a: "Yes, through user-friendly design, personalized communication automation, and providing easy access to medical information." },
              { q: "Do you provide maintenance?", a: "Yes, we offer SLA-backed maintenance contracts for continuous security monitoring, updates, and feature enhancements." },
              { q: "Can AI support healthcare staff?", a: "Yes, AI can assist staff by summarizing clinical notes, suggesting relevant documentation, and retrieving policies instantly via internal knowledge bases." },
              { q: "How do we get started?", a: "Book a Healthcare Strategy Call. We will discuss your operational bottlenecks, current technical debt, and map out a digital transformation roadmap." }
            ].map((faq, i) => (
              <div key={i} className="border border-brand-grey rounded-2xl bg-white overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left font-bold flex justify-between items-center focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>↓</span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4 text-brand-text/70 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED SERVICES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "AI Automation", path: "/services/ai-automation" },
              { title: "CRM Systems", path: "/services/crm-systems" },
              { title: "Web Development", path: "/services/web-development" },
              { title: "Digital Consulting", path: "/services/digital-consulting" },
              { title: "Lead Generation", path: "/services/lead-generation" },
              { title: "Product Dev", path: "/services/product-development" }
            ].map((service, i) => (
              <Link key={i} to={service.path} className="block p-4 rounded-xl border border-brand-grey bg-[#fafafa] text-center hover:border-brand-purple/50 hover:bg-white transition-colors group">
                <span className="text-sm font-bold group-hover:text-brand-purple transition-colors">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: RELATED BLOGS */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
               <h2 className="text-3xl font-bold tracking-tight">Technical Insights</h2>
               <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
                 View all articles <ArrowRight className="ml-2 w-4 h-4" />
               </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: "How to Scale Business Operations with AI Automation", category: "AI Automation" },
                 { title: "When to Upgrade Your CRM Architecture", category: "Engineering" },
                 { title: "Content Velocity with AI", category: "Growth" },
                 { title: "Technical SEO Audit Checklist", category: "SEO" }
               ].map((blog, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-[16/9] bg-brand-grey rounded-2xl mb-4 overflow-hidden relative">
                       <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors z-10"></div>
                       <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                    </div>
                    <span className="text-xs font-bold text-brand-purple uppercase tracking-wider mb-2 block">{blog.category}</span>
                    <h3 className="font-bold text-lg group-hover:text-brand-purple transition-colors line-clamp-2">{blog.title}</h3>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 16: FINAL CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[20%] w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-3xl opacity-30" />
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-white">
            Modernize Healthcare with <br/> Smarter Digital Solutions
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-2xl mx-auto mb-10">
            Whether you're improving patient engagement, modernizing legacy systems, implementing AI, building healthcare software, or automating administrative workflows, Madlabs Digital helps healthcare organizations deliver better care through secure, scalable, and intelligent technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto">
                Transform Your Healthcare Operations
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto">
                Book Healthcare Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
