import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Search,
  Code2,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  ShieldCheck,
  Database,
  Globe,
  Briefcase,
  Map,
  Network,
  Bitcoin,
  Cpu,
  Layers,
  Lock,
  Wallet,
  Coins,
  Activity,
  AlertTriangle,
  Compass
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function BlockchainWeb3() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Development Services | Madlabs Digital</title>
        <meta
          name="description"
          content="Build secure blockchain & Web3 products that deliver real business value. We design and develop smart contracts, digital asset platforms, token economies, and Web3 applications."
        />
        <meta
          name="keywords"
          content="Blockchain Development Services, Web3 Development, Blockchain Consulting, Smart Contract Development, NFT Development, Tokenomics Consulting, Enterprise Blockchain, Blockchain Product Development, Web3 Consulting, Wallet Integration, Blockchain Gaming, Tokenisation, RWA Development"
        />
        <link
          rel="canonical"
          href="https://madlabs.digital/services/blockchain-web3"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Blockchain & Web3 Development Services | Madlabs Digital"
        />
        <meta
          property="og:description"
          content="Build secure blockchain & Web3 products that deliver real business value. We design and develop smart contracts, digital asset platforms, token economies, and Web3 applications."
        />
        <meta
          property="og:url"
          content="https://madlabs.digital/services/blockchain-web3"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blockchain & Web3 Development Services | Madlabs Digital"
        />
        <meta
          name="twitter:description"
          content="Build secure blockchain & Web3 products that deliver real business value. We design and develop smart contracts, digital asset platforms, token economies, and Web3 applications."
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Blockchain & Web3 Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Expert Blockchain and Web3 development services focusing on enterprise blockchain, smart contracts, tokenomics, and wallet integrations.",
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
                "name": "Blockchain & Web3"
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
                  "name": "What is blockchain?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Blockchain is a decentralized, distributed ledger that securely records transactions across a network of computers. It ensures data immutability, transparency, and trust without requiring a central authority."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Web3?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Web3 is the next iteration of the internet, built on blockchain technology. It introduces concepts like digital ownership, decentralization, token-based economics, and trustless interactions."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0a0a0a] text-white">
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[20%] w-[800px] h-[800px] bg-brand-lime/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-3xl opacity-50" />
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
              Enterprise Blockchain & Web3 Development
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Build Secure Blockchain Products{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">
                That Deliver Real Value.
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Blockchain is more than cryptocurrency. We help startups and
              enterprises design, build, and scale secure blockchain
              applications, smart contracts, digital asset platforms,
              marketplaces, token economies, and Web3 products that solve real
              business problems and create long-term value.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90"
                >
                  Start Your Blockchain Project{" "}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact?type=strategy">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white"
                >
                  Book Strategy Session
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">700k+</div>
                <div className="text-sm font-medium text-white/60">
                  Users Supported
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$21M+</div>
                <div className="text-sm font-medium text-white/60">
                  Digital Assets Managed
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-sm font-medium text-white/60">
                  Years of Web3 Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2x</div>
                <div className="text-sm font-medium text-white/60">
                  Revenue Growth Delivered
                </div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              The Business Problem: Technology Without a Purpose
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Many blockchain projects fail because they build technology
              without a valid business case. Blockchain is a powerful backend
              infrastructure, but it cannot fix a product that no one wants to
              use.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Common issues like poor token design, weak user experiences,
              complicated wallet onboarding, and glaring security
              vulnerabilities plague the Web3 industry. Furthermore, ignoring
              regulations and lacking a clear governance or adoption strategy
              guarantees that a project will stall before it scales.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Blockchain should solve business problems—increasing transparency,
              automating trust, generating new revenue streams, or reducing
              operational costs—rather than existing for its own sake.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SOLUTIONS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Why Most Web3 Projects Fail
              </h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Successful Web3 products combine product strategy, economics,
                technology, and user experience. When one of these pillars is
                missing, failure is inevitable.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">01.</span> Building
                    Before Validating
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Founders often rush to build complex smart contracts and
                    launch tokens without validating the core utility or
                    product-market fit.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">02.</span>{" "}
                    Unsustainable Tokenomics
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Tokens designed purely for speculation rather than long-term
                    utility will inevitably collapse once initial hype fades and
                    early investors exit.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-brand-purple mr-2">03.</span> Poor
                    Security & Onboarding
                  </h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Overcomplicated wallets drive away mainstream users, while
                    skipping comprehensive security audits leaves millions of
                    dollars exposed to hackers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">
                The Cost of Web3 Mistakes
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Security Breaches</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      A single flaw in smart contract logic can instantly drain
                      a protocol’s liquidity and permanently destroy user trust.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Zero User Adoption</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Forcing non-crypto users to manually manage seed phrases
                      and pay high gas fees creates an impenetrable barrier to
                      entry.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Regulatory Fines</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Ignoring compliance considerations regarding securities
                      laws and KYC/AML can result in immediate shutdown by
                      authorities.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: CHOOSING THE RIGHT BLOCKCHAIN */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Choosing the Right Blockchain
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We do not recommend one chain universally. Every protocol has
              trade-offs regarding security, scalability, transaction costs, and
              developer ecosystem.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider text-white/50 w-1/4">
                    Network
                  </th>
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider text-white/50 w-1/4">
                    Primary Focus
                  </th>
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider text-white/50 w-1/2">
                    Best Use Cases
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                <tr>
                  <td className="p-6 font-medium text-white">Ethereum (L1)</td>
                  <td className="p-6">Maximum Security & Decentralization</td>
                  <td className="p-6">
                    High-value enterprise settlements, institutional DeFi, and
                    premium asset tokenization where trust is paramount.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    Polygon / Arbitrum / Base (L2)
                  </td>
                  <td className="p-6">Ecosystem & Scalability</td>
                  <td className="p-6">
                    Consumer applications, marketplaces, and brands needing EVM
                    compatibility with drastically reduced gas fees.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">Solana</td>
                  <td className="p-6">Ultra-fast & Low Cost</td>
                  <td className="p-6">
                    High-frequency trading, real-time gaming, and consumer dApps
                    requiring thousands of transactions per second.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white">
                    BNB Chain / Avalanche
                  </td>
                  <td className="p-6">Throughput & Custom Subnets</td>
                  <td className="p-6">
                    Gaming ecosystems, exchange-integrated products, and
                    enterprise platforms needing dedicated application-specific
                    chains.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4.6: TOKENOMICS THAT LAST */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Tokenomics That Last
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Sustainable token economies matter far more than speculative
              launches. We design mathematical models that align incentives for
              all network participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Supply & Demand",
                desc: "Balancing emission schedules with actual utility drivers to prevent hyperinflation and value dilution.",
              },
              {
                title: "Governance & Utility",
                desc: "Ensuring tokens provide genuine access, voting rights, or operational utility within the ecosystem.",
              },
              {
                title: "Staking & Rewards",
                desc: "Creating attractive yet sustainable yields that encourage long-term holding without draining treasuries.",
              },
              {
                title: "Burn Mechanisms",
                desc: "Designing deflationary pressures linked directly to platform revenue or usage metrics.",
              },
              {
                title: "Liquidity & Vesting",
                desc: "Structuring team and investor lockups that protect retail participants and ensure long-term commitment.",
              },
              {
                title: "Community Incentives",
                desc: "Rewarding positive behaviors that actively grow the network's value, user base, and security.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 border border-brand-grey rounded-3xl bg-[#fafafa] hover:border-brand-purple/30 transition-colors"
              >
                <Coins className="w-8 h-8 text-brand-purple mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4.7: SECURITY & COMPLIANCE */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Security & Compliance
              </h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                In Web3, code is law. Security must be planned from the
                beginning, not bolted on right before launch.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Lock className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Smart Contract Audits</h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Rigorous testing, fuzzing, and third-party audits to
                      eliminate reentrancy attacks and logic flaws.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wallet className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Multi-signature Wallets
                    </h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Implementing enterprise-grade private key management and
                      access controls for treasury security.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-brand-purple mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Compliance Considerations
                    </h4>
                    <p className="text-brand-text/70 text-sm mt-1">
                      Architecting solutions that respect KYC/AML requirements,
                      data privacy (GDPR on-chain limitations), and
                      jurisdictional regulations.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-purple/10 mb-8">
                <ShieldCheck className="w-10 h-10 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Risk Management</h3>
              <p className="text-brand-text/70 leading-relaxed mb-6">
                We build disaster recovery protocols, emergency pause functions,
                and decentralized governance mechanisms to protect your users
                and assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE FRAMEWORK */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              The Madlabs Web3 Framework
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              We focus heavily on business outcomes and sustainable product
              mechanics, treating blockchain as an enabling technology rather
              than a magic fix.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Identifying the core problem.",
              },
              {
                num: "02",
                title: "Business Model",
                desc: "Validating the use case.",
              },
              {
                num: "03",
                title: "Chain Selection",
                desc: "Evaluating trade-offs.",
              },
              {
                num: "04",
                title: "Tokenomics",
                desc: "Designing sustainable economies.",
              },
              {
                num: "05",
                title: "Product Strategy",
                desc: "Defining the roadmap.",
              },
              {
                num: "06",
                title: "UX/UI Design",
                desc: "Frictionless onboarding.",
              },
              {
                num: "07",
                title: "Smart Contracts",
                desc: "Secure backend logic.",
              },
              { num: "08", title: "Testing", desc: "Audits & QA." },
              { num: "09", title: "Launch", desc: "Mainnet deployment." },
              { num: "10", title: "Analytics", desc: "On-chain monitoring." },
              { num: "11", title: "Growth", desc: "Scaling the ecosystem." },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#fafafa] p-6 rounded-3xl border border-brand-grey hover:border-brand-lime/30 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-full shadow-sm border border-brand-grey flex items-center justify-center mb-4 text-brand-lime font-bold">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES INCLUDED */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Web3 & Blockchain Services
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              End-to-end development covering strategic planning, smart contract
              engineering, enterprise integration, and user-facing decentralized
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Compass className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Consulting & Strategy
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Guiding companies on how to utilize
                decentralization. Why businesses use it: To avoid costly
                architectural mistakes and ensure regulatory viability. Business
                outcome: A clear, profitable Web3 roadmap.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Blockchain Consulting
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Web3 Product Strategy
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Tokenomics & Utility Design
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Code2 className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Smart Contracts & Apps
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Developing the immutable logic that powers
                decentralized protocols. Why businesses use it: To automate
                trust, execute complex transactions, and manage assets. Business
                outcome: Secure, automated digital infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Smart Contract Development
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  NFT & Marketplace Platforms
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3 shrink-0" />{" "}
                  Staking & DAO Development
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Wallet className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Enterprise & Integration
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Connecting existing systems (Web2) to blockchain
                networks (Web3). Why businesses use it: To offer crypto
                payments, embedded wallets, and digital identity. Business
                outcome: Modernized user experiences and new revenue channels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Embedded Wallet Integration
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Web3 Authentication & Identity
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 shrink-0" />{" "}
                  Crypto Payment Integration
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
              <Bitcoin className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Real World Assets & Loyalty
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                What it is: Representing physical assets or brand loyalty as
                digital tokens. Why businesses use it: To increase liquidity,
                traceability, and customer engagement. Business outcome:
                Deepened customer loyalty and asset tokenization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Real World Assets (RWA)
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Blockchain Loyalty Platforms
                </li>
                <li className="flex items-start text-sm text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple mr-3 shrink-0" />{" "}
                  Cross-chain Integrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.5: HOW WE BUILD */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              How We Build Blockchain Products
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              A rigorous engineering journey that prioritizes security and user
              experience above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-brand-grey z-0"></div>
            {[
              {
                num: "01",
                title: "Strategy",
                desc: "Goals, research, and chain selection.",
              },
              {
                num: "02",
                title: "Architecture",
                desc: "System design and tokenomics.",
              },
              {
                num: "03",
                title: "Development",
                desc: "Smart contracts and frontend build.",
              },
              {
                num: "04",
                title: "Security",
                desc: "Wallet integration and audits.",
              },
              {
                num: "05",
                title: "Launch",
                desc: "Mainnet deployment and growth.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 bg-[#fafafa] border border-brand-grey p-6 rounded-3xl hover:border-brand-lime/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand-lime text-black font-bold flex items-center justify-center mb-4 border border-brand-lime/20">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-brand-text">
                  {step.title}
                </h3>
                <p className="text-brand-text/70 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-brand-text/70 text-lg">
              We utilize industry-standard frameworks, reliable node providers,
              and modern frontend tools to build resilient decentralized
              applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Blockchains & L2s</h4>
              <p className="text-sm text-brand-text/60">
                Ethereum, Polygon, Base, Solana, Arbitrum, Avalanche
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Smart Contracts</h4>
              <p className="text-sm text-brand-text/60">
                Solidity, Rust, Foundry, Hardhat
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Web3 Infrastructure</h4>
              <p className="text-sm text-brand-text/60">
                Thirdweb, WalletConnect, MetaMask, Alchemy, Infura
              </p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-white">
              <h4 className="font-bold mb-2">Frontend & Backend</h4>
              <p className="text-sm text-brand-text/60">
                Next.js, React, Node.js, Supabase, Vercel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUSINESS BENEFITS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center max-w-3xl mx-auto">
            Measurable Business Outcomes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                New Revenue Opportunities
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Unlock entirely new business models through tokenized
                ecosystems, digital collectibles, and automated royalty
                structures.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tokenised Communities</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Turn passive consumers into active stakeholders and evangelists
                by sharing network value and governance rights.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Reduced Operational Costs
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Automate complex trust-based processes, eliminate middlemen, and
                ensure absolute data transparency across supply chains.
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
                Proven Execution
              </h2>
              <p className="text-lg text-brand-text/70">
                Delivering high-impact Web3 and enterprise products.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors"
            >
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link
              to="/case-studies/web3-gaming"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-lime">
                    Web3 Gaming Platform
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Marketplace & Tokenomics
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Needed a scalable in-game economy and
                    frictionless asset trading. Approach: Led product strategy,
                    smart contract architecture, and marketplace build.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Active Users
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">
                      700k+
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Revenue Growth
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">
                      2x
                    </span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link
              to="/case-studies/enterprise-saas"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">
                    Enterprise SaaS Provider
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Blockchain + AI Integrations
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Data verification and process
                    bottlenecks. Approach: Integrated immutable ledger records
                    with AI automation to verify and process critical documents.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Data Integrity
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">
                      100% Verified
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Processing Time
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">
                      -40%
                    </span>
                  </div>
                </div>
                <span className="text-brand-blue font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link
              to="/case-studies/global-clothing-brand"
              className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">
                    Global Clothing Brand
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">
                    Digital Commerce Architecture
                  </h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">
                    Business Challenge: Needed future-ready infrastructure for
                    digital collectibles. Approach: Built a robust, headless
                    digital commerce platform capable of supporting Web3
                    initiatives.
                  </p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Platform Scalability
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">
                      Enterprise
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">
                      Readiness
                    </span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">
                      Web3 Enabled
                    </span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: INDUSTRIES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Real Value Across Industries
            </h2>
            <p className="text-brand-text/70 text-lg">
              We create value using practical blockchain applications instead of
              hype.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Gaming",
              "Finance",
              "Retail",
              "Real Estate",
              "Healthcare",
              "Supply Chain",
              "Education",
              "Loyalty & Rewards",
              "Entertainment",
              "Sports",
              "Government",
              "Enterprise",
            ].map((ind) => (
              <div
                key={ind}
                className="px-6 py-3 rounded-full border border-brand-grey bg-[#fafafa] text-brand-text font-medium hover:border-brand-lime/50 transition-colors cursor-default"
              >
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-white">
                The State of Web3
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Data from top global research firms indicates that blockchain
                infrastructure is rapidly maturing beyond speculation into core
                enterprise utility.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Business investment in tokenisation, smart contracts, and
                real-world asset (RWA) development continues to grow as
                organizations realize the efficiency gains.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-brand-lime pl-6">
                <p className="text-4xl font-bold mb-2">Trillions</p>
                <p className="text-white/80">
                  Projected value of tokenized illiquid assets globally by 2030.
                </p>
                <p className="text-xs text-white/40 mt-2">Source: McKinsey</p>
              </div>
              <div className="border-l-4 border-brand-purple pl-6">
                <p className="text-4xl font-bold mb-2">Top 100</p>
                <p className="text-white/80">
                  The majority of top global banks are actively exploring or
                  deploying blockchain solutions.
                </p>
                <p className="text-xs text-white/40 mt-2">
                  Source: Deloitte / PwC
                </p>
              </div>
              <div className="border-l-4 border-brand-blue pl-6">
                <p className="text-4xl font-bold mb-2">Steady Growth</p>
                <p className="text-white/80">
                  Consistent year-over-year increase in active developers
                  building across major Web3 ecosystems.
                </p>
                <p className="text-xs text-white/40 mt-2">
                  Source: Electric Capital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: COMMON MISTAKES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Common Web3 Mistakes
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Why projects fail to gain traction, and how our engineering
              approach mitigates systemic risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Launching Without PMF</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Launching tokens before achieving Product-Market Fit creates a
                house of cards. Build a product people actually need first.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Building Everything On-Chain
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                Overengineering by storing all data on-chain is expensive and
                slow. We architect hybrid systems that balance decentralization
                with performance.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Ignoring UX & Onboarding
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                If users have to understand "gas fees" and "seed phrases" to use
                your app, mainstream adoption will fail. We use embedded wallets
                to abstract the complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQS */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-text/70">
              Expert answers to common questions about Blockchain and Web3
              development.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is blockchain?",
                a: "Blockchain is a distributed, immutable database that records transactions securely across a network, ensuring transparency and eliminating the need for central authorities.",
              },
              {
                q: "Do I need blockchain?",
                a: "Only if your business model requires decentralized trust, tokenized digital ownership, transparent shared ledgers across multiple parties, or automated smart contract execution.",
              },
              {
                q: "Which blockchain should I choose?",
                a: "It depends heavily on your use case. Ethereum is best for high-value security, Polygon/Base for low-cost consumer apps, and Solana for high-frequency trading and gaming.",
              },
              {
                q: "What is Web3?",
                a: "Web3 is the concept of a decentralized internet powered by blockchain technology, emphasizing user ownership of data, assets, and identity.",
              },
              {
                q: "What are smart contracts?",
                a: "Self-executing pieces of code stored on a blockchain that automatically run when predetermined conditions are met, eliminating the need for intermediaries.",
              },
              {
                q: "How much does blockchain development cost?",
                a: "Costs vary wildly based on scope. A simple audited smart contract might cost $10k-$20k, while a full-scale Web3 ecosystem with custom tokens, marketplace, and enterprise backend can easily exceed $100k+.",
              },
              {
                q: "Can you build NFT marketplaces?",
                a: "Yes, we design and build scalable NFT marketplaces supporting various token standards (ERC-721, ERC-1155) on multiple chains.",
              },
              {
                q: "Can you integrate wallets?",
                a: "Yes. We implement seamless wallet connections using WalletConnect, MetaMask, and modern embedded/abstracted wallets (like Thirdweb or Sequence) for non-crypto users.",
              },
              {
                q: "Can blockchain work with existing software?",
                a: "Absolutely. We build Web3 infrastructure that integrates via standard APIs with your existing Web2 databases, CRMs, and backend systems.",
              },
              {
                q: "What is tokenisation?",
                a: "The process of converting rights to a physical or digital asset into a digital token on a blockchain, enabling fractional ownership and easier transferability.",
              },
              {
                q: "Can blockchain improve loyalty programs?",
                a: "Yes, tokenized loyalty programs offer portable, tradable points and digital collectibles that provide far higher engagement than traditional points systems.",
              },
              {
                q: "Can businesses use blockchain without cryptocurrency?",
                a: "Yes. Enterprise blockchain, supply chain tracking, and document verification often use the technology's immutable ledger without involving public cryptocurrencies.",
              },
              {
                q: "How secure are smart contracts?",
                a: "They are only as secure as the code written. Once deployed, they cannot easily be changed. This is why rigorous testing and third-party audits are mandatory.",
              },
              {
                q: "Do you perform audits?",
                a: "We conduct extensive internal testing and fuzzing, and we partner with specialized, top-tier Web3 auditing firms for final mainnet security sign-off.",
              },
              {
                q: "Can you build Web3 games?",
                a: "Yes, we architect the on-chain economics, NFT assets, and marketplace infrastructure that powers modern Web3 gaming ecosystems.",
              },
              {
                q: "Can you create tokenomics?",
                a: "Yes. We design mathematical models for token supply, demand, inflation, burning, and staking rewards to ensure long-term sustainability.",
              },
              {
                q: "Can you launch tokens?",
                a: "We can handle the technical deployment of tokens (ERC-20, etc.), though clients must independently manage the legal, compliance, and marketing aspects of a public launch.",
              },
              {
                q: "Can blockchain integrate with AI?",
                a: "Yes, AI can be used to monitor on-chain analytics, automate trading strategies, generate NFT assets, or verify data before it is permanently stored on the ledger.",
              },
              {
                q: "Who owns the code?",
                a: "You do. Upon project completion and final payment, we transfer full intellectual property rights and code ownership to your organization.",
              },
              {
                q: "How do we get started?",
                a: "Book a Strategy Session with us. We will discuss your business goals, validate the Web3 use case, and outline a strategic roadmap before writing any code.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className={`bg-white border ${activeFaq === i ? "border-brand-lime shadow-md" : "border-brand-grey"} rounded-2xl cursor-pointer transition-all duration-300`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="font-bold text-lg pr-4">{faq.q}</h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#fafafa] shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-180 bg-brand-lime/10 text-brand-lime" : ""}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-brand-text/70 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: RELATED RESOURCES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Related Expertise
            </h2>
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors"
            >
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/services/product-development"
              className="group p-8 rounded-3xl bg-[#fafafa] border border-brand-grey hover:border-brand-lime/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-lime transition-colors">
                Product Development
              </h3>
              <p className="text-brand-text/70 text-sm mb-6">
                Build scalable SaaS platforms and digital products.
              </p>
              <span className="text-sm font-semibold inline-flex items-center group-hover:text-brand-lime">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/services/digital-consulting"
              className="group p-8 rounded-3xl bg-[#fafafa] border border-brand-grey hover:border-brand-purple/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                Digital Consulting
              </h3>
              <p className="text-brand-text/70 text-sm mb-6">
                Executive-level product leadership and strategy.
              </p>
              <span className="text-sm font-semibold inline-flex items-center group-hover:text-brand-purple">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/services/ai-automation"
              className="group p-8 rounded-3xl bg-[#fafafa] border border-brand-grey hover:border-brand-blue/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                AI Business Automation
              </h3>
              <p className="text-brand-text/70 text-sm mb-6">
                Optimize operations with intelligent AI workflows.
              </p>
              <span className="text-sm font-semibold inline-flex items-center group-hover:text-brand-blue">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Build Blockchain Products That{" "}
            <span className="text-brand-lime">
              Solve Real Business Problems
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're launching a Web3 startup, building an enterprise
            blockchain platform, creating a token economy, developing smart
            contracts, or exploring digital ownership, Madlabs Digital combines
            product strategy, blockchain engineering, and business thinking to
            build secure, scalable, and commercially successful blockchain
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90"
              >
                Start Your Blockchain Project{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact?type=strategy">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white"
              >
                Book Strategy Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
