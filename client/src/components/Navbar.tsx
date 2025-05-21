import { Link } from "wouter";
import MobileMenu from "./MobileMenu";

const navigationLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-[#1e40af] font-bold text-2xl">
            Anacortes <span className="text-[#f59e0b]">Co-Work</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 ml-20">
          {navigationLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-neutral-dark hover:text-primary font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300 whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu links={navigationLinks} />
      </nav>
    </header>
  );
}
