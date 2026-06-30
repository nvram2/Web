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
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function WebDevelopment() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Web Development Services | Madlabs Digital</title>
        <meta
          name="description"
          content="Modern websites built to rank, convert, and scale. We design and develop lightning-fast enterprise platforms, ecommerce stores, and web applications."
        />
        <meta
          name="keywords"
          content="Web Development Services, Custom Web Development, Business Website Development, Enterprise Web Development, Next.js Development, React Development, Website Design, Website Development Company, SEO Web Development, Headless CMS, Headless Commerce, Technical SEO, Website Redesign"
        />
        <link
          rel="canonical"
          href="https://madlabs.digital/services/web-development"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Web Development Services | Madlabs Digital"
        />
        <meta
          property="og:description"
          content="Modern websites built to rank, convert, and scale. We design and develop lightning-fast enterprise platforms, ecommerce stores, and web applications."
        />
        <meta
          property="og:url"
          content="https://madlabs.digital/services/web-development"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services | Madlabs Digital"
        />
        <meta
          name="twitter:description"
          content="Modern websites built to rank, convert, and scale. We design and develop lightning-fast enterprise platforms, ecommerce stores, and web applications."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Web Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "High-performance web development, enterprise websites, headless ecommerce, and Next.js applications optimized for SEO and conversion.",
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
                "name": "Web Development"
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
                  "name": "How long does a website take to build?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard corporate website takes 4-8 weeks, while custom enterprise platforms or headless ecommerce builds can take 3-6 months depending on complexity and features."
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
              <span className="flex h-2 w-2 rounded-full bg-brand-lime mr-2"></span>
              Enterprise Web Development Agency
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Modern Websites Built to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">
                Rank, Convert, and Scale.
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Your website should be your highest-performing sales and marketing
              asset. We design and develop lightning-fast websites, enterprise
              platforms, ecommerce stores, and web applications that combine
              exceptional user experience, technical excellence, SEO, GEO, and
              conversion optimization to drive measurable business growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90"
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact?type=audit">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white"
                >
                  Free Website Audit
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-sm font-medium text-white/60">
                  Faster Website Performance
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50%</div>
                <div className="text-sm font-medium text-white/60">
                  Higher Mobile Conversions
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm font-medium text-white/60">
                  Platform Reliability
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm font-medium text-white/60">
                  Web Projects Delivered
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
              The Business Problem: A Website Should Not Simply Exist
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Many business websites fail because they are treated as digital
              brochures rather than revenue-generating engines. A website that
              merely exists is a missed opportunity; it should actively generate
              business value, capture leads, and drive sales.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Common issues like slow loading times, poor SEO, outdated
              technology, and weak mobile experiences silently turn prospects
              away. Security vulnerabilities and disconnected CMS platforms make
              maintenance a nightmare, while poor accessibility and generic
              templates damage brand credibility.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Without robust analytics, clear conversion paths, and scalable
              architecture, businesses are left guessing why their digital
              presence isn't yielding a return on investment.
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
                Why Traditional Websites Hold Businesses Back
              </h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Businesses eventually outgrow traditional websites because they
                are built on fragile foundations that cannot scale with modern
                demands.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">01.</span> Bloated
                    Templates & Plugins
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Template websites and bloated WordPress installations rely
                    on too many third-party plugins. This creates a fragile
                    ecosystem that is prone to breaking, hacking, and massive
                    performance drops.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">02.</span> Poor
                    Core Web Vitals
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Outdated code and cheap shared hosting lead to slow page
                    speed and poor Core Web Vitals. This directly penalizes your
                    search rankings and frustrates users, leading to high bounce
                    rates.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">03.</span> No
                    Technical SEO Strategy
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Traditional builds ignore technical SEO, semantic HTML, and
                    structured data, making it virtually impossible for search
                    engines and AI to crawl, understand, and rank your content
                    effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">
                The Cost of Outdated Web Tech
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Limited Scalability</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Monolithic platforms struggle under high traffic, forcing
                      expensive migrations when your business finally starts to
                      grow.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Weak User Experience (UX)</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Generic designs fail to guide visitors towards conversion,
                      leaving money on the table through confusing navigation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Security Vulnerabilities</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Unmaintained plugins and legacy code are the primary entry
                      points for data breaches and malware infections.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: SEO & GEO TABLE */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              SEO & GEO Built Into Every Website
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We engineer websites designed for both Google Search and modern
              AI-powered search engines (Generative Engine Optimization).
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider text-white/50 w-1/4">
                    Optimization Layer
                  </th>
                  <th className="p-6 text-lg font-bold text-white w-3/4">
                    Implementation details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                <tr>
                  <td className="p-6 font-medium text-white">
                    Core Web Vitals & Speed
                  </td>
                  <td className="p-6">
                    Next-gen image formats, lazy loading, and server-side
                    rendering to pass Google's strictest performance metrics.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Semantic HTML & Architecture
                  </td>
                  <td className="p-6">
                    Clean, logical document structures and robust internal
                    linking strategies that guide search crawlers effortlessly.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Structured Data (Schema)
                  </td>
                  <td className="p-6">
                    Advanced JSON-LD schema markup for products, services, FAQs,
                    and organizations to win rich snippets.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    AI Search (GEO)
                  </td>
                  <td className="p-6">
                    Structuring content with high "EEAT" (Experience, Expertise,
                    Authoritativeness, Trustworthiness) tailored for AI
                    citations.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Accessibility (a11y)
                  </td>
                  <td className="p-6">
                    WCAG compliant development ensuring your site is usable by
                    everyone, which is an increasingly critical ranking factor.
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
              The Madlabs Web Development Framework
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Our proven process focuses entirely on your business outcomes,
              ensuring that every design and technical decision drives
              measurable value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Understanding market positioning.",
              },
              {
                num: "02",
                title: "Business Goals",
                desc: "Defining clear KPIs.",
              },
              {
                num: "03",
                title: "UX Strategy",
                desc: "Mapping user journeys.",
              },
              {
                num: "04",
                title: "Info Architecture",
                desc: "Structuring content.",
              },
              {
                num: "05",
                title: "UI Design",
                desc: "Creating visual identity.",
              },
              {
                num: "06",
                title: "Development",
                desc: "Writing scalable code.",
              },
              {
                num: "07",
                title: "SEO Optimization",
                desc: "Technical implementation.",
              },
              { num: "08", title: "Testing", desc: "Cross-device QA." },
              { num: "09", title: "Launch", desc: "Zero-downtime deployment." },
              { num: "10", title: "Monitoring", desc: "Tracking performance." },
              {
                num: "11",
                title: "Improvement",
                desc: "Continuous iteration.",
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
              Services Included
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We provide end-to-end web development services tailored to your
              specific business requirements, technology stack, and growth
              ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Globe className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Corporate & Enterprise Websites
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Large-scale, highly secure digital platforms built
                for established businesses. Why it matters: Drives brand
                authority and manages complex user flows. Business outcome:
                Increased stakeholder trust and streamlined lead generation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Business & Corporate Websites
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Website Redesign & Migration
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Enterprise Content Management
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <ShoppingCart className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Headless & Ecommerce
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Modern decoupled architecture and robust online
                stores. Why it matters: Delivers ultra-fast shopping experiences
                across all channels. Business outcome: Higher conversion rates
                and increased average order value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Headless Websites & CMS Integration
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Shopify & WooCommerce Development
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Custom Ecommerce Architecture
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Code2 className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Next.js & Custom Web Apps
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Bespoke software solutions built on React and
                Next.js. Why it matters: Provides the ultimate flexibility and
                performance for complex functionality. Business outcome: Unique
                operational advantages and scalable growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Custom Web Applications
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Next.js & React Development
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Custom API Development
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Zap className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Performance, SEO & Hosting
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: The technical foundation that ensures your site
                ranks and runs perfectly. Why it matters: Visibility and
                reliability are non-negotiable. Business outcome: Lower
                acquisition costs and protected brand reputation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Technical SEO & Performance Optimization
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Analytics & Conversion Optimization
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Hosting, Deployment & Maintenance
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
              How We Build Modern Websites
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
                title: "Strategy",
                desc: "Research, wireframes, and technical architecture.",
              },
              {
                num: "02",
                title: "Design",
                desc: "High-fidelity UI and responsive design systems.",
              },
              {
                num: "03",
                title: "Dev",
                desc: "Frontend and backend engineering.",
              },
              {
                num: "04",
                title: "Testing",
                desc: "QA, SEO audit, and performance checks.",
              },
              {
                num: "05",
                title: "Scale",
                desc: "Launch, analytics setup, and optimization.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 bg-[#fafafa] border border-brand-grey p-6 rounded-3xl hover:border-brand-purple/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand-lime text-black font-bold flex items-center justify-center mb-4 border border-brand-lime/20">
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
              Our Technology Ecosystem
            </h2>
            <p className="text-brand-text/70 text-lg">
              We use the modern stack to build fast, secure, and infinitely
              scalable web experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Frontend & Styling</h4>
              <p className="text-sm text-brand-text/60">
                Next.js, React, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Backend & CMS</h4>
              <p className="text-sm text-brand-text/60">
                Node.js, Supabase, Firebase, Sanity CMS, Contentful
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Ecommerce & Infra</h4>
              <p className="text-sm text-brand-text/60">
                Shopify, WooCommerce, Vercel, Cloudflare
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Data & Tools</h4>
              <p className="text-sm text-brand-text/60">
                GA4, Tag Manager, Search Console, Figma, GitHub
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
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Search Rankings</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Clean code, semantic architecture, and lightning-fast speeds
                signal to search engines that your site deserves top placement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Higher Conversion Rates
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Frictionless user experiences and strategic conversion paths
                directly increase the volume of qualified leads and sales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Lower Maintenance Costs
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Future-proof, scalable infrastructure and simpler content
                management systems drastically reduce ongoing technical
                overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8.5: PERFORMANCE MATTERS */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Performance Matters
              </h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Page speed isn't just a technical metric; it's a critical
                business KPI that directly affects both search rankings and user
                conversions.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Activity className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Mastering Core Web Vitals
                    </h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      We optimize Largest Contentful Paint, Interaction to Next
                      Paint, and Cumulative Layout Shift to ensure pristine user
                      experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Database className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Advanced Caching & CDNs
                    </h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Global content delivery networks and aggressive caching
                      strategies deliver your content instantly, regardless of
                      user location.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Server className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Server-Side Rendering</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Utilizing Next.js for SSR and Static Generation ensures
                      blazing-fast load times and perfectly indexable HTML for
                      search bots.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-purple/10 mb-8">
                <Zap className="w-10 h-10 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Speed is Revenue</h3>
              <p className="text-brand-text/70 leading-relaxed mb-6">
                We implement rigorous image optimization, code splitting, and
                edge computing to ensure your website responds in milliseconds.
              </p>
              <div className="text-sm font-semibold text-brand-purple">
                Performance • Conversion • Scale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CASE STUDIES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
                Proven Execution
              </h2>
              <p className="text-lg text-brand-text/70">
                Delivering high-performance platforms across industries.
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
              to="/case-studies/global-clothing-brand"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">
                    Global Clothing Brand
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Headless Commerce & Performance
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Sluggish loading times affecting global
                    sales. Solution: Built a headless ecommerce architecture
                    focusing on technical SEO.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Load Speed
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">
                      3x Faster
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Organic Traffic
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">
                      +85%
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
              to="/case-studies/uae-insurance"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">
                    UAE Insurance
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Enterprise SEO & Content Architecture
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Poor visibility in competitive SERPs.
                    Solution: Re-engineered site architecture and implemented
                    rigorous technical SEO.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Search Visibility
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">
                      +140%
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Lead Quality
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">
                      Improved
                    </span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link
              to="/case-studies/uae-real-estate"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">
                    Top UAE Real Estate Agency
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Property Portal & CRM Integration
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Disconnected lead systems. Solution:
                    Developed a custom portal seamlessly integrated with CRM for
                    instant lead routing.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Lead Capture
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">
                      10x
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Attributed Sales
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">
                      $7M+
                    </span>
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
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Tailored Web Solutions by Industry
            </h2>
            <p className="text-brand-text/70 text-lg">
              We understand that a real estate portal requires vastly different
              architecture and design strategies than a healthcare platform.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Insurance",
              "Real Estate",
              "Healthcare",
              "Finance",
              "Retail",
              "Education",
              "Hospitality",
              "Construction",
              "Manufacturing",
              "Technology",
              "Government",
            ].map((ind) => (
              <div
                key={ind}
                className="px-6 py-3 rounded-full border border-brand-grey bg-white text-brand-text font-medium hover:border-brand-purple/50 transition-colors cursor-default"
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
                The Data Speaks for Itself
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Real statistics from Google, Akamai, and McKinsey highlight the
                critical financial impact of investing in modern web
                infrastructure.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Slow, outdated websites directly cannibalize your marketing
                budget by turning away prospects before they even see your
                offer.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">53%</p>
                <p className="text-white/80">
                  Of mobile site visits are abandoned if pages take longer than
                  3 seconds to load.
                </p>
                <p className="text-xs text-white/40 mt-2">
                  Source: Google / Chrome UX Report
                </p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">7%</p>
                <p className="text-white/80">
                  Reduction in conversions for every single second delay in page
                  response time.
                </p>
                <p className="text-xs text-white/40 mt-2">Source: Akamai</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">88%</p>
                <p className="text-white/80">
                  Of consumers are less likely to return to a site after a poor
                  user experience.
                </p>
                <p className="text-xs text-white/40 mt-2">
                  Source: Gomez / HubSpot
                </p>
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
              Common Mistakes in Web Development
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Why business websites fail to generate ROI, and how we ensure your
              project succeeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Choosing Price Over Quality
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Cheap templates cost more in the long run through lost sales,
                constant fixes, and poor search rankings. We build robust
                assets.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring Mobile & SEO</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Failing to plan for mobile-first indexing and technical SEO from
                day one guarantees your site will be invisible to search
                engines.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Neglecting Maintenance</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Launching is just the beginning. Without ongoing analytics
                tracking, security patches, and scalable hosting, websites
                quickly degrade.
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
              Expert answers to common questions about modern web development.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a website take to build?",
                a: "A standard corporate website typically takes 4 to 8 weeks. Custom web applications, enterprise platforms, or headless ecommerce builds can take 3 to 6 months depending on complexity and features.",
              },
              {
                q: "Do you build custom websites?",
                a: "Yes, we exclusively build custom solutions tailored to your brand, business logic, and operational needs. We do not rely on pre-packaged, bloated templates.",
              },
              {
                q: "Do you use WordPress?",
                a: "We can build headless WordPress solutions or highly optimized standard WordPress environments, though we often recommend Next.js and headless CMS options (like Sanity or Contentful) for superior security and performance.",
              },
              {
                q: "Should I choose Next.js?",
                a: "Next.js is excellent for businesses that prioritize lightning-fast page speeds, robust technical SEO, and massive scalability. It's the industry standard for modern, high-performance web applications.",
              },
              {
                q: "Can you redesign our website?",
                a: "Yes. We perform complete digital transformations, redesigning UX/UI while migrating your existing data and preserving your SEO equity to ensure zero loss in traffic.",
              },
              {
                q: "Will my website be SEO optimized?",
                a: "Absolutely. Technical SEO, semantic HTML, schema markup, and Core Web Vitals optimization are built into the foundation of every project we deploy.",
              },
              {
                q: "Can you migrate my existing website?",
                a: "Yes, we handle complex migrations from legacy platforms to modern stacks, carefully mapping URLs and implementing redirects to protect your search engine rankings.",
              },
              {
                q: "Do you provide hosting?",
                a: "Yes. We deploy to enterprise-grade cloud infrastructure (like Vercel, AWS, or specialized managed hosting) to ensure 99.9% uptime, global CDN distribution, and strict security.",
              },
              {
                q: "Can you integrate HubSpot?",
                a: "Yes, we deeply integrate HubSpot and other leading CRMs to ensure seamless lead capture, user tracking, and marketing automation directly from your website.",
              },
              {
                q: "Can you build ecommerce websites?",
                a: "Yes. We design and engineer scalable ecommerce platforms, specializing in headless commerce, custom Shopify architectures, and high-performance WooCommerce environments.",
              },
              {
                q: "Can you connect payment gateways?",
                a: "Yes. We integrate global payment gateways such as Stripe, PayPal, Authorize.net, and localized providers, ensuring secure and PCI-compliant transactions.",
              },
              {
                q: "Can you improve page speed?",
                a: "Yes. We audit your existing stack and deploy aggressive optimization strategies—including edge caching, image optimization, and code minification—to drastically improve load times.",
              },
              {
                q: "Do you provide ongoing maintenance?",
                a: "Yes. We offer continuous retainer packages that cover security patches, performance monitoring, content updates, and proactive technical support.",
              },
              {
                q: "Can you build multilingual websites?",
                a: "Yes, we architect systems with robust internationalization (i18n) support, ensuring localized content, correct href-lang tags for SEO, and culturally appropriate UX.",
              },
              {
                q: "Can AI improve websites?",
                a: "Yes. We integrate AI for dynamic personalization, intelligent search, automated customer support (chatbots), and semantic content structuring (GEO).",
              },
              {
                q: "Will the website work on mobile?",
                a: "Yes. We design with a mobile-first philosophy, ensuring flawless responsive behavior and optimized touch interactions across all device sizes.",
              },
              {
                q: "How secure is the website?",
                a: "We enforce strict security protocols, utilizing HTTPS, modern authentication methods, CSRF/XSS protection, and decoupled architectures to minimize vulnerability footprints.",
              },
              {
                q: "Who owns the code?",
                a: "You do. Upon full payment and project completion, all intellectual property, source code, and assets are fully transferred to your organization.",
              },
              {
                q: "Can we edit content ourselves?",
                a: "Yes. We integrate intuitive Content Management Systems (CMS) so your marketing team can easily update text, images, and pages without needing technical assistance.",
              },
              {
                q: "How much does a website cost?",
                a: "Investment varies based on complexity. Corporate sites may start around $15k–$30k, while complex enterprise platforms or headless ecommerce systems scale higher. We provide exact quotes after a thorough discovery call.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-brand-grey rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-bold flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  {faq.q}
                  <span
                    className={`transform transition-transform ${activeFaq === i ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Related Insights & Resources
              </h2>
              <p className="text-brand-text/70 text-lg">
                Explore technical deep dives and proven case studies.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors"
            >
              View all resources <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/blog/technical-seo-audit-checklist"
              className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent"
            >
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-purple/10 text-brand-purple group-hover:bg-white/20 group-hover:text-white transition-all">
                Checklist
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                Technical SEO Audit Checklist
              </h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">
                A comprehensive checklist to ensure your web architecture is
                fully optimized for modern search engines.
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Guide</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>

            <Link
              to="/services/lead-generation"
              className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent"
            >
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-lime/10 text-brand-lime group-hover:bg-white/20 group-hover:text-white transition-all">
                Service
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                Lead Generation Systems
              </h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">
                Learn how we turn high-performance websites into predictable
                lead generation engines.
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>View Service</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>

            <Link
              to="/case-studies/uae-insurance"
              className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent"
            >
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-blue/10 text-brand-blue group-hover:bg-white/20 group-hover:text-white transition-all">
                Case Study
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                UAE Insurance Case Study
              </h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">
                See how we modernized a major insurance portal to dramatically
                increase organic search visibility.
              </p>
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
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden text-center border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-purple/10" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">
            Build a Website That Becomes <br className="hidden sm:block" /> Your
            Best Salesperson
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need a high-performance business website, an enterprise
            platform, a headless ecommerce solution, or a modern web
            application, Madlabs Digital builds websites that are fast,
            scalable, search-optimized, and designed to convert visitors into
            customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact?type=audit">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto"
              >
                Free Website Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
