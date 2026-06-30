import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Search, LayoutTemplate, MousePointerClick, MessageSquare, Briefcase, Mail, LineChart, Code2, Database, ShieldCheck, CheckCircle2, Zap, LayoutDashboard, BrainCircuit, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function LeadGeneration() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Lead Generation Systems & SEO Services | Madlabs Digital</title>
        <meta name="description" content="Build end-to-end lead generation systems combining SEO, GEO, AI automation, and CRM integration to consistently attract and convert high-intent customers." />
        <meta name="keywords" content="Lead Generation Systems, Lead Generation Agency, Lead Generation Services, SEO Lead Generation, Lead Funnel, CRM Integration, Lead Qualification, Sales Funnel, B2B Lead Generation, AI Lead Generation, GEO, Conversion Rate Optimization" />
        <link rel="canonical" href="https://madlabs.digital/services/lead-generation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Lead Generation Systems & SEO Services | Madlabs Digital" />
        <meta property="og:description" content="Build end-to-end lead generation systems combining SEO, GEO, AI automation, and CRM integration to consistently attract and convert high-intent customers." />
        <meta property="og:url" content="https://madlabs.digital/services/lead-generation" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lead Generation Systems & SEO Services | Madlabs Digital" />
        <meta name="twitter:description" content="Build end-to-end lead generation systems combining SEO, GEO, AI automation, and CRM integration to consistently attract and convert high-intent customers." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Lead Generation Systems",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "End-to-end lead generation systems combining SEO, GEO, AI automation, CRM integration, conversion optimization, and analytics to attract, qualify, and convert high-intent customers.",
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
                "name": "Lead Generation Systems"
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
                  "name": "What is a lead generation system?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A lead generation system is an integrated, end-to-end architecture designed to attract traffic, capture contact information, qualify prospects, and route them to sales teams automatically. It connects marketing channels (like SEO and ads) with conversion assets (landing pages) and backend operations (CRM and AI qualification) to ensure a predictable flow of revenue."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does SEO take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO is a long-term strategy. While technical fixes and indexation improvements can show results in weeks, significant organic growth typically takes 3 to 6 months, depending on industry competitiveness, current website authority, and content velocity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need paid ads or just SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both have distinct roles. Paid ads (Google Ads, Meta) offer immediate visibility and are excellent for testing messaging and capturing short-term demand. SEO is a long-term asset that reduces your blended Cost Per Acquisition (CPA) over time. We often recommend a hybrid approach: Ads for immediate leads while the SEO strategy matures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is GEO (Generative Engine Optimization)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GEO is the evolution of SEO. As search engines like Google incorporate AI (AI Overviews) and users adopt tools like ChatGPT and Perplexity, businesses must optimize their content to be referenced by these AI models. This requires a focus on factual accuracy, unique insights, direct answers, and strong EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AI really qualify leads effectively?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We deploy conversational AI agents that engage visitors instantly, ask qualifying questions (e.g., budget, timeline, company size), and intelligently route qualified leads to sales while disqualifying poor fits. This saves your human sales team hundreds of hours."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a lead generation system cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs vary based on scope. A foundational setup (landing page, basic CRM integration, standard SEO setup) requires a moderate investment. A comprehensive enterprise system (custom programmatic SEO architecture, advanced Hubspot workflows, AI conversational agents) requires a more significant investment. We focus strictly on ROI—ensuring the system generates more revenue than it costs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which CRM is best for my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There is no universal 'best' CRM, only the best CRM for your specific processes. We frequently implement HubSpot for comprehensive inbound marketing and B2B sales, GoHighLevel for agencies and high-volume local service businesses, and Salesforce for complex enterprise environments."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I track ROI from marketing efforts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We implement closed-loop reporting by connecting your website analytics (GA4), ad platforms, and CRM. When a deal is marked as 'Closed Won' in HubSpot, you will be able to see exactly which Google Search keyword, blog post, or ad campaign originally generated that specific customer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate HubSpot with our existing tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We specialize in deep CRM integrations, utilizing native APIs, Zapier, or Make to connect HubSpot with your ERPs, accounting software, custom databases, and communication tools (Slack, Teams)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate Salesforce?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We work with enterprise clients to optimize Salesforce implementations, build custom objects, automate complex routing workflows, and ensure seamless data flow between marketing front-ends and the Salesforce backend."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AI answer customer enquiries?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Using RAG (Retrieval-Augmented Generation) architectures, we train AI agents exclusively on your company's documentation and knowledge base. They can answer pre-sales questions accurately and instantly 24/7."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I really need dedicated landing pages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Driving paid or high-intent organic traffic to a generic homepage is the number one reason campaigns fail. Dedicated landing pages match the specific intent of the user's search, remove distracting navigation, and focus entirely on a single call-to-action (CTA), drastically improving conversion rates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you improve conversion rates (CRO)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We rely on data, not guesses. We implement heatmap tracking (Hotjar, Microsoft Clarity), analyze user session recordings to find friction points, improve page load speeds, clarify copywriting, and run continuous A/B tests on forms and CTAs to iteratively increase conversions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries do you work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We build systems for complex B2B and high-value B2C environments. Our deepest expertise is in Real Estate, Insurance, Professional Services, Healthcare, SaaS, and Technology—industries where a single qualified lead represents significant revenue and the sales cycle requires careful nurturing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you work with our existing website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Often, yes. If your website is built on a modern, flexible stack (like Next.js, WordPress, or Webflow), we can optimize the existing infrastructure. However, if the site is fundamentally broken, extremely slow, or impossible to optimize for technical SEO, we will recommend a rebuild."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you measure success?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We do not measure success by vanity metrics like 'impressions' or 'likes'. We measure success by Sales Qualified Leads (SQLs), Cost Per Acquisition (CPA), pipeline velocity, and ultimately, closed revenue attributed to the systems we build."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does implementation take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard CRM implementation and foundational SEO strategy can be deployed in 4 to 6 weeks. A highly complex system involving programmatic SEO, custom AI agents, and deep enterprise CRM integrations may take 3 to 4 months of phased rollout."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you automate WhatsApp for lead generation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. In markets where WhatsApp is the primary communication tool (like the UAE and broader GCC), we build automated WhatsApp flows that capture leads directly from Meta Ads, qualify them conversationally, and instantly sync the data to your CRM."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate with Google Ads?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We ensure that Google Ads data flows directly into your CRM and analytics dashboards. More importantly, we optimize your landing pages (CRO) to ensure that expensive Google Ads traffic actually converts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you improve our existing SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We begin with a comprehensive technical and content audit. We fix indexation errors, resolve core web vital issues, optimize existing underperforming content, implement proper schema markup, and design a content strategy to capture broader search real estate."
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
              B2B Lead Generation & SEO
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              A Lead Generation Systems That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Generates Qualified Customers 24/7.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Your website should do more than attract visitors. We design end-to-end lead generation systems that combine SEO, GEO, AI automation, CRM integration, conversion optimization, and analytics to consistently attract, qualify, and convert high-intent customers.
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
                <div className="text-sm font-medium text-white/60">Qualified Enquiries Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">35%</div>
                <div className="text-sm font-medium text-white/60">Lower Cost Per Lead</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$8M+</div>
                <div className="text-sm font-medium text-white/60">Revenue Influenced</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-sm font-medium text-white/60">Client Satisfaction</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Problem: Traffic Without Conversions</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Most businesses do not have a traffic problem. They have a systems problem. They depend entirely on paid ads, lack a coherent SEO strategy, and drive expensive clicks to weak landing pages that fail to convert.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Even when leads do arrive, the operational breakdown continues. Without proper CRM integration and automated lead qualification, sales teams are forced to manually sift through unqualified enquiries. Follow-ups are slow, attribution is nonexistent, and conversion optimization is completely ignored.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              The result is a highly inefficient marketing spend where customer acquisition costs continue to rise, and revenue growth becomes unpredictable. Generating a lead is only 10% of the battle; capturing, qualifying, and closing that lead is where businesses fail.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SOLUTIONS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Lead Generation Fails</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Relying on fragmented tactics rather than a holistic system creates inconsistent growth and inflated acquisition costs.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Buying Leads & Cold Outreach</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Purchasing lists of unqualified contacts or blasting generic cold emails damages brand reputation and yields extremely low conversion rates. You are interrupting people who have zero intent to buy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Ads Without Tracking or CRO</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Pouring budget into Google or Meta Ads while driving traffic to a generic homepage is burning cash. Without dedicated landing pages and Conversion Rate Optimization (CRO), you capture a fraction of potential leads.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> Disconnected CRMs & One-Size-Fits-All Agencies</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Marketing agencies often stop at the form submission. Without CRM integration, attribution tracking, and automated follow-ups, marketing and sales remain siloed, making it impossible to know which campaigns actually generated revenue.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">The Symptoms of a Broken System</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unpredictable Pipeline</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Sales teams face feast or famine cycles because lead volume relies entirely on active ad spend rather than compounding organic assets.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Manual Qualification</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Sales reps spend hours calling unqualified prospects who were never a fit for your product or service.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Zero Attribution</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Inability to confidently state which marketing channels or specific keywords actually led to closed-won deals.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Lead Generation Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We engineer predictable acquisition systems by connecting search visibility, conversion design, and sales operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/20 z-0"></div>
            {[
              { num: "01", title: "Search & Visibility", desc: "Driving high-intent traffic through Enterprise SEO, Generative Engine Optimization (GEO), and targeted Ads." },
              { num: "02", title: "Conversion Assets", desc: "Capturing interest via high-converting Landing Page Design, lead magnets, and optimized forms." },
              { num: "03", title: "Qualification", desc: "Filtering prospects instantly using AI Lead Qualification, automated scoring, and conversational agents." },
              { num: "04", title: "Sales Operations", desc: "Routing qualified leads directly into CRM systems with full attribution and automated follow-up sequences." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-lime text-black font-bold flex items-center justify-center mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE GENERATE LEADS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The End-to-End System</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We design and implement every stage of the customer acquisition journey, ensuring data flows seamlessly from the first click to the closed deal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Search & GEO", desc: "We optimize your presence for traditional search engines and emerging AI platforms (ChatGPT, Perplexity) to capture active demand." },
              { icon: LayoutTemplate, title: "Landing Pages", desc: "We design rapid, focused landing pages tailored to specific search intents, removing friction and driving immediate action." },
              { icon: FileText, title: "Lead Magnets", desc: "Developing high-value gated assets (checklists, calculators, whitepapers) that incentivize visitors to exchange their contact information." },
              { icon: MousePointerClick, title: "Optimized Forms", desc: "Implementing progressive profiling and multi-step forms that reduce abandonment rates while collecting qualifying data." },
              { icon: BrainCircuit, title: "AI Qualification", desc: "Deploying conversational AI to instantly answer pre-sales queries, score leads in real-time, and disqualify poor fits." },
              { icon: Database, title: "CRM Routing", desc: "Pushing enriched lead data automatically into HubSpot, Salesforce, or GoHighLevel with complete marketing attribution." },
              { icon: MessageSquare, title: "Automated Follow-up", desc: "Triggering personalized email sequences or WhatsApp messages the second a lead is captured to maximize response rates." },
              { icon: Briefcase, title: "Sales Handoff", desc: "Equipping your sales team with context-rich notifications so they can prioritize closing rather than prospecting." },
              { icon: LineChart, title: "Analytics", desc: "Connecting full-funnel data into unified dashboards to measure exact cost per acquisition and revenue impact." }
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
              We provide the specialized expertise required at every stage of the funnel, operating as an extension of your growth team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Search className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise & Technical SEO</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We build scalable programmatic SEO architectures and resolve complex technical indexing issues to dominate organic search results and capture high-intent traffic.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Generative Engine Optimization (GEO) preparation.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Programmatic content systems and site architecture.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Advanced schema markup and core web vitals optimization.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <LayoutTemplate className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Conversion Rate Optimization</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We design high-converting landing pages and implement rigorous A/B testing to maximize the percentage of visitors who become qualified leads.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Dedicated, intent-matched landing page creation.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Heatmap analysis and user journey friction reduction.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" /> Strategic lead magnet and offer development.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Database className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">CRM & Marketing Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We configure, integrate, and optimize CRM platforms (HubSpot, GoHighLevel) to ensure no lead falls through the cracks and attribution is flawless.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Custom pipeline architecture and lead scoring algorithms.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Automated email and WhatsApp follow-up sequences.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" /> Closed-loop marketing attribution and Looker Studio dashboards.</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">AI Lead Qualification</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Deploy conversational AI agents and automated workflows that instantly evaluate prospects, answer technical questions, and route only qualified opportunities to sales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> 24/7 conversational engagement via web and WhatsApp.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Automated meeting scheduling for qualified prospects.</li>
                <li className="flex items-start text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" /> Instant CRM enrichment using third-party data APIs.</li>
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
            <p className="text-brand-text/70 text-lg">We leverage industry-leading platforms to build scalable, data-driven acquisition engines.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Analytics & Data</h4>
              <p className="text-sm text-brand-text/60">Google Analytics 4, Looker Studio, GTM</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">CRM & Automation</h4>
              <p className="text-sm text-brand-text/60">HubSpot, GoHighLevel, Zapier, Make</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">SEO & Research</h4>
              <p className="text-sm text-brand-text/60">Semrush, Ahrefs, Google Search Console</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Development & AI</h4>
              <p className="text-sm text-brand-text/60">Next.js, Vercel, OpenAI, Cloudflare</p>
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
              <h3 className="text-xl font-bold mb-4">Scalable Growth</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By investing in SEO and compounding organic assets, you build a customer acquisition channel that grows in ROI over time, reducing reliance on expensive paid ads.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Improve Sales Efficiency</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Sales teams stop wasting hours dialing unqualified leads. Automated qualification ensures reps only speak with prospects who have budget, authority, and immediate intent.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Faster Response Times</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Lead conversion drops exponentially after 5 minutes. Automated workflows and AI agents engage prospects instantly, dramatically increasing your speed-to-lead and win rates.
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
              <p className="text-lg text-brand-text/70">Real numbers from real lead generation systems.</p>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple group-hover:text-white">Insurance Conglomerate UAE</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Increasing organic visibility and qualified enquiries</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Enterprise SEO, technical optimization, and content strategy that improved visibility, traffic, and qualified customer acquisition across the GCC.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Organic Revenue</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">$1M+</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Organic Clicks</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">100k+</span>
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
            <p className="text-brand-text/70 text-lg">Lead generation strategies tailored for complex B2B and high-value B2C environments.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Professional Services', 'Finance', 'Real Estate', 'Healthcare', 'SaaS', 'Technology', 'Manufacturing', 'Construction', 'Education', 'Hospitality', 'Insurance', 'Enterprise'].map((ind) => (
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Automation Advantage</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Customer acquisition requires speed and personalization. Organizations that automate follow-ups and implement robust CRM tracking are rapidly capturing market share from slower competitors.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                By integrating SEO, conversion optimization, and automated qualification, companies unlock unprecedented levels of pipeline predictability.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">391%</p>
                <p className="text-white/80">Increase in conversion rates when leads are contacted within one minute.</p>
                <p className="text-xs text-white/40 mt-2">Source: Velocify</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">78%</p>
                <p className="text-white/80">Of B2B buyers purchase from the vendor that responds first.</p>
                <p className="text-xs text-white/40 mt-2">Source: Lead Connect</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">68%</p>
                <p className="text-white/80">Of companies have not identified their sales funnel.</p>
                <p className="text-xs text-white/40 mt-2">Source: HubSpot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common Mistakes in Lead Generation</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Generating a lead is easy. Generating a qualified lead that actually closes requires a system. Here is why campaigns fail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Focusing Only on Traffic</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Driving 10,000 visitors to a poorly designed page yields zero results. We ensure your conversion architecture (CRO) is optimized before scaling traffic via SEO or ads.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Slow Follow-Up Times</h3>
              <p className="text-brand-text/70 leading-relaxed">
                If a lead submits a form on Friday night and hears back on Monday morning, they have already gone to a competitor. We implement automated sequences for instant engagement.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">No Attribution Tracking</h3>
              <p className="text-brand-text/70 leading-relaxed">
                "Half the money I spend on advertising is wasted; the trouble is I don't know which half." We integrate CRMs and analytics so you know exactly which keywords generate revenue.
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
            <p className="text-brand-text/70">Expert answers to common questions about lead generation systems and SEO.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What is a lead generation system?",
                a: "A lead generation system is an integrated architecture designed to attract traffic, capture contact information, qualify prospects, and route them to sales teams automatically. It connects marketing channels (SEO, Ads) with conversion assets (landing pages, forms) and backend operations (CRM, automated email sequences) to ensure a predictable flow of revenue."
              },
              {
                q: "How long does SEO take to generate leads?",
                a: "SEO is a long-term compounding strategy. While technical fixes and indexation improvements can show results in weeks, significant organic growth typically takes 3 to 6 months, depending on industry competitiveness, current website authority, and content velocity."
              },
              {
                q: "Do I need paid ads or just SEO?",
                a: "Both have distinct roles. Paid ads (Google Ads, Meta) offer immediate visibility and are excellent for testing messaging and capturing short-term demand. SEO is a long-term asset that reduces your blended Cost Per Acquisition (CPA) over time. We often recommend a hybrid approach: Ads for immediate leads while the SEO strategy matures."
              },
              {
                q: "What is GEO (Generative Engine Optimization)?",
                a: "GEO is the evolution of SEO. As search engines like Google incorporate AI (AI Overviews) and users adopt tools like ChatGPT and Perplexity, businesses must optimize their content to be referenced by these AI models. This requires a focus on factual accuracy, unique insights, direct answers, and strong EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness)."
              },
              {
                q: "Can AI really qualify leads effectively?",
                a: "Yes. We deploy conversational AI agents that engage visitors instantly, ask qualifying questions (e.g., budget, timeline, company size), and intelligently route qualified leads to sales while disqualifying poor fits. This saves your human sales team hundreds of hours."
              },
              {
                q: "How much does a lead generation system cost?",
                a: "Costs vary based on scope. A foundational setup (landing page, basic CRM integration, standard SEO setup) requires a moderate investment. A comprehensive enterprise system (custom programmatic SEO architecture, advanced Hubspot workflows, AI conversational agents) requires a more significant investment. We focus strictly on ROI—ensuring the system generates more revenue than it costs."
              },
              {
                q: "Which CRM is best for my business?",
                a: "There is no universal 'best' CRM, only the best CRM for your specific processes. We frequently implement HubSpot for comprehensive inbound marketing and B2B sales, GoHighLevel for agencies and high-volume local service businesses, and Salesforce for complex enterprise environments."
              },
              {
                q: "How do I track ROI from marketing efforts?",
                a: "We implement closed-loop reporting by connecting your website analytics (GA4), ad platforms, and CRM. When a deal is marked as 'Closed Won' in HubSpot, you will be able to see exactly which Google Search keyword, blog post, or ad campaign originally generated that specific customer."
              },
              {
                q: "Can you integrate HubSpot with our existing tools?",
                a: "Yes. We specialize in deep CRM integrations, utilizing native APIs, Zapier, or Make to connect HubSpot with your ERPs, accounting software, custom databases, and communication tools (Slack, Teams)."
              },
              {
                q: "Can you integrate Salesforce?",
                a: "Yes. We work with enterprise clients to optimize Salesforce implementations, build custom objects, automate complex routing workflows, and ensure seamless data flow between marketing front-ends and the Salesforce backend."
              },
              {
                q: "Can AI answer customer enquiries?",
                a: "Yes. Using RAG (Retrieval-Augmented Generation) architectures, we train AI agents exclusively on your company's documentation and knowledge base. They can answer pre-sales questions accurately and instantly 24/7."
              },
              {
                q: "Do I really need dedicated landing pages?",
                a: "Yes. Driving paid or high-intent organic traffic to a generic homepage is the number one reason campaigns fail. Dedicated landing pages match the specific intent of the user's search, remove distracting navigation, and focus entirely on a single call-to-action (CTA), drastically improving conversion rates."
              },
              {
                q: "How do you improve conversion rates (CRO)?",
                a: "We rely on data, not guesses. We implement heatmap tracking (Hotjar, Microsoft Clarity), analyze user session recordings to find friction points, improve page load speeds, clarify copywriting, and run continuous A/B tests on forms and CTAs to iteratively increase conversions."
              },
              {
                q: "What industries do you work with?",
                a: "We build systems for complex B2B and high-value B2C environments. Our deepest expertise is in Real Estate, Insurance, Professional Services, Healthcare, SaaS, and Technology—industries where a single qualified lead represents significant revenue and the sales cycle requires careful nurturing."
              },
              {
                q: "Can you work with our existing website?",
                a: "Often, yes. If your website is built on a modern, flexible stack (like Next.js, WordPress, or Webflow), we can optimize the existing infrastructure. However, if the site is fundamentally broken, extremely slow, or impossible to optimize for technical SEO, we will recommend a rebuild."
              },
              {
                q: "How do you measure success?",
                a: "We do not measure success by vanity metrics like 'impressions' or 'likes'. We measure success by Sales Qualified Leads (SQLs), Cost Per Acquisition (CPA), pipeline velocity, and ultimately, closed revenue attributed to the systems we build."
              },
              {
                q: "How long does implementation take?",
                a: "A standard CRM implementation and foundational SEO strategy can be deployed in 4 to 6 weeks. A highly complex system involving programmatic SEO, custom AI agents, and deep enterprise CRM integrations may take 3 to 4 months of phased rollout."
              },
              {
                q: "Can you automate WhatsApp for lead generation?",
                a: "Yes. In markets where WhatsApp is the primary communication tool (like the UAE and broader GCC), we build automated WhatsApp flows that capture leads directly from Meta Ads, qualify them conversationally, and instantly sync the data to your CRM."
              },
              {
                q: "Can you integrate with Google Ads?",
                a: "Yes. We ensure that Google Ads data flows directly into your CRM and analytics dashboards. More importantly, we optimize your landing pages (CRO) to ensure that expensive Google Ads traffic actually converts."
              },
              {
                q: "Can you improve our existing SEO?",
                a: "Yes. We begin with a comprehensive technical and content audit. We fix indexation errors, resolve core web vital issues, optimize existing underperforming content, implement proper schema markup, and design a content strategy to capture broader search real estate."
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
              <p className="text-brand-text/70 text-lg">Deep dives into lead generation, SEO, and business automation.</p>
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
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">How to Scale Business Operations with AI Automation</h3>
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
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Building SEO Lead Generation Systems That Actually Convert</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">How to combine organic search visibility with rigorous conversion rate optimization to build predictable revenue pipelines.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>May 22, 2026</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>

            <Link to="/services/ai-automation" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-lime/10 text-brand-lime group-hover:bg-white/20 group-hover:text-white transition-all">
                Service
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">AI Business Automation</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Deploy custom AI Business Automation systems that eliminate manual work, accelerate decision-making, and increase profitability.</p>
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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">Build a Lead Generation System That Never Stops Working</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to increase organic traffic, improve conversion rates, automate lead qualification, or build a complete customer acquisition system, Madlabs Digital helps businesses create scalable lead generation engines designed for long-term growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto">
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto">
                Book Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
