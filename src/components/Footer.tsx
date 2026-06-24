import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-grey pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/0_transparent-bg-logo.png" alt="Madlabs Digital" className="h-10 w-auto object-contain hidden" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} onLoad={(e) => { e.currentTarget.classList.remove('hidden'); e.currentTarget.nextElementSibling?.classList.add('hidden'); }} />
              <span className="font-display text-2xl font-bold tracking-tighter">
                Madlabs<span className="text-brand-purple">.</span>
              </span>
            </Link>
            <p className="mt-6 text-sm text-brand-text/70 leading-relaxed">
              We help businesses generate more leads, automate operations, build better products, and increase revenue through AI, automation, growth systems, and technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold text-brand-text">Services</h3>
              <ul className="mt-6 space-y-4">
                <li><Link to="/services/ai-automation" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">AI Automation</Link></li>
                <li><Link to="/services/lead-generation" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Lead Gen Systems</Link></li>
                <li><Link to="/services/crm-systems" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">CRM & Systems</Link></li>
                <li><Link to="/services/product-development" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Product Dev</Link></li>
                <li><Link to="/services/web-development" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Web Development</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-brand-text">Company</h3>
              <ul className="mt-6 space-y-4">
                <li><Link to="/about" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">About</Link></li>
                <li><Link to="/case-studies" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-brand-text">Locations</h3>
              <ul className="mt-6 space-y-4">
                <li className="relative group/uae">
                  <div className="flex items-center justify-between cursor-pointer">
                    <Link to="/uae" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors font-medium flex-grow">UAE</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-text/50 -rotate-90 group-hover/uae:rotate-0 transition-transform"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div className="absolute left-0 top-full mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/uae:opacity-100 group-hover/uae:visible transition-all duration-200 z-10">
                    <div className="py-1">
                      <Link to="/dubai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-purple">Dubai</Link>
                    </div>
                  </div>
                </li>
                <li><Link to="/usa" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors font-medium">USA</Link></li>
                <li><Link to="/uk" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors font-medium">United Kingdom</Link></li>
                <li><Link to="/eu" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors font-medium">Europe</Link></li>
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-brand-text">Grow With Us</h3>
              <p className="mt-6 text-sm text-brand-text/70 mb-4">
                Get a free AI readiness assessment or website audit.
              </p>
              <Link to="/contact?type=audit" className="block w-full sm:w-auto sm:inline-block">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Get Free Audit <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 border-t border-brand-grey pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-text/60">
            &copy; {currentYear} Madlabs Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-brand-text/60 hover:text-brand-text">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-brand-text/60 hover:text-brand-text">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
