import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const caseStudiesData = {
  "uae-insurance": {
    client: "UAE Insurance",
    title: "Scaling organic traffic and lead generation",
    challenge: "Increase organic traffic and lead generation in highly competitive GCC markets without relying purely on paid ads.",
    strategy: "We audited the entire digital footprint, uncovering critical technical SEO bottlenecks and content gaps. We then built a comprehensive search engine optimization strategy heavily focused on local GCC search intent, structured data, and high-quality informative content.",
    implementation: "Our team optimized over 200 landing pages, implemented dynamic schema markups, completely rebuilt the site architecture for better crawlability, and launched an expansive content marketing campaign targeted at high-intent insurance keywords.",
    results: [
      { metric: "$1M+", label: "Organic Revenue Generated" },
      { metric: "100k+", label: "Additional Organic Clicks" },
      { metric: "3x", label: "Growth in Core Markets" },
    ],
    technology: ["Next.js", "Contentful CMS", "Ahrefs & Semrush Data SDKs", "Google Analytics 4"],
    color: "from-brand-purple/20 to-brand-bg",
    testimonial: "Madlabs fundamentally transformed how we look at digital growth. Their systems generated predictable revenue we previously thought impossible through organic channels."
  },
  "web3-gaming": {
    client: "Web 3 Gaming Platform",
    title: "Scaling a blockchain gaming ecosystem",
    challenge: "Scale user base and create sustainable tokenomics for a Web3 gaming ecosystem during a highly volatile market cycle.",
    strategy: "Acted as fractional product leaders. We designed a closed-loop economy that rewarded long-term player engagement rather than short-term speculation. Supported this by completely rebuilding the onboarding funnel to reduce friction for non-crypto users.",
    implementation: "Developed a robust marketplace, optimized the token launch sequence, integrated social logins paired with native wallet generation, and launched a gamified referral system that drove massive viral growth.",
    results: [
      { metric: "700k+", label: "Active Users" },
      { metric: "2x", label: "Revenue Growth" },
      { metric: "70%", label: "User Retention" },
    ],
    technology: ["React", "Solidity", "Polygon Network", "Node.js Custom Backend", "Mixpanel Analytics"],
    color: "from-brand-blue/20 to-brand-bg",
    testimonial: "The product leadership provided by Kevin and his team was instrumental. They didn't just write code; they built the economic models that made our game highly scalable."
  },
  "d2c-shoe-brand": {
    client: "D2C Shoe Brand",
    title: "Scaling e-commerce conversions and retention",
    challenge: "High cart abandonment rates and escalating customer acquisition costs (CAC) were eating into the brand's margins, slowing down their international expansion.",
    strategy: "We shifted focus from purely acquiring new traffic to maximizing the value of existing traffic. We proposed a complete redesign of the checkout funnel to remove friction and implemented an AI-driven email retention strategy.",
    implementation: "Deployed predictive AI models to recommend products based on browsing behavior. Re-architected the Shopify checkout flow for single-page performance and set up highly segmented Klaviyo flows for abandoned carts and post-purchase upselling.",
    results: [
      { metric: "210%", label: "Increase in Checkout Conversion" },
      { metric: "40%", label: "Reduction in CAC" },
      { metric: "$1.5M", label: "Additional Monthly Revenue" }
    ],
    technology: ["Shopify Plus", "Klaviyo", "Predictive AI Models", "React"],
    color: "from-brand-blue/20 to-brand-bg",
    testimonial: "The changes to our retention flows and abandoned cart sequences alone generated an ROI we didn't expect to see for over a year. Incredible strategic execution."
  },
  "uae-real-estate": {
    client: "Top UAE Real Estate Agency",
    title: "10x growth in qualified leads for luxury off-plan properties",
    challenge: "The agency was spending over $50k monthly on paid ads but receiving low-intent, unqualified leads for luxury properties, resulting in low conversion rates and wasted sales time.",
    strategy: "We moved their reliance away from simple Facebook lead forms to a fully integrated, SEO-optimized properties portal acting as a high-authority magnet for international investors.",
    implementation: "Developed a custom property browsing portal with multi-lingual SEO architecture (English, Arabic, Russian). We integrated a custom AI-driven WhatsApp chatbot connected directly to HubSpot to instantly qualify and route leads to the correct agents based on language and budget.",
    results: [
      { metric: "10x", label: "Increase in Qualified Leads" },
      { metric: "35%", label: "Lower Cost Per Lead" },
      { metric: "$45M+", label: "In Attributed Sales" }
    ],
    technology: ["Next.js", "HubSpot CRM", "WhatsApp Business API", "OpenAI API", "Vercel"],
    color: "from-brand-lime/20 to-brand-bg",
    testimonial: "Our agents finally have high-quality leads. The automated WhatsApp qualification system completely changed how we handle international investors."
  },
  "ecommerce-clothing": {
    client: "Global Clothing Brand",
    title: "Scaling headless e-commerce architecture",
    challenge: "The brand's legacy monolithic e-commerce platform crashed consistently during major inventory drops. Furthermore, technical SEO limitations were artificially capping their organic traffic growth for highly competitive apparel keywords.",
    strategy: "We architected a transition to a composable, headless commerce model. By decoupling the frontend from the Shopify backend, we could strictly control cache invalidation, edge rendering, and SEO metadata at a granular level.",
    implementation: "Built a high-performance Next.js storefront deployed to Vercel. We integrated a robust Headless CMS (Sanity) for dynamic merchandising, optimized the checkout flow to reduce friction, and implemented structured schema for all products.",
    results: [
      { metric: "150%", label: "Increase in Mobile Conversions" },
      { metric: "3x", label: "Faster Page Loads" },
      { metric: "$2M+", label: "Lift in Annual Revenue" }
    ],
    technology: ["Next.js", "Shopify Storefront API", "Sanity CMS", "Vercel SDKs"],
    color: "from-brand-lime/20 to-brand-bg",
    testimonial: "Madlabs gave us an infrastructure that actually supports our growth ambitions. Dropping new collections is no longer stressful; the platform handles the traffic flawlessly."
  },
  "ai-support-automation": {
    client: "Enterprise SaaS Provider",
    title: "Automating Tier 1 support tickets with AI",
    challenge: "As the company's user base scaled past 100,000, the support team became bottlenecked by repetitive password resets and standard configuration queries. Response times dropped drastically, negatively impacting user retention.",
    strategy: "We audited the previous year of support tickets to identify the highest volume, lowest complexity queries. We then proposed a dual-layer AI strategy: an internal copilot to draft responses for agents, and a user-facing chatbot to intercept queries before they become tickets.",
    implementation: "Engineered a Retrieval-Augmented Generation (RAG) system utilizing OpenAI's LLMs. We vectorized their entire knowledge base and Zendesk history, deploying a custom conversational interface that securely context-switched based on user permissions.",
    results: [
      { metric: "65%", label: "Reduction in Support Volume" },
      { metric: "< 2s", label: "Average Response Time" },
      { metric: "$300k", label: "Annual Cost Savings" }
    ],
    technology: ["React", "Python/FastAPI", "OpenAI API", "Pinecone Vector DB", "Zendesk Integration"],
    color: "from-brand-purple/20 to-brand-bg",
    testimonial: "The AI implementation paid for itself within the first quarter. Our support engineers are happier and finally have the time to help clients with complex, high-value strategic onboarding."
  }
};

