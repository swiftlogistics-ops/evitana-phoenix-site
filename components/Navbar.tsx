import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af37]/30 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-[0.25em] text-[#d4af37] md:text-xl"
        >
          EVITANA PHOENIX HOLDINGS
        </Link>

        <div className="hidden gap-8 text-sm font-medium text-white md:flex">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/medical-courier">Medical Courier</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}