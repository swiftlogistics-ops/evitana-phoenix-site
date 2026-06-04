export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          About Us
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Built on Reliability, Professionalism, and Trust
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-300">
          Evitana Phoenix Holdings is a professional courier and logistics company
          providing dependable cargo van delivery, last-mile logistics, scheduled
          route support, and business transportation solutions throughout
          Pennsylvania and surrounding regions.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
            <h2 className="text-2xl font-bold text-[#d4af37]">Our Mission</h2>
            <p className="mt-4 leading-7 text-gray-300">
              To provide reliable, efficient, and professional delivery and
              logistics solutions that help businesses operate smoothly while
              ensuring every shipment is handled with care, speed, and integrity.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
            <h2 className="text-2xl font-bold text-[#d4af37]">Our Vision</h2>
            <p className="mt-4 leading-7 text-gray-300">
              To become a trusted regional logistics partner recognized for
              reliability, professionalism, and scalable delivery solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}