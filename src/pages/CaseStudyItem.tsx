import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const caseStudiesData = {
  "uae-insurance": {
    client: "UAE Insurance",
    title: "Increasing organic visibility and qualified enquiries",
    challenge: "Improve organic search visibility and generate more qualified enquiries across competitive GCC insurance markets without increasing reliance on paid advertising.",
    strategy: "We began with a complete review of the client's website, search performance, and customer journey. We identified technical SEO issues, content opportunities, and regional search intent before creating a phased optimization strategy focused on long-term visibility.",
    implementation: "The project included technical SEO improvements, website architecture updates, structured data implementation, optimization of more than 200 landing pages, and an ongoing content strategy targeting high-intent insurance searches.",
    results: [
      { metric: "$1M+", label: "Organic Revenue Generated" },
      { metric: "100k+", label: "Additional Organic Clicks" },
      { metric: "3x", label: "Increase in Core Markets" },
    ],
    technology: ["Next.js", "Contentful CMS", "Ahrefs & Semrush Data SDKs", "Google Analytics 4"],
    color: "from-brand-purple/20 to-brand-bg",
    testimonial: "Madlabs transformed our organic search strategy. Their structured approach delivered consistent visibility, qualified enquiries, and measurable commercial results across multiple GCC markets."
  },
  "web3-gaming": {
    client: "Web 3 Gaming Platform",
    title: "Developing a sustainable Web3 gaming platform",
    challenge: "Increase player adoption while creating a sustainable token economy for a rapidly evolving Web3 gaming platform.",
    strategy: "We provided product leadership, redesigned the in-game economy, and improved onboarding to create a balanced ecosystem focused on long-term player engagement instead of short-term speculation.",
    implementation: "We delivered a marketplace, optimized the token launch, introduced social login with embedded wallets, and launched a referral system that increased player acquisition and engagement.",
    results: [
      { metric: "700k+", label: "Active Users" },
      { metric: "2x", label: "Revenue Increase" },
      { metric: "70%", label: "User Retention" },
    ],
    technology: ["React", "Solidity", "Polygon Network", "Node.js Custom Backend", "Mixpanel Analytics"],
    color: "from-brand-blue/20 to-brand-bg",
    testimonial: "Kevin and the Madlabs team brought product thinking, technical execution, and tokenomics expertise that helped us launch a sustainable gaming ecosystem."
  },
  "d2c-shoe-brand": {
    client: "D2C Shoe Brand",
    title: "Improving ecommerce conversion and customer retention",
    challenge: "High cart abandonment and increasing customer acquisition costs were reducing profitability and limiting online sales performance.",
    strategy: "We focused on improving conversion before increasing traffic by redesigning the checkout experience and implementing personalized customer retention journeys.",
    implementation: "The solution included AI powered product recommendations, an optimized Shopify checkout, and automated customer journeys for abandoned carts and post-purchase engagement.",
    results: [
      { metric: "210%", label: "Increase in Checkout Conversion" },
      { metric: "40%", label: "Reduction in CAC" },
      { metric: "$1.5M", label: "Additional Monthly Revenue" }
    ],
    technology: ["Shopify Plus", "Klaviyo", "Predictive AI Models", "React"],
    color: "from-brand-blue/20 to-brand-bg",
    testimonial: "The improvements to our checkout and customer retention delivered results far beyond expectations and created a stronger foundation for continued ecommerce growth."
  },
  "uae-real-estate": {
    client: "Top UAE Real Estate Agency",
    title: "10x increase in qualified property enquiries",
    challenge: "The agency needed better quality property enquiries while reducing wasted advertising spend and improving sales efficiency.",
    strategy: "We developed a multilingual property platform supported by enterprise SEO and a streamlined customer journey designed for international investors.",
    implementation: "We launched a multilingual property portal, integrated AI assisted WhatsApp qualification, and connected every enquiry directly with HubSpot for faster routing and follow up.",
    results: [
      { metric: "10x", label: "Increase in Qualified Enquiries" },
      { metric: "35%", label: "Lower Cost Per Lead" },
      { metric: "$45M+", label: "In Attributed Sales" }
    ],
    technology: ["Next.js", "HubSpot CRM", "WhatsApp Business API", "OpenAI API", "Vercel"],
    color: "from-brand-lime/20 to-brand-bg",
    testimonial: "The quality of our enquiries improved dramatically, and automated qualification helped our team focus on serious buyers."
  },
  "ecommerce-clothing": {
    client: "Global Clothing Brand",
    title: "Modernizing enterprise ecommerce infrastructure",
    challenge: "The existing ecommerce platform struggled during peak traffic and limited organic search visibility across competitive product categories.",
    strategy: "We designed a modern headless commerce architecture that improved performance, SEO control, and customer experience while supporting future platform expansion.",
    implementation: "The solution included a high performance storefront, headless CMS integration, optimized checkout, structured schema, and improved page rendering across the site.",
    results: [
      { metric: "150%", label: "Increase in Mobile Conversions" },
      { metric: "3x", label: "Faster Page Loads" },
      { metric: "$2M+", label: "Lift in Annual Revenue" }
    ],
    technology: ["Next.js", "Shopify Storefront API", "Sanity CMS", "Vercel SDKs"],
    color: "from-brand-lime/20 to-brand-bg",
    testimonial: "Madlabs delivered an ecommerce platform that performs reliably during peak demand while giving our team greater flexibility and confidence."
  },
  "ai-support-automation": {
    client: "Enterprise SaaS Provider",
    title: "AI powered customer support automation",
    challenge: "Growing customer demand created a backlog of repetitive support requests, increasing response times and reducing overall customer satisfaction.",
    strategy: "We analysed historical support requests and designed an AI strategy combining an internal assistant with a customer facing chatbot to automate repetitive enquiries while supporting support teams.",
    implementation: "We implemented a Retrieval Augmented Generation system connected to the company's knowledge base, enabling accurate responses, faster resolutions, and secure access to relevant information.",
    results: [
      { metric: "65%", label: "Reduction in Support Volume" },
      { metric: "< 2s", label: "Average Response Time" },
      { metric: "$300k", label: "Annual Cost Savings" }
    ],
    technology: ["React", "Python/FastAPI", "OpenAI API", "Pinecone Vector DB", "Zendesk Integration"],
    color: "from-brand-purple/20 to-brand-bg",
    testimonial: "The AI platform reduced repetitive work, improved response times, and allowed our support team to focus on complex customer needs."
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
