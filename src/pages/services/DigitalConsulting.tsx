import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Code2,
  Rocket,
  LineChart,
  CheckCircle2,
  Zap,
  LayoutDashboard,
  BrainCircuit,
  Users,
  FileText,
  Settings,
  RefreshCw,
  BarChart,
  Lightbulb,
  Target,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  Server,
  Activity,
  Wrench,
  AlertTriangle,
  Crosshair,
  Compass,
  FlaskConical,
  TrendingUp,
  ShieldCheck,
  Database,
  ShoppingCart,
  Webhook,
  Briefcase,
  Map,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function DigitalConsulting() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Digital Consulting & Strategy | Madlabs Digital</title>
        <meta
          name="description"
          content="Digital consulting that turns technology into business growth. We help define digital strategies, optimise processes, and implement AI roadmaps."
        />
        <meta
          name="keywords"
          content="Digital Consulting, Digital Transformation Consulting, Technology Consulting, AI Consulting, Business Process Consulting, Digital Strategy, Innovation Consulting, Fractional Product Leadership, Fractional CTO, Technology Roadmap, Business Automation Consulting, Executive Technology Consulting"
        />
        <link
          rel="canonical"
          href="https://madlabs.digital/services/digital-consulting"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Digital Consulting & Strategy | Madlabs Digital"
        />
        <meta
          property="og:description"
          content="Digital consulting that turns technology into business growth. We help define digital strategies, optimise processes, and implement AI roadmaps."
        />
        <meta
          property="og:url"
          content="https://madlabs.digital/services/digital-consulting"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Consulting & Strategy | Madlabs Digital"
        />
        <meta
          name="twitter:description"
          content="Digital consulting that turns technology into business growth. We help define digital strategies, optimise processes, and implement AI roadmaps."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Digital Consulting",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Expert digital consulting services focusing on AI strategy, digital transformation, process improvement, and technology roadmaps.",
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
                "name": "Digital Consulting"
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
                  "name": "What is digital consulting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digital consulting is the practice of advising businesses on how to best use technology to achieve their strategic goals, improve operations, and create new digital products or services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is digital transformation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digital transformation is the profound rewiring of an organisation, with the goal of creating value by continuously deploying tech at scale. It’s not just about software; it’s about fundamentally changing how a business operates and delivers value."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0a0a0a] text-white">
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
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
              <span className="flex h-2 w-2 rounded-full bg-brand-purple mr-2"></span>
              Strategic Technology Consulting
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
               The best Technology <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-white to-brand-blue">
                To Grow Your Business.
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Technology should solve business problems, not create them.
              Madlabs Digital helps organisations define digital strategies,
              optimise business processes, implement AI, modernise legacy
              systems, and build technology roadmaps that support long-term
              growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto shadow-lg shadow-brand-purple/20 bg-brand-purple text-white hover:bg-brand-purple/90"
                >
                  Book a Strategy Session{" "}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact?type=audit">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white"
                >
                  Talk to a Digital Consultant
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">300+</div>
                <div className="text-sm font-medium text-white/60">
                  Digital Initiatives Planned
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-sm font-medium text-white/60">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-sm font-medium text-white/60">
                  Years Leading Digital Products
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm font-medium text-white/60">
                  Industries Served
                </div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              The Business Problem: Transformation Is Not Just Software
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Many digital transformation projects fail because businesses put
              technology before strategy. When new software is deployed over
              broken processes, it simply digitizes dysfunction. Transformation
              must start with business objectives.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Common challenges like disconnected systems, manual processes,
              department silos, and poor adoption cause friction and waste
              resources. Teams often struggle with legacy software, lack of
              internal expertise, and poor customer experiences without a clear
              roadmap to navigate out of the chaos.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Digital transformation is not about buying software. It is about
              fundamentally improving the way a business operates, aligning
              people and processes with scalable technology.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SOLUTIONS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Why Traditional Consulting Falls Short
              </h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Businesses need consulting that combines strategy with
                execution. Traditional consultancies often leave you with
                theories instead of actionable results.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">01.</span> Reports
                    Without Execution
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Many consultancies deliver large, generic reports with no
                    implementation support. Without execution, a strategy is
                    just an expensive theory.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">02.</span>{" "}
                    Technology-First Thinking
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Selling you the latest trend without understanding your
                    business outcomes. Effective consulting bridges product
                    development realities with business needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">03.</span> Ignoring
                    AI & Optimization
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Failing to prepare for AI adoption or establish ongoing
                    optimization leaves businesses vulnerable to disruption from
                    more agile competitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">
                The Cost of Poor Strategy
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Wasted Investments</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Millions are lost annually on enterprise software that
                      teams refuse to use or that doesn't solve real operational
                      problems.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Stagnant Growth</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Without a clear digital strategy and measurable KPIs,
                      companies miss critical market opportunities and lose
                      competitive advantage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Execution Paralysis</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Large strategy documents with no tactical roadmap lead to
                      confusion and a failure to implement meaningful change.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: AI STRATEGY */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              AI Strategy for Modern Businesses
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We guide businesses from AI readiness and governance to the
              practical implementation of AI agents, predictive analytics, and
              process automation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider text-white/50 w-1/4">
                    Strategic Layer
                  </th>
                  <th className="p-6 text-lg font-bold text-white w-3/4">
                    Practical Applications
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                <tr>
                  <td className="p-6 font-medium text-white">
                    AI Readiness & Governance
                  </td>
                  <td className="p-6">
                    Assessing data infrastructure and establishing responsible
                    AI frameworks and data security protocols before deployment.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Process Automation
                  </td>
                  <td className="p-6">
                    Deploying AI to automate repetitive workflows, handle
                    initial customer triage, and process standard documentation.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Knowledge Management
                  </td>
                  <td className="p-6">
                    Building internal RAG (Retrieval-Augmented Generation)
                    systems to instantly query company-wide documents and data.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Decision Support & Analytics
                  </td>
                  <td className="p-6">
                    Implementing predictive analytics to forecast trends,
                    optimize inventory, and provide executives with data-driven
                    insights.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Autonomous AI Agents
                  </td>
                  <td className="p-6">
                    Configuring specialized AI agents that can execute complex,
                    multi-step operations like scheduling or personalized
                    outreach.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE FRAMEWORK */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              The Madlabs Digital Transformation Framework
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Our proven visual roadmap connects high-level strategy directly to
              execution, ensuring measurable business outcomes at every step.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Business Discovery",
                desc: "Aligning vision and goals.",
              },
              {
                num: "02",
                title: "Current State",
                desc: "Assessing existing operations.",
              },
              {
                num: "03",
                title: "Market Analysis",
                desc: "Competitor & trend research.",
              },
              {
                num: "04",
                title: "Tech Audit",
                desc: "Evaluating current stack.",
              },
              {
                num: "05",
                title: "Opportunity Map",
                desc: "Identifying quick wins.",
              },
              {
                num: "06",
                title: "Digital Strategy",
                desc: "Defining the master plan.",
              },
              {
                num: "07",
                title: "AI Strategy",
                desc: "Mapping AI readiness & use cases.",
              },
              {
                num: "08",
                title: "Roadmap Dev",
                desc: "Creating the timeline.",
              },
              {
                num: "09",
                title: "Implementation Plan",
                desc: "Structuring execution.",
              },
              {
                num: "10",
                title: "Execution Support",
                desc: "Guiding the transition.",
              },
              {
                num: "11",
                title: "Optimisation",
                desc: "Continuous improvement.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#fafafa] p-6 rounded-3xl border border-brand-grey hover:border-brand-purple/30 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-full shadow-sm border border-brand-grey flex items-center justify-center mb-4 text-brand-purple font-bold">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES INCLUDED */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Consulting Services
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We offer comprehensive consulting services to help organizations
              navigate complexity, select the right technologies, and scale
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Compass className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Digital Strategy & Roadmaps
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Comprehensive planning for technology adoption. Why
                it matters: Prevents aimless spending on disconnected tools.
                Business outcome: A clear, prioritized path to long-term digital
                maturity and ROI.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Digital Strategy & Transformation Roadmaps
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Technology Audits & Vendor Evaluation
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Digital Governance & Change Management
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Briefcase className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Fractional Product & Tech Leadership
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Executive-level guidance without full-time overhead.
                Why it matters: Injects senior expertise to steer high-stakes
                projects. Business outcome: Faster innovation, fewer mistakes,
                and alignment between tech and business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Fractional Product Leadership & CTO
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Product & Growth Strategy
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Executive Reporting & Performance Dashboards
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Network className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Process & Workflow Optimisation
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Streamlining operations through better systems and
                automation. Why it matters: Eliminates manual bottlenecks and
                data silos. Business outcome: Drastically reduced operational
                costs and improved productivity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Business Process Consulting
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Workflow Optimisation & Automation Planning
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Customer Journey Mapping
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <BrainCircuit className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                AI Readiness & Innovation
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Preparing your data and team for artificial
                intelligence. Why it matters: AI is useless without proper data
                structures and use cases. Business outcome: Safe, scalable AI
                adoption that drives actual value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  AI Readiness Assessment & Adoption Strategy
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Digital Maturity Assessment
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Innovation Workshops & Operational Consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.5: HOW WE BUILD */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              How We Help Businesses Transform
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              A systematic workflow designed to eliminate risk, ensure quality,
              and accelerate time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-brand-grey z-0"></div>
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Research, assessment, and finding gaps.",
              },
              {
                num: "02",
                title: "Strategy",
                desc: "Creating the digital and AI roadmaps.",
              },
              {
                num: "03",
                title: "Selection",
                desc: "Auditing and choosing the right tech.",
              },
              {
                num: "04",
                title: "Execution",
                desc: "Implementation support and change management.",
              },
              {
                num: "05",
                title: "Growth",
                desc: "Measurement and continuous improvement.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 bg-[#fafafa] border border-brand-grey p-6 rounded-3xl hover:border-brand-purple/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand-purple text-white font-bold flex items-center justify-center mb-4 border border-brand-purple/20">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-brand-text">
                  {step.title}
                </h3>
                <p className="text-brand-text/70 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Technology & Business Expertise
            </h2>
            <p className="text-brand-text/70 text-lg">
              We combine deep business strategy with hands-on knowledge of
              modern technological ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Cloud & Enterprise</h4>
              <p className="text-sm text-brand-text/60">
                AWS, Google Cloud, Microsoft, Cloudflare
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">CRM & Automation</h4>
              <p className="text-sm text-brand-text/60">
                HubSpot, Salesforce, n8n, Zapier
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Data & AI</h4>
              <p className="text-sm text-brand-text/60">
                OpenAI, Power BI, Looker Studio, Python
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Modern Dev Stack</h4>
              <p className="text-sm text-brand-text/60">
                Next.js, React, Supabase, Firebase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUSINESS BENEFITS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center max-w-3xl mx-auto">
            Measurable Business Outcomes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Map className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Clear Technology Roadmap
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Gain absolute clarity on what to build, when to build it, and
                how it aligns with your long-term business goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher ROI on Tech</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Ensure that every software investment directly reduces
                operational costs or accelerates revenue growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Stronger Team Collaboration
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Break down department silos by implementing unified systems,
                improving productivity and data visibility across the company.
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
                Proven Execution
              </h2>
              <p className="text-lg text-brand-text/70">
                Delivering high-impact strategy and consulting.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors"
            >
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link
              to="/case-studies/uae-insurance"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">
                    UAE Insurance
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Digital Growth Strategy & Roadmap
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Disconnected digital presence and poor
                    market visibility. Approach: Conducted deep Enterprise SEO
                    audits and drafted a 2-year digital roadmap.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Digital Roadmap
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">
                      Delivered
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Organic Growth
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">
                      +140%
                    </span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link
              to="/case-studies/enterprise-saas"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">
                    Enterprise SaaS
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    AI Transformation & Automation
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Overwhelmed support operations.
                    Approach: Mapped knowledge management processes and
                    implemented internal AI support automation.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Support Deflection
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">
                      65%
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Team Efficiency
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">
                      Tripled
                    </span>
                  </div>
                </div>
                <span className="text-brand-blue font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link
              to="/case-studies/web3-gaming"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-lime group-hover:text-brand-lime">
                    Web3 Gaming Platform
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Product Strategy & Growth
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Unclear tokenomics and go-to-market.
                    Approach: Acted as Fractional Product Leaders to design
                    tokenomics, architecture, and growth loops.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Funding Secured
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">
                      $2M+
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      User Acquisition
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">
                      Accelerated
                    </span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: INDUSTRIES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Strategic Guidance Across Industries
            </h2>
            <p className="text-brand-text/70 text-lg">
              We understand the unique regulatory, competitive, and operational
              challenges inherent to specific sectors.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Insurance",
              "Real Estate",
              "Healthcare",
              "Finance",
              "Retail",
              "Manufacturing",
              "Construction",
              "Education",
              "Government",
              "Hospitality",
              "Technology",
            ].map((ind) => (
              <div
                key={ind}
                className="px-6 py-3 rounded-full border border-brand-grey bg-[#fafafa] text-brand-text font-medium hover:border-brand-purple/50 transition-colors cursor-default"
              >
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">
                The Value of Strategy
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Data from top global research firms proves that strategy-led
                technology adoption heavily outperforms ad-hoc software
                purchases.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Digital transformation initiatives continue to accelerate across
                industries, and businesses with clear roadmaps are capturing the
                lion's share of market growth.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">89%</p>
                <p className="text-white/80">
                  Of boards say digital business is now embedded in all business
                  growth strategies.
                </p>
                <p className="text-xs text-white/40 mt-2">Source: Gartner</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">3x</p>
                <p className="text-white/80">
                  Businesses with clear digital strategies are three times more
                  likely to report above-average revenue growth.
                </p>
                <p className="text-xs text-white/40 mt-2">Source: Deloitte</p>
              </div>
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">70%</p>
                <p className="text-white/80">
                  Of complex transformations fail due to a lack of executive
                  ownership and poor change management.
                </p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Common Strategic Mistakes
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Why transformations stall, and how our consulting ensures your
              initiatives succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Buying Without Strategy
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Procuring expensive software before auditing business processes
                leads to poor adoption and wasted licenses.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">No Leadership Buy-in</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Treating digital transformation as solely an "IT project"
                instead of a company-wide initiative dooms it to fail.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Ignoring Customer Experience
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Optimizing internal processes is vital, but forgetting how
                technology impacts the end customer creates friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQS */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-text/70">
              Expert answers to common questions about digital consulting and
              strategy.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is digital consulting?",
                a: "Digital consulting involves assessing a company’s operations, technology stack, and market position to provide strategic advice on how to use technology to achieve specific business goals.",
              },
              {
                q: "What is digital transformation?",
                a: "It is the fundamental rewiring of a business to leverage technology across all areas. It goes beyond implementing software—it changes culture, operations, and how value is delivered to customers.",
              },
              {
                q: "How do I know if my business needs consulting?",
                a: "If you have data silos, manual repetitive tasks, declining customer experiences, legacy software holding you back, or if you lack a clear technology roadmap for the next 3 years, you need consulting.",
              },
              {
                q: "How long does a consulting engagement last?",
                a: "It varies. A high-level strategic audit might take 2-4 weeks, while Fractional CTO or ongoing transformation leadership can be a 6-12 month engagement.",
              },
              {
                q: "Can you work with our existing team?",
                a: "Yes. We frequently act in a fractional or advisory capacity, guiding and augmenting your existing in-house IT, marketing, and leadership teams.",
              },
              {
                q: "Do you help implement the recommendations?",
                a: "Absolutely. We are not just theorists. Through our engineering and automation divisions, we can build, deploy, and manage the solutions we recommend.",
              },
              {
                q: "Can you assess our technology stack?",
                a: "Yes, our Technology Audit evaluates your current software for redundancies, security risks, scalability issues, and alignment with business objectives.",
              },
              {
                q: "Can AI improve our operations?",
                a: "Yes, but only if applied correctly. We conduct AI Readiness Assessments to identify where automation, predictive analytics, or AI agents can provide genuine ROI rather than just hype.",
              },
              {
                q: "What industries do you specialise in?",
                a: "We have deep experience in Real Estate, Finance, Healthcare, Retail, and SaaS, but our strategic frameworks apply to any data-driven modern enterprise.",
              },
              {
                q: "Can you act as a Fractional Product Leader?",
                a: "Yes. We provide senior-level product strategy and management on a fractional basis to help define, build, and launch complex digital products.",
              },
              {
                q: "Can you help with digital strategy?",
                a: "Creating comprehensive, actionable digital strategies is our core competency. We define the 'what', 'why', and 'how' of your technology roadmap.",
              },
              {
                q: "Do you work with enterprise businesses?",
                a: "Yes. We are equipped to handle the complexity, compliance requirements, and scale of enterprise-level organizations and government bodies.",
              },
              {
                q: "Can you help choose software?",
                a: "Yes. We perform objective Vendor Evaluations, comparing platforms based on your specific requirements, total cost of ownership, and integration capabilities.",
              },
              {
                q: "Can you modernise legacy systems?",
                a: "Yes. We build transition architectures that allow you to migrate from outdated, monolithic systems to modern, cloud-based microservices with minimal disruption.",
              },
              {
                q: "Do you provide technology audits?",
                a: "Yes. We conduct thorough reviews of your codebases, cloud infrastructure, and operational software to identify risks and opportunities.",
              },
              {
                q: "How do you measure success?",
                a: "We tie our strategies to measurable business KPIs—such as reduced operational costs, increased customer lifetime value, faster time-to-market, or higher employee productivity.",
              },
              {
                q: "How much does consulting cost?",
                a: "Costs depend entirely on the scope of the engagement. We offer discovery workshops, fixed-price audits, and monthly retainers for fractional leadership.",
              },
              {
                q: "Can you support long-term transformation?",
                a: "Yes. We build multi-year roadmaps and can remain engaged as strategic advisors to ensure the transformation stays on track through changing market conditions.",
              },
              {
                q: "Do you provide executive workshops?",
                a: "Yes. We conduct AI and Innovation workshops designed specifically for C-suite and board members to align leadership on technology initiatives.",
              },
              {
                q: "How do we get started?",
                a: "The first step is booking a Strategy Session where we discuss your business challenges and determine if our consulting frameworks are the right fit for your needs.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className={`bg-white border ${activeFaq === i ? "border-brand-purple shadow-md" : "border-brand-grey"} rounded-2xl cursor-pointer transition-all duration-300`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3
                    className={`font-bold text-lg pr-8 ${activeFaq === i ? "text-brand-purple" : "text-brand-text"}`}
                  >
                    {faq.q}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#fafafa] shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-180 bg-brand-purple/10 text-brand-purple" : ""}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-brand-text/70 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED RESOURCES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold">Related Resources</h2>
            <Link
              to="/blog"
              className="text-brand-purple font-semibold hover:text-brand-purple/80 transition-colors flex items-center"
            >
              View all insights <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/services/ai-automation"
              className="group block bg-[#fafafa] rounded-3xl p-8 border border-brand-grey hover:border-brand-purple/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-white rounded-xl border border-brand-grey flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                Scale Operations with AI Automation
              </h3>
              <p className="text-brand-text/70 text-sm leading-relaxed mb-6">
                Discover how implementing custom AI agents and workflows can
                dramatically reduce operational costs.
              </p>
              <span className="text-sm font-semibold flex items-center">
                Explore Service <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/services/product-development"
              className="group block bg-[#fafafa] rounded-3xl p-8 border border-brand-grey hover:border-brand-purple/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-white rounded-xl border border-brand-grey flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                Product Development
              </h3>
              <p className="text-brand-text/70 text-sm leading-relaxed mb-6">
                From MVP to enterprise SaaS, see how we build robust digital
                products that scale.
              </p>
              <span className="text-sm font-semibold flex items-center">
                Explore Service <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/case-studies/enterprise-saas"
              className="group block bg-[#fafafa] rounded-3xl p-8 border border-brand-grey hover:border-brand-purple/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-white rounded-xl border border-brand-grey flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                Enterprise SaaS Case Study
              </h3>
              <p className="text-brand-text/70 text-sm leading-relaxed mb-6">
                Read how we transformed support operations and automated
                knowledge management for a global provider.
              </p>
              <span className="text-sm font-semibold flex items-center">
                Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Build a Smarter Digital Strategy for Long-Term Growth
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're planning digital transformation, evaluating AI
            opportunities, modernising legacy systems, or defining your next
            product strategy, Madlabs Digital helps organisations make better
            technology decisions backed by practical experience and measurable
            business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-brand-purple/20 bg-brand-purple text-white hover:bg-brand-purple/90"
              >
                Book a Strategy Session <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact?type=audit">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white"
              >
                Talk to a Digital Consultant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
