import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    slug: "uae-insurance",
    client: "UAE Insurance Conglomerate",
    title: "Increasing organic visibility and qualified enquiries",
    challenge: "Improve high-intent organic visibility across competitive GCC insurance markets while reducing reliance on paid acquisition.",
    solution: "Delivered a phased SEO strategy combining technical optimization, localized content, structured data, and performance tracking to drive sustainable long-term growth.",
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
    client: "Web3 Gaming Platform",
    title: "Developing a sustainable Web3 gaming platform",
    challenge: "Create a sustainable blockchain gaming ecosystem while increasing player acquisition, engagement, and long-term retention.",
    solution: "Redesigned the game economy, optimized tokenomics, improved onboarding, and launched marketplace and referral systems that supported sustainable growth.",
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
    title: "Modernizing enterprise ecommerce infrastructure",
    challenge: "Improve website performance, SEO, and customer experience while preparing the platform for future growth.",
    solution: "Built a modern headless commerce architecture with improved rendering, faster page speeds, optimized checkout, and scalable content management.",
    results: [
      { metric: "50%", label: "Increase in Mobile Conversions" },
      { metric: "3x", label: "Faster Page Loads" },
      { metric: "$70k+", label: "Lift in Annual Revenue" },
    ],
    tags: ["Ecommerce", "Web Development", "SEO"],
    color: "from-brand-lime/20 to-brand-bg"
  },
  {
     slug: "ai-support-automation",
    client: "Enterprise SaaS Provider",
    title: "AI powered customer support automation",
    challenge: "Reduce growing support volumes while improving response times and customer satisfaction.",
    solution: "Implemented an AI-powered support platform using Retrieval-Augmented Generation to automate repetitive enquiries and assist support teams.",
    results: [
      { metric: "65%", label: "Reduction in Support Volume" },
      { metric: "< 2s", label: "Average Response Time" },
      { metric: "$300k", label: "Annual Cost Savings" },
    ],
    tags: ["AI Automation", "Customer Support", "SaaS"],
    color: "from-brand-purple/20 to-brand-bg"
  },
  {
     slug: "d2c-shoe-brand",
    client: "D2C Shoe Brand",
    title: "Improving ecommerce conversion and customer retention",
    challenge: "Reduce cart abandonment and customer acquisition costs while increasing online revenue.",
    solution: "Optimized the checkout experience, introduced AI-powered product recommendations, and automated customer retention journeys across the ecommerce funnel.",
    results: [
      { metric: "210%", label: "Increase in Checkout Conversion" },
      { metric: "40%", label: "Reduction in CAC" },
      { metric: "$50K", label: "Additional Monthly Revenue" },
    ],
    tags: ["Ecommerce", "AI Automation", "Conversion Optimization"],
    color: "from-brand-blue/20 to-brand-bg"
  },
  {
   slug: "uae-real-estate",
    client: "Top UAE Real Estate Agency",
    title: "10x increase in qualified property enquiries",
    challenge: "Improve enquiry quality while reducing acquisition costs for a highly competitive UAE real estate market.",
    solution: "Developed a multilingual property platform with enterprise SEO, AI-powered lead qualification, and seamless CRM automation for faster sales follow-up.",
    results: [
      { metric: "10x", label: "Increase in Qualified Enquiries" },
      { metric: "35%", label: "Lower Cost Per Lead" },
      { metric: "$7M+", label: "In Attributed Sales" },
    ],
    tags: ["Real Estate", "Lead Generation", "CRM Automation"],
    color: "from-brand-lime/20 to-brand-bg"
  }
];

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies | SEO, AI & Software Development Results | Madlabs Digital</title>
        <meta name="description" content="Explore how Madlabs Digital helps businesses improve search visibility, automate operations, develop software, and achieve measurable business results across multiple industries." />
        <meta name="keywords" content=" Case Studies, Tech Consulting Results, SEO Case Study, AI Automation Case Study, Software Development Portfolio, Digital Consulting Projects, Web Development Case Study, Product Consulting" />
        <meta property="og:title" content="Case Studies & Results | Madlabs Digital" />
        <meta property="og:description" content="Discover how Madlabs Digital helps businesses scale through AI, SEO, and product strategy." />
        <link rel="canonical" href="https://madlabs.digital/case-studies" />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-bg border-b border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Proven Results.</h1>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Explore how we've helped businesses improve search visibility, launch products, automate operations, and deliver measurable commercial outcomes across multiple industries.
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
