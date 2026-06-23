import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Madlabs Digital | AI & Growth Consulting Experts</title>
        <meta name="description" content="Learn about Madlabs Digital, a founder-led technology consulting company helping startups and enterprises build, automate, and grow." />
        <meta name="keywords" content="About Madlabs Digital, Technology Consulting, Kevin Sequeira, Growth Agency, Product Development Experts" />
        <meta property="og:title" content="About Us | Madlabs Digital" />
        <meta property="og:description" content="Built for growth. Engineered for scale. See how we combine strategy, AI, and execution." />
        <link rel="canonical" href="https://madlabs.digital/about" />
      </Helmet>

      <div className="pt-24 pb-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Built for growth. <br/><span className="text-brand-purple">Engineered for scale.</span></h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              Madlabs Digital is a founder-led technology consulting company helping startups, SMEs, enterprises, and Web3 businesses build, automate, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-brand-text/80 leading-relaxed mb-6">
                We believe that technology should be an enabler, not a bottleneck. We combine strategy, technology, AI, automation, product development, SEO, and growth consulting under one roof. 
              </p>
              <p className="text-brand-text/80 leading-relaxed mb-6">
                Our focus is completely outcome-driven. We're not here to just write code or ship features; we partner with you to reduce manual work, generate qualified leads, and significantly increase your revenue.
              </p>
            </div>

            <div className="bg-brand-bg rounded-[2rem] p-10 border border-brand-grey">
              <h3 className="text-sm font-bold text-brand-purple uppercase tracking-widest mb-6">The Founder</h3>
              <h2 className="text-3xl font-bold mb-4">Kevin Sequeira</h2>
              <p className="text-brand-text/80 leading-relaxed mb-8">
                With over a decade of combined experience across technology, product management, growth, and business consulting, Kevin has spent his career building systems that scale.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Product Lead with 6+ years experience
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Scaled products to 700,000+ users
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Generated over $2.4M in business value
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Delivered 130+ successful projects
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Built Web3 products, marketplaces & AI systems
                </li>
              </ul>
              
              <Link to="/contact">
                <Button variant="outline" className="w-full bg-white">Connect with Kevin</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
