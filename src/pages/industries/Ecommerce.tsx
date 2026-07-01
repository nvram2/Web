import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight, Bot, Database, Zap, FileText, CheckCircle2, LayoutDashboard, BrainCircuit, Users, Building, ShieldCheck, Mail, LineChart, Code2, Link as LinkIcon, Laptop, Rocket, Globe, ShoppingCart, ShoppingBag, DollarSign, Store, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Ecommerce() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ecommerce Development & AI Solutions | Madlabs Digital</title>
        <meta name="description" content="Digital commerce solutions that increase sales and customer loyalty. Expert ecommerce development, Shopify, headless commerce, and AI automation." />
        <meta name="keywords" content="Ecommerce Development, Ecommerce Website Development, Shopify Development, WooCommerce Development, AI for Ecommerce, Ecommerce Automation, Ecommerce CRM, Headless Commerce, Ecommerce SEO, Conversion Rate Optimization, Ecommerce Consulting, Custom Ecommerce Development" />
        <link rel="canonical" href="https://madlabs.digital/industries/ecommerce" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ecommerce Development & AI Solutions | Madlabs Digital" />
        <meta property="og:description" content="Digital commerce solutions that increase sales and customer loyalty. Expert ecommerce development, Shopify, headless commerce, and AI automation." />
        <meta property="og:url" content="https://madlabs.digital/industries/ecommerce" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ecommerce Development & AI Solutions | Madlabs Digital" />
        <meta name="twitter:description" content="Digital commerce solutions that increase sales and customer loyalty. Expert ecommerce development, Shopify, headless commerce, and AI automation." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Ecommerce Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for ecommerce, offering custom storefronts, headless commerce, AI automation, and conversion rate optimization.",
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
                "name": "Ecommerce"
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
                  "name": "Should I choose Shopify or WooCommerce?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The choice depends on your specific needs. Shopify is excellent for ease of use, managed hosting, and a robust app ecosystem. WooCommerce, built on WordPress, offers more flexibility, customization, and ownership, especially if you have complex product structures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you build headless ecommerce websites?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in headless commerce. By decoupling the frontend (e.g., using Next.js) from the backend (Shopify, BigCommerce), we deliver lightning-fast performance, superior SEO, and highly customized shopping experiences."
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
              Ecommerce Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Ecommerce Solutions That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Increase Sales & Loyalty.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Successful ecommerce businesses combine outstanding customer experiences with high-performance technology. Madlabs Digital helps brands build faster stores, improve conversion rates, automate operations, integrate AI, and create personalized shopping experiences that drive sustainable growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Grow Your Online Store <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Ecommerce Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">210%</div>
                <div className="text-sm font-medium text-white/60">Checkout Conversion Inc.</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-sm font-medium text-white/60">CAC Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$50K+</div>
                <div className="text-sm font-medium text-white/60">Additional Monthly Revenue</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-sm font-medium text-white/60">Faster Website Performance</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Ecommerce Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Ecommerce brands are squeezed by rising advertising costs and increasingly high customer expectations. Poor mobile experiences, slow website performance, and weak SEO contribute directly to cart abandonment and low conversion rates.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Behind the scenes, manual operations, disconnected systems, and lack of real-time inventory visibility drain resources. Without personalized experiences, brands suffer from poor customer retention and low repeat purchases.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Modern ecommerce success depends entirely on delivering exceptional customer experiences across every digital touchpoint, backed by intelligent automation and seamless operations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SYSTEMS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Ecommerce Stores Fall Short</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Ecommerce platforms should be built for scalable growth, not simply for displaying products. Here is why basic templates fail to convert.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Template Stores & Slow Performance</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Basic template websites often suffer from bloat and slow load times. A delay of just a few seconds dramatically increases bounce rates and ruins SEO rankings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Weak Checkout & Poor Discovery</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    A frictionless checkout experience is mandatory. Complex, multi-step checkouts and poor product discovery mechanisms lead to massive cart abandonment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> No Personalization or Automation</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Stores without AI, automation, or connected CRMs treat every visitor identically. They fail to nurture leads, leverage analytics, or drive repeat purchases effectively.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">How to Build for Growth</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Rocket className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Headless Performance</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Decouple your frontend to deliver instant page loads and superior Core Web Vitals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <BrainCircuit className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI Personalization</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Implement smart product recommendations and AI search to increase Average Order Value.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Integrated Analytics & CRM</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Connect your store to powerful marketing automation to nurture customers post-purchase.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Ecommerce Growth Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic roadmap designed to optimize the customer journey, integrate advanced technologies, and scale revenue sustainably.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Business Discovery", desc: "Analyzing current performance, operational bottlenecks, and business objectives." },
              { num: "02", title: "Customer Research", desc: "Understanding buyer behavior, target demographics, and purchase friction." },
              { num: "03", title: "Store Strategy", desc: "Defining the technology stack, platform choice, and overarching commerce strategy." },
              { num: "04", title: "UX Optimization", desc: "Designing intuitive navigation, product discovery, and high-converting checkouts." },
              { num: "05", title: "Development", desc: "Building secure, fast, and scalable storefronts using modern frameworks." },
              { num: "06", title: "AI Integration", desc: "Deploying product recommendation engines and smart search capabilities." },
              { num: "07", title: "CRM & Automation", desc: "Connecting marketing tools like Klaviyo and HubSpot for lifecycle marketing." },
              { num: "08", title: "Analytics", desc: "Setting up GA4, Tag Manager, and custom dashboards for precise tracking." },
              { num: "09", title: "Optimization", desc: "Continuous A/B testing and Conversion Rate Optimization (CRO) post-launch." },
              { num: "10", title: "Scale", desc: "Expanding to new markets, integrating enterprise ERPs, and accelerating growth." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Ecommerce Businesses</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              End-to-end commerce solutions engineered to deliver frictionless shopping experiences and robust back-office operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: "Platform Development", desc: "Build scalable stores on leading platforms. From robust Shopify setups to fully custom headless commerce architectures.", features: ["Shopify Development", "WooCommerce Development", "Headless Commerce", "Custom Platforms"] },
              { icon: TrendingUp, title: "Conversion Optimization", desc: "Eliminate friction to turn visitors into buyers. We optimize the entire funnel from discovery to checkout.", features: ["Checkout Optimization", "Conversion Rate Optimization", "Store Redesign"] },
              { icon: BrainCircuit, title: "AI & Personalization", desc: "Deploy intelligent systems that understand customer preferences to drive higher average order values.", features: ["Product Recommendations", "AI Shopping Assistants", "Customer Portals"] },
              { icon: Database, title: "Operations & Integration", desc: "Streamline your back-office by connecting inventory, orders, and payments into a unified system.", features: ["Inventory Dashboards", "Order Management", "Payment Gateways", "API Development"] },
              { icon: Target, title: "Marketing & CRM", desc: "Automate retention strategies. Nurture leads, recover abandoned carts, and build lasting loyalty.", features: ["Marketing Automation", "Email Automation", "Loyalty Programs", "WhatsApp Commerce"] },
              { icon: LineChart, title: "Growth & Analytics", desc: "Make data-driven decisions with advanced tracking and robust search engine optimization strategies.", features: ["SEO", "Technical SEO", "Analytics Dashboards", "Marketplace Integrations"] }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Ecommerce</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Strategic capabilities required to build a competitive, high-growth digital retail brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build ultra-fast, mobile-first storefronts. Headless architecture ensures your store loads instantly and converts efficiently.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. Lead Generation & SEO</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Drive high-intent organic traffic to product and category pages through robust technical SEO and content strategies.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Lead Generation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Automate inventory syncing, order processing, and deploy AI chatbots to handle Tier 1 customer support 24/7.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Connect your store to powerful marketing CRMs like Klaviyo or HubSpot for abandoned cart recovery and personalized lifecycle emails.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic guidance on replatforming, selecting the right technology stack, and comprehensive conversion rate optimization (CRO) audits.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                For complex B2B commerce, custom subscription models, and bespoke multi-vendor marketplace applications.
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
            <h2 className="text-3xl font-bold mb-4">The Ecommerce Technology Stack</h2>
            <p className="text-brand-text/70 text-lg">We leverage industry-leading platforms and frameworks to build resilient, high-performance retail experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Platforms & CMS</h4>
              <p className="text-sm text-brand-text/60">Shopify, WooCommerce, Sanity CMS, Contentful</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Headless & Frontend</h4>
              <p className="text-sm text-brand-text/60">Next.js, React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & Payments</h4>
              <p className="text-sm text-brand-text/60">Node.js, Supabase, Firebase, Stripe, PayPal</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Ops & Marketing</h4>
              <p className="text-sm text-brand-text/60">Klaviyo, HubSpot, GA4, Vercel, Cloudflare, OpenAI</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.5: THE MODERN SHOPPING JOURNEY */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Shopping Journey</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                We optimize every digital touchpoint to guide users effortlessly from initial search to loyal customer.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">SEO & Product Discovery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Frictionless Cart & Checkout</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">AI Personalized Recommendations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Automated Post-Purchase Nurturing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Conversion Pipeline</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Discovery → Conversion → Fulfillment → Loyalty</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Phase 1: Acquisition</p>
                  <p className="text-xs text-brand-text/70">Google Search, Category Pages, and rich Product Pages optimize discovery and capture intent.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Phase 2: Conversion</p>
                  <p className="text-xs text-brand-text/70">AI Recommendations, responsive Cart design, and accelerated Checkout maximize successful orders.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Phase 3: Retention</p>
                  <p className="text-xs text-brand-text/70">Order Confirmation, targeted Post-Purchase emails, and Loyalty programs drive repeat purchases.</p>
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
              <h3 className="text-xl font-bold mb-4">Higher Conversion Rates</h3>
              <p className="text-brand-text/70 leading-relaxed">
                By improving the mobile experience, accelerating page load speeds, and optimizing the checkout flow, we drastically lower cart abandonment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Improved Customer Retention</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Personalized shopping experiences and targeted post-purchase marketing flows increase average order value and transform one-time buyers into loyal advocates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Infrastructure</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Automated operations, actionable business insights, and headless architectures ensure your technology effortlessly handles peak traffic events and sales spikes.
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
              <p className="text-lg text-brand-text/70">Real results driving conversion optimization, automation, and platform modernization.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/d2c-shoe-brand" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">D2C Shoe Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Conversion Optimization</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Redesigned the mobile checkout experience and implemented personalized product recommendations, dramatically reducing cart abandonment.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Mobile Conversion</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+130%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Cart Abandonment</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">-35%</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Global Clothing Brand</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Headless Platform Modernization</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Rebuilt a slow, legacy monolithic store into a lightning-fast headless ecommerce platform using Next.js and Shopify Plus.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Page Load Speed</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">3x Faster</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Organic Traffic</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">+50%</span>
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
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">Luxury B2B Retail</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Automation & Customer Experience</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Integrated complex inventory management systems and deployed CRM automation for high-touch customer lifecycle marketing.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Order Processing</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">-40% Time</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Repeat Purchases</span>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions by Ecommerce Business Type</h2>
            <p className="text-brand-text/70 text-lg">We adapt our technical strategies to solve the specific operational and growth challenges of your retail niche.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Fashion & Apparel</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: High return rates, complex variant management.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: AI Sizing Guides, Headless Performance</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Beauty & Cosmetics</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Customer loyalty, personalized product discovery.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Subscription Models, AI Recommendations</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Consumer Electronics</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Deep technical specifications, competitive pricing.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Advanced Search, Product Comparison Tools</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Luxury Retail</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Delivering premium digital experiences, brand protection.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Bespoke UI Design, High-Touch Concierge Services</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Subscription Commerce</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Churn management, recurring payment failures.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Customer Portals, Automated Dunning Flows</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">B2B & Wholesale</h3>
               <p className="text-sm text-brand-text/70 mb-4">Challenges: Custom pricing tiers, bulk ordering complexities.</p>
               <p className="text-xs font-semibold text-brand-purple">Priorities: Custom Portals, ERP Integrations, Account Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10.5: AI IN ECOMMERCE */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI in Ecommerce</h2>
            <p className="text-brand-text/70 text-lg">Practical applications of artificial intelligence that directly improve customer experiences and business performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Bot className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Product Recommendations</h3>
                <p className="text-brand-text/70 text-sm">Analyze user behavior in real-time to suggest highly relevant cross-sells and upsells, driving higher average order value.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <FileText className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Customer Support</h3>
                <p className="text-brand-text/70 text-sm">Deploy intelligent chatbots that instantly resolve order tracking queries and basic product questions, reducing ticket volume.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <LineChart className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Smart Search</h3>
                <p className="text-brand-text/70 text-sm">Implement semantic search engines that understand natural language queries, typos, and intent, improving product discovery.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <BrainCircuit className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Inventory Forecasting</h3>
                <p className="text-brand-text/70 text-sm">Utilize predictive AI models to analyze sales velocity and seasonal trends, optimizing stock levels and preventing stockouts.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Mail className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Personalization</h3>
                <p className="text-brand-text/70 text-sm">Generate hyper-personalized marketing copy and automated email flows tailored to specific customer segments dynamically.</p>
             </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Users className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Review Analysis</h3>
                <p className="text-brand-text/70 text-sm">Automatically parse thousands of customer reviews to identify product defects, common complaints, and overall sentiment.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">The Ecommerce Reality</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Consumer expectations are at an all-time high. Shoppers demand instant performance, personalized recommendations, and frictionless checkouts. Brands that fail to deliver lose revenue directly to competitors.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We focus intensely on conversion optimization, mobile experiences, and advanced AI adoption to ensure your store captures every possible sale.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">70%</p>
                <p className="text-white/80">Average documented online shopping cart abandonment rate across all industries.</p>
                <p className="text-xs text-white/40 mt-2">Source: Baymard Institute</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">71%</p>
                <p className="text-white/80">Of consumers expect companies to deliver personalized interactions, and 76% get frustrated when this doesn't happen.</p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">53%</p>
                <p className="text-white/80">Of mobile site visits are abandoned if pages take longer than 3 seconds to load.</p>
                <p className="text-xs text-white/40 mt-2">Source: Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Critical Mistakes to Avoid</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We frequently audit ecommerce stores suffering from the exact same conversion-killing errors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Slow Loading Speeds</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Bloated templates and unoptimized images destroy conversion rates. We implement modern headless frameworks to ensure near-instant page loads.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Complex Checkouts</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Forcing users to create accounts or navigate through multiple confusing steps causes massive cart abandonment. We design seamless, one-click checkout flows.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ignoring Post-Purchase</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Acquiring a customer is expensive. Ignoring them after they buy is a fatal mistake. We integrate powerful CRMs to automate retention and loyalty programs.
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
            <p className="text-brand-text/70">Expert answers to common questions about ecommerce technology and growth.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Should I choose Shopify or WooCommerce?",
                a: "The choice depends on your specific needs. Shopify is excellent for ease of use, managed hosting, and a robust app ecosystem. WooCommerce, built on WordPress, offers more flexibility, customization, and ownership, especially if you have complex product structures."
              },
              {
                q: "Can you build headless ecommerce websites?",
                a: "Yes, we specialize in headless commerce. By decoupling the frontend (e.g., using Next.js) from the backend (Shopify, BigCommerce), we deliver lightning-fast performance, superior SEO, and highly customized shopping experiences."
              },
              {
                q: "Can AI recommend products?",
                a: "Absolutely. We integrate AI-powered recommendation engines that analyze user behavior, past purchases, and browsing history to display highly relevant product suggestions, increasing Average Order Value."
              },
              {
                q: "Can you improve checkout conversion?",
                a: "Yes. Checkout optimization is a core service. We analyze drop-off points, simplify forms, integrate digital wallets (Apple Pay, Google Pay), and remove friction to ensure more users complete their purchases."
              },
              {
                q: "Can you reduce cart abandonment?",
                a: "Yes, through a combination of UX improvements (faster speeds, clear pricing, trust signals) and automated CRM integrations (abandoned cart email and SMS sequences via tools like Klaviyo)."
              },
              {
                q: "Can you integrate payment gateways?",
                a: "Yes. We integrate all major payment gateways including Stripe, PayPal, Authorize.Net, and regional providers, ensuring secure, compliant, and localized payment options for your customers."
              },
              {
                q: "Can you build subscription platforms?",
                a: "Yes. We build robust recurring billing and subscription commerce platforms, handling complex dunning management, customer portals for subscription modification, and seamless billing integrations."
              },
              {
                q: "Can you automate customer support?",
                a: "Yes. We deploy AI-driven chatbots and automated helpdesk workflows that can instantly handle common inquiries like order tracking, return policies, and basic product questions."
              },
              {
                q: "Can you integrate ERP systems?",
                a: "Yes. For enterprise and B2B clients, we build custom API middleware to connect your storefront with ERP systems (like NetSuite or SAP) to ensure real-time inventory, pricing, and order synchronization."
              },
              {
                q: "Can you migrate my existing store?",
                a: "Yes. We offer seamless platform migrations (e.g., Magento to Shopify, WooCommerce to Headless). We ensure all product data, customer records, and SEO rankings are carefully preserved during the transition."
              },
              {
                q: "Can you improve SEO?",
                a: "Yes. We conduct comprehensive technical SEO audits, optimize site architecture, improve Core Web Vitals (speed), and implement schema markup to ensure your products rank highly in search engine results."
              },
              {
                q: "Can you integrate Klaviyo?",
                a: "Yes, Klaviyo is our preferred marketing automation tool for ecommerce. We integrate it deeply to set up advanced segmentation, personalized flows, and revenue-driving email/SMS campaigns."
              },
              {
                q: "Can you connect HubSpot?",
                a: "Yes. We integrate HubSpot for sophisticated B2B ecommerce operations, allowing for robust lead scoring, sales pipeline management, and omnichannel customer service."
              },
              {
                q: "Can you improve page speed?",
                a: "Yes. Page speed is critical for conversion. We optimize assets, implement advanced caching, leverage CDNs, and frequently utilize headless frameworks like Next.js to achieve sub-second load times."
              },
              {
                q: "Can you build multilingual stores?",
                a: "Yes. We engineer internationalized storefronts supporting multiple languages, currencies, and localized tax/shipping rules to help your brand expand globally."
              },
              {
                q: "Do you provide maintenance?",
                a: "Yes. We offer ongoing Service Level Agreements (SLAs) for security updates, performance monitoring, continuous Conversion Rate Optimization (CRO), and feature enhancements."
              },
              {
                q: "Can you integrate inventory systems?",
                a: "Yes. We connect ecommerce platforms with third-party logistics (3PL) providers, warehouse management systems, and centralized inventory databases to prevent overselling."
              },
              {
                q: "Can you build marketplaces?",
                a: "Yes. We develop multi-vendor marketplace platforms with complex vendor dashboards, commission splitting, and robust product catalog management."
              },
              {
                q: "Who owns the code?",
                a: "You do. Upon project completion and final payment, all intellectual property, source code, and design assets are fully transferred to your brand."
              },
              {
                q: "How do we get started?",
                a: "Contact us to schedule an initial Ecommerce Strategy Call. We will discuss your current store performance, business goals, and technical requirements before proposing a tailored roadmap."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-brand-grey rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-bold flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  {faq.q}
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Related Insights & Resources</h2>
              <p className="text-brand-text/70 text-lg">Deep dives into growth, AI, and technical strategy.</p>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-purple/10 text-brand-purple group-hover:bg-white/20 group-hover:text-white transition-all">
                Guide
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Technical SEO Audit Checklist</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">A comprehensive guide to fixing the technical issues that are killing your store's organic search rankings.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Blog</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>
            
            <Link to="/blog" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-blue/10 text-brand-blue group-hover:bg-white/20 group-hover:text-white transition-all">
                Lead Generation
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Building SEO Lead Generation Systems That Actually Convert</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">How to structure your content and category pages to capture high-intent buyers.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                 <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Blog</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-brand-text group-hover:text-brand-lime transition-all" />
              </div>
            </Link>

            <Link to="/blog" className="group flex flex-col h-full bg-brand-bg rounded-[2rem] p-8 hover:bg-[#111] hover:text-white transition-all duration-300 border border-brand-grey hover:border-transparent">
              <div className="self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 bg-brand-lime/10 text-brand-lime group-hover:bg-white/20 group-hover:text-white transition-all">
                Automation
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">How to Scale Business Operations with AI Automation</h3>
              <p className="text-brand-text/70 group-hover:text-white/80 mb-8 flex-grow transition-colors">Eliminate back-office bottlenecks and streamline your fulfillment process using intelligent automation.</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-grey group-hover:border-white/10">
                 <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-brand-text/50 group-hover:text-white/50">
                  <span>Explore Blog</span>
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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">Build an Ecommerce Business That Continues to Grow</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're launching a new online store, modernizing an ecommerce platform, improving conversion rates, integrating AI, or scaling a global retail brand, Madlabs Digital helps ecommerce businesses build exceptional digital shopping experiences that increase revenue and customer loyalty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-brand-lime text-black hover:bg-brand-lime/90 text-lg px-8 py-6 h-auto">
                Grow Your Online Store
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto">
                Book Ecommerce Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
