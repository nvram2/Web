import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    slug: "uae-insurance",
    client: "UAE Insurance",
    title: "Scaling organic traffic and lead generation",
    challenge: "Increase organic traffic and lead generation in highly competitive GCC markets.",
    solution: "Comprehensive SEO strategy, content marketing, and technical optimization tailored for the region.",
    results: [
      { metric: "$1M+", label: "Organic Revenue Generated" },
      { metric: "100k+", label: "Additional Organic Clicks" },
      { metric: "3x", label: "Growth in Core Markets" },
    ],
    tags: ["SEO", "Content Strategy", "Enterprise"],
    color: "from-brand-purple/20 to-brand-bg"
  },
  {
    slug: "web3-gaming",
    client: "Web 3 Gaming Platform",
    title: "Scaling a blockchain gaming ecosystem",
    challenge: "Scale user base and create sustainable tokenomics for a Web3 gaming ecosystem.",
    solution: "Product leadership, growth systems, tokenomics design & launch, and marketplace development.",
    results: [
      { metric: "700k+", label: "Active Users" },
      { metric: "2x", label: "Revenue Growth" },
      { metric: "70%", label: "User Retention" },
    ],
    tags: ["Web3", "Product Strategy", "Growth"],
    color: "from-brand-blue/20 to-brand-bg"
  },
  {
    slug: "ecommerce-clothing",
    client: "Global Clothing Brand",
    title: "Scaling headless e-commerce architecture",
    challenge: "Platform instability during high-traffic drops and poor SEO performance on product pages.",
    solution: "Rebuilt the store using a modern headless architecture (Next.js + Shopify) with advanced edge caching and technical SEO foundations.",
    results: [
      { metric: "150%", label: "Increase in Mobile Conversions" },
      { metric: "3x", label: "Faster Page Loads" },
      { metric: "$2M+", label: "Lift in Annual Revenue" },
    ],
    tags: ["E-commerce", "Web Development", "SEO"],
    color: "from-brand-lime/20 to-brand-bg"
  },
  {
    slug: "ai-support-automation",
    client: "Enterprise SaaS Provider",
    title: "Automating Tier 1 support tickets with AI",
    challenge: "Support teams were overwhelmed by repetitive Tier 1 queries, leading to slow response times and churn.",
    solution: "Implemented an intelligent RAG-based AI chatbot trained on internal documentation to intercept and resolve common tickets automatically.",
    results: [
      { metric: "65%", label: "Reduction in Support Volume" },
      { metric: "< 2s", label: "Average Response Time" },
      { metric: "$300k", label: "Annual Cost Savings" },
    ],
    tags: ["AI Automation", "Process Optimization", "SaaS"],
    color: "from-brand-purple/20 to-brand-bg"
  },
  {
    slug: "d2c-shoe-brand",
    client: "D2C Shoe Brand",
    title: "Scaling e-commerce conversions and retention",
    challenge: "High cart abandonment and high customer acquisition costs.",
    solution: "Rebuilt e-commerce funnel, integrated AI-driven product recommendations, and optimized email retention flows.",
    results: [
      { metric: "210%", label: "Increase in Checkout Conversion" },
      { metric: "40%", label: "Reduction in CAC" },
      { metric: "$1.5M", label: "Additional Monthly Revenue" },
    ],
    tags: ["E-commerce", "AI Automation", "Conversion Optimization"],
    color: "from-brand-blue/20 to-brand-bg"
  },
  {
    slug: "uae-real-estate",
    client: "Top UAE Real Estate Agency",
    title: "10x growth in qualified leads for luxury off-plan properties",
    challenge: "Low quality leads from paid ads and low conversion rates on landing pages.",
    solution: "Built a dedicated properties portal, deployed multi-lingual SEO, and automated lead qualification via CRM-integrated AI chatbots.",
    results: [
      { metric: "10x", label: "Increase in Qualified Leads" },
      { metric: "35%", label: "Lower Cost Per Lead" },
      { metric: "$45M+", label: "In Attributed Sales" },
    ],
    tags: ["Real Estate", "Lead Generation", "SEO"],
    color: "from-brand-lime/20 to-brand-bg"
  }
];

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies & Results | Madlabs Digital</title>
        <meta name="description" content="Discover how Madlabs Digital helps businesses like GIG Gulf and CropBytes scale through AI, SEO, and product strategy." />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-bg border-b border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Proven Growth.</h1>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We let the numbers speak. Explore how we’ve helped enterprise and Web3 companies scale efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
          {caseStudies.map((study, idx) => (
            <div key={idx} className={`rounded-[2.5rem] bg-gradient-to-br ${study.color} p-1 border border-brand-grey`}>
              <div className="bg-white rounded-[2.4rem] p-8 md:p-16 h-full flex flex-col md:flex-row gap-12 lg:gap-24">
                
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-brand-bg rounded-full text-xs font-semibold uppercase tracking-wider text-brand-text/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-bold text-brand-text/50 uppercase tracking-widest mb-4">{study.client}</h3>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-8">{study.title}</h2>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-brand-text/70 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Solution</h4>
                      <p className="text-brand-text/70 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <Link to={`/case-studies/${study.slug}`} className="inline-flex items-center text-sm font-semibold hover:text-brand-purple transition-colors">
                    Read full case study <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
                
                <div className="flex-1 bg-[#111] rounded-3xl p-10 text-white flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-10">Key Metrics</h4>
                  <div className="space-y-10">
                    {study.results.map((res, i) => (
                      <div key={i}>
                        <div className="text-4xl lg:text-5xl font-bold mb-2">{res.metric}</div>
                        <div className="text-white/60 font-medium text-sm">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
