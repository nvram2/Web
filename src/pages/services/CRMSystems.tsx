import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Search, LayoutTemplate, MousePointerClick, MessageSquare, Briefcase, Mail, LineChart, Code2, Database, ShieldCheck, CheckCircle2, Zap, LayoutDashboard, BrainCircuit, Users, FileText, Settings, RefreshCw, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function CRMSystems() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>CRM & Business Systems | Madlabs Digital</title>
        <meta name="description" content="CRM & Business Systems that scale with your business. We design and implement CRM systems, sales pipelines, and workflow automation." />
        <meta name="keywords" content="CRM & Business Systems, CRM Implementation, CRM Consulting, Business Systems, HubSpot Partner, HubSpot Implementation, GoHighLevel, Sales Automation, Workflow Automation, CRM Migration, Business Process Automation, Customer Lifecycle Management, Pipeline Management, CRM Integration" />
        <link rel="canonical" href="https://madlabs.digital/services/crm-systems" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CRM & Business Systems | Madlabs Digital" />
        <meta property="og:description" content="Build CRM & Business Systems that scale with your business. We design and implement CRM systems, sales pipelines, and workflow automation." />
        <meta property="og:url" content="https://madlabs.digital/services/crm-systems" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CRM & Business Systems | Madlabs Digital" />
        <meta name="twitter:description" content="Build CRM & Business Systems that scale with your business. We design and implement CRM systems, sales pipelines, and workflow automation." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "CRM & Business Systems",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Design and implement CRM systems, sales pipelines, workflow automation, reporting dashboards, and AI-powered business processes that connect your entire customer journey.",
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
                "name": "CRM & Business Systems"
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
                  "name": "What CRM is best for small businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best CRM depends on your processes, but HubSpot is highly recommended for its ease of use, scalability, and robust free tier. GoHighLevel is also excellent for service-based businesses that need all-in-one marketing and sales automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I choose HubSpot or Salesforce?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HubSpot is generally better for inbound marketing, usability, and rapid deployment. Salesforce is often preferred for complex, enterprise-level customizations and highly intricate data architectures. We help you evaluate based on your specific operational needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you migrate from spreadsheets?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We clean, format, and migrate your spreadsheet data into a structured CRM environment, ensuring data integrity and setting up proper fields so you can finally track your customer journey accurately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you migrate from Zoho?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we handle migrations from Zoho, Pipedrive, activeCampaign, and legacy systems into modern platforms like HubSpot or Salesforce, ensuring zero data loss and minimal downtime."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AI improve CRM?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Significantly. AI can automatically log meeting notes, summarize calls, score leads based on intent, draft personalized emails, and predict sales forecasts, turning your CRM from a static database into an active assistant."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRM automate WhatsApp?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Through official API integrations, we can automate WhatsApp messages directly from your CRM based on triggers (e.g., a new lead arrives, a deal stage changes) and log all conversations on the contact record."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRM automate emails?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Email automation is a core feature. We build sequences that nurture leads over time, send internal notifications, or trigger specific messages based on a user's behavior on your website."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does CRM implementation cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Implementation costs vary based on the platform, the complexity of your pipelines, and the number of integrations required. A basic setup might be a few thousand dollars, while a complex enterprise architecture requires a larger investment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does implementation take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard CRM implementation typically takes 4 to 8 weeks, including discovery, setup, data migration, and training. Complex enterprise rollouts can take 3 to 6 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRM integrate with accounting software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we integrate CRMs with QuickBooks, Xero, and other accounting platforms so that when a deal is closed, invoices are generated automatically, keeping sales and finance aligned."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRM connect with ERP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we build bi-directional syncs between CRMs and ERP systems (like NetSuite or SAP) to ensure that inventory, fulfillment, and customer data remain consistent across the organization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is pipeline automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pipeline automation moves deals automatically through stages based on specific actions (like a signed proposal), assigns tasks to team members, and updates forecasting metrics without manual data entry."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRM improve customer retention?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. By tracking customer lifecycle stages, we can trigger automated check-ins, renewal reminders, and NPS surveys to ensure customers feel supported long after the initial sale."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRM reduce manual work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "That is its primary goal. A properly implemented CRM automates data entry, scheduling, follow-ups, and reporting, saving your team hours of administrative work each week."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I keep my existing website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We integrate your CRM with your existing website forms, chat widgets, and analytics so that lead data flows seamlessly from your current site into the new system."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How secure is customer data?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We partner with enterprise-grade platforms (HubSpot, Salesforce) that adhere to strict security standards (SOC 2, GDPR compliance). We also implement role-based access control so team members only see what they need to."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can multiple teams use the same CRM?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. A CRM is most effective when marketing, sales, and customer service teams all work from a single source of truth, enabling seamless handoffs and unified reporting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRM generate reports automatically?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We build custom dashboards that automatically update in real-time, tracking KPIs like pipeline value, conversion rates, and sales activity without requiring manual spreadsheet manipulation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide staff training?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Implementation is only half the battle; user adoption is critical. We provide customized training sessions, documentation, and ongoing support to ensure your team actually uses the system."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you measure CRM success?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Success is measured by increased sales velocity, higher user adoption rates, improved data accuracy, reduction in administrative time, and ultimately, a more predictable revenue pipeline."
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
              CRM & Business Systems
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              CRM & Business Systems That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Scale With Your Business.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Disconnected tools slow your business down. We design and implement CRM systems, sales pipelines, workflow automation, reporting dashboards, and AI-powered business processes that connect your entire customer journey from first enquiry to repeat customer.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Discovery Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-sm font-medium text-white/60">Qualified Enquiries Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">70%</div>
                <div className="text-sm font-medium text-white/60">Reduction in Manual Administration</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-sm font-medium text-white/60">Sales Pipeline Visibility</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">300+</div>
                <div className="text-sm font-medium text-white/60">Business Workflows Automated</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Business Problem: Disconnected Growth</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              As businesses grow, their operations often begin to fracture. Customer information gets spread across endless spreadsheets. Leads are lost through poor follow-up, and sales teams find themselves working from entirely different, disconnected systems.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Without visibility into the pipeline, marketing remains disconnected from sales. Reporting becomes a manual, error-prone task. Teams waste hours on manual reminders and duplicate data entry, completely losing track of the true customer lifecycle. There is no automation, and accurate forecasting becomes impossible.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Businesses don't have a software problem. They have a systems problem. A CRM shouldn't just be an address book; it must become the operational backbone of the business, connecting every touchpoint into a single source of truth.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SOLUTIONS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Most CRM Projects Fail</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Technology alone doesn't solve operational problems. Implementing software without a strategy creates expensive chaos.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Buying Software Before Defining Processes</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Purchasing expensive software assuming it will magically fix broken sales processes. If you digitize a bad process, you just get bad results faster.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Poor User Adoption & Complexity</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Choosing enterprise software that is too complex for the team's actual needs, leading to a lack of staff training, poor adoption, and a return to spreadsheets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> No Automation or Integration</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Treating the CRM as a standalone Rolodex. With dirty customer data, no external integrations, no AI enhancement, and no automated workflows, the system becomes an administrative burden rather than a business asset.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">The Symptoms of Broken Operations</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Dirty & Duplicate Data</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Customer information is scattered across email inboxes, sticky notes, and conflicting spreadsheet versions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <RefreshCw className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Manual Reporting</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Executives spend days at the end of the month manually compiling reports because there is no automated dashboard.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Siloed Teams</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Marketing doesn't know what sales is doing, and customer support has no context on the customer's purchase history.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Business Systems Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We focus on business outcomes, implementing robust operations from initial audit to final AI enhancement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/20 z-0"></div>
            {[
              { num: "01", title: "Discovery", desc: "Deep dive into your current processes and identify operational bottlenecks." },
              { num: "02", title: "Selection", desc: "Choosing and configuring the right CRM based on your specific needs, then migrating data cleanly." },
              { num: "03", title: "Automation", desc: "Designing automated workflows, lead routing, and connected integrations across your tech stack." },
              { num: "04", title: "Enhancement", desc: "Adding AI capabilities for advanced lead scoring, meeting summaries, and predictive analytics." },
              { num: "05", title: "Optimization", desc: "Building executive reporting dashboards and providing continuous team training for maximum adoption." }
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

      {/* SECTION 5: HOW CRM SYSTEMS WORK */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Customer Lifecycle</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              A unified system maps the entire customer journey, ensuring context and data follow the prospect at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Website & Capture", desc: "Traffic arrives, interacts with intelligent forms, and submits details straight into the centralized database." },
              { icon: BrainCircuit, title: "AI Qualification", desc: "Automated systems instantly score the lead based on intent, enriching the profile with third-party data." },
              { icon: MessageSquare, title: "Automated Routing", desc: "The CRM instantly notifies the correct sales rep and triggers a personalized welcome email or WhatsApp sequence." },
              { icon: Users, title: "Sales Engagement", desc: "The team manages the pipeline visually, with all calls, emails, and meetings logged automatically." },
              { icon: FileText, title: "Proposal & Contract", desc: "Automated document generation creates accurate quotes, sent via e-signature for frictionless closing." },
              { icon: Briefcase, title: "Onboarding", desc: "Closed deals trigger automated onboarding sequences, task creation for the fulfillment team, and accounting syncs." },
              { icon: Zap, title: "Customer Success", desc: "Ongoing health tracking flags at-risk accounts while automating renewal reminders and support tickets." },
              { icon: RefreshCw, title: "Retention & Expansion", desc: "Targeted, automated campaigns cross-sell services to existing clients based on usage data." },
              { icon: LineChart, title: "Executive Reporting", desc: "Real-time dashboards aggregate the entire cycle, displaying precise ROI, forecast accuracy, and team performance." }
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
              We design robust operational architecture tailored to your business model, utilizing industry-leading platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Settings className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">CRM Implementation & Migration</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Strategic deployment of HubSpot, GoHighLevel, Salesforce, or Pipedrive. We handle complex data migrations from legacy systems or spreadsheets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Clean CRM Strategy and architecture planning.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Secure data migration with field mapping and deduplication.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Custom CRM development for specialized business needs.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <LayoutTemplate className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Sales & Pipeline Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We build automated sales pipelines, lead routing rules, and customer lifecycle tracking to ensure zero friction in your acquisition process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Sales pipeline design tailored to your exact sales stages.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Automated calendar scheduling and document generation.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Proposal and invoice automation workflows.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Database className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Integrations & Workflows</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Connect your disparate tools into a single ecosystem. We build robust API connections between marketing, sales, support, and finance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Complex API integrations, ERP connections, and accounting syncs.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Deep WhatsApp integration for conversational business.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Internal business systems connecting Slack, email, and task managers.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Reporting & AI Enhancement</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Transform raw data into strategic intelligence. We implement executive dashboards and AI assistants to amplify your team's output.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Custom reporting dashboards for real-time executive visibility.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> AI CRM assistants for meeting summaries and data entry.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Intelligent customer portals and automated knowledge bases.</li>
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
            <p className="text-brand-text/70 text-lg">We select the right tools for your operational needs, integrating them flawlessly.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">CRM Platforms</h4>
              <p className="text-sm text-brand-text/60">HubSpot, Salesforce, GoHighLevel, Pipedrive</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Data & Operations</h4>
              <p className="text-sm text-brand-text/60">Airtable, Notion, Monday.com, Supabase</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Automation & Connectors</h4>
              <p className="text-sm text-brand-text/60">Zapier, Make, n8n, OpenAI APIs</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Comms & Finance</h4>
              <p className="text-sm text-brand-text/60">WhatsApp API, Twilio, Stripe, QuickBooks, Xero</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 7.5: AI + CRM */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">AI-Powered Operations</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Artificial Intelligence fundamentally changes how CRMs operate. Instead of a static database requiring manual entry, your CRM becomes an active assistant.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BrainCircuit className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">AI Lead Qualification & Scoring</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Algorithms analyze behavior and demographic data to accurately predict which leads will close, allowing sales to prioritize effectively.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Conversation Intelligence</h4>
                    <p className="text-brand-text/70 text-sm mt-1">AI automatically transcribes sales calls, summarizes key meeting points, identifies sentiment, and drafts personalized follow-up emails instantly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Database className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Predictive Analytics & Forecasting</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Leverage historical data to project future revenue with high accuracy, automatically adjusting pipelines based on real-world trends.</p>
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
                 We deploy support assistants backed by internal knowledge bases, enabling instant, accurate responses to customer queries without human intervention. By integrating AI directly into your business systems, we reduce repetitive administrative tasks by up to 70%.
               </p>
               <div className="text-sm font-semibold text-brand-purple">
                 Automation • Intelligence • Efficiency
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
                <BarChart className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Centralized Customer Data</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Eliminate data silos. Teams benefit from a single source of truth, improving collaboration, enhancing customer experiences, and preventing critical information loss.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Sales Productivity</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By automating follow-ups, reducing manual administrative work, and providing clear pipeline visibility, your sales team spends more time closing and less time typing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Better Forecasting</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Real-time reporting dashboards allow leadership to make strategic decisions based on accurate revenue projections and precise marketing attribution, driving scalable growth.
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
              <p className="text-lg text-brand-text/70">Transforming operations across industries.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/uae-real-estate" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">Top UAE Real Estate Agency</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Complete HubSpot Implementation & AI Qualification</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Replaced fragmented systems with a unified HubSpot architecture, integrating AI conversational agents to instantly qualify property enquiries and route to specialized agents.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Pipeline Visibility</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">100%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Speed to Lead</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">&lt; 1 min</span>
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
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Automating internal systems and support ops</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Built custom internal business systems and AI support assistants connected to their knowledge base, drastically reducing ticket resolution times.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Support Deflection</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">45%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Admin Reduction</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">20 hrs/wk</span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link to="/case-studies/d2c-shoe-brand" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">D2C Shoe Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Optimizing the customer lifecycle and retention</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Mapped the full customer journey, implementing deep lifecycle automation and segmented email campaigns to increase repeat purchase rates.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">LTV Increase</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+35%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Retention Rate</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+22%</span>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Cross-Industry Operational Expertise</h2>
            <p className="text-brand-text/70 text-lg">We understand that a healthcare provider requires fundamentally different pipeline security than a real estate agency. We tailor systems to industry logic.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Real Estate', 'Insurance', 'Healthcare', 'Finance', 'Professional Services', 'Construction', 'Hospitality', 'Retail', 'Manufacturing', 'Technology', 'Education', 'Growing SMEs'].map((ind) => (
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Data Speaks for Itself</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                According to studies by HubSpot, Salesforce, and McKinsey, modernizing business operations is not optional for organizations seeking scale.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                By implementing a centralized CRM system and automating routine tasks, companies are unlocking unprecedented levels of productivity, allowing sales talent to focus exclusively on closing high-value deals.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">5 Minutes</p>
                <p className="text-white/80">Businesses responding to leads within five minutes are significantly more likely to convert than those responding later.</p>
                <p className="text-xs text-white/40 mt-2">Source: Harvard Business Review</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">42%</p>
                <p className="text-white/80">CRM adoption improves sales forecasting accuracy by up to 42% on average.</p>
                <p className="text-xs text-white/40 mt-2">Source: Salesforce</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">30%</p>
                <p className="text-white/80">Effective automation reduces repetitive administrative work, giving sales reps 30% more time to focus on active selling.</p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center max-w-2xl mx-auto">Common CRM Implementation Mistakes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Choosing software based on features instead of defining business needs.",
              "Poor data quality during initial migration, leading to immediate distrust.",
              "Treating the CRM as just an address book, with no automation configured.",
              "No internal ownership or lack of consistent staff training.",
              "Overcomplicated pipelines that require too much manual data entry.",
              "Ignoring reporting features and failing to build executive dashboards.",
              "Not integrating the CRM with existing marketing or financial systems.",
              "Failing to utilize AI for summaries, drafting, and scoring."
            ].map((mistake, i) => (
              <div key={i} className="flex items-start bg-[#fafafa] p-6 rounded-2xl border border-brand-grey">
                <div className="bg-red-50 p-1 rounded-full mr-4 shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-sm font-medium text-brand-text/80 leading-relaxed">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-brand-text/70">Everything you need to know about CRM and operational systems.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What CRM is best for small businesses?", a: "The best CRM depends on your processes, but HubSpot is highly recommended for its ease of use, scalability, and robust free tier. GoHighLevel is also excellent for service-based businesses that need all-in-one marketing and sales automation." },
              { q: "Should I choose HubSpot or Salesforce?", a: "HubSpot is generally better for inbound marketing, usability, and rapid deployment. Salesforce is often preferred for complex, enterprise-level customizations and highly intricate data architectures. We help you evaluate based on your specific operational needs." },
              { q: "Can you migrate from spreadsheets?", a: "Yes. We clean, format, and migrate your spreadsheet data into a structured CRM environment, ensuring data integrity and setting up proper fields so you can finally track your customer journey accurately." },
              { q: "Can you migrate from Zoho?", a: "Yes, we handle migrations from Zoho, Pipedrive, activeCampaign, and legacy systems into modern platforms like HubSpot or Salesforce, ensuring zero data loss and minimal downtime." },
              { q: "Can AI improve CRM?", a: "Significantly. AI can automatically log meeting notes, summarize calls, score leads based on intent, draft personalized emails, and predict sales forecasts, turning your CRM from a static database into an active assistant." },
              { q: "Can CRM automate WhatsApp?", a: "Yes. Through official API integrations, we can automate WhatsApp messages directly from your CRM based on triggers (e.g., a new lead arrives, a deal stage changes) and log all conversations on the contact record." },
              { q: "Can CRM automate emails?", a: "Absolutely. Email automation is a core feature. We build sequences that nurture leads over time, send internal notifications, or trigger specific messages based on a user's behavior on your website." },
              { q: "How much does CRM implementation cost?", a: "Implementation costs vary based on the platform, the complexity of your pipelines, and the number of integrations required. A basic setup might be a few thousand dollars, while a complex enterprise architecture requires a larger investment." },
              { q: "How long does implementation take?", a: "A standard CRM implementation typically takes 4 to 8 weeks, including discovery, setup, data migration, and training. Complex enterprise rollouts can take 3 to 6 months." },
              { q: "Can CRM integrate with accounting software?", a: "Yes, we integrate CRMs with QuickBooks, Xero, and other accounting platforms so that when a deal is closed, invoices are generated automatically, keeping sales and finance aligned." },
              { q: "Can CRM connect with ERP?", a: "Yes, we build bi-directional syncs between CRMs and ERP systems (like NetSuite or SAP) to ensure that inventory, fulfillment, and customer data remain consistent across the organization." },
              { q: "What is pipeline automation?", a: "Pipeline automation moves deals automatically through stages based on specific actions (like a signed proposal), assigns tasks to team members, and updates forecasting metrics without manual data entry." },
              { q: "Can CRM improve customer retention?", a: "Yes. By tracking customer lifecycle stages, we can trigger automated check-ins, renewal reminders, and NPS surveys to ensure customers feel supported long after the initial sale." },
              { q: "Can CRM reduce manual work?", a: "That is its primary goal. A properly implemented CRM automates data entry, scheduling, follow-ups, and reporting, saving your team hours of administrative work each week." },
              { q: "Can I keep my existing website?", a: "Yes. We integrate your CRM with your existing website forms, chat widgets, and analytics so that lead data flows seamlessly from your current site into the new system." },
              { q: "How secure is customer data?", a: "We partner with enterprise-grade platforms (HubSpot, Salesforce) that adhere to strict security standards (SOC 2, GDPR compliance). We also implement role-based access control so team members only see what they need to." },
              { q: "Can multiple teams use the same CRM?", a: "Yes. A CRM is most effective when marketing, sales, and customer service teams all work from a single source of truth, enabling seamless handoffs and unified reporting." },
              { q: "Can CRM generate reports automatically?", a: "Yes. We build custom dashboards that automatically update in real-time, tracking KPIs like pipeline value, conversion rates, and sales activity without requiring manual spreadsheet manipulation." },
              { q: "Do you provide staff training?", a: "Yes. Implementation is only half the battle; user adoption is critical. We provide customized training sessions, documentation, and ongoing support to ensure your team actually uses the system." },
              { q: "How do you measure CRM success?", a: "Success is measured by increased sales velocity, higher user adoption rates, improved data accuracy, reduction in administrative time, and ultimately, a more predictable revenue pipeline." }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-brand-grey rounded-2xl overflow-hidden cursor-pointer hover:border-brand-purple/30 transition-colors"
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
              <p className="text-brand-text/70 text-lg">Deep dives into CRM strategy, SEO, and business automation.</p>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/upgrade-crm-architecture" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-purple/10 text-brand-purple group-hover:bg-white/20 group-hover:text-white transition-all">
                CRM Strategy
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Stop Losing Leads: When It's Time to Upgrade Your CRM Architecture</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">A comprehensive blueprint for identifying bottlenecks and integrating CRM systems into your existing software stack.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Jun 15, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>
            
            <Link to="/blog/scale-business-operations-ai-automation" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-blue/10 text-brand-blue group-hover:bg-white/20 group-hover:text-white transition-all">
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

            <Link to="/services/lead-generation" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-lime/10 text-brand-lime group-hover:bg-white/20 group-hover:text-white transition-all">
                Lead Generation
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Building SEO Lead Generation Systems That Actually Convert</h3>
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
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-8 text-white">
          Automated CRM That Works <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-blue">While You Focus on Growth.</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Whether you're replacing spreadsheets, implementing your first CRM, migrating to HubSpot, automating your sales process, or connecting every department into a single business system, Madlabs Digital helps organisations build scalable operational foundations that support long-term growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                Book Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
