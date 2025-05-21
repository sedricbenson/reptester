import { Link } from "wouter";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-gray-400 font-bold text-2xl whitespace-nowrap">
                Anacortes
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Modern workspace solutions for professionals and teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full hover:bg-gray-800"
              >
                <FacebookIcon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full hover:bg-gray-800"
              >
                <TwitterIcon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full hover:bg-gray-800"
              >
                <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full hover:bg-gray-800"
              >
                <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-400">Membership</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Dedicated Desk
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Private Office
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Meeting Rooms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  319 Commercial Avenue, Anacortes, WA 98221
                </span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 text-gray-400 mt-1" />
                <a
                  href="tel:+13602991839"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  360.299.1839
                </a>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mr-3 text-gray-400 mt-1" />
                <a
                  href="mailto:heather@schussboomer.net"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  heather@schussboomer.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} Anacortes. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition duration-300 mr-6"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
