import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Courier Services Pennsylvania | Evitana Phoenix Holdings",
  description:
    "Professional medical courier services serving Reading, Lancaster, Berks County, Lancaster County, and surrounding Pennsylvania communities.",
};

export default function MedicalCourierPA() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Medical Courier Services
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Medical Courier Services in Pennsylvania
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
          Evitana Phoenix Holdings provides dependable medical courier support
          throughout Reading, Lancaster, Berks County, Lancaster County, and
          surrounding Pennsylvania communities. We help healthcare providers,
          pharmacies, laboratories, and medical suppliers move time-sensitive
          materials safely and efficiently.
        </p>
      </section>

      <section className="bg-[#111] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#d4af37]">
            Healthcare Logistics Solutions
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Pharmacy Deliveries
              </h3>

              <p className="mt-4 text-gray-300">
                Reliable transportation support for pharmacy-related deliveries
                and healthcare distribution needs.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Medical Supply Delivery
              </h3>

              <p className="mt-4 text-gray-300">
                Efficient movement of medical equipment, healthcare supplies,
                and time-sensitive materials.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Scheduled Healthcare Routes
              </h3>

              <p className="mt-4 text-gray-300">
                Customized recurring delivery solutions for healthcare
                organizations and facilities.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/30 p-8">
              <h3 className="text-2xl font-bold">
                Time-Sensitive Transport
              </h3>

              <p className="mt-4 text-gray-300">
                Professional handling of urgent healthcare-related logistics
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">
            Trusted Healthcare Transportation Support
          </h2>

          <p className="mt-8 text-lg text-gray-300">
            Healthcare organizations depend on reliability, communication, and
            professionalism. Evitana Phoenix Holdings is committed to providing
            responsive courier support for healthcare-related logistics
            operations.
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