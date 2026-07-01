import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, Building, ShieldCheck, Mail, LineChart, Code2, Link as LinkIcon, Laptop, Rocket, Globe, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function RealEstate() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Real Estate Software Development & AI | Madlabs Digital</title>
        <meta name="description" content="Digital solutions that help real estate companies sell more properties. Expert real estate software development, AI, CRM, and proptech." />
        <meta name="keywords" content="Real Estate Software Development, Real Estate Website Development, AI for Real Estate, PropTech Development, Property Portal Development, CRM for Real Estate, Real Estate Lead Generation, Real Estate SEO, Luxury Real Estate Marketing, Real Estate Automation, Real Estate Technology Partner" />
        <link rel="canonical" href="https://madlabs.digital/industries/real-estate" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Real Estate Software Development & AI | Madlabs Digital" />
        <meta property="og:description" content="Digital solutions that help real estate companies sell more properties. Expert real estate software development, AI, CRM, and proptech." />
        <meta property="og:url" content="https://madlabs.digital/industries/real-estate" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Software Development & AI | Madlabs Digital" />
        <meta name="twitter:description" content="Digital solutions that help real estate companies sell more properties. Expert real estate software development, AI, CRM, and proptech." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Real Estate Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for real estate companies, offering proptech development, property portals, CRM integration, and AI automation.",
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
                "name": "Real Estate"
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
                  "name": "Can AI qualify property buyers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We integrate AI chatbots and automated workflows that can ask qualifying questions about budget, timeline, and preferences before routing the lead to the right agent."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you build property portals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We develop custom property portals with advanced search, interactive maps, virtual tours, and CRM integrations, tailored for developers and brokerages."
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
              Real Estate Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Real Estate Solutions  <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Sell More Properties.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Today's buyers expect instant responses, personalised recommendations, virtual property experiences, and seamless communication. Madlabs Digital helps real estate businesses generate better enquiries, automate lead qualification, improve sales efficiency, and build digital experiences that convert visitors into buyers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Grow Your Real Estate Business <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Strategy Session
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-sm font-medium text-white/60">Increase in Qualified Enquiries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">35%</div>
                <div className="text-sm font-medium text-white/60">Lower Cost Per Lead</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$7M+</div>
                <div className="text-sm font-medium text-white/60">Attributed Sales</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm font-medium text-white/60">AI Lead Qualification</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Real Estate Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Real estate businesses today face a barrage of poor quality enquiries, slow lead response times, and the manual burden of continuous follow-up. High advertising costs combined with fragmented CRMs and weak SEO mean that agents spend more time managing disjointed systems than actually closing deals.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Furthermore, a poor mobile experience, lack of multilingual support for international buyers, and disconnected multiple listing systems result in severe drops in agent productivity and unnecessarily long buying journeys. 
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Modern buyers expect fast, digital-first experiences. They want high-quality property information instantly, personalized interactions, and immediate responses. We build the technology to deliver exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SOLUTIONS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Real Estate Marketing Falls Short</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Technology should support agents, rather than attempt to replace them. Here's why traditional approaches fail to generate meaningful ROI.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Relying Only on Paid Ads & Static Sites</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Paid ads alone without a strong SEO strategy and a dynamic property website result in high customer acquisition costs. Static sites with no AI and poor analytics fail to engage modern buyers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Manual Lead Qualification</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Agents spend hours qualifying leads manually. Without automation, AI chatbots, and a strong CRM, the sales process is disconnected, and valuable buyer nurturing is lost.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> No Multilingual Experience</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Ignoring international buyers by lacking a multilingual experience limits your market reach. Without localized content and automated follow-ups, global leads will simply bounce to competitors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">How to Empower Your Agents</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Implement a Strong CRM</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Centralize all lead data, property preferences, and communications in a single, robust system.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Automate Lead Qualification</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Use AI to ask qualifying questions instantly, ensuring agents only speak to serious buyers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Deploy Analytics</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Track user behavior on your site to understand exactly which properties are generating the most interest.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Real Estate Growth Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic roadmap for digital transformation in the real estate sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Market Analysis", desc: "Understanding the target audience, competitor landscape, and specific real estate market dynamics." },
              { num: "02", title: "SEO & GEO Strategy", desc: "Positioning the brand for high-intent search queries and optimizing for generative AI engines." },
              { num: "03", title: "Property Portal Design", desc: "Creating high-converting, user-friendly property search experiences and landing pages." },
              { num: "04", title: "Lead Generation", desc: "Implementing strategies across organic and paid channels to capture potential buyer details." },
              { num: "05", title: "CRM Integration", desc: "Connecting all lead sources into a centralized CRM like HubSpot for unified data management." },
              { num: "06", title: "AI Qualification", desc: "Deploying AI chatbots to engage visitors 24/7 and qualify leads based on budget and requirements." },
              { num: "07", title: "Sales Automation", desc: "Setting up automated follow-ups via email and WhatsApp to nurture prospects through the buying journey." },
              { num: "08", title: "Analytics", desc: "Tracking website behavior, lead quality, and campaign ROI to make data-driven decisions." },
              { num: "09", title: "Optimization", desc: "Refining landing pages, sales scripts, and automated workflows based on performance data." },
              { num: "10", title: "Growth", desc: "Scaling successful campaigns, expanding into new markets, and dominating the digital real estate space." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Real Estate Companies</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Premium digital solutions designed specifically for property developers and agencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Property Portals & Websites",
                desc: "We build custom property portals, luxury property websites, and multilingual experiences that captivate buyers.",
                features: ["Property Portal Development", "Luxury Property Websites", "Multilingual Websites"]
              },
              {
                icon: Search,
                title: "Real Estate SEO & Search",
                desc: "Dominate search rankings and provide users with a seamless property search experience and interactive maps.",
                features: ["Real Estate SEO", "Property Search Experience", "Interactive Maps"]
              },
              {
                icon: BrainCircuit,
                title: "AI & Lead Qualification",
                desc: "Automate your top-of-funnel with AI lead qualification and personalized AI property recommendations.",
                features: ["AI Lead Qualification", "AI Property Recommendations", "Virtual Tours"]
              },
              {
                icon: Database,
                title: "CRM & Management",
                desc: "Integrate powerful CRM systems and property management tools to centralize your operations and sales data.",
                features: ["CRM Integration", "Property Management Systems", "Agent Dashboards"]
              },
              {
                icon: Mail,
                title: "Automation & Nurturing",
                desc: "Engage leads across channels with WhatsApp automation, email marketing, and automated booking systems.",
                features: ["WhatsApp Automation", "Marketing Automation", "Booking Systems"]
              },
              {
                icon: Code2,
                title: "Custom Web Applications",
                desc: "Develop bespoke customer portals, advanced analytics dashboards, and robust API integrations.",
                features: ["Custom Web Applications", "Customer Portals", "API Integrations"]
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Real Estate</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Core services designed to modernize your real estate business and drive measurable sales growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. Lead Generation Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Generate high-quality property enquiries through targeted SEO, localized landing pages, and optimized conversion funnels.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Lead Generation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Unify your sales data. We implement HubSpot and real estate CRMs to ensure no lead is ever dropped or forgotten by agents.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build stunning, lightning-fast luxury property websites and portals that showcase real estate beautifully on any device.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Deploy 24/7 AI agents to qualify incoming enquiries, answer property questions, and automatically schedule viewings for your team.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic guidance on adopting PropTech, streamlining operations, and choosing the right technology stack for long-term real estate growth.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

             <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                For PropTech startups and large brokerages needing custom applications, agent dashboards, and complex MLS API integrations.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The PropTech Stack</h2>
            <p className="text-brand-text/70 text-lg">We utilize industry-leading technologies to create seamless, reliable, and high-performance property buying experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frontend & Web</h4>
              <p className="text-sm text-brand-text/60">Next.js, React, Vercel</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Maps & APIs</h4>
              <p className="text-sm text-brand-text/60">Google Maps API, MLS Integrations, Property APIs</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & AI</h4>
              <p className="text-sm text-brand-text/60">Firebase, Supabase, OpenAI</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Ops & Comm</h4>
              <p className="text-sm text-brand-text/60">HubSpot, WhatsApp Business API, Stripe, Cloudflare</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: THE MODERN PROPERTY BUYING JOURNEY */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Property Buying Journey</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                We engineer digital touchpoints that smoothly guide prospects from an initial Google search all the way through to after-sales support.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">SEO & Optimized Landing Pages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Intuitive Property Search & AI Recommendations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Automated CRM Capture & WhatsApp Follow-up</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Seamless Viewing Scheduling & Closing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Digital Pipeline</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Search → Landing Page → Lead Capture → CRM → Viewing → Closing</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Phase 1: Discovery & Capture</p>
                  <p className="text-xs text-brand-text/70">Google Search leads to a highly optimized property landing page where AI recommendations drive lead capture.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Phase 2: Nurture & Qualify</p>
                  <p className="text-xs text-brand-text/70">The CRM logs the lead while automated WhatsApp messages and AI instantly qualify the buyer's intent.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Phase 3: Conversion</p>
                  <p className="text-xs text-brand-text/70">Qualified leads are passed to agents for a property viewing, leading to an offer, closing, and after-sales support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUSINESS BENEFITS */}
      <section className="py-24 lg:py-32 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center max-w-3xl mx-auto">Tangible Business Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Quality Enquiries</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By leveraging targeted SEO, localized content, and automated lead qualification, you receive more property enquiries at a lower cost per lead.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Faster Sales Cycles</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Improve customer experience and boost agent productivity with a scalable digital infrastructure that supports international buyers 24/7.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Search Rankings</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Achieve sustainable visibility. Strong technical foundations and optimized portals mean higher search rankings and a steady stream of organic traffic.
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
              <p className="text-lg text-brand-text/70">Real results driving lead generation, CRM adoption, and business outcomes.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/top-uae-real-estate" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">Top UAE Real Estate Agency</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Lead Gen & SEO</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Completely overhauled their digital presence with a high-performance portal, driving massive organic growth and quality enquiries.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Organic Leads</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+350%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Cost Per Lead</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">-45%</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">UAE Insurance</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Automation & CRM</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Implemented rigorous CRM workflows and automation, reducing manual data entry and speeding up client response times significantly.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Response Time</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">&lt; 5 mins</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Sales Efficiency</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">D2C Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Business Outcomes</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Applied similar conversion-rate optimization and digital growth strategies to scale revenue securely through enhanced user experience.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Conversion Rate</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+85%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Revenue Lift</span>
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

      {/* SECTION 10: REAL ESTATE BUSINESS MODELS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions by Real Estate Business Type</h2>
            <p className="text-brand-text/70 text-lg">We architect tailored digital experiences that solve the unique operational challenges of different real estate sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Property Developers</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Off-plan sales tracking, complex project showcases.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Virtual tours, interactive maps, secure investor portals.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Brokerages</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Agent productivity, high lead volumes, fragmented CRM.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: CRM integration, AI lead qualification, WhatsApp automation.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Luxury Real Estate</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Discerning international buyers, highly personalized service.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Premium bespoke design, multilingual websites, highly secure portals.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Commercial Real Estate</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Complex data rooms, long sales cycles, B2B lead generation.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Secure document processing, robust analytics, targeted SEO.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Property Management</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Tenant communication, maintenance requests, rent collection.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Custom web applications, customer portals, automated billing.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">PropTech</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Technical debt, scaling infrastructure, API complexities.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Full-stack product development, AI integration, advanced cloud architecture.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 10.5: AI IN REAL ESTATE */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI in Real Estate</h2>
            <p className="text-brand-text/70 text-lg">Practical applications of artificial intelligence that generate immediate return on investment for property businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Bot className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Chatbots & Support</h3>
                <p className="text-brand-text/70 text-sm">Provide 24/7 customer support, answer common property queries, and seamlessly schedule viewings without human intervention.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <BrainCircuit className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Property Recommendations</h3>
                <p className="text-brand-text/70 text-sm">Analyze user search behavior and preferences to automatically suggest highly relevant listings, increasing conversion rates.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <LineChart className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Predictive Analytics & Lead Scoring</h3>
                <p className="text-brand-text/70 text-sm">Use machine learning to analyze CRM data, score leads based on intent, and identify the buyers most likely to close.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Mail className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Marketing Automation</h3>
                <p className="text-brand-text/70 text-sm">Generate property descriptions, automate email newsletters, and trigger targeted WhatsApp follow-ups based on user behavior.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <FileText className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Document Processing</h3>
                <p className="text-brand-text/70 text-sm">Automate the extraction of data from contracts, IDs, and financial documents to speed up the tedious closing process.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Data on Real Estate Tech</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Insights from the National Association of Realtors (NAR), PwC, Deloitte, McKinsey, Google, and HubSpot confirm the shift in buyer behavior.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Mobile property searches dominate, lead response speed is critical, and AI adoption is no longer optional for competitive real estate marketing trends.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">97%</p>
                <p className="text-white/80">Of all homebuyers use the internet in their home search process, making digital presence crucial.</p>
                <p className="text-xs text-white/40 mt-2">Source: NAR</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">5 mins</p>
                <p className="text-white/80">The critical window for lead response. Odds of qualifying a lead drop by 80% after 5 minutes.</p>
                <p className="text-xs text-white/40 mt-2">Source: HubSpot</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">76%</p>
                <p className="text-white/80">Of real estate professionals believe AI will fundamentally change how they do business.</p>
                <p className="text-xs text-white/40 mt-2">Source: Deloitte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common Real Estate Tech Mistakes</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Avoid the expensive digital traps that cause agencies to lose highly qualified buyers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Slow Lead Response</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Relying on manual qualification means agents often follow up hours or days late. We deploy AI chatbots and WhatsApp automation to ensure instant engagement and zero dropped leads.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring SEO</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Relying solely on expensive paid ads while ignoring organic search creates an unsustainable customer acquisition cost. We build strong SEO foundations for long-term visibility.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Weak CRM Utilization</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Many agencies have a CRM but fail to integrate it with their website, resulting in poor follow-up and weak analytics. We ensure seamless data flow across all touchpoints.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring Mobile Experience</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Over 70% of property searches happen on mobile devices. A website that is slow or difficult to navigate on a phone will immediately drive buyers away.
              </p>
            </div>
             <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold mb-3">No AI Integration</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Failing to use AI for property recommendations, lead scoring, and automated communications leaves you operating at a significant disadvantage compared to modernized competitors.
              </p>
            </div>
             <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Static Weak Websites</h3>
              <p className="text-brand-text/70 leading-relaxed">
                A simple brochure website cannot compete. Buyers expect interactive maps, detailed search filters, virtual tours, and a dynamic property portal experience.
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
            <p className="text-lg text-brand-text/70">Expert answers to common questions about real estate technology, PropTech development, and AI integration.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can AI qualify property buyers?",
                a: "Yes. We integrate AI chatbots and automated workflows that can ask qualifying questions about budget, timeline, and preferences before routing the lead to the right agent."
              },
              {
                q: "Can you build property portals?",
                a: "Absolutely. We develop custom property portals with advanced search, interactive maps, virtual tours, and CRM integrations, tailored for developers and brokerages."
              },
              {
                q: "Can you integrate CRM?",
                a: "Yes, we integrate leading CRMs like HubSpot, Salesforce, and specialized real estate CRMs to ensure seamless lead capture from your website directly into your sales pipeline."
              },
              {
                q: "Can you connect WhatsApp?",
                a: "Yes. We utilize the WhatsApp Business API to automate property brochure delivery, viewing confirmations, and instant lead follow-ups."
              },
              {
                q: "Can buyers schedule viewings online?",
                a: "Yes, we can build automated appointment scheduling systems that sync directly with your agents' calendars, reducing administrative friction."
              },
              {
                q: "Can you integrate Google Maps?",
                a: "Yes. Interactive mapping is a core feature we implement for property portals, allowing users to search by area, view amenities, and understand neighborhood context."
              },
              {
                q: "Can you build multilingual websites?",
                a: "Yes. For agencies targeting international buyers, we build robust multilingual architecture ensuring seamless translations and localized SEO."
              },
              {
                q: "Can you integrate MLS or property feeds?",
                a: "Yes, we handle complex API integrations to pull property listings automatically from Multiple Listing Services (MLS) or proprietary feeds."
              },
              {
                q: "Can AI recommend properties?",
                a: "Yes, machine learning algorithms can track user behavior on your site to dynamically suggest similar properties they are highly likely to be interested in."
              },
              {
                q: "Can you automate follow-up?",
                a: "Yes, through marketing automation and CRM workflows, we ensure that every lead receives immediate, personalized follow-up emails and messages."
              },
              {
                q: "How long does development take?",
                a: "A standard property website might take 6-10 weeks, while a complex, custom-built property portal with deep integrations can take 3-6 months depending on requirements."
              },
              {
                q: "Can you improve SEO for our agency?",
                a: "Yes, we implement technical SEO best practices, optimize for local search, and build architecture designed to rank high for competitive real estate keywords."
              },
              {
                q: "Can you migrate existing websites?",
                a: "Yes, we handle seamless migrations from legacy platforms (like WordPress) to modern, high-performance stacks like Next.js, ensuring zero loss of SEO equity."
              },
              {
                q: "Can you integrate HubSpot for real estate?",
                a: "We are experts in HubSpot integration. We can configure custom pipelines, deal stages, and marketing automation specifically designed for real estate sales."
              },
              {
                q: "How secure is customer data?",
                a: "Security is paramount. We build compliant, secure systems using enterprise-grade infrastructure to protect sensitive buyer information and financial details."
              },
              {
                q: "Can you build investor portals?",
                a: "Yes, we develop secure portals for commercial real estate and property developers, allowing investors to securely access documents, updates, and portfolios."
              },
              {
                q: "Can you improve lead quality?",
                a: "By combining better targeting (SEO), detailed landing pages, and AI qualification, we significantly reduce the volume of spam and low-intent enquiries."
              },
              {
                q: "Do you provide ongoing maintenance?",
                a: "Yes, we offer comprehensive support and maintenance retainers to ensure your platform remains secure, fast, and up-to-date with the latest technology."
              },
              {
                q: "Can you build mobile apps for real estate?",
                a: "While we specialize in highly responsive web applications that feel native on mobile, we can also develop cross-platform mobile apps using React Native if required."
              },
              {
                q: "How do we get started?",
                a: "The best first step is to book a strategy session. We'll audit your current digital presence, understand your sales goals, and propose a tailored technical roadmap."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-brand-grey rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-bold text-lg pr-8">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-brand-grey flex items-center justify-center transition-transform duration-200 ${activeFaq === i ? 'bg-brand-dark text-white rotate-180' : 'bg-[#fafafa] text-brand-dark'}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-[400px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-brand-text/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED SERVICES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
             <Link to="/services/lead-generation" className="p-4 rounded-xl border border-brand-grey hover:bg-[#fafafa] transition-colors text-sm font-semibold">
               Lead Generation
             </Link>
             <Link to="/services/crm-systems" className="p-4 rounded-xl border border-brand-grey hover:bg-[#fafafa] transition-colors text-sm font-semibold">
               CRM Systems
             </Link>
             <Link to="/services/web-development" className="p-4 rounded-xl border border-brand-grey hover:bg-[#fafafa] transition-colors text-sm font-semibold">
               Web Development
             </Link>
             <Link to="/services/ai-automation" className="p-4 rounded-xl border border-brand-grey hover:bg-[#fafafa] transition-colors text-sm font-semibold">
               AI Automation
             </Link>
             <Link to="/services/digital-consulting" className="p-4 rounded-xl border border-brand-grey hover:bg-[#fafafa] transition-colors text-sm font-semibold">
               Digital Consulting
             </Link>
             <Link to="/services/product-development" className="p-4 rounded-xl border border-brand-grey hover:bg-[#fafafa] transition-colors text-sm font-semibold">
               Product Development
             </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15: RELATED BLOGS */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Insights & Strategy</h2>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Building SEO Lead Generation Systems That Actually Convert",
                category: "Growth",
                readTime: "7 min read",
                link: "/blog/seo-lead-generation"
              },
              {
                title: "How to Scale Business Operations with AI Automation",
                category: "AI & Tech",
                readTime: "6 min read",
                link: "/blog/scale-operations-ai"
              },
              {
                title: "Technical SEO Audit Checklist",
                category: "SEO",
                readTime: "5 min read",
                link: "/blog/technical-seo-audit"
              },
              {
                title: "When to Upgrade Your CRM Architecture",
                category: "CRM",
                readTime: "8 min read",
                link: "/blog/upgrade-crm-architecture"
              }
            ].map((blog, i) => (
              <Link key={i} to={blog.link} className="group bg-white p-6 rounded-2xl border border-brand-grey hover:border-brand-purple/30 transition-colors flex flex-col h-full">
                <div className="flex items-center justify-between text-xs text-brand-text/60 mb-4">
                  <span className="font-semibold text-brand-purple">{blog.category}</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="font-bold text-lg mb-4 group-hover:text-brand-purple transition-colors">{blog.title}</h3>
                <span className="mt-auto text-sm font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors">
                  Read article <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16: FINAL CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-lime/10 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-8">
            Transform Your Real Estate Business with Smarter Technology
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you're selling luxury properties, launching a property portal, automating lead qualification, integrating CRM systems, or improving your digital customer experience, Madlabs Digital helps real estate companies generate better enquiries, close more deals, and scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto">
                Grow Your Real Estate Business
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto">
                Book Strategy Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
