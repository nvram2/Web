import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const defaultType = (searchParams.get('type') as 'strategy' | 'audit' | 'ai') || 'strategy';
  const [formType, setFormType] = useState<'strategy' | 'audit' | 'ai'>(defaultType);
  const [submitted, setSubmitted] = useState(searchParams.get('submitted') === 'true');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@madlabs.digital", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was a network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us & Free Audits | Madlabs Digital</title>
        <meta name="description" content="Book a strategy call, request a free website SEO audit, or get an AI readiness assessment to scale your specific business operations." />
        <meta name="keywords" content="Contact Madlabs Digital, Book Strategy Call, Free SEO Audit, AI Readiness Assessment, Hire Growth Agency" />
        <meta property="og:title" content="Contact Us & Free Audits | Madlabs Digital" />
        <meta property="og:description" content="Whether you need to generate more leads, automate workflows, or build a scalable product, we're here to help." />
        <link rel="canonical" href="https://madlabs.digital/contact" />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-bg transition-all min-h-screen">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              Let's scale your operations.
            </h1>
            <p className="text-lg text-brand-text/70 max-w-xl mx-auto">
              Whether you need to generate more leads, automate workflows, or build a scalable product, we're here to help.
            </p>
          </div>
            
          <div className="space-y-6">
            {/* Strategy Call */}
            <div 
              className={`rounded-[2rem] overflow-hidden transition-all duration-300 border ${formType === 'strategy' ? 'bg-white border-brand-purple shadow-xl shadow-brand-purple/5' : 'bg-white/50 border-brand-grey hover:bg-white cursor-pointer'}`}
            >
              <div 
                className="p-6 md:p-8"
                onClick={() => setFormType('strategy')}
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Book Strategy Call</h3>
                    <p className="text-sm text-brand-text/60">Directly book a time to discuss your growth goals.</p>
                  </div>
                  {formType === 'strategy' && <CheckCircle2 className="w-6 h-6 ml-auto text-brand-purple" />}
                </div>
              </div>
              
              {formType === 'strategy' && (
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="h-[650px] overflow-hidden rounded-2xl border border-brand-grey bg-brand-bg">
                    <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1IJeKJHhp_cnIf_H7gFsnP9skgySI5SpJD5-qkrQVdS7l2CCEHC78yTereHkwTMbfLKxE5iCTD?gv=true" style={{ border: 0 }} width="100%" height="100%" frameBorder="0"></iframe>
                  </div>
                </div>
              )}
            </div>
            
            {/* Website Audit */}
            <div 
              className={`rounded-[2rem] overflow-hidden transition-all duration-300 border ${formType === 'audit' ? 'bg-white border-brand-purple shadow-xl shadow-brand-purple/5' : 'bg-white/50 border-brand-grey hover:bg-white cursor-pointer'}`}
            >
              <div 
                className="p-6 md:p-8"
                onClick={() => setFormType('audit')}
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Free Website Audit</h3>
                    <p className="text-sm text-brand-text/60">Identify bottlenecks in your current lead generation.</p>
                  </div>
                  {formType === 'audit' && <CheckCircle2 className="w-6 h-6 ml-auto text-brand-purple" />}
                </div>
              </div>
              
              {formType === 'audit' && (
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-4 animate-in fade-in slide-in-from-top-4 duration-500 border-t border-brand-grey/50">
                  {submitted && formType === 'audit' ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-[#111]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Request Received</h3>
                      <p className="text-brand-text/70 mb-8">We will be in touch shortly with next steps.</p>
                      <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="_subject" value="New AUDIT request from website" />
                      <input type="hidden" name="_template" value="box" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First Name</label>
                          <input name="firstName" required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <input name="lastName" required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Work Email</label>
                        <input name="email" required type="email" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Website URL</label>
                        <input name="website" required type="url" placeholder="https://" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Primary Goal</label>
                        <select name="primaryGoal" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple">
                          <option>More organic traffic</option>
                          <option>Better conversion rate</option>
                          <option>Website redesign</option>
                          <option>Performance issues</option>
                        </select>
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                        {isSubmitting ? 'Submitting...' : 'Request Audit'}
                        {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                      </Button>
                      <p className="text-xs text-center text-brand-text/50 mt-4 px-4 leading-relaxed">
                        By submitting, you agree to our <Link to="/privacy" className="underline hover:text-brand-purple">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-brand-purple">Terms of Service</Link>.
                      </p>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* AI Readiness */}
            <div 
              className={`rounded-[2rem] overflow-hidden transition-all duration-300 border ${formType === 'ai' ? 'bg-white border-brand-purple shadow-xl shadow-brand-purple/5' : 'bg-white/50 border-brand-grey hover:bg-white cursor-pointer'}`}
            >
              <div 
                className="p-6 md:p-8"
                onClick={() => setFormType('ai')}
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Readiness Assessment</h3>
                    <p className="text-sm text-brand-text/60">Discover where automation can save you time and money.</p>
                  </div>
                  {formType === 'ai' && <CheckCircle2 className="w-6 h-6 ml-auto text-brand-purple" />}
                </div>
              </div>
              
              {formType === 'ai' && (
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-4 animate-in fade-in slide-in-from-top-4 duration-500 border-t border-brand-grey/50">
                  {submitted && formType === 'ai' ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-[#111]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Request Received</h3>
                      <p className="text-brand-text/70 mb-8">We will be in touch shortly with next steps.</p>
                      <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="_subject" value="New AI ASSESSMENT request from website" />
                      <input type="hidden" name="_template" value="box" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First Name</label>
                          <input name="firstName" required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <input name="lastName" required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Work Email</label>
                        <input name="email" required type="email" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Website URL</label>
                        <input name="website" required type="url" placeholder="https://" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Team Size</label>
                        <select name="teamSize" className="w-full h-12 px-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple">
                          <option>1-10</option>
                          <option>11-50</option>
                          <option>51-200</option>
                          <option>200+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Biggest bottleneck right now?</label>
                        <textarea name="bottleneck" rows={3} className="w-full p-4 rounded-xl border border-brand-grey bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-purple"></textarea>
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                        {isSubmitting ? 'Submitting...' : 'Request Assessment'}
                        {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                      </Button>
                      <p className="text-xs text-center text-brand-text/50 mt-4 px-4 leading-relaxed">
                        By submitting, you agree to our <Link to="/privacy" className="underline hover:text-brand-purple">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-brand-purple">Terms of Service</Link>.
                      </p>
                    </form>
                  )}
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
