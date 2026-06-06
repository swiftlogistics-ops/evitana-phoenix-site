import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courier Service Reading PA | Evitana Phoenix Holdings",
  description:
    "Reliable courier service, same-day delivery, cargo van transportation, logistics, and medical courier services in Reading, Pennsylvania.",
};

export default function ReadingCourierPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Reading, Pennsylvania
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Courier Service in Reading, PA
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
          Evitana Phoenix Holdings provides professional courier services,
          same-day delivery, medical courier support, and cargo van logistics
          throughout Reading, Pennsylvania and surrounding Berks County
          communities.
        </p>
      </section>

      <section className="bg-[#111] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#d4af37]">
            Our Reading Courier Services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Same-Day Delivery
              </h3>

              <p className="mt-4 text-gray-300">
                Fast and dependable same-day delivery solutions for businesses
                and organizations throughout Reading and Berks County.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Medical Courier Services
              </h3>

              <p className="mt-4 text-gray-300">
                Professional transportation support for healthcare-related
                deliveries and time-sensitive logistics requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Cargo Van Logistics
              </h3>

              <p className="mt-4 text-gray-300">
                Efficient cargo van transportation for commercial clients,
                distributors, retailers, and local businesses.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Scheduled Route Delivery
              </h3>

              <p className="mt-4 text-gray-300">
                Reliable recurring delivery solutions customized to your
                operational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">
            Why Reading Businesses Choose Us
          </h2>

          <p className="mt-8 text-lg text-gray-300">
            Businesses throughout Reading rely on Evitana Phoenix Holdings for
            dependable courier service, responsive communication, flexible
            delivery scheduling, and professional transportation support.
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