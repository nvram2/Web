import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, Building, ShieldCheck, Mail, LineChart, Code2, Link as LinkIcon, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function AIAutomation() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>AI Business Automation Services | Madlabs Digital</title>
        <meta name="description" content="Scale your operations, reduce manual workload, and improve customer experience with our enterprise-grade AI Business Automation solutions." />
        <meta name="keywords" content="AI Business Automation, Business Process Automation, Workflow Automation, AI Automation Agency, AI Consulting, AI Integration, Custom AI Development, AI Customer Support, RAG Systems, AI Knowledge Base, AI Agents, CRM Automation" />
        <link rel="canonical" href="https://madlabs.digital/services/ai-automation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Business Automation Services | Madlabs Digital" />
        <meta property="og:description" content="Scale your operations, reduce manual workload, and improve customer experience with our enterprise-grade AI Business Automation solutions." />
        <meta property="og:url" content="https://madlabs.digital/services/ai-automation" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Business Automation Services | Madlabs Digital" />
        <meta name="twitter:description" content="Scale your operations, reduce manual workload, and improve customer experience with our enterprise-grade AI Business Automation solutions." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Business Automation",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Enterprise-grade AI Business Automation services including workflow automation, RAG systems, AI agents, and CRM automation.",
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
                "name": "AI Business Automation"
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
                  "name": "What is AI Business Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI Business Automation involves using artificial intelligence technologies—such as large language models, machine learning, and natural language processing—combined with traditional workflow automation tools to execute complex business processes without human intervention. This ranges from simple task automation to complex decision-making processes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is AI Automation different from standard workflow automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard workflow automation is rule-based (if X happens, do Y). It breaks down when it encounters unstructured data or unexpected scenarios. AI Automation can handle unstructured data (like reading an email or a PDF), interpret intent, make decisions based on context, and learn from outcomes."
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
              AI Automation Agency & Consultancy
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Stop Managing Tasks. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Start Scaling Outcomes.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Turn your operational bottlenecks into automated growth engines. We design, deploy, and manage custom AI Business Automation systems that eliminate manual work, accelerate decision-making, and increase profitability.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  View Client Outcomes
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">300+</div>
                <div className="text-sm font-medium text-white/60">Workflows Automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm font-medium text-white/60">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-sm font-medium text-white/60">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$10M+</div>
                <div className="text-sm font-medium text-white/60">Revenue Influenced</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Most Businesses Hit a Scaling Wall</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Every growing business eventually reaches a critical breaking point. It's the moment where revenue growth is outpaced by operational complexity. Suddenly, scaling up doesn't just mean acquiring more customers—it means drowning in administrative debt.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              When a company relies entirely on human effort to bridge the gaps between disconnected software systems, growth becomes expensive, slow, and error-prone. Customer response times drop, sales teams spend hours updating CRMs instead of selling, and leadership loses visibility into real-time performance.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              According to McKinsey, employees spend up to 30% of their time on repetitive tasks that could be automated. That is not just a loss of productivity; it is a massive drain on profitability and employee morale. The fundamental problem is that businesses are using humans to behave like machines.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SOLUTIONS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Solutions Fail</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                When operational bottlenecks occur, leadership teams generally rely on three traditional solutions. Unfortunately, in the modern digital economy, all three are fundamentally flawed.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Hiring More People</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Adding headcount to solve inefficiency is treating the symptom, not the disease. It increases overhead, requires extensive onboarding, and introduces new communication layers that often slow the organization down further. 
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Buying "All-in-One" Software</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Legacy SaaS platforms promise to do everything but rarely do anything perfectly. They force your business to adapt to their rigid workflows, resulting in poor adoption, expensive licensing fees, and employees returning to spreadsheets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> Generic Automation Agencies</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Many agencies build fragile, hardcoded integrations using platforms like Zapier without understanding the underlying business logic or implementing proper error handling. When an API changes or an edge case occurs, the entire system breaks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">The Cost of Inaction</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Data Silos</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Information trapped in different departments leads to poor decision making and duplicated effort.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Employee Burnout</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Talented individuals leaving because they are forced to perform mind-numbing administrative work.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Lost Revenue</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Leads dropping out of the pipeline due to slow response times and forgotten follow-ups.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: TRADITIONAL VS AI AUTOMATION */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Traditional Software vs. AI Automation</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Understanding the fundamental differences between legacy rule-based tools and modern cognitive automation.
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider text-white/50 w-1/4">Capability</th>
                  <th className="p-6 text-lg font-bold text-white w-3/8">Traditional Automation (Zapier, RPA)</th>
                  <th className="p-6 text-lg font-bold text-brand-lime w-3/8">AI Business Automation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                <tr>
                  <td className="p-6 font-medium text-white">Data Processing</td>
                  <td className="p-6">Requires strictly structured data (e.g., rigid CSV columns, strict API schemas).</td>
                  <td className="p-6">Excels at unstructured data (e.g., reading long emails, parsing complex PDFs, understanding audio transcripts).</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">Decision Making</td>
                  <td className="p-6">Rigid "If/Then" logic. Breaks immediately if an edge case occurs outside the predefined rules.</td>
                  <td className="p-6">Probabilistic and cognitive. Capable of interpreting intent, assessing context, and making intelligent routing decisions.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">Customer Interaction</td>
                  <td className="p-6">Frustrating decision trees ("Press 1 for Sales"). High drop-off rates and poor user experience.</td>
                  <td className="p-6">Natural conversational interfaces. Resolves complex multi-turn issues without escalating to humans.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">Maintenance</td>
                  <td className="p-6">High. When an API changes slightly or a column name shifts, the entire workflow fails silently.</td>
                  <td className="p-6">Low. LLMs are highly fault-tolerant and can adapt to variations in input formatting automatically.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">Content Generation</td>
                  <td className="p-6">Limited to inserting static variables into rigid templates (e.g., "Hi [Name]").</td>
                  <td className="p-6">Dynamic and highly personalized. Can draft complete, context-aware emails based on prior conversation history.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE MADLABS FRAMEWORK */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Autonomous Growth Framework</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We do not just connect APIs. We engineer intelligent systems. Our proprietary framework ensures that every AI integration is strategically aligned with your business objectives, deeply secure, and infinitely scalable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BrainCircuit, title: "1. Discover", desc: "We map your entire operational architecture to identify the highest-leverage bottlenecks and value-creation opportunities." },
              { icon: FileText, title: "2. Audit", desc: "A rigorous technical evaluation of your current software stack, data readiness, and security compliance protocols." },
              { icon: LineChart, title: "3. Strategy", desc: "We design a comprehensive blueprint detailing the proposed AI architecture, data flows, and projected business impact." },
              { icon: LayoutDashboard, title: "4. Design", desc: "Crafting intuitive human-in-the-loop interfaces to ensure your team maintains control while the AI handles the heavy lifting." },
              { icon: Code2, title: "5. Build", desc: "Our engineers develop, train, and deploy custom machine learning models, RAG systems, and workflow automations." },
              { icon: Zap, title: "6. Scale", desc: "Continuous optimization, monitoring, and proactive maintenance to ensure the system scales elegantly as your business grows." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Enterprise-Grade AI Capabilities</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We deploy advanced artificial intelligence and automation solutions that fundamentally transform how your organization operates, competes, and delivers value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Bot className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Internal AI Assistants (RAG)</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Empower your team with a custom AI trained exclusively on your proprietary company data, documentation, and historical decisions using Retrieval-Augmented Generation (RAG).
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Instant access to complex standard operating procedures.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Secure, private environments (data is never used to train public models).</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Drastically reduced employee onboarding times.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <LinkIcon className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">CRM & Sales Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Transform your CRM from a manual data entry burden into a proactive revenue engine. We integrate AI to qualify leads, draft personalized outreach, and automate pipeline management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Automated lead scoring and instant routing.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> AI-generated meeting summaries and action items.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Frictionless integration with HubSpot, Salesforce, and GoHighLevel.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Mail className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Autonomous Customer Support</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Deploy conversational AI agents capable of resolving complex Tier-1 and Tier-2 support tickets instantly, across multiple channels, in dozens of languages.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> 24/7 omnichannel resolution without increasing headcount.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Seamless human handoff with full conversational context.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Integration with Zendesk, Intercom, and custom platforms.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Laptop className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Intelligent Document Processing</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Eliminate manual data entry. We build AI systems that can read, extract, categorize, and act upon unstructured data from invoices, contracts, emails, and PDFs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Automated invoice reconciliation and ERP syncing.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Rapid extraction of critical clauses in legal contracts.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Near 100% accuracy leveraging advanced multimodal models.</li>
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
            <p className="text-brand-text/70 text-lg">We leverage the most advanced foundational models and infrastructure to build secure, high-performance automation solutions.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Language Models</h4>
              <p className="text-sm text-brand-text/60">OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini Pro</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Vector Databases</h4>
              <p className="text-sm text-brand-text/60">Pinecone, Supabase pgvector, Weaviate</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frameworks</h4>
              <p className="text-sm text-brand-text/60">LangChain, LlamaIndex, Next.js, React</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Cloud & Infra</h4>
              <p className="text-sm text-brand-text/60">Vercel, AWS, Google Cloud, Cloudflare</p>
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
                <LineChart className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Increase Revenue</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By automating lead qualification and follow-ups, your sales team engages prospects instantly, preventing pipeline leakage and drastically improving conversion rates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reduce Operational Costs</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Automating repetitive data entry, reporting, and customer support tasks allows you to scale your operations output without linearly increasing your headcount.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Eliminate Human Error</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Systems don't get tired. Automated workflows ensure that data is transferred accurately, compliance checks are always performed, and SLAs are never missed.
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
              <p className="text-lg text-brand-text/70">Real numbers from real AI and automation deployments.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/ai-support-automation" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Enterprise SaaS Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">AI powered customer support automation</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Implemented a secure RAG architecture connected to the internal knowledge base, resulting in instant resolution of repetitive queries.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Support Volume Reduction</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">65%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Avg Response Time</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">&lt; 2s</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Annual Cost Savings</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">$300k</span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/uae-real-estate" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">Top UAE Real Estate Agency</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">10x increase in qualified property enquiries</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Deployed AI-assisted WhatsApp qualification and seamless CRM automation for faster sales follow-up and reduced acquisition costs.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Increase in Leads</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">10x</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Cost Per Lead</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">-35%</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Attributed Sales</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">$7M+</span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link to="/case-studies/d2c-shoe-brand" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">D2C Shoe Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Improving ecommerce conversion and retention</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Introduced AI-powered product recommendations and automated customer retention journeys across the entire ecommerce funnel.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Checkout Conversion</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+210%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Reduction in CAC</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">40%</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Added Monthly Rev</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">$50K</span>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Cross-Industry Expertise</h2>
            <p className="text-brand-text/70 text-lg">AI automation solves fundamental business problems across every vertical.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Healthcare', 'Finance', 'Real Estate', 'E-commerce', 'SaaS', 'Logistics', 'Manufacturing', 'Education', 'Legal', 'Retail', 'Government', 'Travel'].map((ind) => (
              <div key={ind} className="px-6 py-3 rounded-full border border-brand-grey bg-[#fafafa] text-brand-text font-medium hover:border-brand-purple/50 transition-colors cursor-default">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The AI Imperative</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                The adoption of Artificial Intelligence is no longer an experimental innovation; it is a competitive necessity. Organizations that delay implementation are rapidly losing ground to automated competitors.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                By automating routine knowledge work, companies are unlocking unprecedented levels of productivity, allowing human talent to focus exclusively on high-value, strategic initiatives.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">30%</p>
                <p className="text-white/80">Of current work hours across the US economy could be automated by 2030.</p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey Global Institute</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">$15.7 Trillion</p>
                <p className="text-white/80">Potential contribution of AI to the global economy by 2030.</p>
                <p className="text-xs text-white/40 mt-2">Source: PwC</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">70%</p>
                <p className="text-white/80">Of organizations report that they are currently in exploration mode with Generative AI.</p>
                <p className="text-xs text-white/40 mt-2">Source: Gartner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common Mistakes in AI Adoption</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Implementing AI is not about buying software; it's about re-engineering processes. Here is why many AI initiatives fail to deliver ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Automating Broken Processes</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Applying AI to an inefficient workflow only makes the inefficiency happen faster. We ensure your underlying processes are optimized before writing a single line of code.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring Data Quality</h3>
              <p className="text-brand-text/70 leading-relaxed">
                An AI is only as good as the data it consumes. If your internal data is unstructured, outdated, or siloed, the model will produce confident hallucinations. We build robust data pipelines first.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Chasing Hype over ROI</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Many companies build impressive AI demos that solve zero business problems. We focus strictly on use cases that directly reduce costs, increase revenue, or drastically save time.
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
            <p className="text-brand-text/70">Expert answers to common questions about AI Business Automation.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What exactly is AI Business Automation?",
                a: "AI Business Automation combines artificial intelligence technologies—such as Large Language Models (LLMs), machine learning, and natural language processing—with traditional workflow automation tools. While standard automation follows strict if-then rules, AI automation can process unstructured data, understand context, make probabilistic decisions, and generate content, allowing businesses to automate highly complex cognitive tasks without human intervention."
              },
              {
                q: "Is my company data secure when using AI?",
                a: "Yes. When we deploy enterprise AI solutions, we utilize private, secure API endpoints and dedicated infrastructure (such as Azure OpenAI or isolated AWS environments). Your proprietary business data is never used to train public foundational models. Furthermore, we implement robust Role-Based Access Control (RBAC) to ensure employees only interact with data they are authorized to see."
              },
              {
                q: "How long does a typical AI implementation take?",
                a: "Implementation timelines depend heavily on the scope and data readiness of the organization. A focused AI customer support agent or a specific CRM automation can often be deployed in 3 to 6 weeks. However, large-scale enterprise RAG systems or complex data pipelines spanning multiple legacy systems may require 3 to 6 months of careful architecture, testing, and phased rollout."
              },
              {
                q: "Will AI replace my employees?",
                a: "In almost all cases, AI replaces tasks, not entire jobs. The objective of AI Business Automation is to eliminate the mind-numbing, repetitive administrative work that drains employee morale. By automating data entry, initial research, and routine communication, your team is freed up to focus on high-value activities: building relationships, strategic planning, and handling complex edge cases."
              },
              {
                q: "What is a RAG system?",
                a: "RAG stands for Retrieval-Augmented Generation. It is an architecture that connects a Large Language Model (like GPT-4) to your proprietary database. When a user asks a question, the system first 'retrieves' the relevant factual documents from your database, and then 'augments' the LLM's prompt with those facts, instructing it to 'generate' an answer based strictly on your data. This prevents hallucinations and ensures extreme accuracy."
              },
              {
                q: "How do we measure the ROI of an AI project?",
                a: "We measure ROI against strict business metrics established during the Strategy phase. Common KPIs include: percentage reduction in ticket resolution time, hours of manual data entry eliminated per week, increase in lead-to-opportunity conversion rates, and direct reduction in operational overhead. Most of our deployments achieve positive ROI within the first 6 to 9 months."
              },
              {
                q: "What systems can you integrate AI with?",
                a: "We can integrate AI capabilities into virtually any modern software system that has an accessible API. This includes CRMs like HubSpot and Salesforce, ERPs, accounting software, customer support platforms like Zendesk and Intercom, and team communication tools like Slack and Microsoft Teams. For legacy systems without APIs, we can utilize Robotic Process Automation (RPA) tools to bridge the gap."
              },
              {
                q: "How much does custom AI automation cost?",
                a: "Costs vary significantly based on complexity. A simple automated workflow or basic chatbot might start in the low thousands, whereas a comprehensive enterprise RAG architecture and custom data pipeline will require a larger investment. We approach every engagement with a strict focus on ROI—if we cannot clearly demonstrate how a solution will generate more value than it costs, we will advise against building it."
              },
              {
                q: "Do you provide ongoing support and maintenance?",
                a: "Yes. AI models and APIs evolve rapidly. We provide comprehensive Service Level Agreements (SLAs) for all of our deployments. This includes continuous monitoring for errors, prompt engineering optimization, security patches, and adapting the architecture as your business scales and software ecosystem changes."
              },
              {
                q: "Can AI help with lead generation?",
                a: "Absolutely. AI can radically improve lead generation by scoring inbound prospects in real-time, instantly answering pre-sales questions via chat, automating the drafting of highly personalized outbound emails based on prospect research, and seamlessly updating CRM pipelines to ensure sales teams focus only on qualified opportunities."
              },
              {
                q: "What is an AI Agent compared to a standard chatbot?",
                a: "Standard chatbots are typically constrained to retrieving information and answering questions. An AI Agent, however, has the ability to take action. When integrated with your internal tools via APIs, an AI agent can execute tasks autonomously—such as issuing a refund in Stripe, updating a record in Salesforce, or scheduling a meeting in Google Calendar, based entirely on a conversational command."
              },
              {
                q: "How do you prevent 'hallucinations' in AI models?",
                a: "Hallucinations occur when foundational models guess answers based on their broad training data. We prevent this by implementing strict Retrieval-Augmented Generation (RAG) architectures. We forcefully instruct the model to only generate answers based on the specific context we provide from your proprietary database. If the answer is not in your data, the model is programmed to admit it does not know or escalate to a human."
              },
              {
                q: "Is it difficult for employees to adopt these new systems?",
                a: "We design AI implementations specifically to minimize friction. The most successful AI tools are those that integrate directly into the software your employees already use daily, such as Slack, Microsoft Teams, or HubSpot. Instead of logging into a new dashboard, they simply interact with an AI assistant in their existing workspace."
              },
              {
                q: "Can AI automate our accounting and finance processes?",
                a: "Yes. Intelligent Document Processing (IDP) utilizing multimodal models can automatically ingest invoices, extract line items, perform three-way matching against purchase orders, and sync the data into accounting software like Xero or QuickBooks. This drastically reduces manual data entry and minimizes reconciliation errors."
              },
              {
                q: "Do we need an in-house technical team to manage this?",
                a: "No. Madlabs Digital acts as your fractional AI engineering team. We handle the discovery, architecture, development, deployment, and ongoing maintenance. We build intuitive front-end interfaces so your non-technical operations staff can interact with and manage the outcomes of the AI systems without needing to write code."
              },
              {
                q: "What industries benefit most from AI Business Automation?",
                a: "Any industry burdened with high volumes of repetitive administrative work, complex compliance requirements, or heavy customer service loads sees immediate ROI. We have deployed highly successful AI architectures across Healthcare, Real Estate, E-commerce, Financial Services, Legal, Logistics, and Enterprise SaaS."
              },
              {
                q: "How does AI impact SEO and content creation?",
                a: "Generative AI can dramatically accelerate content velocity. We build programmatic SEO architectures that utilize LLMs to generate high-quality, structured, and localized content at scale. However, pure AI content often lacks 'EEAT' (Experience, Expertise, Authoritativeness, Trustworthiness). We design human-in-the-loop workflows where AI drafts the foundational content, and human domain experts review and inject unique insights."
              },
              {
                q: "Can you automate WhatsApp and social media messaging?",
                a: "Yes. By integrating tools like the WhatsApp Business API or Meta Graph API with conversational AI platforms, we can deploy agents that qualify leads, schedule appointments, and provide customer support natively within the messaging apps your customers prefer."
              },
              {
                q: "What happens if an AI system makes a mistake?",
                a: "For high-stakes workflows (like finance or legal), we implement a 'Human-in-the-Loop' architecture. The AI performs the heavy lifting—extracting data, drafting the response, or categorizing the document—but pauses to require a human supervisor to click 'Approve' before the final action is executed. This ensures extreme efficiency while maintaining zero-defect quality control."
              },
              {
                q: "What is the difference between OpenAI, Anthropic, and Gemini?",
                a: "These are foundational model providers. OpenAI (GPT-4) excels at complex reasoning and coding. Anthropic (Claude 3.5 Sonnet) is often preferred for its nuance, massive context window (reading huge documents), and natural writing style. Google Gemini excels at multimodal tasks (processing video, audio, and images natively) and integrating with Google Workspace. We are model-agnostic and select the best engine for your specific use case."
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
              <p className="text-brand-text/70 text-lg">Deep dives into AI strategy, SEO, and business automation.</p>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/ai-automation-guide" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-purple/10 text-brand-purple group-hover:bg-white/20 group-hover:text-white transition-all">
                Guide
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">The Ultimate Guide to AI Business Automation in 2026</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">A comprehensive blueprint for identifying bottlenecks, selecting foundational models, and integrating AI into your existing software stack.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Jun 15, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>
            
            <Link to="/blog/rag-architecture-explained" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-blue/10 text-brand-blue group-hover:bg-white/20 group-hover:text-white transition-all">
                Technical
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">RAG Systems Explained: Ending AI Hallucinations</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">How Retrieval-Augmented Generation connects Large Language Models to your private enterprise data for secure, factual outputs.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>May 22, 2026</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>

            <Link to="/services/lead-generation" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-lime/10 text-brand-lime group-hover:bg-white/20 group-hover:text-white transition-all">
                Service
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">SEO & Lead Generation Systems</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Once your operations are automated, you need volume. Learn how we build programmatic SEO architectures that dominate organic search.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Service</span>
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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">Ready to Automate Your Growth?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop letting operational bottlenecks dictate your growth ceiling. Partner with Madlabs Digital to build intelligent systems that scale effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
