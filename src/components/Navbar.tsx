import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "About",
  path: "/about"
}, {
  name: "Projects",
  path: "/projects"
}, {
  name: "Services",
  path: "/services"
}, {
  name: "Contact",
  path: "/contact"
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gradient font-mono">OPCHAINS</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`relative text-sm font-medium transition-colors duration-300 ${isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
                {isActive(link.path) && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />}
              </Link>)}
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-sm font-medium transition-colors duration-300 ${isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.name}
                </Link>)}
              <Button variant="default" size="sm" className="w-fit" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Let's Talk
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};