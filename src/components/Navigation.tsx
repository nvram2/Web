import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
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

        <nav className="hidden lg:flex lg:flex-1 justify-center gap-6 lg:gap-8">
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
