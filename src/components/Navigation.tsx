import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isUaeOpen, setIsUaeOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Services", to: "/services" },
    { name: "Industries", to: "/industries" },
    { name: "Case Studies", to: "/case-studies" },
    { name: "Blog", to: "/blog" },
    { name: "About", to: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-grey/50 bg-brand-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center md:flex-1">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/0_transparent-bg-logo.png" alt="Madlabs Digital" className="h-10 w-auto object-contain hidden" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} onLoad={(e) => { e.currentTarget.classList.remove('hidden'); e.currentTarget.nextElementSibling?.classList.add('hidden'); }} />
            <span className="font-display text-2xl font-bold tracking-tighter">
              Madlabs<span className="text-brand-purple">.</span>
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex lg:flex-1 justify-center gap-6 lg:gap-8 items-center">
          {links.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? "text-brand-purple font-semibold" : "text-brand-text/80 hover:text-brand-text"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="relative group">
            <button className="text-sm font-medium text-brand-text/80 hover:text-brand-text transition-colors flex items-center gap-1">
              Locations
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <div className="relative group/uae">
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-purple font-medium">
                    <Link to="/uae" className="flex-grow">UAE</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-90"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div className="absolute left-full top-0 ml-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/uae:opacity-100 group-hover/uae:visible transition-all duration-200">
                    <div className="py-1">
                      <Link to="/dubai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-purple">Dubai</Link>
                    </div>
                  </div>
                </div>
                <Link to="/usa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-purple font-medium">USA</Link>
                <Link to="/uk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-purple font-medium">United Kingdom</Link>
                <Link to="/eu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-purple font-medium">Europe</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex lg:flex-1 items-center justify-end gap-4">
        
          <Link to="/contact">
            <Button>Book Strategy Call</Button>
          </Link>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-brand-grey/50 bg-brand-bg px-6 py-4">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => {
              const isActive = location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-medium ${
                    isActive ? "text-brand-purple" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-2 pb-2 border-t border-brand-grey/50">
              <button 
                className="flex items-center justify-between w-full text-left text-sm font-semibold text-brand-text/50 uppercase tracking-wider mb-3"
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              >
                Locations
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              
              {isLocationsOpen && (
                <div className="flex flex-col space-y-3 pl-2 mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link to="/uae" className="text-base font-medium flex-grow" onClick={() => setIsOpen(false)}>UAE</Link>
                      <button 
                        className="p-1 text-brand-text/50" 
                        onClick={(e) => { e.preventDefault(); setIsUaeOpen(!isUaeOpen); }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isUaeOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </button>
                    </div>
                    {isUaeOpen && (
                      <div className="flex flex-col space-y-3 pl-4 border-l-2 border-brand-grey/50 mt-3 mb-1">
                        <Link to="/dubai" className="text-base font-medium text-brand-text/80" onClick={() => setIsOpen(false)}>Dubai</Link>
                      </div>
                    )}
                  </div>
                  <Link to="/usa" className="text-base font-medium" onClick={() => setIsOpen(false)}>USA</Link>
                  <Link to="/uk" className="text-base font-medium" onClick={() => setIsOpen(false)}>United Kingdom</Link>
                  <Link to="/eu" className="text-base font-medium" onClick={() => setIsOpen(false)}>Europe</Link>
                </div>
              )}
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Book Strategy Call</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
