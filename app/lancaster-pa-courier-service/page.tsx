import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courier Service Lancaster PA | Evitana Phoenix Holdings",
  description:
    "Professional courier services, same-day delivery, cargo van transportation, logistics, and medical courier services in Lancaster, Pennsylvania.",
};

export default function LancasterCourierPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Lancaster, Pennsylvania
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Courier Service in Lancaster, PA
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
          Evitana Phoenix Holdings delivers dependable courier services,
          same-day delivery, medical courier support, and cargo van logistics
          throughout Lancaster and surrounding Lancaster County communities.
        </p>
      </section>

      <section className="bg-[#111] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#d4af37]">
            Courier & Medical Courier Services in Lancaster
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">Same-Day Delivery</h3>
              <p className="mt-4 text-gray-300">
                Time-sensitive delivery solutions for businesses throughout
                Lancaster County.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">Medical Courier Services</h3>
              <p className="mt-4 text-gray-300">
                Professional transportation support for healthcare facilities,
                pharmacies, and medical suppliers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">Cargo Van Transportation</h3>
              <p className="mt-4 text-gray-300">
                Flexible cargo van solutions for commercial and retail clients.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">Scheduled Route Delivery</h3>
              <p className="mt-4 text-gray-300">
                Recurring route solutions customized to your operational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">
            Why Lancaster Businesses Choose Us
          </h2>

          <p className="mt-8 text-lg text-gray-300">
            Lancaster businesses trust Evitana Phoenix Holdings for dependable
            transportation solutions, responsive communication, and professional
            service.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
}