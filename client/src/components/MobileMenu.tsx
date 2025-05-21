import { useState } from "react";
import { Link } from "wouter";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Button
        onClick={toggleMenu}
        variant="ghost"
        size="icon"
        aria-label="Toggle mobile menu"
        className="text-neutral-dark focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-2 text-neutral-dark hover:text-primary font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="block py-3 text-center bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
