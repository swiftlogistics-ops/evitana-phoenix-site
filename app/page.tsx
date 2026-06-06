import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mb-14 flex justify-center">
          <Image
            src="/logo.png"
            alt="Evitana Phoenix Holdings Logo"
            width={700}
            height={700}
            priority
            className="h-auto w-full max-w-md md:max-w-xl lg:max-w-2xl"
          />
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Courier • Logistics • Medical Courier
        </p>

        <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
          Reliable Courier, Logistics & Medical Courier Solutions
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Serving Reading, Lancaster, Berks County, Lancaster County, and surrounding
          Pennsylvania regions with dependable cargo van delivery, same-day courier,
          scheduled routes, and medical courier support.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black"
          >
            Request a Quote
          </Link>

          <a
            href="tel:7175944681"
            className="rounded-full border border-[#d4af37] px-8 py-4 font-semibold text-[#d4af37]"
          >
            Call Now
          </a>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            "Same-Day Delivery",
            "Last-Mile Logistics",
            "Medical Courier Services",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#d4af37]/30 bg-black p-8"
            >
              <h3 className="text-2xl font-bold text-[#d4af37]">{item}</h3>
              <p className="mt-4 text-gray-300">
                Professional, dependable, and business-focused delivery support
                built around reliability, speed, and clear communication.
              </p>
            </div>
          ))}
        </div>
      </section>
    <section className="px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
        Why Choose Us
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Delivering Reliability. Building Trust.
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
        We help businesses and healthcare organizations maintain reliable
        delivery operations through professional logistics support and
        responsive customer service.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
        <h3 className="text-xl font-bold text-[#d4af37]">
          Reliable Service
        </h3>
        <p className="mt-4 text-gray-300">
          Consistent and dependable delivery support when it matters most.
        </p>
      </div>

      <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
        <h3 className="text-xl font-bold text-[#d4af37]">
          Same-Day Delivery
        </h3>
        <p className="mt-4 text-gray-300">
          Fast and efficient transportation solutions for urgent needs.
        </p>
      </div>

      <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
        <h3 className="text-xl font-bold text-[#d4af37]">
          Medical Courier
        </h3>
        <p className="mt-4 text-gray-300">
          Professional healthcare-related delivery support and logistics.
        </p>
      </div>

      <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
        <h3 className="text-xl font-bold text-[#d4af37]">
          Local Expertise
        </h3>
        <p className="mt-4 text-gray-300">
          Proudly serving Reading, Lancaster, and surrounding Pennsylvania communities.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#111] px-6 py-20">
  <div className="mx-auto max-w-7xl text-center">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
      Service Areas
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      Serving Businesses Across Central Pennsylvania
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
      Evitana Phoenix Holdings provides reliable courier, logistics, and medical
      courier support throughout key Pennsylvania service areas.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-4">
      {[
        "Reading, PA",
        "Lancaster, PA",
        "Berks County",
        "Lancaster County",
      ].map((area) => (
        <div
          key={area}
          className="rounded-2xl border border-[#d4af37]/30 bg-black p-6"
        >
          <p className="text-xl font-bold text-[#d4af37]">{area}</p>
        </div>
      ))}
    </div>

    <p className="mt-8 text-gray-400">
  Also available for surrounding Pennsylvania regions and contract route support.
</p>

<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
  <Link
    href="/reading-pa-courier-service"
    className="rounded-full border border-[#d4af37] px-6 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
  >
    Reading Courier Service
  </Link>

  <Link
    href="/lancaster-pa-courier-service"
    className="rounded-full border border-[#d4af37] px-6 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
  >
    Lancaster Courier Service
  </Link>
</div>
  </div>
</section>
</main>
  );
}