export default function CaseStudyItem() {
  const { slug } = useParams();
  const study = slug ? caseStudiesData[slug as keyof typeof caseStudiesData] : null;

  if (!study) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <Link to="/case-studies">
          <Button>Back to Case Studies</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{study.title} | {study.client} Case Study</title>
        <meta name="description" content={study.challenge} />
        <meta name="keywords" content={`${study.client} Case Study, ${study.technology.join(', ')}`} />
        <meta property="og:title" content={`${study.title} - ${study.client}`} />
        <meta property="og:description" content={study.challenge} />
        <link rel="canonical" href={`https://madlabs.digital/case-studies/${slug}`} />
      </Helmet>

      <div className={`pt-24 pb-32 bg-gradient-to-br ${study.color} border-b border-brand-grey`}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center text-sm font-semibold text-brand-text/60 hover:text-brand-purple mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <h4 className="text-sm font-bold text-brand-text/50 uppercase tracking-widest mb-4">{study.client}</h4>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            {study.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 pt-8">
            <Link to="/contact">
              <Button size="lg" className="shadow-lg">Book similar project <ArrowRight className="ml-2 w-5 h-5"/></Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1 space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-brand-text/80 leading-relaxed">{study.challenge}</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Strategy</h2>
              <p className="text-lg text-brand-text/80 leading-relaxed">{study.strategy}</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Implementation</h2>
              <p className="text-lg text-brand-text/80 leading-relaxed">{study.implementation}</p>
            </section>
            
            <section className="p-8 md:p-12 bg-brand-bg rounded-3xl border border-brand-grey">
              <div className="flex text-brand-lime mb-6">
                {"★★★★★".split("").map((star, i) => <span key={i} className="text-2xl">{star}</span>)}
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                "{study.testimonial}"
              </p>
              <div className="font-bold">{study.client} Team</div>
            </section>
          </div>

          <div className="lg:w-[400px]">
            <div className="bg-[#111] rounded-3xl p-10 text-white sticky top-32">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-10">Real Results</h3>
              <div className="space-y-10 mb-12">
                {study.results.map((res, i) => (
                  <div key={i}>
                    <div className="text-4xl lg:text-5xl font-bold mb-2 text-brand-lime">{res.metric}</div>
                    <div className="text-white/80 font-medium text-sm">{res.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="pt-10 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technology.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
