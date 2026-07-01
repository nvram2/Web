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
              We help generate real leads, automate operations, build better products, and increase revenue through AI, automation and technology solutions.
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
                <li><Link to="/services/digital-consulting" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Digital Consulting</Link></li>
                <li><Link to="/services/blockchain-web3" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Blockchain & Web3</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-brand-text">Company</h3>
              <ul className="mt-6 space-y-4">
                <li><Link to="/about" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">About</Link></li>
                <li><Link to="/industries" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Industries</Link></li>
                <li><Link to="/case-studies" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-brand-text">Locations</h3>
              <ul className="mt-6 space-y-4">
                <li><Link to="/uae" className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors font-medium">UAE</Link></li>
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
