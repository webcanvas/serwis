import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  navigationLinks?: { label: string; href: string }[];
  categories?: { label: string; href: string }[];
  entrepreneurLinks?: { label: string; href: string }[];
}

const Footer = ({
  navigationLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  categories = [
    { label: "Restaurants", href: "/category/restaurants" },
    { label: "Retail", href: "/category/retail" },
    { label: "Professional Services", href: "/category/services" },
    { label: "Health & Wellness", href: "/category/health" },
  ],
  entrepreneurLinks = [
    { label: "Add a Business", href: "/add-business" },
    { label: "Advertise on the Site", href: "/advertise" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-[#1a365d] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.href}>
                <a
                  href={category.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Entrepreneurs */}
        <div>
          <h3 className="font-semibold text-lg mb-4">For Entrepreneurs</h3>
          <ul className="space-y-2">
            {entrepreneurLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Stay up to date with the latest news!
          </p>
          <div className="flex gap-2 mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-[#ff6b6b] hover:bg-[#ff5b5b] text-white">
              Subscribe
            </Button>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Local Business Directory Platform. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
