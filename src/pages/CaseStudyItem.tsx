import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const caseStudiesData = {
   "uae-insurance": {
  client: "UAE Insurance Conglomerate",
  title: "Increasing organic visibility and qualified enquiries",
  challenge: "As a new brand, operating across multiple GCC markets meant competing against established insurers with significant local reach. While paid campaigns consistently generated enquiries, rising acquisition costs and limited organic visibility made long-term growth increasingly expensive. The objective was to improve high-intent organic search performance while generating more qualified enquiries without increasing paid media spend.",
  strategy: "We conducted a comprehensive SEO and digital performance audit covering technical health, search visibility, customer journeys, competitor positioning, and regional search intent. Based on our findings, we developed a phased growth strategy focused on technical improvements, content expansion, localized optimization, and long-term authority building across key insurance products.",
  implementation: "The project included resolving technical SEO issues, improving website architecture, implementing structured data, optimizing more than 200 landing pages, strengthening internal linking, enhancing Core Web Vitals, and executing an ongoing content strategy targeting high-intent insurance searches across multiple GCC markets. Performance dashboards were also introduced to continuously monitor rankings, traffic, enquiries, and commercial impact.",
  results: [
    { metric: "$1M+", label: "Organic Revenue Generated" },
    { metric: "100k+", label: "Additional Organic Clicks" },
    { metric: "3x", label: "Increase in Core Markets" },
  ],
  technology: ["Next.js", "Contentful CMS", "Ahrefs & Semrush Data SDKs", "Google Analytics 4"],
  color: "from-brand-purple/20 to-brand-bg",
  testimonial: "Madlabs became an extension of our digital team. Their structured SEO strategy delivered over 100k organic clicks and over $1M in organic conversions improvements in visibility, qualified enquiries, and commercial performance across multiple GCC markets."
},
  "web3-gaming": {
  client: "Web3 Gaming Platform",
  title: "Developing a sustainable Web3 gaming platform",
  challenge: "The platform had experienced strong initial user growth but faced the common challenge of balancing player incentives with a sustainable token economy. The goal was to improve long-term engagement, increase player retention, and create an ecosystem capable of supporting continued growth without relying on speculative token activity.",
  strategy: "Working closely with leadership, we redefined the product roadmap, analysed player behaviour, redesigned the game economy, and introduced product improvements focused on long-term engagement. Every recommendation balanced player experience with sustainable tokenomics and measurable business objectives.",
  implementation: "The engagement included launching an in-game marketplace, refining token utility, improving onboarding through embedded wallets and social authentication, implementing referral mechanics, introducing new gameplay loops, and optimising live operations using behavioural analytics. The result was a stronger ecosystem designed around player retention rather than short-term speculation.",
  results: [
    { metric: "700k+", label: "Active Users" },
    { metric: "2x", label: "Revenue Increase" },
    { metric: "70%", label: "User Retention" },
  ],
  technology: ["React", "Solidity", "Polygon Network", "Node.js Custom Backend", "Mixpanel Analytics"],
  color: "from-brand-blue/20 to-brand-bg",
  testimonial: "Madlabs combined product strategy, technical execution, and deep tokenomics expertise to help us build a scalable Web3 gaming ecosystem focused on sustainable growth."
},
"d2c-shoe-brand": {
  client: "D2C Shoe Brand",
  title: "Improving ecommerce conversion and customer retention",
  challenge: "Despite attracting healthy website traffic, the brand experienced high cart abandonment, increasing customer acquisition costs, and inconsistent repeat purchases. Improving conversion efficiency became the priority before increasing marketing spend.",
  strategy: "We analysed customer behaviour throughout the purchase journey to identify friction points affecting conversion. The strategy focused on simplifying checkout, increasing customer confidence, improving product discovery, and building automated retention journeys that encouraged repeat purchases.",
  implementation: "The project included checkout optimisation, AI-powered product recommendations, customer segmentation, automated abandoned cart recovery, personalised post-purchase communication, and lifecycle marketing workflows integrated with the ecommerce platform. Continuous A/B testing ensured every improvement was backed by measurable performance data.",
  results: [
    { metric: "210%", label: "Increase in Checkout Conversion" },
    { metric: "40%", label: "Reduction in Acquisition Cost" },
    { metric: "$50K", label: "Additional Monthly Revenue" }
  ],
  technology: ["Shopify Plus", "Klaviyo", "Predictive AI Models", "React"],
  color: "from-brand-blue/20 to-brand-bg",
  testimonial: "Madlabs transformed our ecommerce experience by improving conversions, increasing customer retention, and creating a scalable foundation for continued online growth."
},
"uae-real-estate": {
  client: "Top UAE Real Estate Agency",
  title: "10x increase in qualified property enquiries",
  challenge: "The agency generated significant enquiry volume through advertising, but lead quality remained inconsistent, creating unnecessary workload for the sales team and increasing acquisition costs. The objective was to attract higher intent buyers while improving the overall customer journey.",
  strategy: "We designed a multilingual digital experience tailored to international property investors, combining enterprise SEO, conversion-focused UX, CRM automation, and AI-powered lead qualification to maximise enquiry quality rather than simply increasing traffic.",
  implementation: "The solution included a multilingual property portal, advanced SEO optimisation, AI-assisted WhatsApp qualification, automated enquiry routing through HubSpot, CRM integrations, and performance dashboards providing complete visibility across the sales pipeline from first enquiry to closed opportunity.",
  results: [
    { metric: "10x", label: "Increase in Qualified Enquiries" },
    { metric: "35%", label: "Lower Cost Per Lead" },
    { metric: "$7M+", label: "In Attributed Sales" }
  ],
  technology: ["Next.js", "HubSpot CRM", "WhatsApp Business API", "OpenAI API", "Vercel"],
  color: "from-brand-lime/20 to-brand-bg",
  testimonial: "Madlabs completely transformed how we generate and qualify property enquiries. Our sales team now spends more time speaking with serious buyers instead of filtering unqualified leads."
},
"ecommerce-clothing": {
  client: "Global Clothing Brand",
  title: "Modernizing enterprise ecommerce infrastructure",
  challenge: "The existing ecommerce platform struggled to deliver consistent performance during peak shopping periods, affecting customer experience, search visibility, and conversion rates. The business required a future-ready architecture capable of supporting international growth.",
  strategy: "We designed a modern headless commerce solution focused on performance, scalability, SEO flexibility, and improved developer workflows. The strategy balanced technical improvements with customer experience to maximise both organic growth and online sales.",
  implementation: "The project involved building a high-performance storefront, integrating a headless CMS, improving rendering performance, implementing structured schema, optimising checkout flows, and modernising the frontend architecture while maintaining operational continuity throughout the migration.",
  results: [
    { metric: "50%", label: "Increase in Mobile Conversions" },
    { metric: "3x", label: "Faster Page Loads" },
    { metric: "$70k+", label: "Lift in Annual Revenue" }
  ],
  technology: ["Next.js", "Shopify Storefront API", "Sanity CMS", "Vercel SDKs"],
  color: "from-brand-lime/20 to-brand-bg",
  testimonial: "Madlabs delivered a modern ecommerce platform that significantly improved website performance while giving our team greater flexibility to scale and innovate."
},
"ai-support-automation": {
  client: "Enterprise SaaS Provider",
  title: "AI powered customer support automation",
  challenge: "Rapid customer growth resulted in increasing support volumes, slower response times, and rising operational costs. Support teams were spending valuable time answering repetitive questions instead of resolving complex customer issues.",
  strategy: "We analysed historical support conversations, identified automation opportunities, and designed an AI-powered support ecosystem combining Retrieval-Augmented Generation, intelligent routing, and human oversight to improve both customer experience and operational efficiency.",
  implementation: "The solution included an AI assistant connected to the company's internal knowledge base, secure Retrieval-Augmented Generation architecture, Zendesk integration, semantic search, conversation summarisation, and automated response generation. Human agents remained in control of complex cases while repetitive enquiries were resolved instantly.",
  results: [
    { metric: "65%", label: "Reduction in Support Volume" },
    { metric: "< 2s", label: "Average Response Time" },
    { metric: "$300k", label: "Annual Cost Savings" }
  ],
  technology: ["React", "Python/FastAPI", "OpenAI API", "Pinecone Vector DB", "Zendesk Integration"],
  color: "from-brand-purple/20 to-brand-bg",
  testimonial: "The AI platform transformed our customer support operations by reducing repetitive workloads, improving response times, and allowing our specialists to focus on delivering exceptional customer experiences."
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
              <Button size="lg" className="shadow-lg">Start Your Project <ArrowRight className="ml-2 w-5 h-5"/></Button>
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
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-10">Project Outcomes</h3>
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
