import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bot, Database, Zap, FileText, CheckCircle2, BrainCircuit, Users, ShieldCheck, LineChart, Code2, Laptop, Globe, GraduationCap, BookOpen, MonitorPlay, UsersRound, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Education() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Education Software & EdTech Development | Madlabs Digital</title>
        <meta name="description" content="Digital solutions that transform learning and student experiences. Expert education software development, EdTech, LMS, and AI automation." />
        <meta name="keywords" content="Education Software Development, EdTech Development, AI for Education, Learning Management Systems, Student Portal Development, Education CRM, School Website Development, University Digital Transformation, Online Learning Platforms, Education Automation, Student Information Systems" />
        <link rel="canonical" href="https://madlabs.digital/industries/education" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Education Software & EdTech Development | Madlabs Digital" />
        <meta property="og:description" content="Digital solutions that transform learning and student experiences. Expert education software development, EdTech, LMS, and AI automation." />
        <meta property="og:url" content="https://madlabs.digital/industries/education" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education Software & EdTech Development | Madlabs Digital" />
        <meta name="twitter:description" content="Digital solutions that transform learning and student experiences. Expert education software development, EdTech, LMS, and AI automation." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Education Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Madlabs Digital"
              },
              "description": "Comprehensive technology partner for educational institutions, offering LMS development, student portals, education CRM integration, and AI automation.",
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
                "name": "Education"
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
                  "name": "Can AI improve student engagement?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. AI can provide personalized learning recommendations, instant support via chatbots, and adaptive assessments that keep students engaged and on track."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you build LMS platforms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we develop custom Learning Management Systems (LMS) tailored to your institution's needs, offering advanced course management, video integration, and progress tracking."
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
              Education Technology Partner
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 leading-[1.1] text-white">
              Transforming <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-white to-brand-blue">Learning & Student Experiences.</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
              Modern education goes beyond classrooms. Madlabs Digital helps educational institutions improve student engagement, streamline administration, automate workflows, build learning platforms, and create digital experiences that support learners, educators, and administrators alike.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                  Transform Your Institution <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                  Book Education Strategy Call
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">100k+</div>
                <div className="text-sm font-medium text-white/60">Students Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm font-medium text-white/60">Learning Accessibility</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-sm font-medium text-white/60">Admin Efficiency Improvements</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-sm font-medium text-white/60">Years Building Digital Products</div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Education Challenge</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              Modern education providers are grappling with manual administration, communication gaps, and the urgent need to boost student engagement. Admissions management and student retention are often hindered by disconnected legacy systems that lack proper reporting capabilities.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
              As online learning becomes critical, institutions struggle to provide equitable learning accessibility. Faculty collaboration is limited by outdated technology, leading to growing operational costs and inefficiencies.
            </p>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Modern education requires connected digital experiences across every stage of the student journey. Institutions need robust solutions to empower educators and inspire learners.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRADITIONAL SYSTEMS FAIL */}
      <section className="py-24 lg:py-32 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why Traditional Education Systems Fall Short</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
                Technology should improve learning experiences while reducing administrative work. Here's why legacy systems fail to meet modern standards.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">01.</span> Disconnected Records & Manual Admissions</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Paper-based administration and disconnected student records slow down admissions. Without a unified system, administrators spend countless hours on manual data entry.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">02.</span> Limited Personalization & AI</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    A lack of personalization and no AI support means students receive a one-size-fits-all approach. Modern learners expect customized pathways and immediate digital assistance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center"><span className="text-brand-purple mr-2">03.</span> Poor Communication & Reporting</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    Outdated websites and poor communication tools create friction between students and faculty. Without strong analytics, tracking student progress and institutional health is impossible.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-grey/50 border border-brand-grey">
              <h3 className="text-2xl font-bold mb-6">How to Empower Your Institution</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-4 mt-1">
                    <Database className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unified Student Data</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Centralize enrollment, grades, and communications into a single, highly secure CRM platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-4 mt-1">
                    <GraduationCap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Modern Learning Portals</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Deploy intuitive LMS platforms for students to access courses, submit assignments, and engage with peers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI-Driven Automation</h4>
                    <p className="text-brand-text/70 text-sm mt-1">Automate routine admissions tasks and deploy AI assistants to support students 24/7.</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">The Madlabs Education Transformation Framework</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A systematic roadmap for modernizing educational institutions and enhancing student experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Discovery", desc: "Understanding the unique goals, challenges, and technical debt of the institution." },
              { num: "02", title: "Assessment", desc: "Evaluating current LMS, administrative workflows, and digital infrastructure." },
              { num: "03", title: "Journey Mapping", desc: "Mapping the end-to-end student journey from prospect to enrolled learner." },
              { num: "04", title: "Tech Strategy", desc: "Aligning software architecture with long-term educational goals and scalability needs." },
              { num: "05", title: "Platform Design", desc: "Designing accessible, intuitive interfaces for students, faculty, and administrators." },
              { num: "06", title: "Development", desc: "Building secure portals, custom LMS features, and robust administrative tools." },
              { num: "07", title: "System Integration", desc: "Connecting new solutions with existing student information systems and CRMs." },
              { num: "08", title: "AI Automation", desc: "Deploying intelligent chatbots and automated workflows to reduce manual tasks." },
              { num: "09", title: "Training", desc: "Ensuring faculty and staff are fully equipped to utilize the new digital platforms." },
              { num: "10", title: "Optimization", desc: "Continuously improving the platform based on student feedback and engagement metrics." }
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Solutions for Educational Institutions</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Secure, scalable, and engaging digital solutions designed to elevate learning outcomes and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Digital Campuses & Portals",
                desc: "We build intuitive education websites, student portals, and mobile apps to centralize campus life.",
                features: ["Education Websites", "Student Portals", "Faculty Portals"]
              },
              {
                icon: MonitorPlay,
                title: "LMS & Online Learning",
                desc: "Enable robust remote learning with scalable Learning Management Systems and digital libraries.",
                features: ["Learning Management Systems", "Course Management Systems", "Digital Libraries"]
              },
              {
                icon: BrainCircuit,
                title: "AI & Student Support",
                desc: "Deploy AI student assistants and knowledge bases to provide 24/7 support and personalized learning.",
                features: ["AI Student Assistants", "Knowledge Bases", "Assessment Platforms"]
              },
              {
                icon: Database,
                title: "Admissions & CRM",
                desc: "Streamline student acquisition with powerful education CRMs and automated admissions platforms.",
                features: ["Education CRM", "Admissions Platforms", "Student Dashboards"]
              },
              {
                icon: UsersRound,
                title: "Engagement & Communication",
                desc: "Foster a connected community through integrated communication platforms and attendance systems.",
                features: ["Communication Platforms", "Attendance Systems", "Mobile Apps"]
              },
              {
                icon: Code2,
                title: "Integration & Analytics",
                desc: "Develop custom education platforms, API integrations, and analytics dashboards for actionable insights.",
                features: ["Analytics Dashboards", "API Integrations", "Custom Platforms"]
              }
            ].map((solution, i) => (
              <div key={i} className="bg-[#fafafa] p-8 rounded-3xl border border-brand-grey hover:border-brand-purple/30 transition-colors flex flex-col h-full">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-grey flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed mb-6">{solution.desc}</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">Recommended Services for Education</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Core services designed to modernize your institution and drive measurable improvements in student engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/web-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Globe className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">1. Web Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Build stunning, accessible school websites and student portals that provide clear information and easy access to learning on any device.
              </p>
               <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Web Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/ai-automation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Bot className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">2. AI Business Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Deploy 24/7 AI agents to handle student inquiries, automate administrative workflows, and assist with course recommendations.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View AI Automation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            
            <Link to="/services/crm-systems" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Users className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">3. CRM & Business Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Unify student communications. We implement education CRMs to ensure admissions, reminders, and engagement are managed seamlessly.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View CRM Systems <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/product-development" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <Laptop className="w-10 h-10 text-brand-purple mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">4. Product Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                For EdTech startups and large universities needing custom applications, LMS platforms, and complex system integrations.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-purple text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Product Development <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link to="/services/digital-consulting" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <BrainCircuit className="w-10 h-10 text-brand-lime mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">5. Digital Consulting</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Strategic guidance on digital transformation, streamlining administrative workflows, and choosing the right technology stack.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-lime text-sm font-semibold flex items-center group-hover:text-brand-purple transition-colors">
                View Digital Consulting <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

             <Link to="/services/lead-generation" className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col group cursor-pointer">
              <LineChart className="w-10 h-10 text-brand-blue mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">6. Lead Generation Systems</h3>
              <p className="text-white/70 mb-6 leading-relaxed flex-grow text-sm">
                Generate high-quality student enrollments through targeted SEO, localized landing pages, and optimized admission funnels.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-brand-blue text-sm font-semibold flex items-center group-hover:text-brand-lime transition-colors">
                View Lead Generation <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The EdTech Stack</h2>
            <p className="text-brand-text/70 text-lg">We utilize industry-leading technologies to create secure, scalable, and high-performance digital education experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Frontend & Web</h4>
              <p className="text-sm text-brand-text/60">Next.js, React, TypeScript, Vercel</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Backend & AI</h4>
              <p className="text-sm text-brand-text/60">Node.js, Python, OpenAI, Supabase, Firebase</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Learning Systems</h4>
              <p className="text-sm text-brand-text/60">Moodle, Canvas LMS, Custom LMS APIs</p>
            </div>
            <div className="p-6 border border-brand-grey rounded-2xl bg-[#fafafa]">
              <h4 className="font-bold mb-2">Ops & Integration</h4>
              <p className="text-sm text-brand-text/60">HubSpot, Google Workspace, Microsoft 365, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: THE MODERN STUDENT JOURNEY */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Modern Student Journey</h2>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6">
                We engineer digital touchpoints that smoothly guide students from initial discovery all the way through to lifelong alumni engagement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Discovery, SEO & Website Navigation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Streamlined Admissions & Enrollment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Interactive Learning & Assessment Portals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3" />
                  <span className="font-medium">Certification & Lifelong Alumni Engagement</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-grey/50 border border-brand-grey relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">The Digital Education Pipeline</h3>
              <p className="text-brand-text/70 mb-6 relative z-10">Discovery → Admissions → Learning → Certification → Alumni</p>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-purple mb-1">Phase 1: Acquisition & Enrollment</p>
                  <p className="text-xs text-brand-text/70">Prospective students discover your institution, navigate a seamless website, and complete automated admissions.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-blue mb-1">Phase 2: Active Learning</p>
                  <p className="text-xs text-brand-text/70">Enrolled students engage with robust student portals, customized LMS content, and interactive assessments.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border border-brand-grey">
                  <p className="font-semibold text-sm text-brand-lime mb-1">Phase 3: Outcomes & Loyalty</p>
                  <p className="text-xs text-brand-text/70">Graduates receive secure digital certifications and remain connected through lifelong learning alumni portals.</p>
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
                <GraduationCap className="w-8 h-8 text-brand-lime" />
              </div>
              <h3 className="text-xl font-bold mb-4">Higher Enrollment & Retention</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Provide seamless digital interactions. Better communication and frictionless admissions processes directly elevate enrollment rates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reduced Administrative Work</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Dramatically reduce manual tasks and improve institutional efficiency through automated workflows and scalable student platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Empower educators with actionable insights and AI-driven tools to deliver personalized, engaging learning experiences at scale.
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
              <p className="text-lg text-brand-text/70">Real results driving platform scalability, automation, and digital transformation.</p>
            </div>
            <Link to="/case-studies" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link to="/case-studies/enterprise-saas" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-dark group-hover:text-white">EdTech Provider</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Platform Scalability</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Re-architected core infrastructure and implemented automated workflows, preparing their LMS for massive student adoption.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Platform Speed</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">+400%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Admin Reduction</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-lime">45%</span>
                  </div>
                </div>
                <span className="text-brand-lime font-semibold inline-flex items-center group-hover:text-brand-purple transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/web3-gaming" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-purple">Online Academy</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">User Experience & Automation</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Implemented rigorous CRM workflows and automation, reducing manual data entry and speeding up student onboarding significantly.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Onboarding Time</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">-75%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Student Retention</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-purple">+60%</span>
                  </div>
                </div>
                <span className="text-brand-purple font-semibold inline-flex items-center group-hover:text-brand-lime transition-colors mt-auto">
                  Read full study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Case Study 3 */}
            <Link to="/case-studies/global-clothing" className="group relative rounded-3xl bg-brand-bg p-8 hover:bg-[#111] hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer flex flex-col h-full border border-brand-grey hover:border-transparent">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold mb-6 group-hover:bg-white/20 transition-colors text-brand-blue">Training Institute</span>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-white transition-colors">Digital Transformation</h3>
                  <p className="text-brand-text/70 group-hover:text-white/80 mb-8 max-w-md transition-colors">Applied digital transformation strategies to scale student acquisition and improve digital accessibility through intuitive portal design.</p>
                </div>
                <div className="space-y-4 mb-8 pt-8 border-t border-brand-text/10 group-hover:border-white/20">
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Portal Adoption</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+85%</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-text/10 group-hover:border-white/10 pb-2">
                    <span className="font-semibold text-brand-text/60 group-hover:text-white/60">Enrollment Growth</span>
                    <span className="font-bold text-brand-text group-hover:text-brand-blue">+30%</span>
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

      {/* SECTION 10: EDUCATION BUSINESS TYPES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions by Education Provider</h2>
            <p className="text-brand-text/70 text-lg">We architect tailored digital experiences that solve the unique operational challenges of different educational sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Schools</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Parent communication, manual attendance, disjointed grading systems.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Integrated school portals, mobile apps, secure data management.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Universities</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Complex admissions, vast legacy infrastructure, alumni engagement.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Comprehensive student information systems, advanced LMS, enterprise CRM.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Colleges</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Course scheduling, enrollment pipelines, student retention tracking.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Automated admissions workflows, student dashboards, analytics.</p>
            </div>
            <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">EdTech Companies</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Scalability, API complexities, continuous feature deployment.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Full-stack product development, AI integration, robust cloud infrastructure.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Training Institutes</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Blended learning delivery, certification tracking, payment collection.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Custom learning platforms, payment gateway integrations, progress dashboards.</p>
            </div>
             <div className="px-6 py-8 rounded-2xl border border-brand-grey bg-[#fafafa] hover:border-brand-purple/50 transition-colors">
               <h3 className="font-bold text-xl mb-2">Corporate Learning</h3>
               <p className="text-sm text-brand-text/70 mb-4">Common Challenges: Employee engagement, compliance tracking, content management.</p>
               <p className="text-xs font-semibold text-brand-purple">Tech Priorities: Scalable LMS, bespoke assessment tools, comprehensive reporting.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 10.5: AI IN EDUCATION */}
      <section className="py-24 bg-[#fafafa] border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">AI in Education</h2>
            <p className="text-brand-text/70 text-lg">Practical, responsible applications of artificial intelligence designed to support educators and personalize the learning experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Bot className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">AI Learning Assistants</h3>
                <p className="text-brand-text/70 text-sm">Provide students with 24/7 on-demand tutoring, instant answers to course queries, and personalized study recommendations.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <FileText className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Assessment Automation</h3>
                <p className="text-brand-text/70 text-sm">Automate the grading of objective assessments and use AI to generate varied quiz questions, saving educators valuable time.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <LineChart className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Predictive Analytics</h3>
                <p className="text-brand-text/70 text-sm">Analyze student performance data to identify at-risk learners early and intervene with personalized support.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <BrainCircuit className="w-8 h-8 text-brand-purple mb-4" />
                <h3 className="font-bold text-lg mb-2">Content Generation</h3>
                <p className="text-brand-text/70 text-sm">Assist faculty in creating diverse learning materials, summarizing extensive texts, and generating structured lesson plans.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Users className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="font-bold text-lg mb-2">Student Support Chatbots</h3>
                <p className="text-brand-text/70 text-sm">Handle routine administrative queries regarding schedules, financial aid, and campus services automatically.</p>
             </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-grey">
                <Database className="w-8 h-8 text-brand-lime mb-4" />
                <h3 className="font-bold text-lg mb-2">Administrative Automation</h3>
                <p className="text-brand-text/70 text-sm">Streamline data entry, categorize incoming applications, and automate enrollment workflows to reduce overhead.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: TECHNOLOGY ACROSS THE JOURNEY (Interactive Cards) */}
      <section className="py-24 bg-white">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technology Across the Student Journey</h2>
              <p className="text-brand-text/70 text-lg">How digital solutions impact every phase of the educational lifecycle.</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  stage: "Student Discovery & Admissions",
                  challenges: "High drop-off rates, slow manual responses, fragmented data.",
                  solutions: "Optimized landing pages, automated CRM workflows, AI admissions chatbots.",
                  outcomes: "Higher enrollment conversion rates and drastically reduced admin time.",
                  services: "Web Development, CRM Systems, Lead Generation"
                },
                {
                  stage: "Enrollment & Onboarding",
                  challenges: "Paper-based forms, payment friction, confusing course selection.",
                  solutions: "Secure student portals, integrated payment gateways, digital document signing.",
                  outcomes: "Seamless onboarding experience leading to higher initial retention.",
                  services: "Product Development, Digital Consulting"
                },
                {
                  stage: "Active Learning & Assessment",
                  challenges: "Low engagement, inaccessible materials, delayed grading feedback.",
                  solutions: "Custom LMS, interactive video platforms, automated AI assessments.",
                  outcomes: "Personalized learning paths and immediate academic feedback.",
                  services: "Product Development, AI Automation"
                },
                {
                  stage: "Certification & Alumni Engagement",
                  challenges: "Disconnected post-graduation tracking, weak lifelong learning offerings.",
                  solutions: "Digital verifiable credentials, alumni networking portals, continuous learning hubs.",
                  outcomes: "Stronger institutional loyalty and robust alumni networks.",
                  services: "Web Development, CRM Systems"
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-brand-grey rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow bg-[#fafafa]">
                  <h3 className="text-2xl font-bold mb-4 text-brand-purple">{item.stage}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider mb-2">Challenges</p>
                      <p className="text-sm font-medium">{item.challenges}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider mb-2">Tech Solutions</p>
                      <p className="text-sm font-medium">{item.solutions}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider mb-2">Business Outcomes</p>
                      <p className="text-sm font-medium text-brand-lime">{item.outcomes}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider mb-2">Related Services</p>
                      <p className="text-sm font-medium text-brand-blue">{item.services}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* SECTION 12: REAL STATISTICS */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">The Data Driving Education Tech</h2>
               <p className="text-lg text-white/70 leading-relaxed mb-8">
                 Leading reports from HolonIQ, UNESCO, and Gartner highlight a massive acceleration in digital education adoption. Institutions are actively prioritizing investments in scalable learning platforms, AI, and comprehensive student data systems to meet the demands of modern learners.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 mt-1 shrink-0" />
                   <span className="text-white/80">Massive growth in online learning, necessitating robust LMS infrastructure.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 mt-1 shrink-0" />
                   <span className="text-white/80">Increased AI adoption to support educators and personalize student experiences.</span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle2 className="w-5 h-5 text-brand-lime mr-3 mt-1 shrink-0" />
                   <span className="text-white/80">Significant technology investments aimed at improving student engagement and retention.</span>
                 </li>
               </ul>
             </div>
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-brand-lime mb-2">90%</div>
                  <p className="text-sm text-white/70">Institutions prioritizing digital transformation strategies.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-brand-purple mb-2">40%</div>
                  <p className="text-sm text-white/70">Expected growth in AI-driven EdTech applications.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-brand-blue mb-2">24/7</div>
                  <p className="text-sm text-white/70">Demand for accessible learning resources from students.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-white mb-2">60%</div>
                  <p className="text-sm text-white/70">Administrators cite manual data entry as their top challenge.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: COMMON MISTAKES */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Common Mistakes in Education Tech</h2>
            <p className="text-brand-text/70 text-lg">Avoid these pitfalls when modernizing your educational infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">!</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Disconnected Systems</h3>
                <p className="text-brand-text/70 text-sm">Operating with isolated databases for admissions, learning, and billing leads to data chaos. <span className="font-semibold text-brand-text">Solution: Ensure deep API integrations and a unified CRM.</span></p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">!</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Ignoring Accessibility</h3>
                <p className="text-brand-text/70 text-sm">Building platforms that aren't fully responsive or accessible to all learners. <span className="font-semibold text-brand-text">Solution: Design with inclusive UX principles and mobile-first architecture.</span></p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">!</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">No AI Strategy</h3>
                <p className="text-brand-text/70 text-sm">Ignoring the efficiencies AI can bring to administrative workflows and personalized learning. <span className="font-semibold text-brand-text">Solution: Integrate AI chatbots and analytics thoughtfully.</span></p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">!</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Manual Administration</h3>
                <p className="text-brand-text/70 text-sm">Relying on staff to manually process applications and field basic questions. <span className="font-semibold text-brand-text">Solution: Automate top-of-funnel admissions and student communications.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQs */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-text/70">Everything you need to know about our education software development services.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Can AI improve student engagement?",
                a: "Yes. AI can provide personalized learning recommendations, instant support via chatbots, and adaptive assessments that keep students engaged and on track."
              },
              {
                q: "Can you build LMS platforms?",
                a: "Yes, we develop custom Learning Management Systems (LMS) tailored to your institution's specific needs, offering advanced course management, video integration, and progress tracking."
              },
              {
                q: "Can you integrate Moodle or Canvas?",
                a: "Absolutely. We are experienced in deeply integrating, customizing, and extending major LMS platforms like Moodle and Canvas using their official APIs."
              },
              {
                q: "Can students access portals on mobile?",
                a: "Yes. All portals, websites, and learning platforms we build are fully responsive and optimized for a seamless mobile experience."
              },
              {
                q: "Can you automate admissions?",
                a: "We can automate significant portions of the admissions process, including form processing, document collection, automated email workflows, and CRM syncing."
              },
              {
                q: "How secure is student data?",
                a: "Data security is our top priority. We build compliant architectures using robust encryption, secure authentication, and strict access controls to protect sensitive student records."
              },
              {
                q: "Can you modernize legacy education systems?",
                a: "Yes. We offer digital transformation services to gradually migrate your institution from legacy, paper-based systems to modern, cloud-based architectures."
              },
              {
                q: "Can you build multilingual platforms?",
                a: "Yes, we design educational platforms with internationalization in mind, allowing you to serve diverse student bodies across multiple languages."
              },
              {
                q: "How long does development take?",
                a: "Development timelines vary based on complexity. A modern education website might take 4-8 weeks, while a comprehensive custom LMS or student portal can take 3-6 months."
              },
              {
                q: "Do you provide ongoing maintenance?",
                a: "Yes, we offer continuous support, server maintenance, security updates, and feature enhancements to ensure your educational platform remains performant."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-brand-grey rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg pr-8">{faq.q}</span>
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

      {/* SECTION 15: RELATED BLOGS */}
      <section className="py-24 bg-white border-y border-brand-grey">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Related Insights</h2>
              <p className="text-brand-text/70 text-lg">Learn more about digital transformation and growth.</p>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center font-semibold hover:text-brand-purple transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/blog/scale-operations-ai-automation" className="group">
              <div className="bg-[#fafafa] border border-brand-grey rounded-2xl p-6 h-full hover:border-brand-purple/30 transition-colors flex flex-col">
                <span className="text-xs font-bold text-brand-purple mb-4 uppercase tracking-wider">AI & Automation</span>
                <h3 className="font-bold text-lg mb-3 group-hover:text-brand-purple transition-colors">How to Scale Operations with AI</h3>
                <p className="text-brand-text/70 text-sm line-clamp-2 mt-auto">Discover practical ways to implement AI in your institutional workflows to increase administrative efficiency.</p>
              </div>
            </Link>
            <Link to="/blog/technical-seo-audit" className="group">
              <div className="bg-[#fafafa] border border-brand-grey rounded-2xl p-6 h-full hover:border-brand-lime/50 transition-colors flex flex-col">
                <span className="text-xs font-bold text-brand-lime mb-4 uppercase tracking-wider">Web Development</span>
                <h3 className="font-bold text-lg mb-3 group-hover:text-brand-lime transition-colors">Technical SEO Audit Checklist</h3>
                <p className="text-brand-text/70 text-sm line-clamp-2 mt-auto">Ensure your educational website is properly indexed and discoverable by prospective students.</p>
              </div>
            </Link>
             <Link to="/blog/content-velocity-ai" className="group">
              <div className="bg-[#fafafa] border border-brand-grey rounded-2xl p-6 h-full hover:border-brand-blue/50 transition-colors flex flex-col">
                <span className="text-xs font-bold text-brand-blue mb-4 uppercase tracking-wider">Content Strategy</span>
                <h3 className="font-bold text-lg mb-3 group-hover:text-brand-blue transition-colors">Content Velocity with AI</h3>
                <p className="text-brand-text/70 text-sm line-clamp-2 mt-auto">Learn how to accelerate the production of educational content and marketing materials using AI tools.</p>
              </div>
            </Link>
            <Link to="/blog/seo-lead-generation-systems" className="group">
              <div className="bg-[#fafafa] border border-brand-grey rounded-2xl p-6 h-full hover:border-brand-purple/50 transition-colors flex flex-col">
                <span className="text-xs font-bold text-brand-purple mb-4 uppercase tracking-wider">Lead Generation</span>
                <h3 className="font-bold text-lg mb-3 group-hover:text-brand-purple transition-colors">SEO Lead Generation Systems</h3>
                <p className="text-brand-text/70 text-sm line-clamp-2 mt-auto">Build reliable SEO engines that continually drive qualified student enrollments to your programs.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 16: FINAL CTA */}
      <section className="relative overflow-hidden py-32 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
            Build Smarter Digital Experiences for Modern Education
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're modernizing your institution, launching an online learning platform, automating admissions, improving student engagement, or integrating AI into education, Madlabs Digital helps educational organizations build secure, scalable, and engaging digital solutions that improve learning outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-lime/20 bg-brand-lime text-black hover:bg-brand-lime/90">
                Transform Your Institution <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                Book Education Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
