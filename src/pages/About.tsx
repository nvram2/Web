import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Target, Code, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const teams = [
  {
    name: "Product & Strategy",
    icon: Target,
    desc: "Strategic minds focused on product growth, user acquisition, and scaling enterprise operations. We define the roadmap, prioritize features that drive business outcomes, and ensure product-market fit throughout development.",
    color: "from-brand-purple/20 to-transparent",
  },
  {
    name: "Software Engineering",
    icon: Code,
    desc: "Full-stack developers specialized in React, Next.js, and complex backend architectures. Our engineering team builds resilient, scalable, and maintainable systems designed to handle high concurrency and data load.",
    color: "from-brand-blue/20 to-transparent",
  },
  {
    name: "AI & Automation",
    icon: Brain,
    desc: "Experts in LLMs, workflow automation, CRM integrations, and data engineering. We deploy state-of-the-art machine learning models to reduce manual overhead and unlock new efficiencies in your business processes.",
    color: "from-brand-lime/20 to-transparent",
  },
  {
    name: "Performance Marketing",
    icon: TrendingUp,
    desc: "Technical SEO engineers and content strategists driving organic lead generation. We execute data-driven campaigns, optimize conversion rates, and build growth loops that consistently lower acquisition costs.",
    color: "from-brand-purple/20 to-transparent",
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Madlabs Digital | Digital Consulting, AI & Product Experts</title>
        <meta name="description" content="Learn about Madlabs Digital, a founder-led digital consulting company helping businesses with AI, software development, SEO, product strategy, and digital transformation." />
        <meta name="keywords" content="Digital Transformation, AI Consulting, Madlabs Digital, Technology Consulting,SEO Experts, Growth Agency, Product Development Experts" />
        <meta property="og:title" content="About Us | Madlabs Digital" />
        <meta property="og:description" content="Built for growth. Engineered for scale. See how we combine strategy, AI, and execution." />
        <link rel="canonical" href="https://madlabs.digital/about" />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-bg border-b border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Built for innovation. <br/><span className="text-brand-purple">Engineered for scale.</span></h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
            Madlabs Digital is a founder-led digital consulting company helping startups, SMEs, enterprises, and Web3 businesses design, develop, and improve digital products, operations, and customer experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white border-b border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-lg text-brand-text/80 leading-relaxed mb-6">
            We bring together strategy, software engineering, AI, SEO, product development, and digital consulting to solve complex business challenges. We believe technology should simplify operations, improve decision making, and create measurable business value. 
            </p>
            <p className="text-lg text-brand-text/80 leading-relaxed">
            Every engagement starts with understanding your business goals. We then create practical solutions that improve efficiency, strengthen customer acquisition, and support long-term business success.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white border-t border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
            <div>
              <div className="text-5xl font-black tracking-tight mb-2 text-brand-text">$6.4M+</div>
              <div className="text-sm font-bold text-brand-text/60 uppercase tracking-wider">Business Value Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-black tracking-tight mb-2 text-brand-text">150+</div>
              <div className="text-sm font-bold text-brand-text/60 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-black tracking-tight mb-2 text-brand-text">900k+</div>
              <div className="text-sm font-bold text-brand-text/60 uppercase tracking-wider">Users Scaled</div>
            </div>
            <div>
              <div className="text-5xl font-black tracking-tight mb-2 text-brand-text">30+</div>
              <div className="text-sm font-bold text-brand-text/60 uppercase tracking-wider">Partner Brands</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-brand-bg border-t border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Technology Stack</h2>
            <p className="text-lg text-brand-text/70">A carefully selected technology stack used to build secure, high-performing software, digital products, and AI powered business systems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React & Next.js", "TypeScript", "Node.js & Python",
              "PostgreSQL & Redis", "AWS & GCP", "OpenAI & Anthropic",
              "Tailwind CSS", "Vercel & Docker"
            ].map(tech => (
              <div key={tech} className="bg-white border border-brand-grey rounded-2xl p-6 text-center shadow-sm font-semibold text-brand-text hover:-translate-y-1 transition-transform">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-white border-t border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
            <p className="text-lg text-brand-text/70">The principles that shape every project, partnership, and decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-brand-grey shadow-sm">
              <h3 className="text-xl font-bold mb-3">Outcome Over Output</h3>
              <p className="text-brand-text/70">We measure success through business outcomes, operational improvements, and customer impact rather than simply delivering features.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-brand-grey shadow-sm">
              <h3 className="text-xl font-bold mb-3">Engineering Excellence</h3>
              <p className="text-brand-text/70">We design reliable software and scalable digital platforms that continue delivering value as your business evolves.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-brand-grey shadow-sm">
              <h3 className="text-xl font-bold mb-3">Radical Transparency</h3>
              <p className="text-brand-text/70">Clear communication, realistic timelines, and honest recommendations are central to every client relationship.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-brand-bg border-t border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Dedicated Team</h2>
            <p className="text-lg text-brand-text/70">A multidisciplinary team of engineers, designers, consultants, and AI specialists working together to solve complex business problems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="bg-white group flex flex-col p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-lime transition-all">
                  <team.icon className="w-6 h-6 text-brand-text group-hover:text-brand-dark transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{team.name}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-8 flex-grow">
                  {team.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-white border-t border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-bg rounded-[2rem] p-10 border border-brand-grey">
              <h3 className="text-sm font-bold text-brand-purple uppercase tracking-widest mb-6">The Founder</h3>
              <h2 className="text-3xl font-bold mb-4">Kevin Sequeira</h2>
              <p className="text-brand-text/80 leading-relaxed mb-8">
                With over a decade of experience across product management, software, digital strategy, and consulting, Kevin has helped businesses launch products, improve operations, and deliver measurable commercial results.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Product Leader with 10+ years experience
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Scaled products from 0 to 1M+ users
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Delivered Web3 platforms, marketplaces, and AI powered applications
                </li>
                <li className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mr-3"></span>
                  Two-time Key Note Speaker at IGDC
                </li>
              </ul>
              
              <Link to="/contact">
                <Button variant="outline" className="w-full bg-white px-8">Book a Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
