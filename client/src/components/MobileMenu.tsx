import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import { Link } from "wouter";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      smoothScrollTo(targetId);
    }
  };

  return (
    <div className="md:hidden">
      <Button
        onClick={toggleMenu}
        variant="ghost"
        size="icon"
        aria-label="Toggle mobile menu"
        className="text-neutral-dark focus:outline-none hover:bg-gray-100 relative z-[51]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </Button>

      <div
        className={`fixed top-0 right-0 z-50 bg-white transform transition-transform duration-300 h-auto max-h-screen w-full ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="text-[#1e40af] font-bold text-xl">
            Anacortes <span className="text-[#f59e0b]">Co-Work</span>
          </span>
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className="text-neutral-dark focus:outline-none hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="container mx-auto px-4 pt-8 pb-12 flex flex-col space-y-6 bg-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                handleLinkClick(link.href);
                setIsOpen(false);
              }}
              className="block py-3 text-lg text-center text-neutral-dark hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => {
              handleLinkClick("#contact");
              setIsOpen(false);
            }}
            className="block py-4 text-center bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}