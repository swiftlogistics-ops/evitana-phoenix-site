"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/medical-courier", label: "Medical Courier" },
    { href: "/medical-courier-pa", label: "Medical Courier PA" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af37]/30 bg-black/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-sm font-bold tracking-[0.22em] text-[#d4af37] sm:text-base md:text-xl"
          onClick={() => setIsOpen(false)}
        >
          EVITANA PHOENIX HOLDINGS
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#d4af37]">
              {link.label}
            </Link>
          ))}

          <a
            href="tel:7175944681"
            className="rounded-full border border-[#d4af37] px-4 py-2 text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="text-[#d4af37] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#d4af37]/30 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-base font-medium text-white">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[#d4af37]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:7175944681"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 font-semibold text-black"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}